const trip = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        strapi.log.debug(JSON.stringify(ctx));
        await next();
      });
    },
  };
};

module.exports = trip;
