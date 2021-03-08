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