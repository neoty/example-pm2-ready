module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      "name"      : 'example-pm2-ready',
      "script"    : 'bin/www',
      "wait_ready": true,
      "listen_timeout": 5000,
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]
};
