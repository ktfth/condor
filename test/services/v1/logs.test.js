const assert = require('assert');
const app = require('../../../api/app');

describe('\'v1/logs\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/logs');

    assert.ok(service, 'Registered the service');
  });
});
