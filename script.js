// script.js

let socket = io(); 

// Listen for events
socket.on('bot_response', addBotMessage)  

// Send message event
sendBtn.addEventListener('click', sendMessage)

function sendMessage() {

  socket.emit('chat_message', input.value);
  
  addUserMessage(input.value);
  input.value = '';

}

// Add messages 
function addUserMessage(msg) {

  chatMessages.innerHTML += `<div class="user">${msg}</div>`
}

function addBotMessage(msg) {

  chatMessages.innerHTML += `<div class="bot">${msg}</div>`
}