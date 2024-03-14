const headerIconEl = document.querySelector("#icon");
const buttonEl = document.querySelector("#mode-select");
let modeDataset = document.documentElement.dataset
modeDataset.theme = "light";

//Set theme to light on first load
// modeDataset = "light"


//Toggle the color mode from light to dark
buttonEl.addEventListener("click", (e) => {
  if (modeDataset.theme === "light") {
    modeDataset.theme = "dark"
    headerIconEl.classList.remove("fa-sun");
    headerIconEl.classList.add("fa-moon");
    
    document.body.classList.add("dark");
  } else {
    headerIconEl.classList.remove("fa-moon");
    headerIconEl.classList.add("fa-sun");
    modeDataset.theme = "light"
    document.body.classList.remove("dark");
  }
})

console.log(document.documentElement.dataset.theme)