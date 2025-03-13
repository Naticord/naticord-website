const quotes = [
    "a native Discord client",
    "made in C# using Windows Forms",
    "fully open-source on GitHub",
    "not a memory leaking application",
    "not a web-application"
];

const images = [
    "https://github.com/user-attachments/assets/678a30e7-45f9-449e-8a0c-c3498ef86bf0", // Windows 10
    "https://github.com/user-attachments/assets/989b8a70-332d-447f-9f16-bd69cd651659", // Windows 8.1
    "https://github.com/user-attachments/assets/6fe3fe8d-adcb-4979-b574-110ea36b3742"  // Windows 7
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
updateContent(imageElement, images, "fade", 4500); 