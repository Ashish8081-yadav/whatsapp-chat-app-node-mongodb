const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successfull ");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};



let  allchat= [
    {
    from : "neha",
    to: "jam",
    msg: "send your sheet",
    created_at : new Date ()
}, 
 {
    from : "kajal",
    to: "manoj",
    msg: "hii",
    created_at : new Date ()
}, 
 {
    from : "anu",
    to: "ashi",
    msg: "hello",
    created_at : new Date ()
}, 
 {
    from : "akas",
    to: "mno",
    msg: "jiji h",
    created_at : new Date ()
} 

];



chat.insertMany(allchat);





