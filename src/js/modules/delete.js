const characterId = new Array();

function deleteCharacters() {
  const deleteBtn = document.getElementsByClassName('delete');
  let Confirm;

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', async () => {
      Confirm = confirm('REALLY ?!');

      if (Confirm === true) {
        const id = characterId[i];

        try {
          const response = await fetch(
            `https://character-database.becode.xyz/characters/${id}`,
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );
          location.reload();
        } catch (error) {
          console.error(error);
        }
      }
    });
  }
}

export { characterId, deleteCharacters };
