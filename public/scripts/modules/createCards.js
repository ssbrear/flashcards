function createCards(data) {
  const categoryContainer = document.getElementById("categories");
  data.forEach((word) => {
    // Create a div for each word
    // Each div contains a div for the english version and a div for the swedish version
    const newWordEnglish = document.createElement("div");
    newWordEnglish.setAttribute("class", "english");
    newWordEnglish.textContent = word.word;

    const newWordSwedish = document.createElement("div");
    newWordSwedish.setAttribute("class", "swedish");
    newWordSwedish.textContent = word.singular;

    const newWord = document.createElement("div");
    newWord.setAttribute("class", "word");
    newWord.appendChild(newWordEnglish);
    newWord.appendChild(newWordSwedish);

    // Check all currently existing categories before creating a new one
    let hasAppended = false;
    categoriesLoop: for (let i = 0; i < categoryContainer.children.length; i++) {
      // If there already exists a category for this word
      if (categoryContainer.children[i].getAttribute("id") === word.category) {
        // Append this word to the category and exit loop
        categoryContainer.children[i].children[1].appendChild(newWord);
        hasAppended = true;
        break categoriesLoop;
      }
    }
    // If no category existed, create a new category and append
    if (!hasAppended) {
      const newCategoryLabel = document.createElement("div");
      newCategoryLabel.setAttribute("class", "label");
      newCategoryLabel.textContent = word.category;

      const newCategoryWordContainer = document.createElement("div");
      newCategoryWordContainer.setAttribute("class", "wordContainer");
      newCategoryWordContainer.appendChild(newWord);

      const newCategory = document.createElement("div");
      newCategory.setAttribute("id", word.category);
      newCategory.appendChild(newCategoryLabel);
      newCategory.appendChild(newCategoryWordContainer);
      document.getElementById("categories").appendChild(newCategory);
    }
  });
}

export { createCards };
