// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.
var firstDiv = document.getElementsByTagName("div")[0];
console.log(firstDiv.innerHTML);
// 2. Using getElementById change the text of #my-p to "Hello DOM".
document.getElementById("my-p").innerHTML = "Hello DOM";
// 3. Use querySelector to select the element with class "target-div" and log its nodeName.
var targetDiv = document.querySelector(".target-div")
console.log(targetDiv.nodeName)
// 4. Use querySelectorAll to count how many <div> elements exist; log the count.
var divCount = document.querySelectorAll("div")
console.log(divCount.length)
// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".
var email = document.getElementsByName("user-email")[0]
email.value = "user@test.com"
console.log(email.value)
// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.
var textInput = document.querySelector("input[type='text']")
if (!textInput.hasAttribute("name")) {
    textInput.setAttribute("name", "user-name")
}
console.log(textInput)
// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).
document.getElementById("my-p").append(" - UPDATED")
// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.
// Images for the slider
var images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1025/600/300"
];
var index = 0;
var slider = document.getElementById("slider");
var intervalid = null;

function showImage(i) {
    index = (i + images.length) % images.length;
    slider.src = images[index]
}
function next() {
    showImage(index + 1);
}
function prev() {
    showImage(index - 1);
}
function startAuto() {
    stopAuto();
    intervalid = setInterval(next, 1000);
}
function stopAuto() {
    if (intervalid !== null) {
        clearInterval(intervalid)
    }
    intervalid = null;
}
document.getElementById("nextBtn").onclick = next;
document.getElementById("prevBtn").onclick = prev;
document.getElementById("startBtn").onclick = startAuto;
document.getElementById("stopBtn").onclick = stopAuto;

// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.
var textInput = document.querySelector("input[type='text']")
textInput.setAttribute("placeholder", "Type your full name")
// 10. Log whether the email input has attribute "required"; if missing add it.
var emailInput = document.querySelector("input[type='email']")
if (!emailInput.hasAttribute('required')) {
    emailInput.setAttribute('required', 'required')
}
console.log(emailInput.hasAttribute('required'))
// 11. Write function getSelectedValue(selectId) returning the current selected option value.
function getSelectedValue(selectId) {
    return document.getElementById(selectId).value
}
console.log(getSelectedValue('my-select'))
// 12. Loop through all options of the select and log each option's text and value.
var select = document.getElementById('my-select');
var options = select.options;

for (var i = 0; i < options.length; i++) {
    console.log("Text: " + options[i].text + ", Value: " + options[i].value);
}
// 13. Programmatically select the option with value "EG".
var select = document.getElementById('my-select');
var options = select.options;
for (var i = 0; i < options.length; i++) {
    if (options[i].value == 'EG') {
        options[i].selected = true;
        break;
    }
}
// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.
function selectByText(selectId, text) {
    var select = document.getElementById('my-select')
    var options = select.options
    for (var i = 0; i < options.length; i++) {
        if (options[i].text === text) {
            select.selectedIndex = i;
            break;
        }
    }
}
// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).
document.getElementById('div-2').innerHTML = "<p><b>Bold Text</b></p>";

// 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).
var div2 = document.getElementById('div-2')
div2.classList.add("class-a", "class-b");
div2.classList.remove("class-b")

// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.
var div2 = document.getElementById("div-2")
div2.classList.toggle("hidden")
div2.classList.toggle('hidden')
// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.
function insertAfter(refNode, newNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
}
// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.
var newDiv = document.createElement('div');
newDiv.innerHTML = "Dynamic Box";
newDiv.style.backgroundColor = "yellow";
document.getElementById('div-2').appendChild(newDiv)
// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
var newP = document.createElement("p")
newP.innerHTML = "new pargraph"
var target = document.getElementById("div-2")
target.insertBefore(newP, target.firstChild);
// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.
var target = document.getElementById("div-2");
target.insertAdjacentHTML("afterend", "<span>AFTER END</span>")
// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.
var form = document.forms[0]
form.onsubmit = function (event) {
    event.preventDefault();
    var textVal = document.getElementById('my-input').value;
    var emailVal = document.getElementById('my-email').value;
    var selectVal = document.getElementById('my-select').value;

    console.log("Text:", textVal)
    console.log("Email:", emailVal)
    console.log("Country:", selectVal)
}

