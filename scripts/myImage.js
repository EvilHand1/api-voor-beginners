getData(myURL).then( data196 => {

    let mySection = document.querySelector("section:nth-of-type(1)");
    let myName = data196.data.name;
    let myAvatar = data196.data.avatar;
    let myImg = document.createElement("img");

    myImg.src = myAvatar;
    myImg.alt = myName;

   // console.log(myImg);  

    mySection.appendChild(myImg);
    
});










/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }