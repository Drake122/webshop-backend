var auth = require('./auth/auth');

module.exports = {
  attributes: {
    items: {
      collection: 'WarehouseItem',
      via: 'warehouse'
    }
  },
  beforeCreate: auth.hasRole('admin'),
  beforeUpdate: auth.hasRole('admin')
};

