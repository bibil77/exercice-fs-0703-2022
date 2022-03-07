const fs = require('fs');
// const users = require('../data/users.json')

// console.log(typeof users, users)
// const usersJson = JSON.parse(users);
// console.log(usersJson);

// users.users.push({test: 'test'})
// users["test"] = "test2"
// console.log(users);
function save(person) {
    try {
        const data = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'));
        data.users.push(person);
        const rawUsers = JSON.stringify(data, null, 4)
        fs.writeFileSync("./data/user.json", rawUsers)
        console.log("ajout réussi !");
    } catch(err){
        return console.log(err);
    }
}

module.exports = save;
/**
     * 1. First you have to load the "data/users.json" file to retrieve an array of users
     * See: fs.readFileSync function
     *
     * Tips: this function return the file content as a string, for later uses we need an Object
     * You can easily convert a string into an object with the following function,
     *
     * const users = JSON.parse("THE FILE CONTENT");
     *
     * 2. With the users array you can now easily push a person into it :)
     *
     * 3. Now you should have an array of users with the new one. You have to write it back into the "data/users.json" file.
     * See: fs.writeFileSync function
     *
     * Tips: This function take a string as an argument and users is an array of objects.
     * You can easily convert an object into a string with the following function,
     *
     * const rawUsers = JSON.stringify(users, null, 4) // Where users is the array of objects
     *
     */