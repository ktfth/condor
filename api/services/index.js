const users = require('./users/users.service.js');
const v1Logs = require('./v1/logs/logs.service.js');
const v1Conversations = require('./v1/conversations/conversations.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(v1Logs);
  app.configure(v1Conversations);
};
