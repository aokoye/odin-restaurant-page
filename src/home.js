const data = {
    title: 'CoffeeCha', 
    body: 'CoffeeCha is a coffee and bubble tea shop. We buy our coffee beans from local roasters who work carefully with the farms they buy their raw beans from. We import our tea directly from China and Japan and make are boba by scratch in house multiple times a day.'
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