var auth = require('./auth/auth');

module.exports = {
  attributes: {
    user: {
      model: 'User'
    },
    role:{
      type:'string'
    } ,
    users:{
      collection:'User',
      via:'role'
    }
  },
  beforeCreate: auth.hasRole('admin'),
  beforeUpdate: auth.hasRole('admin')
};

