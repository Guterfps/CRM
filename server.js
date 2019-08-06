const express = require( 'express' )
const app = express()
const bodyParser = require( 'body-parser' )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )

const Client=require('./schema')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.get('/clients',function(req,res){
Client.find({},function(err,x){
    
    res.send(x)
})
})
app.post('/client',function(req,res){
    const data = req.body
    new Client(data).save()
    res.end('saved')
})

app.put('/client/:name',function(req,res){
    const data=req.body
    const name=req.params.name
    
    Client.findOneAndUpdate({name:name},data,{new:true},function(err,x){
        console.log(x)
    })
   
    res.end()
})

const port=8000
app.listen( port, () => console.log( `Running server on port ${ port }` ) )