require('dotenv').config()

let name = process.env.NAME;
if (!name) throw "Invalid file name";
else {
    console.log(name);
}