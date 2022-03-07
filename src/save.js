const fs = require('fs');

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

function deleteUser(id){
    let result = [];
    const data = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'));

    for (let i=0; i < data.users.length; i++){
        if(data.users[i].id === id){
           continue 
        }
        // console.log(data.users[i]);
        result.push(data.users[i])
    }
    data.users = result
    const rawUsers = JSON.stringify(data, null, 4)
    fs.writeFileSync("./data/user.json", rawUsers)
    // console.log(data.users[1].id);
}

function updateUser(id, updatedPerson){
    const data = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'));

    for (let i=0; i < data.users.length; i++){
        if(data.users[i].id === id){ 
            data.users[i] = updatedPerson
            break;
        }
    }

    const rawUsers = JSON.stringify(data, null, 4)
    fs.writeFileSync("./data/user.json", rawUsers)
    // console.log(data.users[1].id);
}

module.exports = {
    save,
    deleteUser,
    updateUser
} 
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