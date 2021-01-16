

const assistant = require('../../../hooks/assistant');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [assistant()],
    update: [assistant()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
