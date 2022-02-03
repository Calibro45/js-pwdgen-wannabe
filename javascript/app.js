/* alert("hello world")
console.log(alert) */

const userName = prompt("Come ti chiami?", "Ajeje");
console.log(userName)

const userSurname = prompt("Qul'è il tup cognome?", "Brazorf");
console.log(userSurname)

const userColor = prompt("Qual'è il tuo colore preferito?", "Puffo_Torroncino");
console.log(userColor)

const PASSWORD = document.getElementById("password");
console.log(PASSWORD)

PASSWORD.innerHTML = ` ${userName}${userSurname}${userColor}`
console.log(PASSWORD.innerHTML)