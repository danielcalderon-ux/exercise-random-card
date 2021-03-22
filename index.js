// import "style.css"

// window.onload =()=>{
//     document.querySelector(".card").classList.add(generateRandomSuit());
//         document.querySelector(".card").innerHTML = generateRamdomNumber("heart");
       
//     }
//  let generateRamdomNumber=()=>{
//      let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",]
//      let indexNUmbers = math.floor(math.random()= numbers.length);
//      return numbers[indexNUmbers];
//  }

//  let generateRandomSuit =()=>{
//      let suit=["diamond","spade","heart","club"]
//      let indexSuit = math.floor(math.random()= suit.length);
//      return suit[indexSuit]
//  }

 window.onload = function() {

let pinta = ['♠' , '♣' , '♥' , '♦'];
let numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let color = ['red', 'black'];

var rdm_pinta = Math.floor((Math.random() * pinta.length));
var numero = Math.floor(( Math.random() * numeros.length));
var colores = Math.floor((Math.random() * color.length));

document.querySelector('.top-suit').innerHTML = '<p style=color: '+color[colores]+' class='+'top-suit'+'>'+pinta[rdm_pinta]+ '</p>' ;
document.querySelector('.number').innerHTML = '<p class='+'number'+'>'+numeros[numero]+'</p>' ;
document.querySelector('.bottom-suit').innerHTML = '<p style=color: '+color[colores]+' class='+'bottom-suit'+'>'+pinta[rdm_pinta]+ '</p>' ;
    
}
