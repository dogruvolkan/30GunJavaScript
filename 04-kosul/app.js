// koşul

//if else if else
let num = -3;
if(num>0){
    console.log(`${num} is a positive number`);
}
else if(num==0){
    console.log(`${num} is zero`);
}
else{
    console.log(`${num} is a negative number`)
}


// switch case  if else if ve else alternatifidir

let weather ="sunny";

switch(weather){

    case "raining":
        console.log("take an umbrella");
        break;
    case "sunny":
        console.log("take a hat");
        break;
    case "snowy":
        console.log("take yours coat");
        break;
    default :
        console.log("bilinmeyen hava durumu");
    
}

//ternary operators

let number =45;

number>0 ? console.log("positive number") : console.log("negative number");