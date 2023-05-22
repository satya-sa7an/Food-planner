let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");
let noListEl = document.getElementById("no-list");
const foodListStatistics = document.getElementById("food-list-statistics");

const handleInputFood = () => {

  let newFoodItemEl = document.createElement("li");

  let div = document.createElement("div");
  let divBtn = document.createElement("div");

  newFoodItemEl.append(div, divBtn);

  div.textContent = inputFood.value;
  newFoodItemEl.className = "food-item";

  divBtn.parentElement.setAttribute("onClick", "removeFoodItem(event)");
  divBtn.innerHTML = `<i class="fa fa-xmark"></i>`;
  newFoodItemEl.append(divBtn);

  foodContainer.append(newFoodItemEl);

  inputFood.value = "";


  refreshUI();
};

inputBtn.addEventListener("click", handleInputFood);

inputFood.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleInputFood();
  } else if (event.key === "KeyZ" && (event.ctrlKey || event.metaKey)) {
    inputFood.value = "";
  }
});

function removeFoodItem(event) {
  const existingList = event.target.parentNode.parentNode;
  existingList.remove();

  refreshUI();
}


function refreshUI() {
  foodListStatistics.innerText = `You have ${foodContainer.children.length} lists`;

   if (foodContainer.children.length > 0) {
     noListEl.hidden = true;
   } else {
     noListEl.hidden = false;
   }
}