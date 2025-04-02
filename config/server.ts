module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      '8BK1+FNpbLPZXWHFBfmehw==',
      'SOIg+0EKPoAXPRTO6ZWB3g==',
      'nJpbK6aUB8FlJo0+3xYwlw==',
      'AoB5JCUEl1RRkbcIPfXjxw==',
    ]),
  },
});