const fullname = document.getElementById("fullname");
const URL = 'https://randomuser.me/api/'
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

getUsers()
handleAdd()
});

function getUsers() {
  fetch(URL)
  .then(res => res.json())
  .then(json => (
    showUser(json)
  ))
}

function showUser(json) {

  let user = json.results[0]
  let img = document.getElementById('profile_picture')
  let names = document.getElementById('fullname')
  let email = document.getElementById('email')
  let street = document.getElementById('street')
  let city = document.getElementById('city')
  let state = document.getElementById('state')
  let postcode = document.getElementById('postcode')
  let phone = document.getElementById('phone')
  let cell = document.getElementById('cell')
  let dob = document.getElementById('date_of_birth')

  img.src = user.picture["large"]
  names.textContent = user.name["title"] + " " + user.name["first"] + " " + user.name["last"]
  email.textContent = user.email
  street.textContent = user.location.street
  city.textContent = user.location.city
  state.textContent = user.location.state
  postcode.textContent = user.location.postcode
  phone.textContent = user.phone
  cell.textContent = user.cell
  dob.textContent = user.dob.date
}

function handleAdd() {
  let addBtn = document.querySelector('[type= button]')
  addBtn.addEventListener('click', () => {
    getUsers()
  })
}
