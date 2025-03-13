const quotes = [
    "a native Discord client",
    "made in C# using Windows Forms",
    "fully open-source on GitHub",
    "not a memory leaking application",
    "not a web-application"
];

const images = [
    "w10.png", // Windows 10
    "w8.png", // Windows 8.1
    "w7.png"  // Windows 7
];

const updateContent = (element, contentArray, fadeClass, intervalDuration) => {
    let index = 0;

    function update() {
        element.classList.add("fade-out");

        setTimeout(() => {
            element.textContent = contentArray[index];

            if (element.tagName.toLowerCase() === 'img') {
                element.src = contentArray[index];
            }

            element.classList.remove("fade-out");
            element.classList.add("fade-in");

            setTimeout(() => {
                element.classList.remove("fade-in");
            }, 500);

            index = (index + 1) % contentArray.length;
        }, 500);
    }

    setInterval(update, intervalDuration);
    update();
};

const quoteElement = document.querySelector(".quotes");
const imageElement = document.querySelector(".naticord-login-image");

updateContent(quoteElement, quotes, "fade", 3000); 
updateContent(imageElement, images, "fade", 3000); 