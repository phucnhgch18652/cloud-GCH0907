var http = require('http')

var myserver = http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    if (req.url=='/home'){
        res.write('<html><body><p style="color:red">name: <input type="text"></input></p></body></html>')
        res.write('<html><body><p style="color:blue">Gender: <input type="checkbox"></input> <label>male</label> <input type="checkbox"></input> <label>female</label> </p></body></html>')
        res.write('<html><body><p style="color:green">country: <label for="country"> choose country </label> <select id="country" name="countrylist" form="countryform"> <option value="usa">usa </option> <option value="Viet Nam">Viet Nam </option>  </select> </p></body></html>')
        res.write('<html><body><p style="color:black"><input type="submit" value="ok"></input></p></body></html>')
        res.end();
    }  else if (req.url =='/student'){
        res.write('<html><body><p style="color:blue">SUDENT CHING CHONG HANJI</p></body></html>')
        res.end();
    } else{
        res.write('<html><body><p style="color:blue">CHING CHONG HANJI</p></body></html>')
    }res.end();
})

myserver.listen(3000)
console.log("Server is running!")