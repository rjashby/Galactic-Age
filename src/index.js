import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Astronaut from "./astronaut";

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let age = parseInt($("input#age").val());
    let planet = $("select#planet option:selected").val();
    let astronaut = new Astronaut(age, planet);
  })
})