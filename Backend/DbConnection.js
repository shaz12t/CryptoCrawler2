const mongoose = require('mongoose');
const url ="mongodb+srv://shailytripathi0612:shaily@cluster0.8k2rr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const url = "mongodb+srv://shailytripathi0612:shaily@cluster0.8k2rr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
function DbConnection(){
    mongoose.connect(url).then((response)=>console.log('mongoDb connected '))
    .catch(err => console.log(err));
}
module.exports = DbConnection;