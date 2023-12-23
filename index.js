const express=require("express")
const app=express()
app.set('view engine','ejs')
app.set('views','./views')

app.listen(80,(req,res)=>{
    console.log("nay la code web cua nam")
    console.log("Port is 3000")
})
app.get("/",(req,res)=>{
    console.log('day la goc')
    res.send('index.ejs')
})

app.get("/nam",(req,res)=>{
    console.log('day la nam')
    res.send('index3.ejs')
})

app.get("/user/:id/:ho_ten",(req,res)=>{
    console.log('day la nam1')
    const id = req.params.id
    const ho_ten = req.params.ho_ten

    res.send(`id la: ${id}, ho_ten la:${ho_ten} `);
})





