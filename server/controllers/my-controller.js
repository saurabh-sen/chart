'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('chart')
      .service('myService')
      .getWelcomeMessage();
  },
});
