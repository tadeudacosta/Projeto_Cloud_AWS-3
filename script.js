const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage;

const createChatli = (message,className) => {
    const chatLi =document.createElement("li");
    chatLi.classList.add("chat",className);
    let chatContent = className === "outgoing" ? ` <p>${message}</p>` : ` <span class="material-symbols-outlinde"></span><p>${message}</p>`;
}

const handlechat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return ;

    createChatli(userMessage,"outgoing");
}

sendChatBtn.addEventListener("click",handlechat);