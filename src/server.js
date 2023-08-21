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
    app.get('/home',(req,res)=>{
        res.render("home")
        })

app.post("/signup",async (req,res)=>{
    hashedPaswd=await bcrypt.hash(req.body.signuppassword,10)
        const newUser= new collection({
            email:req.body.signupemail,
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
        const email = req.body.signupemail;
        const password = req.body.signupemail;
    try {
          const user=await collection.findOne({email:email})
        if(!user)
        {
            res.render("login",{errorMessage:"user not found"})
        }
       else{
           const comparePassword=await bcrypt.compare(password,user.password)
       
           if(comparePassword)
            {
               res.render("home")
               console.log(" compare succes")
            }
          else{
           res.status(500).render("login",{errorMessage: "wrong password retry"}) 
           console.log("cant compare")
            }
       }
     

    } catch (error) {
        console.error("Error: ",error)
    }
      

    })
app.listen(3000,()=>{
    console.log("running....")
})