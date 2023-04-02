const el = document.querySelector("#page");

/* code el.querySelector("img") to look for img elements that are children of the elements with ID #page */

const link = el.querySelector("img") ;

function setColor() {
    const input = document.querySelectorAll("input")[0];
    el.style.color = input.value;

}
/* now we can type any colour value (hex or name) in the colour input of the page and it will change the colour of the p text in the square.*/


function setLink (){
    const input = document.querySelectorAll("input")[1];
    link.setAttribute("src", input.value);
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

/* now we use the method .add with Monospace */
}
function addMonospace() {
    el.classList.add("gray-text","mono");

}

/* now we use the method .remove with Format */
function removeFormat() {
    el.classList.remove("underline", "bold", "italic", "gray-text", "mono", "impact");
}


/*New JS from the new Branch */
function toggleImpact() {
    el.classList.toggle("impact");
}