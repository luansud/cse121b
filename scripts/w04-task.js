/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Luã Felizola",
    photo: "images/Profile_Picture2.jpg",
    favoriteFoods: ["Pizza","Hamburguer","Donuts"],
    hobbies: ["Code","Surf","Voley-ball"],
    placesLived: []
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Colombia",
        length: "5 years"
    },
    {
        place: "Brazil",
        length: "All Life"
    }
)

/* DOM Manipulation - Output */

/* Name */
const nameUser = document.getElementById("name");
nameUser.textContent = myProfile.name;

/* Photo with attributes */
const photoUser = document.getElementById("photo");
photoUser.src = myProfile.photo;
photoUser.alt = myProfile.name;

/* Favorite Foods List*/
const listFavoriteFoods = document.getElementById("favorite-foods");

myProfile.favoriteFoods.forEach((food) => {
  const liUser = document.createElement("li");
  liUser.textContent = food;

  listFavoriteFoods.appendChild(liUser);
});

/* Hobbies List */
const listHobbies = document.getElementById("hobbies");

myProfile.hobbies.forEach((hobby) => {
  const liUser = document.createElement("li");
  liUser.textContent = hobby;

  listHobbies.appendChild(liUser);
});

/* Places Lived DataList */
const placesLivedList = document.getElementById("places-lived");

for (let i = 0; i < myProfile.placesLived.length; i++) {
  const dtElement = document.createElement("dt");
  dtElement.textContent = myProfile.placesLived[i].place;

  placesLivedList.appendChild(dtElement);

  const ddElement = document.createElement("dd");
  ddElement.textContent = myProfile.placesLived[i].length;

  placesLivedList.appendChild(ddElement);
}
  





