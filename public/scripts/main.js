let csvData;
import { createCards } from "./modules/createCards.js";
import { getData } from "./modules/getData.js";
import { addArrows } from "./modules/addArrows.js";

async function init() {
  // Retrives data from csv file
  csvData = await getData;
  
  // Dynamically creates categories and cards using the retrieved data
  // Adds event listeners to each category to hide other categories and show the respective categories' words
  // Adds event listeners to each word to switch between the english and swedish word
  createCards(csvData);

  // Adds arrows that show after a category has been selected to move between words within that category 
  addArrows();
}

init();
