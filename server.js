'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/webpage', function(request,response){
    response.sendFile(__dirname + './public/index.html');
});

//routes are the addresses/location/endpoints that respond to a request

//viisting the route caues teh callback function to be invoked

app.get('ginger kisses', function(request, response){
    console.log('someone wants ginger kisses');
    response.send('Here is a kiss <3');
});

app.listen(3000, function(){
    console.log('Hello Hello');
});