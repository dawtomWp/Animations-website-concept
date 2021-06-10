
 var rule = CSSRulePlugin.getRule(".about__img:before"); //get the rule
 TweenLite.to(rule, 3, {cssRule:{background:"#0000FF"}});
 
 
 gsap.from('.mainTitle, .mainTitle span',  {
   // left: '50%', 
    x:-400,
    color:'white',  
    backgroundColor:'transparent',
    delay:1.5,
    duration: 1,
  });
  gsap.to('.mainTitle', {
    x: 1400, 
    duration: 1,
    delay:1.5
  });
  gsap.to('.mainTitle', {
    y:-150,
    delay:2
  });
  gsap.to('.mainTitle', {
    x: 0, 
    y:-150,
    duration: 1,
    delay:3.7,
    zIndex:10
  });

  
  gsap.from('.mainQuote', {
    y: 500, 
    delay:4.5,
  });
  gsap.to('.mainQuote', {
    y: 0, 
    opacity:1,
    delay:4.5,
    duration: 1,
    zIndex:10
  });

  gsap.to('.header__scrollButton', {
    y: 0, 
    opacity:1,
    delay:5.2,
    duration: 1,
    zIndex:10
  });


  gsap.to('.hamburger', {
    opacity:1,
    delay:5.2,
    duration: 1,
  });
  

//SET FOR ABOUT SECTYIONS ANIMATION
  gsap.set('.about__img', {
    x: 300,
    delay:1,
   })
   gsap.set('.about__info',  {
    x: -400,
    delay:1.5,
    opacity:0,
   
   })
   gsap.set('.shapeGray',{
     rotate:0
   })




// ABOUT SECTION ANIMATION WHEN SCROLL
function aboutAnim () {
const aboutSection = document.getElementById('AboutUs')
const executeAboutAnims = () => {
   gsap.to('.about__img', {
     x: 0,
     delay:1,
     opacity:1,
     duration:1,
    })
  gsap.to('.about__info', {
    delay:1.5,
    duration:1,
    x: 0,
    opacity:1,
 
   })
   gsap.to('.shapeGray',{
    rotate:25,
    delay:4
  })


}
const aboutUsListener =()=>{
  const about = document.getElementById('AboutUs')
  const wh = window.innerHeight -50
  const scrollPos = window.scrollY
  if(scrollPos > about.offsetTop - wh) {
    executeAboutAnims()
    window.removeEventListener('scroll', aboutUsListener)
  }
}
const startAboutAnims = () => {
  window.addEventListener('scroll', aboutUsListener)

}
startAboutAnims()
}
aboutAnim()


// SET FOR PRODUCT SECTIONS ANIM
if(window.innerWidth > 768) {
  gsap.set('.products__card', {
    left: '50%', 
    top:'-50%',
    xPercent:-50,
    pointerEvents: "none",
    yPercent: -50,
    scale:1.5
  });
} else {
  gsap.set('.products__card', {
    left: '50%', 
    top:'50%',
    xPercent:-50,
    pointerEvents: "none",
    yPercent: 50,
    scale:1.5
  });
}
gsap.set('#Product2', {
  left: '-50%', 
  top: '50%',
  pointerEvents: "none",
  xPercent: 50,
  yPercent: -50,
});
gsap.set('.products__title', {
  x:-1200,
})
gsap.set('.products__desc', {
  x:1700,
})
gsap.set('.products__buttonOne, .products__buttonTwo', {
  opacity:0,

})

// PRODUCTS SECTION ANIMATION
function productsAnim () {
  const productsSection = document.getElementById('Products');
  const executeProductsAnims = () => {
    gsap.to('.products__card', {
      left:'0',
      xPercent:0,
      yPercent:0,
      delay:2,
      
    });
    gsap.to('.products__card', {
      scale:1,
      delay:3,
      pointerEvents: "initial",
      
    });
    gsap.to('.products__title , .products__desc', {
      x:0,
      delay:4
    })
    gsap.to('.products__buttonTwo', {
      opacity:1,
      delay:2,
    })
    gsap.to('.products__buttonOne', {
      opacity:1,
      delay:3
    })

  }
  const productsListener = () => {
    const products = document.getElementById('Products')
    const wh = window.innerHeight -50
    const scrollPos = window.scrollY
    if(scrollPos > products.offsetTop - wh) {
      executeProductsAnims()
      window.removeEventListener('scroll', productsListener)
    }
  }
  const startProductsAnims = () => {
    window.addEventListener('scroll', productsListener)
  }
  startProductsAnims()
}
productsAnim();


window.addEventListener('scroll',()=>{
  console.log(window.scrollY)
})



gsap.set(".newsletter__title",{
  opacity:0,
  x:1500
})
gsap.set(".newsletter__desc",{
  opacity:0,
  x:-1500
})
gsap.set(".newsletter__register",{
  opacity:0,
})
function showit() {
    var tl = new TimelineLite();
    //wt.show();
    const executeNewsAnims = () => {
    tl.to('#word1', 2, {autoAlpha:1});
    tl.to('#word1', .6, {autoAlpha:0});
    tl.to('#word2', .6, {autoAlpha:1});
    tl.to('#word2', .6, {autoAlpha:0});
    tl.to('#word3', .6, {autoAlpha:1});
    tl.to('#word3', .6, {autoAlpha:0});

    gsap.to(".newsletter__title",{
      opacity:1,
      x:0,
      delay:5
    })
    gsap.to(".newsletter__desc",{
      opacity:1,
      x:0,
      delay:5.5
    })

    gsap.to(".newsletter__register",{
      opacity:1,
      delay:6.5
    })
  }
  
    const newsListener = () => {
      const news = document.getElementById('Newsletter')
      const wh = window.innerHeight -50
      const scrollPos = window.scrollY
      if(scrollPos > 2200) {
        executeNewsAnims()
        window.removeEventListener('scroll', newsListener)
      }
    }
    const startNewsAnims = () => {
      window.addEventListener('scroll', newsListener)
    }
    startNewsAnims()  
} 
showit()