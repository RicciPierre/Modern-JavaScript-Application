$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});
//to make the modal working using jquery from https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal_js&stacked=h

import { data } from "./modules/fetch.js";
import { listCharacters } from "./modules/list.js";
import { addingCharacters } from "./modules/adding.js";
import { deleteCharacters } from "./modules/delete.js";
import { convert } from "./modules/convertimg.js";


data.then(character => {
    listCharacters(character);
    convert();
    addingCharacters();
    deleteCharacters();
})