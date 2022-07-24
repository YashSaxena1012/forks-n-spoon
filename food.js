var images = [];
var time = 2000;
let i = 0;
images[0] = "https://images.slurrp.com/prod/articles/r59d6osh0b.webp";
images[1] =
  "https://www.simplejoy.com/wp-content/uploads/2018/12/chicken_butter_masala_recipe_picture.jpg";
images[2] = "https://pbs.twimg.com/media/FTNbp3WXEAAIZcb.jpg";
images[3] =
  "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3150%2Ftrend20210603071422.jpg";
images[4] =
  "https://files.heftycdn.com/wp-content/uploads/2019/04/9b1d50393b738508fc1fe0933222af52-1.jpg";
images[5] =
  "data:image/jpeg;base64,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";
images[6] =
  "https://i.pinimg.com/736x/2a/19/da/2a19da7b41ccc201e9dc7089fb154c09.jpg";
images[7] =
  "https://www.mashed.com/img/gallery/basic-homemade-pancake-recipe/intro-1623681422.jpg";
function changeimg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i += 1;
  } else {
    i = 0;
  }
  setTimeout("changeimg()", time);
}
window.onload = changeimg;

var searchbtn = document.querySelector(".search");
var recipe = document.querySelector(".recipe");
var details = document.querySelector(".recipe-details");
var mealList = document.querySelector(".foodcontainer");
searchbtn.addEventListener("click", () => {
  var searchInput = document.querySelector("#ingredient").value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
  .then((response) => {
    return response.json();
    })
    .then((data) => {
      console.log(data);
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
          <div class="food">
          <div class="food-item" data-id="${meal.idMeal}">
          <img class="food-img" src="${meal.strMealThumb}" alt="meal">
          <p class="food-name">${meal.strMeal}</p>
          <button class="recipe">GET RECIPE</button>
          </div>
          </div>
          `;
          mealList.classList.remove("notFound");
        });
      } else {
        html = "Sorry, we didn't find any meal!";
        mealList.classList.add("notFound");
      }
      mealList.innerHTML = html;
    })
    .catch((err) => {
      console.log("there is an error");
    });
  });
  
  mealList.addEventListener("click", getMealRecipe);
  function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains("recipe")) {
      let mealItem = e.target.parentElement.parentElement;
      console.log(mealItem.children);
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.children[0].dataset.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        mealRecipeModal(data.meals);
      });
    }
  }
  
  function mealRecipeModal(meal) {
    console.log(meal);
    meal = meal[0];
    let html = `
    <h2 class = "title">${meal.strMeal}</h2>
    <h2 class = "ingredient">${meal.strCategory}</h2>
    <div class = "recipe-instruct">
    <h3>Instructions:</h3>
    <p>${meal.strInstructions}</p>
    </div>
    <div class = "recipe-meal-img">
    <img src = "${meal.strMealThumb}" alt = "">
    </div>
    <div class = "recipe-link">
    <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
    </div>
    <button onclick="closedetails()" class="close">CLOSE</button>
    `;
    details.innerHTML = html;
    details.style.display = "block";
  }
  

function closedetails(){
details.style.display="none"
}
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  document.querySelector('.navbar').style.backgroundColor = "black"
  document.querySelector('.taptotop').style.display = "block"
}
else {
  document.querySelector('.navbar').style.backgroundColor = "rgba(0,0,0,0.5)"
  document.querySelector('.taptotop').style.display = "none"
}}
function scrltop(){
  window.scrollTo(0,0)
}