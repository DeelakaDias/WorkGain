function showImage(imagePath, ingredients, steps) {
  var largeImage = document.getElementById("largeImage");
  largeImage.src = imagePath;
  var ingre = document.getElementById("ingredients");
  ingre.innerHTML = ingredients;
  var ste = document.getElementById("steps");
  ste.innerHTML = steps;
}