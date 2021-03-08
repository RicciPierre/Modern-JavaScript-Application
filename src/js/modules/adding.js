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