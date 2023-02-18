// console.log("Connected")

// let day = 4;
// let dayInWords = '';

// switch(5) {
//     case 1:
//         console.log("Monday")
//         break;
//         case 2:
//             console.log("Thuesday")
//             break;
//             case 3:
//                 console.log("Wednesday")
//                 break;
//                 case 4:
//                     console.log("Thursday")
//                     break;
//                     case 5:
//                         console.log("Friday")
//                         break;
//                         case 6:
//                             console.log("Saturday")
//                             break;
//                             case 7:
//                                 console.log("Sunday")
//                                 break;
//                                 default:
//                                     console.log("No day exists with that number")
//                                     break;
// }


let workingDay = "Monday";

switch(workingDay) {
    case "Monday":
    case "Wednesday":
    case "Saturday":
        console.log("Working day")
        break;
        case "Thursday":
            case "Friday":
                console.log("Non working days")
                break;
                case "Sunday":
                    console.log("Weekend")
                    default:
                        console.log("We can not find a day your looking for")
                        
}


// let number = 1;
// // swtich without breaks;
// switch(number){
//     case 1:
//         console.log("case 1");
//         number += 1;
//         case 2:
//             console.log("case 2")
//             number += 2;
//             case 3:
//                 console.log("case 3")
//                 number += 3;
//                 case 4:
//                     console.log("case 4")
//                     number += 4;
//                     default:
//                         console.log("we are in default")
//                         break;
// }

// console.log(number);


let name = "Bob";

switch(name){
    case "Gelco":
        console.log("Angele")
        break;
        case "Gele":
            console.log("Lege")
            break;
            case "Bob":
                console.log("Boby")
                break;
                default:
                    console.log("Enter valid value")
                    break;


        

}

if(name === "Gele") {
    console.log("Trainer") 
    if(name === "Gelco"){
    
    console.log("Asisant")}
    else if(name === "Anglee"){
    console.log("Cordinator")}
    else {
        console.log("Enter a valid value")
    }
}