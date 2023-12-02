// Student 2 Lafri
// required elements
const rulesButton = document.querySelector(".rulesButton button");
const infobox = document.querySelector(".infobox");
const exit= document.querySelector(".buttons .exit");

// Reference : https://youtu.be/WUBhpSRS_fk
//Creating navigation
// on start button click
rulesButton.onclick = ()=>{
  infobox.classList.add("activeInfo"); // go to the next box
}

// on exit button click
exit.onclick = ()=>{
  infobox.classList.remove("activeInfo");// go to the previous box
}
