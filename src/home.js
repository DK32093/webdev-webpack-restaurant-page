export function home() {
    const content = document.getElementById("content")
    content.innerHTML = ""
    content.style.backgroundImage = 'none'
    const titleCard = document.createElement("div")
    titleCard.setAttribute("class", "titleCard")
    const restName = document.createElement("h1")
    restName.innerText = "Natasha's Bistro"
    const intro = document.createElement("h2")
    intro.innerText = "Welcome to Natasha's fantastic restaurant where she makes amazing and wonderful food for everyone!"
    titleCard.append(restName, intro)
    const homeGridContainer = document.createElement("div")
    homeGridContainer.setAttribute("class", "homeGridContainer")
    for (let i = 1; i < 5; i++) {
        const homeCard = document.createElement("div")
        homeCard.setAttribute("class", "homeCard")
        if (i % 2 === 0) {
            homeCard.style.backgroundImage = 'url(https://webstockreview.net/images/burrito-clipart-11.png)'
            homeCard.style.backgroundSize = "cover"
            homeCard.style.border = "solid 2px black"
        } else {
            homeCard.style.display = "block";
            homeCard.innerText = "Check out our new menu item!"
        }
        homeGridContainer.append(homeCard)
    }
    content.append(titleCard, homeGridContainer)
};
