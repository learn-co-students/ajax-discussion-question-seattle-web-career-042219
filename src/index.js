const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

function fetchData() {
  fetch('https://randomuser.me/api/')
  .then(response => {
    response.json()
  })
  .then(json => {
    makeUser(json)
  })
}

function makeUser() {
  const data = json.results[0];
  const name = data.name["first"] + ' ' + data.name["last"];
  const email = data.email;
  const street = data.location["street"];
  const city = data.location["city"];
  const state = data.location["state"];
  const postcoce = data.location["postcode"];
  const phone = data.phone;
  const cell = data.cell;
  const dateOfBirth = data.dob;
  const img = data.picture["large"];

  document.getElementById('fullname').textContent = name;
  document.getElementById('email').textContent = `${email}`;
  document.getElementById('street').textContent = `${street}`;
  document.getElementById('city').textContent = `${city}`;
  document.getElementById('state').textContent = `${state}`;
  document.getElementById('postcode').textContent = `${postcode}`;
  document.getElementById('phone').textContent = `${phone}`;
  document.getElementById('cell').textContent = `${cell}`;
  document.getElementById('date_of_birth').textContent = `${dateOfBirth}`;
  document.getElementById('picture').src = img;

}

document.getElementById('button').addEventListener('click', makeUser())

});