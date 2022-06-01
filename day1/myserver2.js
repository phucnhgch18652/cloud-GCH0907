var http = require('http')
var fs = require('fs')

var myserver2 = http.createServer(function(req,res){
    fs.readFile('mydata.html',function(err,data){
        if(!err){
            res.write(data)
            res.end()
        }else{
            console.log("something was wrong")
            res.end()
        }
    })
})
myserver2.listen(5000)
console.log("Server is running!")