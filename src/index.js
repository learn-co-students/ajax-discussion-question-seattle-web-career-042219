const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
let USERS = []

function fetchData() {
  console.log('1. fetching movies')
  fetch('https://randomuser.me/api/')
    .then(response => {
      console.log('2. converting to json')
      return response.json()
    })
    .then(json => {
      console.log('3. got movies:', json)
      loadUsers(json)
    })
  console.log('4. end of function')
}

function loadUsers(users) {
  let user = users.results[0]
  addUser(user);
}


function addUser(user) {
  console.log(user)
  let name = user.name.title + " " + user.name.first + " " + user.name.last;
  let userEmail = user.email
  let userCity = user.location.city
  let userStreet = user.location.street
  let userState = user.location.state
  let userPostal = user.location.postal
  let userPhone = user.phone 
  let userCell = user.cell
  let userDob = user.dob.date
  let userImage = user.picture.thumbnail
//name and email
  let fullname = document.getElementById("fullname")
  fullname.textContent = name;
  let email = document.getElementById("email")
  email.textContent = userEmail;

  //address
  let city = document.getElementById("city")
  city.textContent = userCity;
  let state = document.getElementById("state")
  state.textContent = userState;
  let postal = document.getElementById("postcode")
  postal.textContent = userPostal;
  let street = document.getElementById("street")
  street.textContent = userStreet;

  //phone
  let phone = document.getElementById("phone")
  phone.textContent = userPhone;
  let cell = document.getElementById("cell")
  cell.textContent = userCell;

  //dob
  let dob = document.getElementById("date_of_birth")
  dob.textContent = userDob
 //image

 let image = document.getElementById('profile_picture')
 image.src = userImage

}

fetchData()



document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  let button = document.getElementById("new-btn")
  button.addEventListener('click', () => {
    fetchData()
  })
});
