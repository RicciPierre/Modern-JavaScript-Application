//this is the first script but I created a new one to have a better code and I was block with the DELETE request

// //to make the modal working using jquery from https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal_js&stacked=h
// $(document).ready(function(){
//     $("#myBtn").click(function(){
//         $("#myModal").modal();
//     });
// });

// //simply display in the console the data from the API: working
// async function fetchData() {

//     let response = await fetch("https://character-database.becode.xyz/characters")
//     let data = await response.json();
//     console.log(data);
//     return data;
// }
// fetchData();



// //list heroes into template: working
// const template = document.querySelector("#hero-tpl");
// const target = document.querySelector("#target");

// async function heroes() {
//     const heroesFetch = await fetch('https://character-database.becode.xyz/characters');
//     const data = await heroesFetch.json();

//     data.forEach(({ image, name, shortDescription, description, id }) => {
//         const supHero = template.cloneNode(true).content;

//         supHero.querySelector("#heroName").textContent = name;
//         supHero.querySelector("#heroShort").textContent = shortDescription;
//         supHero.querySelector("#heroLong").textContent = description;
//         supHero.querySelector("#heroImg").src = "data:image/*;base64," + image;
//         supHero.querySelector("#btn-edit");
//         supHero.querySelector("#btn-delete");

//         target.appendChild(supHero);

//         console.log(id);
//     });
// }
// heroes();



// //Get Heroes with the id: working
// const clone = document.querySelector('#hero-tpl').cloneNode(true).content;
// document.querySelector('#target').appendChild(clone);

// async function xMen() {
//     try {
//         const one = await fetch('https://character-database.becode.xyz/characters');
//         const two = await one.json();

//         two.forEach(element => {
//             let three = document.querySelector('#hero-id').value;
//             if (element.id == three) {
//                 document.querySelector('#heroName').textContent = element.name; //.textContent === .innerHTML
//                 document.querySelector('#heroShort').innerHTML = element.shortDescription;
//                 document.querySelector('#heroLong').innerHTML = element.description;
//             }
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }
// xMen();

// document.querySelector('#run').addEventListener('click', function () {
//     xMen();
//     console.log(xMen());
// });

// //create the character object
// // class Character {
// //         constructor (name, shortDescription, image, longDescription) {
// //         this.name = name;
// //         this.shortDescription = shortDescription;
// //         this.image = image;
// //         this.description = description;
// //     }
// // };

// //convert Img to base64 using this function:
// // function encodeImageFileAsURL(element) {
// //     var file = element.files[0];
// //     var reader = new FileReader();
// //     reader.onloadend = function() {
// //       console.log('RESULT', reader.result)
// //     }
// //     reader.readAsDataURL(file);
// // }
// //from https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript
// document.querySelector("#HeroImage").addEventListener("change",(e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//         image = reader.result.replace(/^data:image\/[a-z]+;base64,/, ""); // strip off the data: url prefix to get just the base64-encoded bytes from  https://stackoverflow.com/questions/38633061/how-can-i-strip-the-dataimage-part-from-a-base64-string-of-any-image-type-in-ja
//     };
//     reader.readAsDataURL(file)
// });

// //adding hero from the form: working
// const inputs = Array.from(document.querySelectorAll(".modal-body input")); 

// document.querySelector("#submitHero").addEventListener("click", async () => {
//     const values = inputs.map(({value}) => value.trim());
//     console.log(values);
//     const [name, shortDescription, description] = values;
    

//     if (values.some((value) => value == "")) {
//         alert("There's an empty input!");
//         return;
//     }

//     const response = await fetch(`https://character-database.becode.xyz/characters`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             description,
//             shortDescription,
//             name,
//             image
//         }),
//     });
//     console.log(response.status)
    
//     document.location.reload();
//     if (!response.ok) {
//         console.error(response.status)
//     }
// });


// //delete an hero: working on it
// document.querySelector("#btn-delete").addEventListener("click", async () => {
//     const id = "ad006536-c491-4616-87e3-7a13f13b93ff";

//     if (isNaN(id) || id === 0) {
//         console.error("Invalid id!");
//         return;
//     }

//     try {
//         const response = await fetch(`https://character-database.becode.xyz/characters/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         const deletedHero=await response.json();

//         console.log(deletedHero);
//     } catch (err) {
//         console.error(`Unknown hero with id: ${id}!`);
//     }
// });


