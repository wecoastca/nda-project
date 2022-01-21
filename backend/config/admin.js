module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '06e2104eb4f272075ea79b6ea3c4d96d'),
  },
});
