

window.addEventListener('load', () => {

    let inputName = document.querySelector('.input-name');
    let inputMessage = document.querySelector('.input-message');

    let chatList = document.querySelector('.mychat')
    let form = document.querySelector('.form');
    var video = document.getElementById('video-1');

    
    video.onpause = function () {
        form.style.display = 'none';
        chatList.style.display = 'none';
    }

    video.onplaying = function () {
        form.style.display = 'flex';
        chatList.style.display = 'block';
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let newUserName = inputName.value;
        let newUserText = inputMessage.value;

        let newChatItem = document.createElement('li');
        newChatItem.className = "mychat__item";

        newChatItem.innerHTML =
            `
             <p class = "mychat__name"> ${newUserName} </p>
             <div class = "mychat__message"> ${newUserText} </div>
                `;

        chatList.append(newChatItem);
        localStorage.setItem('new-list', chatList.innerHTML);
        chatList.innerHTML = localStorage.getItem('new-list');
    });


    if (localStorage.getItem('new-list') !== 0) {
        chatList.innerHTML = localStorage.getItem('new-list');
    }
});
