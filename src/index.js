const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  addListener();
});

function addListener() {
  const button = document.getElementsByTagName("button");
  button[0].addEventListener("click", getCall);
}
function getCall() {
  console.log("getCall fires");
  fetch("https://randomuser.me/api/?nat=us")
    .then(result => result.json())
    .then(json => renderUser(json.results[0]));
}

function renderUser(user) {
  console.log(user);
  document.getElementById("profile_picture").innerText =
    user.picture.thunmbnail;
  document.getElementById("fullname").innerText = `${user.name.title} ${
    user.name.first
  } ${user.name.last}`;
  document.getElementById("email").innerText = user.email;
  document.getElementById("street").innerText = user.location.street;
  document.getElementById("city").innerText = user.location.city;
  document.getElementById("state").innerText = user.location.state;
  document.getElementById("postcode").innerText = user.location.postcode;
  document.getElementById("phone").innerText = user.phone;
  document.getElementById("cell").innerText = user.cell;
  document.getElementById("date_of_birth").innerText = user.dob.date.split(
    "T"
  )[0];
}
