let csvData;
import { createCards } from "./modules/createCards.js";
import { getData } from "./modules/getData.js";

async function init() {
  csvData = await getData;
  console.log(csvData);
  createCards(csvData);
}

init();
