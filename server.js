var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var consolidate = require('consolidate');
// var indexPage = require('./server/routes');

var app = express();

/**
 * view engine setup
 */
app.engine('html',consolidate.swig);
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','html');

var port = 3000;
app.listen(port,function(err){
    if(err){
        console.log('error found');
    }else{
        console.log('server started at port '+port);
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/client')));

// app.use('/', indexPage);

app.get('*',function(req, res){
    res.sendfile(__dirname+'/client/index.html');
});


app.post('/saveStudent', function(req, res){
    var name = req.body.studentName;
    var parent = req.body.studentParent;
    if(name && parent){
        res.send({success:true,MSG:'student saved successfully'});
    }else{
        res.send({success:false,Msg:'Name and Parent name is mandatory field'});
    }
})