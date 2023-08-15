const express= require("express")
const bcrypt=require("bcrypt")
const app= express()
const ejs=require("ejs")
const collection=require("../src/mongo")


app.use(express.json())
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))


app.get('/login',(req,res)=>{
res.render("login")
})

app.get('/signup',(req,res)=>{
    res.render("signup")
    })

app.post("/signup",async (req,res)=>{
    hashedPaswd=await bcrypt.hash(req.body.password,10)
        const newUser= new collection({
            email:req.body.email,
            password:hashedPaswd
        })
        await newUser.save().then(()=>{
             res.render("login")
        })
        .catch((error)=>{
            console.error("error:"+ error)
        })

       

    })
    app.post("/login",async (req,res)=>{
        const email = req.body.email;
        const password = req.body.password;
    try {
          const user=collection.findOne({email})
        if(!user)
        {
            res.render("login",{errorMessage:"user not found"})
        }
        const comparePassword=await bcrypt.compare(password,user.password)
        if(comparePassword)
        {
            res.render("home")
        }
        else{
           res.render("login",{errorMessage: "wrong password retry"}) 
        }

    } catch (error) {
        console.error("Error: ",error)
    }
      

    })
app.listen(3000,(error)=>{

})