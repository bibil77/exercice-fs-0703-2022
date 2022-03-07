const save = require('./save.js')

function main() {
    save({id: 1, firstName: 'Dylan', lastName: 'DE SOUSA' });
    save({id: 2, firstName: 'John', lastName: 'DOE' });
  }
  
  main();
  // After this call, you should have more inputs into your "data/users.json" file.