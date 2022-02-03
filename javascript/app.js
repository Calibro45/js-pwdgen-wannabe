/* alert("hello world")
console.log(alert) */

//nome

const userName = prompt("Come ti chiami?", "Ajeje");
console.log(userName)

//cognome

const userSurname = prompt("Qul'è il tup cognome?", "Brazorf");
console.log(userSurname)

//colore

const userColor = prompt("Qual'è il tuo colore preferito?", "Puffo_Torroncino");
console.log(userColor)

//inizializzazione variabile contenuto password

const PASSWORD = document.getElementById("password");
console.log(PASSWORD)

//numero

const NUMBER = Math.floor(Math.random() * 100)
console.log(NUMBER)

//mostra password

PASSWORD.innerHTML = ` ${userName}${userSurname}${userColor}${NUMBER}`
console.log(PASSWORD.innerHTML)