function addArrows() {
  const wordContainers = document.getElementsByClassName("wordContainer");
  for (let i = 0; i < wordContainers.length; i++) {
    const nextArrow = document.createElement("span");
    nextArrow.setAttribute("class", "nextArrow");
    nextArrow.textContent = "→";
    nextArrow.addEventListener("click", function (e) {
      e.stopPropagation();
      let currentWord = document.querySelectorAll(".word.active")[0];
      currentWord.classList.remove("active");
      if (currentWord.nextSibling != null) currentWord.nextSibling.classList.add("active");
    });
    wordContainers[i].appendChild(nextArrow);

    const prevArrow = document.createElement("span");
    prevArrow.setAttribute("class", "prevArrow");
    prevArrow.textContent = "←";
    prevArrow.addEventListener("click", function (e) {
      e.stopPropagation();
      let currentWord = document.querySelectorAll(".word.active")[0];
      currentWord.classList.remove("active");
      if (currentWord.previousSibling != null) currentWord.previousSibling.classList.add("active");
    });
    wordContainers[i].appendChild(prevArrow);
  }
}

export { addArrows };
