


// function for rand conversions 
function randToEuro(rand){
    rand = parseFloat(rand);
    let sum = (rand*0.048).toFixed(2);
    return sum;
    // document.write(sum);
    // console.log(sum);
}

function randToDollar(rand){
    rand = parseFloat(rand); 
    let sum = (rand*0.051).toFixed(2);
    return sum;
    // document.write(sum); 
}

function randToPound(rand){
    rand = parseFloat(rand);
    let sum = (rand*0.042).toFixed(2);
    return sum;
    // document.write(sum); 
}

function euroToRand(euro){
    euro = parseFloat(euro); 
    let sum = (euro*20.77).toFixed(2);
    return sum;
    // document.write(sum);
}
function euroToDollar(euro){
    euro = parseFloat(euro); 
    let sum = (euro*1.07).toFixed(2);
    return sum;
    // document.write(sum);
}
function euroToPound(euro){
    euro = parseFloat(euro); 
    let sum = (euro*0.86).toFixed(2);
    return sum;
    // document.write(sum);
}

function dollarToRand(dollar){
    dollar = parseFloat(dollar);
    let sum = (dollar*19.37).toFixed(2);
    return sum;
    // document.write(sum); 
}
function dollarToEuro(dollar){
    dollar = parseFloat(dollar);
    let sum = (dollar*0.93).toFixed(2);
    return sum; 
}
function dollarToPound(dollar){
    dollar = parseFloat(dollar);
    let sum = (dollar*0.81).toFixed(2);
    return sum;
    // document.write(sum); 
}

function poundToRand(pound){
    pound = parseFloat(pound);
    let sum = (pound*24.03).toFixed(2);
    return sum;
    // document.write(sum);
}
function poundToDollar(pound){
    pound = parseFloat(pound);
    let sum = (pound*1.24).toFixed(2);
    return sum;
    // document.write(sum);
}
function poundToRand(pound){
    pound = parseFloat(pound);
    let sum = (pound*1.16).toFixed(2);
    return sum;
    // document.write(sum);

}

// amount and conversion type
let value = parseFloat(prompt("Enter a value for conversion"));
let conversionType = prompt("Choose the conversion type: rand to euro? rand to dollar? rand to pound? euro to rand? euro to dollar? euro to pound? dollar to rand? dollar to euro? dollar to pound? pound to rand? pound to dollar? pound to euro?");


if (conversionType.toLowerCase() === "rand to euro"){
    alert(randToEuro(value));
}
else if (conversionType.toLowerCase() === "rand to dollar"){
    alert("$" + randToDollar(value));
}
else if (conversionType.toLowerCase() === "rand to pound"){
    alert(randToPound(value));
} 
else if (conversionType.toLowerCase() === "euro to rand"){
    alert("R" + euroToRand(value));
}
else if (conversionType.toLowerCase() === "euro to dollar"){
    alert("$" +euroToDollar(value));
}
else if (conversionType.toLowerCase() === "euro to pound"){
    alert(euroToPound(value));
}
else if (conversionType.toLowerCase() === "dollar to rand"){
    alert("R"+ dollarToRand(value)); 
}
else if (conversionType.toLowerCase() === "dollar to euro"){
    alert(dollarToEuro(value)); 
}
else if (conversionType.toLowerCase() === "dollar to pound"){
    alert(dollarToPound(value)); 
}
else if (conversionType.toLowerCase() === "pound to rand"){
    alert("R" + poundToRand(value));
}
else if (conversionType.toLowerCase() === "pound to euro"){
    alert(poundToEuro(value));
}
else if (conversionType.toLowerCase() === "pound to dollar"){
    alert("$" +poundToDollar(value));
}
else {
    alert("Invalid conversion type.");
}