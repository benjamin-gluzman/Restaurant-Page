import restaurant from "../assets/restaurant.jpg"

function loadPage() {
    const restName = document.createElement("h1");
    restName.textContent = "Floating Restaurant";

    const headline = document.createElement("h2");
    headline.textContent = "Number #1 Rated Restaurant of 2026";

    const restImg = document.createElement("img");
    restImg.src = restaurant;

    const info = document.createElement("p");
    info.textContent = `A seamless blend of innovation, atmosphere, and unforgettable experience. Gently drifting on the water, 
            it turns every meal into an event, where shimmering reflections and open horizons elevate even the simplest 
            dish into something extraordinary. The setting alone feels like an escape from the ordinary, 
            but it’s the harmony of thoughtful design, impeccable service, and inspired cuisine that truly sets it apart. 
            Dining there isn’t just about eating; it’s about savoring a moment suspended between sky and water, 
            where time slows down and everything feels a little more special.`;

    const nodes = [restName, headline, restImg, info];
    nodes.forEach(node => document.body.appendChild(node));
}

export {loadPage};