// 23. Add input event on the text input that logs its length whenever it changes.
var textInput = document.getElementById('my-input')
textInput.oninput = function () {
    var length = textInput.value.length;
    console.log("Length:", length)
}
// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).
function validateEmailSimple(value) {
    return value.indexOf('@') !== -1 && value.indexOf('.') !== -1
}
console.log(validateEmailSimple("user@example.com"));   // true
console.log(validateEmailSimple("hello.world@mail.co"));// true
console.log(validateEmailSimple("username.com"));       // false (missing @)
console.log(validateEmailSimple("user@domain"));        // false (missing .)
// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).
var tempDiv = document.createElement('div')
tempDiv.innerHTML = 'Temporary Element'

var parent = document.getElementById('div-2')
parent.appendChild(tempDiv)
parent.removeChild(tempDiv)

// 25. Create an element, append it to <div id="wrapper">
//   <p id="first">First</p>
//   <p id="second">Second</p>
// </div>
var newEl = document.createElement('p');
newEl.innerHTML = 'Temp pargraph'
var wrapper = document.getElementById('wrapper')
wrapper.appendChild(newEl)
wrapper.removeChild(newEl)

// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.
var original = document.getElementById('div-2')
var clone = original.cloneNode(true);
clone.id = 'div-2-clone'
original.parentNode.insertBefore(clone, original.nextSibling);
// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.

function highlightInputs(form) {
    var inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        var type = inputs[i].type;
        if (type === "text" || type === "email") {
            inputs[i].style.border = "2px solid green";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var myForm = document.forms[0];
    highlightInputs(myForm);
});

// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.
function buildCard(title, content) {
    var card = document.createElement('div');
    card.className = 'card';
    card.style.border = '10px solid #ccc';
    card.style.padding = '10px';
    card.style.margin = '10px 0';

    var h3 = document.createElement('h3');
    h3.innerText = title;
    var p = document.createElement('p');
    p.innerHTML = content;
    card.appendChild(h3);
    card.appendChild(p);
    return card
}
document.body.appendChild(buildCard("Card One", "This is first card"));
document.body.appendChild(buildCard("Card Two", "This is second card"));
// 29. Add delegated click listener on body logging when a .card is clicked.
document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains('card')) {
        console.log('Card clicked', event.target.querySelector('h3').innerHTML)
    }
})
// 30. Reflection (comment): Which two tasks were most challenging and why?

// 1) Task 8 (Image slider): because it involved combining multiple functions (next, prev, 
//    start, stop) and handling setInterval/clearInterval correctly to avoid bugs.
// 2) Task 28 (Build card function): because it required dynamically creating several 
//    elements, adding classes/styles, and nesting them properly before appending.

// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-
var ul = document.createElement('ul')
for (var i = 1; i <= 10; i++) {
    var li = document.createElement('li')
    li.innerText = "Item" + i;
    if (i % 2 == 0) {
        li.className = 'even'
    }
    else {
        li.className = 'odd'
    }
    ul.appendChild(li)
}
document.body.appendChild(ul);

// 33. form (3 inputs [name , email, country]) when i do sumbit , it will reflect the value in annother place in the page
document.forms[0].addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('my-input').value;
    var email = document.getElementById('my-email').value;
    var country = document.getElementById('my-select').value;

    var outDiv = document.getElementById('form-output')
    outDiv.innerHTML =
        "<h3>Submitted Info:</h3>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Country:</strong> " + country + "</p>";
})