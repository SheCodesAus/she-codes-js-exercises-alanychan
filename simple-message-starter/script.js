window.onload = function(){
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");

    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    
    speechBubbleElement.appendChild(messageBox);

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
};

function showMessage(){
    let message = document.getElementById("message-text").value;
    let message2 = document.getElementById("message-text2").value;
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = message + ' ' + message2;
}