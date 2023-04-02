const el = document.querySelector("#page");
function setColor() {
    const input = document.querySelectorAll("input")[0];
    el.style.color = input.value;

}
/* now we can type any colour value (hex or name) in the colour input of the page and it will change the colour of the p text in the square.*/
