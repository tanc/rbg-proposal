# LocalGov and Storybook

This repo is a starting point for setting up a LocalGov and Storybook integration.

## Set up for development

To get set up locally you can run:

```
ddev start
ddev composer install
sed -i '/function localgov_install() {/,/^}/d' web/profiles/contrib/localgov/localgov.install
ddev drush si --existing-config -y --config-dir=../config/sync
```

You'll need to activate development services and its easiest to do this copying
in the example local settings file:

```
cp web/sites/example.settings.local.php web/sites/default/settings.local.php
```

The Drupal site should be available at https://localgov-storybook.ddev.site

## Development

To put Storybook in development mode you can run

```
ddev storybook dev
```

Storybook will now be available at https://localgov-storybook.ddev.site:6006

In another terminal run the drush watch command with:

```
ddev storybook watch
```

Now you can create and edit stories (located in `web/themes/custom/greenwich_base/stories`) and they
should be added to Storybook. In some situations you'll need to manually refresh Storybook
to see the updates.


## Hosting storybook

There is a `docker-compose.yml` file and supporting files in the `.build` directory.

To use them you can do the following:

```
docker-compose -f .build/docker-compose.yml -f .build/docker-compose.caddy.yml up
```

This should build the container images and run them.

You will need to point the following two domains at `127.0.0.1` in your hosts file:

```
drupal-storybook.localhost
storybook.localhost
```

You should then be able to view the storybook site at http://storybook.localhost:8088
