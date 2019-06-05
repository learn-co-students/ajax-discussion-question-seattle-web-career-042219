const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  function fetchData(){
    fetch('https://randomuser.me/api/')
    .then( response => {
      return response.json();
    })
    .then( json => {
      addPhoto(json.results[0].picture.thumbnail);
      addName(json.results[0].name.title + ". " + json.results[0].name.first + " " + json.results[0].name.last);
    });
  }

  function addPhoto(photo) {
    let image = document.getElementById('profile_picture');
    image.src = photo;
  }

  function addName(name) {
    let fullname = document.getElementById('fullname');
    fullname.textContent = name;
  }

  document.getElementById('add_new_button').addEventListener('click', () => {
    console.log("click the botton");
  });

  fetchData();
});
