




//gebruik de URL, maak een variabel en die variabel roept een functie of iets aan
getData(myURL).then( data196 => {
	console.log(data196.data.birthdate);
	//
	let deH1 = document.querySelector("h2");

	let myBirthdate = data196.data.birthdate;
	//console.log(myName);
	deH1.textContent = myBirthdate;
});







/**************/
/* SPIEKBRIEF */
/**************/

// getMyBirthday();

// normal

// function getMyBirthday() {
// 	getData(urlMe).then( data => {  

// 		const myData = data.data;
// 		let myBirthdate = myData.birthdate;

// 		// birthdate is not present
// 		if (!myBirthdate) {
// 			// do nothing
// 		}
// 		// add birthday
// 		else {
// 			const myBirthday = document.createElement("time");
// 			myBirthday.textContent = myBirthdate;
// 			myBirthday.dateTime = myBirthdate;
// 			mySection.append(myBirthday);
// 		}
// 	});	
// }



// fancy

// function getMyBirthday() {
// 	getData(urlMe).then( data => {  

// 		const myData = data.data;
// 		let myBirthdate = myData.birthdate;

// 		// birthdate is not present
// 		if (!myBirthdate) {
// 			// do nothing
// 		}
// 		// convert birthdate to readable date
// 		else {
// 			const myBirthdateTimestamp = Date.parse(myBirthdate);
// 			const DDMMMMYYFormat = new Intl.DateTimeFormat('nl-nl', { dateStyle: 'long' });
// 			myBirthdateDDMMMMYY = DDMMMMYYFormat.format(myBirthdateTimestamp);

// 			const myBirthday = document.createElement("time");
// 			myBirthday.textContent = `🎉 ${myBirthdateDDMMMMYY}`;
// 			myBirthday.dateTime = myBirthdate;

// 			mySection.append(myBirthday);
// 		}
// 	});	
// }