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

    const upArrow = document.createElement("span");
    upArrow.setAttribute("class", "upArrow");
    upArrow.textContent = "↑";
    upArrow.addEventListener("click", function (e) {
      e.stopPropagation();
      let currentWord = document.querySelectorAll(".word.active")[0];
      currentWord.classList.remove("active");
      document.getElementById("categories").classList.remove("active");
      document.querySelectorAll(".category.active")[0].classList.remove("active");
    });
    wordContainers[i].appendChild(upArrow);
  }
}

export { addArrows };
