

function Wish( msg){
    switch(msg){
        case "gm":{
            console.log("Good morning Vishal");
            break;
        }
        case "ga":{
            console.log("Good Afternoon Vishal");
            break;
        }
        case "ge":{
            console.log("Good Evening Vishal");
            break;
        }
        case "gn":{
            console.log("Good Night Vishal");
            break;
        }
        default:{
            console.log("message")
        }
    }
}

Wish("gm")