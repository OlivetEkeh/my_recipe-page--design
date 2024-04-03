document.addEventListener("DOMContentLoaded", function() {
  let omelette = document.querySelector("img");

  omelette.onclick = () => {
    let imgsrc = omelette.getAttribute("src");

    if (imgsrc === "/assets/images/image-omelette.jpeg") {
      omelette.setAttribute("src", "/assets/images/omelette2.jpg");
    } else if (imgsrc === "/assets/images/omelette2.jpg") {
      omelette.setAttribute("src", "/assets/images/omelette3.jpg");
    } else if (imgsrc === "/assets/images/omelette3.jpg") {
      omelette.setAttribute("src", "/assets/images/omelette4.jpg");
    } else {
      omelette.setAttribute("src", "/assets/images/image-omelette.jpeg");
    }
  }
});
