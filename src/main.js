const save = require('./save.js')

function main() {
    save({ firstName: 'Dylan', lastName: 'DE SOUSA' });
    save({ firstName: 'John', lastName: 'DOE' });
  }
  
  main();
  // After this call, you should have more inputs into your "data/users.json" file.