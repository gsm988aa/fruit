const express = require('express');
const app = express();
const { SerialPort } = require('serialport')

var port = 10866;

// var arduinoCOMPort = "COM2";

// var port2 = new SerialPort(arduinoCOMPort, {  
//  baudrate: 921600
// });


const port2 = new SerialPort({ path: 'COM2', baudRate: 921600}, function (err) {
  if (err) {
    return console.log('Error: ', err.message)
  }
})

port2.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')
})


//发hex
var senddata = [0x01,0x02];
//发字符串
//senddata = 'test data';

function writeport()
{
    port2.write(senddata, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('send: ' + senddata);
    });
}

port2.on('open', function () {
    writeport();
});

// open errors will be emitted as an error event
port2.on('error', function (err) {
    console.log('Error: ', err.message);
})

// setInterval(function () {
//     writeport();
// }, 1000);


port2.on('data', function (data) {
    //收hex
    // console.log('recv: ' + data.toString('hex'));
    //收字符串
    console.log('recv: ' + data );
  });
 


port2.on('open',function() {
  console.log('Serial Port ' + 'COM2' + ' is opened.');
});

app.get('/', function (req, res) {

    return res.send('Working');
 
})

app.get('/:action', function (req, res) {
    
   var action = req.params.action || req.param('action');
    
    if(action == 'led'){
        port2.write("ledget");
        return res.send('Led light is onaaaaa!');
    } 
    if(action == 'off') {
        port2.write("off");
        return res.send("Led light is off!");
    }
    
    return res.send('Action: ' + action);
 
});

app.listen(port, function () {
  console.log('Example app listening on port http://127.0.0.1:' + port + '!');
});
