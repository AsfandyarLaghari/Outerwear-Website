document.addEventListener("DOMContentLoaded", () => {
 
  
  
  const btn = document.getElementById("mainBtn");
  const btnTwo = document.getElementById("mainBtn2");
  const menuBar = document.getElementById("menuBar");
  const menuBarTwo = document.getElementById("menuBar2");
  const bannerBtn1 = document.getElementById("bannerBtn1");
  const bannerBtn2 = document.getElementById("bannerBtn2");
  const imgOneUrl = "https://i0.wp.com/excellentleathershop.com/wp-content/uploads/2025/04/Mens-Leather-jacket-Banner-For-ELS.webp";
  const mainImg = document.getElementById("mainProductImg");
  const clickImg = document.getElementById("clickImg");

  clickImg.addEventListener("click", () => {
    mainImg.src = clickImg.src;
  });

mainImg.addEventListener("mousemove", (e) => {
  const rect = mainImg.getBoundingClientRect();
  mainImg.style.scale = "1.3"

  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  mainImg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});

mainImg.addEventListener("mouseleave", () => {
  mainImg.style.transform = "translate(0, 0)";
  mainImg.style.scale = "1"
});

  const imgTwoUrl = "https://excellentleathershop.com/wp-content/uploads/2024/07/women-leather-jacket-banner.jpg";

  btn.addEventListener("click", (e) => {
    e.stopPropagation();


    menuBarTwo.style.opacity = "0";

 
    menuBar.style.opacity =
      menuBar.style.opacity === "1" ? "0" : "1";


  });

  btnTwo.addEventListener("click", (e) => {
    e.stopPropagation();


    menuBar.style.opacity = "0";

    // toggle this one
    menuBarTwo.style.opacity =
      menuBarTwo.style.opacity === "1" ? "0" : "1";
  });

  // click anywhere else → close both
  document.addEventListener("click", () => {
    menuBar.style.opacity = "0";
    menuBarTwo.style.opacity = "0";
  });

  menuBar.addEventListener("click", (e) => e.stopPropagation());
  menuBarTwo.addEventListener("click", (e) => e.stopPropagation());


const bannerBtnOne = document.getElementById("bannerBtn1");
const bannerBtnTwo = document.getElementById("bannerBtn2");

const bannerImg = document.querySelector(".banner");

const imgoneURL =
  "https://i0.wp.com/excellentleathershop.com/wp-content/uploads/2025/04/Mens-Leather-jacket-Banner-For-ELS.webp";

const imgtwoURL =
  "https://excellentleathershop.com/wp-content/uploads/2024/07/women-leather-jacket-banner.jpg";

// default image on load
bannerImg.src = imgoneURL;

bannerBtnOne.addEventListener("click", () => {
  if (bannerImg.src !== imgoneURL) {
    bannerImg.src = imgoneURL;
  }
});

bannerBtnTwo.addEventListener("click", () => {
  if (bannerImg.src !== imgtwoURL) {
    bannerImg.src = imgtwoURL;
  }
});


});

