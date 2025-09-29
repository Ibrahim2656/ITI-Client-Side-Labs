// 1. Open a new window and close after 3s
function openAndCloseWindow() {
  var win = window.open("https://example.com", "_blank", "width=400,height=300");
  setTimeout(function () {
    win.close();
  }, 3000);
}

// 2. Show user agent
function showUserAgent() {
  alert(navigator.userAgent);
}

// 3. Detect online/offline
function checkOnlineStatus() {
  if (navigator.onLine) {
    console.log("Browser is online");
  } else {
    console.log("Browser is offline");
  }
}

// 4. Reload after 5s
function reloadPage() {
  setTimeout(function () {
    location.reload();
  }, 5000);
}

// 5. Location info
function logLocationInfo() {
  console.log("URL:", location.href);
  console.log("Protocol:", location.protocol);
  console.log("Hostname:", location.hostname);
}

// 6. History navigation
function historyNav() {
  history.back();
  history.forward();
}

// 7. Screen width & height (using children)
function showScreenSize() {
  var block = document.body.children[6]; 
  var infoDiv = block.children[1];       
  infoDiv.innerHTML = "Width: " + screen.width + ", Height: " + screen.height;
}

// 8. Change hyperlink text with cancel
var linkTimeout;
function changeLink() {
  var block = document.body.children[8];    
  var link  = block.children[1];         
  linkTimeout = setTimeout(function () {
    link.textContent = "OpenAI";
    link.href = "https://openai.com";
  }, 2000);
}
function cancelChange() {
  clearTimeout(linkTimeout);
}


// 9. Update title every second
var titleInterval;
function startTitleClock() {
  titleInterval = setInterval(function () {
    document.title = new Date().toLocaleTimeString();
  }, 1000);
}
function stopTitleClock() {
  clearInterval(titleInterval);
}

// 10. Confirm dialog
function askConfirm() {
  var choice = confirm("Do you want to continue?");
  if (choice) {
    console.log("user said yes");
  } else {
    console.log("user said no");
  }
}
