// input1 =  prompt('User 1 chooses: ')
// input2 = prompt('User 2 chooses: ')




// if ((input1 == "rock" && input2 == "scissors") || (input1 == "scissors" && input2 =="rock")) {
//     console.log("Rock wins")} else if ((input1 == "paper" && input2 == "rock") || input1 == "rock" && input2 == "paper"){
//     console.log("Paper wins")
// } else if (input1 == "scissors" && input2 == "paper" || input1 == "paper" && input2 == "scissors"){
//     console.log("Scissors win")} else if (input1 == input2) {
//         console.log("it's a tie!")
// } else if (Number(input1) || Number(input2)) {
//     console.error("Not a string")
// }else {
//     console.error("Input no definido")
// }

input1 =  prompt('User 1 chooses: ')
// input2 = prompt('User 2 chooses: ')

var input2 = Math.random();

if (input2 < 0.34) {
    input2 === "rock";
    console.log("Computer:" + input2)
} else if (input2 <= 0.67) {
    input2 === "paper";
    console.log("Computer:" + input2)
} else {
    input2 === "scissors";
    console.log("Computer:" + input2)
}


if ((input1 === "rock" && input2 === "scissors") || (input1 === "scissors" && input2 ==="rock")) {
    console.log("Rock wins")} else if ((input1 === "paper" && input2 === "rock") || input1 === "rock" && input2 === "paper"){
    console.log("Paper wins")
} else if (input1 === "scissors" && input2 === "paper" || input1 === "paper" && input2 === "scissors"){
    console.log("Scissors win")} else if (input1 == input2) {
        console.log("it's a tie!")
} else {
    console.error("Input no definido")
}