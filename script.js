//nav bar menu list hide and show
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-250px";
}

//menu list active
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

for(let i = 0; i < sectBtn.length; i++){
  sectBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.control-active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('control-active-btn', '');
      this.className += ' control-active-btn';
  })
}

///Sections Active class
allSections.addEventListener('click', (e) =>{
  const id = e.target.dataset.id;
  if(id){
      //remove selected from the other button
      sectBtns.forEach((btn) =>{
          btn.classList.remove('active')
      })
      e.target.classList.add('active')

      //hide other sections
      sections.forEach((section)=>{
          section.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active');
  }
})

//transition animation//

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[2].classList.add("fadeInRight");         
        } 
    })
})

observer.observe(document.querySelector(".food-row"));

window.addEventListener('scroll', reveal);

function reveal (){
var reveals = document.querySelectorAll('.reveal');

for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
    }
    else{
        reveals[i].classList.remove('active');
    }
}
}
