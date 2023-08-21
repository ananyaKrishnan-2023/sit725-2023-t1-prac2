//import the express library
let express= require('express');
//initialize an express application
let app= express();
//set the server port. First, it tries to use the PORT environment variable value, but if it doesn't exist (undefined), it uses 3000 as a default port
let portNum= process.env.port ||3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=> {
    res.render('index.html');
});
// get method for addtion of 2 numbers
app.get('/addition', (req, res)=> {
    //get values from URL parameter; addition?no1=3&no2=5
    let num1= req.query.no1; // has to return 3
    let num2= req.query.no2; // has to return 5
    //Mathematical computation
    let sum = parseInt(num1) + parseInt(num2);
    // the result is sent back
    res.json({result:sum});
});

// get method for subtraction of 2 numbers
app.get('/subtraction', (req, res)=> {
    //get values from URL parameter; subtraction?no1=3&no2=5
    let num1= req.query.no1; // has to return 3
    let num2= req.query.no2; // has to return 5
    //Mathematical computation
    let diff = parseInt(num1) - parseInt(num2);
    // the result is sent back
    res.json({result:diff});
});

// get method for multiplication of 2 numbers
app.get('/multiply', (req, res)=> {
    //get values from URL parameter; multiply?no1=3&no2=5
    let num1= req.query.no1; // has to return 3
    let num2= req.query.no2; // has to return 5
    //Mathematical computation
    let product = parseInt(num1) * parseInt(num2);
    // the result is sent back
    res.json({result:product});
});

app.listen(portNum, ()=>{
    //upon server start this logic will be fired
    console.log('server started');
}); 
