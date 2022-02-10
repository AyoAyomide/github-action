require('dotenv').config()

let name = process.env.APP_NAME;
if (!name) throw "Invalid file name";
else {
    console.log(name);
}