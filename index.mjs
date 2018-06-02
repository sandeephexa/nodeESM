import express from 'express';
//import {welcome,add} from './hello/test';
import welcome from './hello/test';
var app = express();

// app.get('/', (req,res) => {
//     res.send(add(5,5).toString());
// });
app.get('/', (req,res) => {
    res.send(welcome);
});

app.listen('3000',() => {
    console.log('listening at 3000');
});