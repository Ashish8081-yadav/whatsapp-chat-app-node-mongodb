const  express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodovereride = require("method-override");





 app.set("views" , path.join(__dirname , "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded ({extended : true}));
app.use(methodovereride("_method"));






main().then(() => {
    console.log("connection successfull ");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};


let chat1 =  new Chat ({
    from : "neha",
    to: "jam",
    msg: "send your sheet",
    created_at : new Date ()
});
chat1.save().then(res => {
 //   console.log(res)
})

// index route 
app.get("/chats" ,  async(req , res ) => {
     let chats =  await Chat.find();
   console.log(chats);
   res.render("index.ejs" , {chats});
})

//  new route 
app.get("/chats/new" ,( req ,res ) => {
    res.render("new.ejs"); 
});

// create route 

app.post("/chats" , (req , res ) => {
    let { from , to, msg } = req.body;
    let newChat = new Chat({
        from : from,
        to : to,
        msg : msg,
        created_at : new Date()


    });
    newChat
    .save()
    .then(res => { console.log("caht was saved") })
    .catch(err => {
        console.log("err");
    })
    res.redirect("/chats");
} );


// edit route 
app.get("/chats/:id/edit" ,async (req , res) => {
    let {id} = req.params;
   let chat =await  Chat.findById(id);
    res.render("edit.ejs" , {chat});
})



// update rout 
app.put("/chats/:id" , async(req ,res) => {
    let {id} = req.params;
    let {msg} = req.body;

    let updatedchat = await Chat.findByIdAndUpdate(
        id , {msg} , { runValidators: true, new:true});
console.log(updatedchat);
res.redirect("/chats")   ; 


});


// confirmation page route
app.get("/chats/:id/confirm-delete", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        return res.send("Chat not found");
    }
    res.render("confirm", { chat });
});










//  delete or destroy route 
app.delete("/chats/:id" ,async (req , res) => {
     let {id} = req.params;
  let chatToBDeleted = await  Chat.findByIdAndDelete(id);
  console.log(chatToBDeleted);
  res.redirect("/chats");


});











app.get("/" , (req , res) => {
    res.send("working");
} );






app.listen(8080 , ()=> {
    console.log("server sun rha h ");
});



