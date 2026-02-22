document.addEventListener("DOMContentLoaded", () => {
const descriptionBtn = document.getElementById("descriptionBtn");
const productParaDiv = document.getElementById("productParaDiv");
const em = document.getElementById("em");

descriptionBtn.addEventListener("click", () => {
  productParaDiv.style.height = productParaDiv.style.height;
  productParaDiv.style.transition = "height 3s ease-in";
  if (productParaDiv.style.height === "0px") {
    productParaDiv.style.height = "fit-content";
  } else {
    productParaDiv.style.height = "0px";
  }
})

})