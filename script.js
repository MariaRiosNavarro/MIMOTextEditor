const el = document.querySelector("#page");
function setColor() {
    const input = document.querySelectorAll("input")[0];
    el.style.color = input.value;

}