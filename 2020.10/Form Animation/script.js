function animatedForm () {
  const arrows = document.querySelectorAll('.fa-arrow-down');

  arrows.forEach((arrow)=>{
    arrow.addEventListener('click',()=>{
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;
      
      //Check form validation
      if(input.type === "text" && validateUser(input)) {
        nextSlide(parent,nextForm);
      }else if (input.type === 'email' && validateEmail(input)) {
        nextSlide(parent,nextForm);
      }else if (input.type === 'password' && validateUser(input)) {
        nextSlide(parent,nextForm);
      }else {
        parent.style.animation = 'shake .3s ease';
      }

      parent.addEventListener('animationend',()=>{
        parent.style.animation = '';
      })
    })
  })
}

//에러 구분 함수
function validateUser(user) {
  if(user.value.length < 6) {
    error('rgb(189,87,87)');
  } else {
    error('rgb(87,189,130)');
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(validation.test(email.value)){
    error('rgb(87,189,130)');
    return true;
  }else {
    error('rgb(189,87,87)');
  }
}
//다음 슬라이드 넘기기 함수
function nextSlide(parent,nextForm) {
  parent.classList.add('innactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
}
//배경색 전환 함수
function error(choice) {
  document.body.style.backgroundColor = choice;
}

animatedForm();