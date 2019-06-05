const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");




  function fetchUser() {
   
    fetch('https://randomuser.me/api/')
    .then( response => response.json())
    .then( json => AddUser(json))
  }


  function AddUser(json) {
    let data = json.results[0]
    let nameString = data.name["first"] + ' ' + data.name["last"];
    let email = data.email;
    let street = data.location["street"];
    let city = data.location["city"];
    let state = data.location["state"];
    let post = data.location["postcode"];
    let phone = data.phone;
    let cell = data.cell;
    let dob = data.dob;
    let img = data.picture["large"];
    

    
    document.getElementById('fullname').textContent = nameString;
    document.getElementById('email').textContent = `Email: ${email}`;
    document.getElementById('street').textContent = `Street: ${street}`;
    document.getElementById('city').textContent = `City: ${city}`;
    document.getElementById('state').textContent = `State: ${state}`;
    document.getElementById('postcode').textContent = `Post Code: ${post}`;
    document.getElementById('phone').textContent = `Phone: ${phone}`;
    document.getElementById('cell').textContent = `Cell: ${cell}`;
    document.getElementById('date_of_birth').textContent = `Date of Birth: ${dob}`;
    document.getElementById('picture').src = img;
    
  }

  
    document.getElementById('newUserButton').addEventListener('click', fetchUser())

  
});
