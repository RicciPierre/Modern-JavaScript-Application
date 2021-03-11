function addingCharacters() {
  const inputs = Array.from(document.querySelectorAll('.modal-body input'));

  document.getElementById('submitHero').addEventListener('click', async () => {
    const values = inputs.map(({ value }) => value.trim());
    const [name, shortDescription, description] = values;

    if (values.some((value) => value === '')) {
      // eslint-disable-next-line no-alert
      alert("There's an empty input!");
      return;
    }

    const response = await fetch(
      'https://character-database.becode.xyz/characters',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          shortDescription,
          name,
          image,
        }),
      },
    );

    document.location.reload();
    if (!response.ok) {
      console.error(response.status);
    }
  });
}

export { addingCharacters };
