// 11
function q11() {
  var ul = document.body.getElementsByTagName("ul")[0];
  console.log("childNodes:", ul.childNodes);
  console.log("children:", ul.children);     
}

// 12
function q12() {
  var kids = document.body.children;
  for (var i = 0; i < kids.length; i++) {
    console.log(kids[i].tagName);
  }
}

// 13
function q13(btn) {
  var block = btn.parentNode;
  var nodes = block.childNodes;
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeType === 1) {
      console.log(nodes[i].tagName);
    }
  }
}

// 14
function q14(btn) {
  var container = btn.parentNode.children[1]; 
  console.log("firstChild:", container.firstChild); 
  console.log("firstElementChild:", container.firstElementChild);
  
}

// 15
function q15(btn) {
  var ul = btn.parentNode.children[1];
  var items = ul.children;
  for (var i = 0; i < items.length; i++) {
    console.log(items[i].tagName);
  }
  
}

// 17
function q17(btn) {
  var parent = btn.parentNode.children[1];
  var elem = parent.children[1]; 
  var kids = parent.children;
  for (var i = 0; i < kids.length; i++) {
    if (kids[i] !== elem) {
      console.log(kids[i].tagName);
    }
  }
}

// 18
function q18(btn) {
  var ul = btn.parentNode.children[1];

  // nextSibling
  var n = ul.firstChild;
  while (n) {
    console.log("nextSibling:", n);
    n = n.nextSibling;
  }

  // nextElementSibling
  var e = ul.firstElementChild;
  while (e) {
    console.log("nextElementSibling:", e);
    e = e.nextElementSibling;
  }
}

// 19
function q19(btn) {
  var container = btn.parentNode.children[1];
  var count = 0;
  var child = container.firstChild;
  while (child) {
    if (child.nodeType === 1) count++;
    child = child.nextSibling;
  }
  console.log("Element children count:", count);
}

// 20
function q20() {
  var form = document.forms[0];
  for (var i = 0; i < form.elements.length; i++) {
    var el = form.elements[i];
    console.log(el.name + ": " + el.value);
  }
}

// 21
function q21() {
  for (var i = 0; i < document.forms.length; i++) {
    console.log(document.forms[i].name);
  }
}

// 22
function q22() {
  for (var i = 0; i < document.images.length; i++) {
    console.log(document.images[i].src);
  }
}

// 23
function q23() {
  var form = document.forms["disableForm"];
  var elems = form.elements;
  for (var i = 0; i < elems.length; i++) {
    elems[i].disabled = true;
  }
}

// 24
function q24() {
  var imgs = Array.prototype.slice.call(document.images);
  var filtered = imgs.filter(function(img) {
    return img.width > 100;
  });
  console.log("Filtered images:", filtered);
}
