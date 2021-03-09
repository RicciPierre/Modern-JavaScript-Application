// to make the modal working using jquery from https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal_js&stacked=h

import { data } from './modules/fetch.js';
import { listCharacters } from './modules/list.js';
import { addingCharacters } from './modules/adding.js';
import { deleteCharacters } from './modules/delete.js';
import { convert } from './modules/convertimg.js';

$(document).ready(() => {
  $('#myBtn').click(() => {
    $('#myModal').modal();
  });
});

data.then((character) => {
  listCharacters(character);
  convert();
  addingCharacters();
  deleteCharacters();
});
