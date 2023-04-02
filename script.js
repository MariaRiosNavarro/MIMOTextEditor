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


const selectElement = document.querySelector("#changeImage");

selectElement.addEventListener('change', function(){
    link.src = this.value;
})

/** es gibt viele Ereignisse, die man mit der .addEventListener() Methode abfangen kann. 
 Hier sind einige der wichtigsten Ereignisse, die oft verwendet werden:
'click': tritt auf, wenn das Element mit der Maus geklickt wird
'mouseover': tritt auf, wenn die Maus über das Element bewegt wird
'mouseout': tritt auf, wenn die Maus das Element verlässt
'keydown': tritt auf, wenn eine Taste auf der Tastatur gedrückt wird
'keyup': tritt auf, wenn eine Taste auf der Tastatur losgelassen wird
'submit': tritt auf, wenn ein Formular abgeschickt wird
'change': tritt auf, wenn der Wert eines Formularelements geändert wird (z.B. durch Auswahl eines neuen Elements in einem Dropdown-Menü oder durch Aktivieren eines Kontrollkästchens)
'resize': tritt auf, wenn das Fenster oder das Element selbst in der Größe geändert wird
'scroll': tritt auf, wenn der Benutzer auf einer Webseite scrollt
'contextmenu': tritt auf, wenn der Benutzer mit der rechten Maustaste auf das Element klickt
Es gibt noch viele weitere Ereignisse, die abgefangen werden können. 
Eine vollständige Liste der Ereignisse findest du 
in der offiziellen Dokumentation von Mozilla: https://developer.mozilla.org/en-US/docs/Web/Events */

