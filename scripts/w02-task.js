/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Luã Felizola Soares De Medeiros';
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let profilePicture = 'images/Profile_Picture2.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.getElementById("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src",profilePicture);
imageElement.setAttribute("alt",`Profile image ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ['Pizza',' Assai',' Hamburguer',' Cuscuz'];
let oneFood = 'Tacos';
favoriteFoods.push(oneFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;

