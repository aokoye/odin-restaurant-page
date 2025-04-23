const data = {
    title: 'CoffeeCha', 
    body: 'CoffeeCha is a coffee and bubble tea shop. We buy our coffee beans from local roasters who work carefully with the farms they buy their raw beans from. We import our tea directly from China and Japan and make are boba by scratch in house multiple times a day.',
    custom: 'We believe strongly in being able to cater to many food needs. To this end we do not charge extra for non-dairy and lactose free milks. Additionally we use separate cups and utensils for drinks that are dairy free. Additionally all of our bubble tea toppings are vegan and soy free.'
}

export const renderPage = () => {
    const masthead = document.createElement('div');
    masthead.classList.add('masthead');
    const titleNode = document.createElement('h2');
    titleNode.textContent = data.title;
    const aboutNode = document.createElement('p')
    aboutNode.textContent = data.body;

    masthead.appendChild(titleNode);
    masthead.appendChild(aboutNode);
    
    return masthead
    // return document.getElementById("content").innerHTML = masthead.innerHTML
} 