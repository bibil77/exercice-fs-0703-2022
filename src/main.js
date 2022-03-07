const {save, deleteUser, updateUser} = require('./save.js')


function main() {
    updateUser(1, {id: 1, firstName: 'benjamin', lastName: 'dupin' });
    // save({id: 2, firstName: 'John', lastName: 'DOE' });
    // deleteUser(1);
  }
  
  main();
  // After this call, you should have more inputs into your "data/users.json" file.