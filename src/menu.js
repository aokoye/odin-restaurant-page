const coffee = [
    {
        type: 'Coffee Drinks'
    },
    {
        name: 'Black Coffee',
        description: 'Coffee from roasted by one of our partners. Ask us what we\'re brewing today.',
        price: '$3.00 - $5.00'
    },
    {
        name: 'Cold Brew',
        description: 'Brewed in house over the course of 18 hours.',
        price: '$4.00 - $6.00'
    },
    {
        type: 'Espresso Drinks'
    },
    {
        name: 'Espresso',
        description: 'Two shots of espresso',
        price: '$3.50'
    },
    {
        name: 'Americano',
        description: 'Espresso diluted with hot water.',
        price: '$4.00'
    },
    {
        type: 'Espresso Drinks With Milk'
    },
    {
        name: 'Cappuccino',
        description: 'Two shots of espresso with 8 ounces of steamed milk.',
        price: '$4.50'
    },
    {
        name: 'Latte',
        description: 'Espresso with steamed milk and foam on top',
        price: '$5.50 - $6.00'
    },
    {
        name: 'Cortado',
        description: 'Half and half espresso and steamed milk',
        price: '$4.25'
    },
    {
        name: 'Mocha',
        description: 'Espresso with steamed milk, chocolate, and foam',
        price: '$6.00 - $7.00'
    }
];

const bubbleTea = {
    title: "Brown Sugar Boba"
}


export function loadMenu() {
    const cafe = document.createElement('div');
    cafe.classList.add('coffee');

    const boba = document.createElement('div');
    boba.classList.add('boba');
    const titleNode = document.createElement('h2');
    titleNode.textContent = bubbleTea.title;
    
    

    coffee.forEach((item) => {
        const typeNode = document.createElement('h1');
        typeNode.textContent = item.type;
        cafe.appendChild(typeNode);

        const nameNode = document.createElement('h2');
        nameNode.textContent = item.name;
        cafe.appendChild(nameNode);

        const coffeePrice = document.createElement('p');
        coffeePrice.classList.add('price');
        coffeePrice.textContent = item.price;
        cafe.appendChild(coffeePrice);

        const descNode = document.createElement('p')
        descNode.classList.add('discretion');
        descNode.textContent = item.description;
        cafe.appendChild(descNode);

        const product = document.createElement('div')
        cafe.appendChild(typeNode);
        product.classList.add('product')
        cafe.appendChild(product);
        product.appendChild(nameNode);
        product.appendChild(coffeePrice);
        product.appendChild(descNode);
    })


    cafe.appendChild(titleNode)
    return cafe

    // return document.getElementById("content").innerHTML = element.innerHTML
}