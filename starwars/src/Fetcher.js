// import React from 'react';
const url = 'https://swapi.co/api'
let starwarsChars = {};
let starwarsSpecies = {}
class Fetcher  {
/**
 * 
 * 
 * fetches the main starwars characters from the people endpoint, for brevity we are only pulling 
 * in the name, height, and gender of each character. Returns an object named starwarsChars which contains 
 * the three properties.
 */
  async fetchPeople () {
  try {
    let response =   await fetch(`https://swapi.co/api/people/`, {
        method: 'GET', 
        'content-type': 'application/json'
        
       });
        if (response.ok) {   
          let res = await response.json();
          starwarsChars = res.results.map(char => ({
            name: char.name,
            height: char.height,
            gender: char.gender,
          }));
          
            return starwarsChars;
            } 
            throw new Error('Request failed!');  
        } catch  (error) {
            console.log(error);
            }
  };
/**
 * 
 * 
 * fetches the characters from the species endpoint. for brevity we are only pulling
 * in the name, classification and language. Returns an object named starwarsSpecies.
 */
async fetchSpecies() {
  try {
    let response =   fetch(`https://swapi.co/api/species/`, {
        method: 'GET', 
        'content-type': 'application/json'
        
       });
        if (response.ok) {   
          let res = await response.json();
          let species = res.results;
          starwarsSpecies = species.map(specie => ({
            name: specie.name,
            classification: specie.classification,
            language: specie.language
          }))
          console.log(starwarsSpecies)
            return starwarsSpecies;
            } 
            throw new Error('Request failed!');  
        } catch  (error) {
            console.log(error);
            }
  }
}


export default new Fetcher();


