const reasons = [
     {
        title: "Enjoy on your TV",
        description:
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        image: "./assets/tv.png"
    },

    {
        title: "Download your shows to watch offline",
        description:
            "Save your favourites easily and always have something to watch.",
        image: "./assets/download.png"
    },

    {
        title: "Watch everywhere",
        description:
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        image: "./assets/telescope.png"
    },

    {
        title: "Create profiles for kids",
        description:
            "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
        image: "./assets/kids.png"
    }
];
function cretaeReasonCard(reason){
    const card = document.createElement("div");
    card.className = "reason-card";
    const title = document.createElement("h3");
    title.textContent = reason.title;
    const description = document.createElement("p");
    description.textContent = reason.description;

    const image = document.createElement()
    image.src = reason.image;
    image.alt = reason.title;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(image);
    return card;
}

export function renderReasons(){
    const reasonContainer = document.querySelector("#reasons-container");

    reasons.forEach((reason)=>{
        const card = cretaeReasonCard(reason);
        reasonContainer.appendChild(card);
    });
}

