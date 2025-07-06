const lisItems = document.querySelectorAll(".c-text")

function toggleDone(e) {
  if (e.target.className == "c-text") {
    e.target.className = "done";
  } else {
    e.target.className = "c-text";
  }
}

lisItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
})