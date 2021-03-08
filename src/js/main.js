(() => {
    $(document).ready(function(){
        $("#myBtn").click(function(){
            $("#myModal").modal();
        });
    });
    //to make the modal working using jquery from https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal_js&stacked=h

    async function fetchData() {
        try {
            const Fetch = await fetch('https://character-database.becode.xyz/characters');
            const character = await Fetch.json();
            return character;
        } catch (error) {
            console.error(error);
        }
    }
    const data = fetchData();

    function listCharacters(character) {
        character.forEach(({ name, shortDescription, image, description, id }) => {
            const clone = document.querySelector('#hero-tpl').cloneNode(true).content
            const target = document.querySelector('#target');

            clone.querySelector('#heroName').innerHTML = name;
            clone.querySelector('#heroShort').innerHTML = shortDescription;
            clone.querySelector('#heroImg').src = `data:image/*;base64,${image}`;
            clone.querySelector('#heroLong').innerHTML = description;

            target.appendChild(clone);

            characterId.push(id);
        });
    }

    document.querySelector("#HeroImage").addEventListener("change",(e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            image = reader.result.replace(/^data:image\/[a-z]+;base64,/, ""); // strip off the data: url prefix to get just the base64-encoded bytes from  https://stackoverflow.com/questions/38633061/how-can-i-strip-the-dataimage-part-from-a-base64-string-of-any-image-type-in-ja
        };
        reader.readAsDataURL(file)
    });

    function addingCharacters() {
        const inputs = Array.from(document.querySelectorAll(".modal-body input"));

        document.getElementById('submitHero').addEventListener('click', async () => {
            const values = inputs.map(({value}) => value.trim());
            console.log(values);
            const [name, shortDescription, description] = values;
            
            if (values.some((value) => value == "")) {
                alert("There's an empty input!");
                return;
            }

            const response = await fetch(`https://character-database.becode.xyz/characters`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    description,
                    shortDescription,
                    name,
                    image
                }),
            });
            
            document.location.reload();
            if (!response.ok) {
                console.error(response.status)
            }
        });
    }

    const characterId = new Array();

    function deleteCharacter() {
        const deleteBtn = document.getElementsByClassName('delete');
        let Confirm;

        for (let i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].addEventListener('click', async function () {

                Confirm = confirm('REALLY ?!');

                if (Confirm === true) {
                    const id = characterId[i];

                    try {
                        const response = await fetch(`https://character-database.becode.xyz/characters/${id}`, {
                            method: 'DELETE',
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                        location.reload();

                    } catch (error) {
                        console.error(error);
                    }
                }
            });
        };
    }

    data.then(character => {
        listCharacters(character);
        addingCharacters();
        deleteCharacter();
    })
})();
