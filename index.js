const express=require("express")
const app=express();
const collection=require('./src/config')
const path=require('path');
const exp = require("constants");
const port =3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs');
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.render('sign')
})
app.post('/sign', async (req,res,next)=>{
    const data={
        name:req.body.name,
        password:req.body.password,
        email:req.body.email
    }
    console.log(data)
    const exituser=await collection.findOne({
        name:data.name,
        password:data.password,
        email:data.email
    
    })
    if(exituser)
    {
        // res.render(alert("YOU HAVE ALREADY ACCOUNT"))
        res.render('sign')
    }
    else{

        const userdata= await collection.insertMany(data);
        res.render('sign')

    }
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})