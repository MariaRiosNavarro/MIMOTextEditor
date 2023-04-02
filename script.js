const el = document.querySelector("#page");
function setColor() {
    const input = document.querySelectorAll("input")[0];
    el.style.color = input.value;

}
/* now we can type any colour value (hex or name) in the colour input of the page and it will change the colour of the p text in the square.*/


function setLink (){
    const input = document.querySelectorAll("input")[1];
    setLink.setAttribute("src", input.value);
}


/*we want the buttons to add or remove a style with just one press. We´ll use classList.toggle()to do that. First with underline*/

function toggleUnderline() {
    el.classList.toggle("underline");
}


function toggleBold() {
    el.classList.toggle("bold");
}
function toggleItalic() {
    el.classList.toggle("italic");
}
function addMonospace() {
    el.classList.add("gray-text","mono");

}
function removeFormat() {}