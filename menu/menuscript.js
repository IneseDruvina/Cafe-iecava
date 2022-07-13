//menu list filter
const btns = document.querySelectorAll(".btn");
const storeProduct = document.querySelectorAll(".filterDiv");

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter =e.target.dataset.filter;
    storeProduct.forEach((product) => {
      if(filter == "all") {
        product.style.display = "block"
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = "block"
        } else {
          product.style.display = "none"
        }
      }
    })
  })
}

//menu list active
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.myBtnContainer');
const sectBtn = document.querySelectorAll('.btn');
const allSections = document.querySelector('.menu');

for(let i = 0; i < sectBtn.length; i++){
  sectBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.active');
      currentBtn[0].className = currentBtn[0].className.replace('active', '');
      this.className += ' active';
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

//menu img list filter
const storeImg = document.querySelectorAll(".mySlides");
const ibtns = document.querySelectorAll(".ibtn");

for (i = 0; i < ibtns.length; i++) {
  ibtns[i].addEventListener("click", (e) => {
    e.preventDefault();
    const filter =e.target.dataset.filter;
    storeImg.forEach((product) => {
      if(filter == "all") {
        product.style.display = "inline"
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = "inline"
        } else {
          product.style.display = "none"
        }
      }
    })
  })
}

//close image

const imgCont = document.querySelectorAll(".mySlides");
const closeBtn = document.querySelectorAll(".clsbtn");

for (i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    imgCont.forEach((product) => {
          product.style.display = "none"
        }
    )
  })
}
