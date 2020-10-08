let element = document.getElementsByName("cssProperty");

let div = document.querySelector("#modify");

function set() {

  for (let index = 0; index < element.length; index++) {
    let cssProperty = element[index].getAttribute("id");

    cssValue = element[index].value;
    console.log(cssProperty, cssValue);


    div.style[cssProperty] = cssValue;
  }
}

document.querySelector("#set").addEventListener("click", set);

