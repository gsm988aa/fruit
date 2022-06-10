const express = require('express');
const app = express();
const cors = require("cors")
const { SerialPort } = require('serialport')
const serialport2 = new SerialPort({ path: 'COM2', baudRate: 921600}, function (err) {
  if (err) {
    return console.log('Error: ', err.message)
  }
})


var port = 10866;

// var arduinoCOMPort = "COM2";

// var serialport2 = new SerialPort(arduinoCOMPort, {
//  baudrate: 921600
// });


app.use(
    cors({
        origin: ["http://localhost:10866","http://localhost:8080","http://192.168.0.109:8080","http://192.168.3.103:8080"]
    })
);


function asciitohex(str) {
        var arr = [];
        for (var i = 0, l = str.length; i < l; i ++) {
                var ascii = str.charCodeAt(i);
                arr.push(ascii);
        }
        // arr.push(255);
        // arr.push(255);
        // arr.push(255);
        return Buffer.from(arr);
}



serialport2.write('main screen turn on', function(err) {
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
    serialport2.write(senddata, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('send: ' + senddata);
    });
}

serialport2.on('open', function () {
    writeport();
});

// open errors will be emitted as an error event
serialport2.on('error', function (err) {
    console.log('Error: ', err.message);
})

// setInterval(function () {
//     writeport();
// }, 1000);


serialport2.on('data', function (data) {
    //收hex
    // console.log('recv: ' + data.toString('hex'));
    //收字符串
    console.log('recv: ' + data );
  });



serialport2.on('open',function() {
  console.log('Serial Port ' + 'COM2' + ' is opened.');
});

app.get('/', function (req, res) {

    return res.send('Working');

})

app.get('/:action', function (req, res) {

   var action = req.params.action || req.param('action');

    if(action == 'led'){
        serialport2.write("ledget");
         return res.send("Led light is on!!!");

    }
    if(action == 'off') {
        serialport2.write("off");
        return res.send("Led light is off!");
    }

    return res.send('Action: ' + action);

});

app.post('/:action', function (req, res) {

   var action = req.params.action || req.param('action');

    if(action == 'led2'){
         serialport2.write("ledget");
         return res.send("Led light is on!!!");
    }

    if(action == 'led'){
         serialport2.write(hex('01 05 09 00 FF 00 8F A6'));
         return res.send("Led light is on!!!");
    }


//附录1
    if(action == "dianliuhuganqibianbi"){
        // [0x01,0x02];
        // var senddate ='010300000001840A' ;
        serialport2.write('010300000001840A', 'hex');

        return res.send("Led light is on!!!");
    }
    if(action == "屏保参数设置"){
        serialport2.write(hex('01 03 00 01 00 01 D5 CA'));
        return res.send("Led light is on!!!");
    }


//附录2

//附录3

//附录4

//附录5

//附录6

//附录7

//附录8

//附录9

//附录10

//附录11

//附录12

//附录13

//附录14


    if(action == 'off') {
        serialport2.write("off");
        return res.send("Led light is off!");
    }

    if(action == 'off') {
        serialport2.write("off");
        return res.send("Led light is off!");
    }

    return res.send('Action: ' + action);

});







app.listen(port, function () {
  console.log('Example app listening on port http://127.0.0.1:' + port + '!');
});
