function login() {
  const arrows = document.querySelectorAll('.fa-arrow-right')

  arrows.forEach((arrow)=>{
    arrow.addEventListener('click',()=>{
      let input = arrow.previousElementSibling;
      let parent = arrow.parentElement;
      let nextForm = parent.nextElementSibling;
  
      if (input.type === 'text' && userColorChange(input)) {
        nextSlide(parent,nextForm);
      } if (input.type === 'password' && userColorChange(input)) {
        nextSlide(parent,nextForm);
      } if (input.type === 'email' && emailColorChange(input)) {
        nextSlide(parent,nextForm);
      }else {
        parent.style.animation = 'shake .3s ease';

      }

      parent.addEventListener('animationend',()=>{
        parent.style.animation = '';
      })
      
    })
  })
  
    //icon color change
  function errorColor() {
    document.querySelectorAll('i').forEach(function(e){
      e.classList.remove('correct');
      e.classList.add('incorrect');
    })
  }
  function noErrorColor() {
    document.querySelectorAll('i').forEach(function(e){
      e.classList.remove('incorrect');
      e.classList.add('correct');
    })
  }
  
  //user color error
  function userColorChange(input) {
    if (input.value.length < 6) {
      document.body.style.backgroundColor = 'indianred'; 
      errorColor();
    }else {
      document.body.style.backgroundColor = 'royalblue';
      noErrorColor();
      return true;
    }
  }
  //email color error
  function emailColorChange(email) {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValidation.test(email.value)) {
      document.body.style.backgroundColor = 'royalblue';
      noErrorColor();
      return true;
    }else {
      document.body.style.backgroundColor = 'indianred';
      errorColor();
    }
  }
  
  //next slide
  function nextSlide(parent,nextForm) {
    parent.classList.remove('active');
    parent.classList.add('innactive');
    nextForm.classList.add('active');
    nextForm.classList.remove('innactive');
  }

}

login();