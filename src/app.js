/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let dominios = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let tlds = [".com", ".com.mx", ".com.es", ".com.cl"]; // Añadimos las terminaciones aquí

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let tld of tlds) {
          // Añadimos un bucle para las terminaciones
          dominios.push(`${p}${a}${n}${tld}`);
        }
      }
    }
  }
  console.log(dominios);
};
