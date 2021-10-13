const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))

app.set("views", ".");
app.set("views engine", "ejs")

let numbersString = [];
let numbers= [];
let instructions=[];
let display_text=[];

app.get('/', (req, res, next)=>{
    res.status(200);
    // res.sendFile(path.join(__dirname, "home.html"));
    if(display_text[display_text.length-1]=="="){
        display_text=[];
        display_text.push(String(numbers));
        res.render("home.ejs", {Display_number:display_text});
    } else{
        res.render("home.ejs", {Display_number: display_text.join("")});
    }
})

app.post('/add-number', (req, res, next)=>{
    // console.log(req.body.number);
    fetch_num = req.body.number;
    display_text.push(fetch_num);
    if((fetch_num=="+" || fetch_num=="-" || fetch_num=="*" || fetch_num=="/") && numbersString.length!=0){
        num = parseInt(numbersString.join(""));
        numbersString = [];
        numbers.push(num);
        console.log("Num arrr:",numbers);
        instructions.push(fetch_num);
        console.log("Instructions:",instructions);
    } else if((fetch_num=="+" || fetch_num=="-" || fetch_num=="*" || fetch_num=="/") && numbersString.length==0){
        instructions.push(fetch_num);
        console.log("IIIns", instructions)
    }else if(fetch_num=="=" && instructions.length!=0){
        num = parseInt(numbersString.join(""));
        numbers.push(num);
        numbersString = [];
        console.log("Num arr:",numbers);
        if(instructions[0]=="+"){
            r = numbers[0]+numbers[1];
            numbers=[];
            numbers.push(r);
        }else if(instructions[0]=="-"){
            r = numbers[0]-numbers[1];
            numbers=[];
            numbers.push(r);
        }else if(instructions[0]=="*"){
            r = numbers[0]*numbers[1];
            numbers=[];
            numbers.push(r);
        }else if(instructions[0]=="/"){
            r = numbers[0]/numbers[1];
            numbers=[];
            numbers.push(r);
        }
        instructions=[];
        // instructions.push(req.body.number);
        console.log("instruction:", instructions);
        console.log("Numbers arr:", numbers);
    }else if(fetch_num=="=" && instructions.length==0){

    }else{
        numbersString.push(req.body.number);
    }

    /*
    if((fetch_num=="+" || fetch_num=="-" || fetch_num=="*" || fetch_num=="/") && instructions.length==0){
        num = parseInt(numbersString.join(""));
        numbers.push(num);
        console.log(numbers);
        instructions.push(fetch_num);
        console.log("instruction:", instructions);
    }else if((fetch_num=="+" || fetch_num=="-" || fetch_num=="*" || fetch_num=="/") && instructions.length==1){
        num = parseInt(numbersString.join(""));
        numbers.push(num);
        console.log(numbers);
        if(instructions[0]=="+"){
            res = numbers[0]+numbers[1];
            numbers=[];
            numbers.push(res);
        }else if(instructions[0]=="-"){
            res = numbers[0]-numbers[1];
            numbers=[];
            numbers.push(res);
        }else if(instructions[0]=="*"){
            res = numbers[0]*numbers[1];
            numbers=[];
            numbers.push(res);
        }else if(instructions[0]=="/"){
            res = numbers[0]/numbers[1];
            numbers=[];
            numbers.push(res);
        }
        instructions=[];
        instructions.push(req.body.number);
        console.log("instruction:", instructions);
        console.log("Numbers arr:", numbers);
    } else if (req.body.number=="-"){
        num = parseInt(numbersString.join(""));
        console.log(num);
    }
    */
    console.log(numbersString);
    res.redirect('/');
})


app.listen(3000, () => {
    console.log(`listening on port 3000!`)});