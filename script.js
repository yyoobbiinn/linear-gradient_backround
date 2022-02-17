const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  const button = document.querySelector("button");
  const range = document.querySelector("#range");
  let color1 = 0;
  let color2 = 0;
  
  function addStyle() {
    document.body.style.background = `linear-gradient(${range.value}turn,${color1},${color2})`;
  }

  function changeBgColor() {
    color1 = colors[Math.floor(Math.random() * colors.length)];
    color2 = colors[Math.floor(Math.random() * colors.length)];
    addStyle();
  }
  
  button.addEventListener("click", changeBgColor);