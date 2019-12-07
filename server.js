'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/webpage', function(request,response){
    response.sendFile(__dirname + './public/index.html');
});

//routes are the addresses/location/endpoints that respond to a request

//viisting the route caues teh callback function to be invoked

app.get('/gingerkisses', function(request, response){
    console.log('someone wants ginger kisses');
    response.send({
        kiss:'Here is a kiss <3',
        from: 'ginger'
    });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('Hello Hello, you started a server');
});