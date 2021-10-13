function abc(){
    console.log("Hello");  //print
}

abc(); //Need to called the function to execute sth.

//the a and b here is the parameters that we pass into this function
function cal(a, b){
    return a+b;  //it's the output of this function.
}

console.log(cal(10, 5));  // print out the outcome of function cal


// the type of parameter here is String - set of chracters
function print_name(name){
    console.log("Hi,", name);
}
// to indicate it's string, need quotation mark to tell compiler that it's
// a string
print_name("SASE");

function compareNum(a_num){
    if(a_num>10){
        console.log("it's larger than 10");
    } else if(a_num==10){
        console.log("Equal to 10");
    }else{
        console.log("smaller than 10");
    }
}
compareNum(10);

function declare_var(a, b){
    const x = 10;
    let y = 20;
    let z = a*b;
    console.log("x:", x, ", y:",y ,", z:",z);
}
declare_var(100, 50);

function basic_calculator(a, b, operator){
    if(operator==="+"){
        return a+b;
    }else if(operator==="-"){
        return a-b;
    }else if(operator==="*"){
        return a*b;
    }else if(operator==="/"){
        return a/b;
    }else{
        return "error";
    }
}
console.log(basic_calculator(3,2,"/"))


// keyword "function", parameters that pass into the function
// function name_of_fupnction(parameters){
//     // block of statement(code) will be executed when calling this function
// }