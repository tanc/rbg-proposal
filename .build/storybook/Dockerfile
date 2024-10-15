FROM node:20-alpine

# Enable Corepack and set Yarn version as root
RUN corepack enable
RUN corepack prepare yarn@4.5.0 --activate

WORKDIR /app

COPY --chown=node:node --from=localgov-storybook-drupal:latest /opt/drupal/web/themes/custom/greenwich_base /app/web/themes/custom/greenwich_base
COPY --chown=node:node --from=localgov-storybook-drupal:latest /opt/drupal/storybook /app/storybook

USER node

WORKDIR /app/storybook

RUN rm -rf storybook-static

RUN yarn install && yarn build-storybook

CMD ["sh", "-c", "npx http-server storybook-static -p 6006"]

