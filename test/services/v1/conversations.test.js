const assert = require('assert');
const app = require('../../../api/app');

describe('\'v1/conversations\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/conversations');

    assert.ok(service, 'Registered the service');
  });
});
