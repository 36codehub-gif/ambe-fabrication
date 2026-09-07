/* ================================
   MOBILE MENU
================================ */

const menuBtn =
document.getElementById("menuBtn");

const navMenu =
document.getElementById("navMenu");

if(menuBtn){

  menuBtn.addEventListener("click",function(){

    navMenu.classList.toggle("show");

  });

}


/* ================================
   CLOSE MOBILE MENU
================================ */

document
.querySelectorAll(".nav-menu a")
.forEach(function(link){

  link.addEventListener("click",function(){

    if(navMenu){
      navMenu.classList.remove("show");
    }

  });

});


/* ================================
   CURRENT YEAR
================================ */

const year =
document.getElementById("year");

if(year){

  year.textContent =
  new Date().getFullYear();

}


/* ================================
   MAIN IMAGE UPLOAD
================================ */

const imageUpload =
document.getElementById("imageUpload");

const mainImage =
document.getElementById("mainImage");

if(imageUpload && mainImage){

  imageUpload.addEventListener(
    "change",
    function(event){

      const file =
      event.target.files[0];

      if(!file) return;

      const imageURL =
      URL.createObjectURL(file);

      mainImage.src =
      imageURL;

    }
  );

}


/* ================================
   3D HERO MOUSE EFFECT
================================ */

const heroCard =
document.getElementById("heroCard");

if(heroCard){

  heroCard.addEventListener(
    "mousemove",
    function(event){

      if(window.innerWidth < 850){
        return;
      }

      const rect =
      heroCard.getBoundingClientRect();

      const x =
      (event.clientX - rect.left)
      / rect.width - 0.5;

      const y =
      (event.clientY - rect.top)
      / rect.height - 0.5;

      heroCard.style.transform =

      `
      rotateX(${y * -5}deg)
      rotateY(${x * 7}deg)
      `;

    }
  );


  heroCard.addEventListener(
    "mouseleave",
    function(){

      heroCard.style.transform = "";

    }
  );

}


/* ================================
   CONSOLE
================================ */

console.log(
"Ambe Engineering & Fabrication Website Loaded"
);
