FROM drupal:10

ARG USER_ID
ARG DRUPAL_DOMAIN
RUN useradd -m -u $USER_ID appuser

WORKDIR /opt/drupal

COPY --chown=appuser:appuser . .

COPY --chown=appuser:appuser .build/drupal/settings.local.php ./web/sites/default/

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

RUN sed -i 's/^\s*memory_limit\s*=.*$/memory_limit = 256M/' "$PHP_INI_DIR/php.ini"

USER appuser

RUN composer install

RUN sed -i '/function localgov_install() {/,/^}/d' web/profiles/contrib/localgov/localgov.install

RUN sed -i 's/^\s*mysql: 0\s*$/  sqlite: 0/' config/sync/core.extension.yml

RUN drush si --existing-config -y --account-pass=admin --config-dir=../config/sync

RUN drush storybook:generate-all-stories --force --uri=http://$DRUPAL_DOMAIN:8088
