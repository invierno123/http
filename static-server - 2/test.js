const fs = require("fs");
//读数据库
const userString = fs.readFileSync("./db/users.json").toString();
const userArray = JSON.parse(userString);

//写数据库
const user4 = {id:4,name:'David',password:'ddd'}
userArray.push(user4)
const string = JSON.stringify(userArray)
fs.writeFileSync('./db/users.json',string)
