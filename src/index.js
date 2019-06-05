const profile_pic = document.getElementById("profile_picture");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");

const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");

const phone = document.getElementById("phone");
const cell = document.getElementById("cell");

const dob = document.getElementById("date_of_birth");


document.addEventListener("DOMContentLoaded", () => {

	function main() {
		fetchData();
		let button = document.querySelector('.btn-primary')
		button.addEventListener('click', () => {
			fetchData();
		})
	}
	main();

	function fetchData(){
		var data = fetch('https://randomuser.me/api/')
		.then( res => res.json() )
		.then( json => {
			populate(json) 
		})
	}

	function populate(json) {

		const person = json["results"][0]
		profile_pic.src = person["picture"]["large"];
		fullname.innerHTML = person["name"]["first"] + " " + person["name"]["last"];
		email.innerHTML = person["email"];

		street.innerHTML = person["location"]["street"];
		city.innerHTML = person["location"]["city"];
		state.innerHTML = person["location"]["state"];
		postcode.innerHTML = person["location"]["postcode"];

		phone.innerHTML = person["phone"];
		cell.innerHTML = person["cell"];

		date = person["dob"]["date"];
		mon = date.substring(5,7);
		day = date.substring(8,10);
		year = date.substring(0,4);
		dob.innerHTML = mon  + "/" + day + "/" + year;
	}

});
