var express = require('express')
var app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true})) //cho phep lay du lieu nguoi dung day len server tu input

app.get('/',function(req,res){
    let n = new Date()
    let name = "Captain Jack"
    res.render('home',{'now':n,'name':name})
})
app.post('/register_lunch',function(req,res){
    //lay thong tin nguoi dung da nhap
    let name = req.body.txtName
    let food = req.body.food
    //can ghi vao file
    //sv tu lam, excercise
    //hien thi thong tin dang ki thanh cong
    let userInfo = {
        'name' : name,
        'food' : food
    }
    res.render('thanks', {'user': userInfo})
})

app.get('/student',function(req,res){
    let foods = ['com','ga','bo','my tom']
    let food2 = []
    for(i=0;i<foods.length;i++){
        foods[i] = (foods[i].toUpperCase())
    }
    res.render('student',{'foods':foods})
})

app.listen(5000)
console.log('server is running!')