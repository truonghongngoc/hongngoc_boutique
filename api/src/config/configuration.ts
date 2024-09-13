export default () => ({
  APP_ENV: process.env.APP_ENV ?? 'development',
  APP_DOMAIN: process.env.APP_DOMAIN ?? 'http://localhost:3000',
});
