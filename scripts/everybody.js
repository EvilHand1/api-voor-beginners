const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";

const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';


const everybodyURL = baseURL + endpointSquad;


getData(everybodyURL).then(allData =>{
    //console.log(allData)
    let everybodySection = document.querySelector("section:nth-of-type(2)");
    let allPersons = allData.data;
    //console.log(allPersons);

    allPersons.forEach(person => {
        
 let personName = person.name;
 let personImg = person.avatar;
 let personWebsite = person.website;
        let getalTussen0en1 = Math.random();
        let getalTussen0en5 = getalTussen0en1 * 5;
        let afgerondGetalTussen0en4 = Math.floor(getalTussen0en5);
        let afgerondGetalTussen1en5 = afgerondGetalTussen0en4 + 1;
   
   if(!personImg){
    //do nothing
    personImg = "images/placeholder${afgerondGetalTussen1en5}.svg";
   }
  
   if (!personWebsite){

   }

        let personHTML = `<article>
  <h3>${personName}</h3>
      <img src="${personImg}" alt="${personName}">
      <a href="https://krijnhoetmer.nl" aria-label="de website van ${personName}">website</a>
      </article> `;
      everybodySection.insertAdjacentHTML('beforeend', personHTML);
    } )
})









/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }