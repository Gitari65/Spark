const express=require('express')
const app= express()
const bcrypt= require('bcrypt')
app.use(express.urlencoded({extended:false}))
const users=[]
app.use(express.static('assets'))
app.set('view-engine','ejs')
app.get('/login',(req,res)=>{
    res.status(200).render("login.ejs")
})
app.get('/register',async(req,res)=>{
    res.status(201).render('signup.ejs')})
app.post('/register',async(req,res)=>{
    //res.status(201).render('signup.ejs')
    
    try {
       const  hashedPwd=await bcrypt.hash(req.body.password,10)
    users.push({
        id:Date.now().toString(),
        email:req.body.email,
        password: hashedPwd
    })
    console.log(users)
    res.redirect('/login')
    } catch (error) {
      //  res.redirect('/register')
        console.log(error)
    }
    
   
})

app.listen(5000)