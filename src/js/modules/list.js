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