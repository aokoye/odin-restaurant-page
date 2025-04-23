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
        price: '$4.00'
    },
    {
        name: 'Americano',
        description: 'Espresso diluted with hot water.',
        price: '$4.00'
    },
    {
        type: 'Espresso and Milk'
    },
    {
        name: 'Cappuccino',
        description: 'Two shots of espresso with 8 ounces of steamed milk.',
        price: '$4.50'
    },
    {
        name: 'Latte',
        description: 'Espresso with steamed milk and foam on top',
        price: '$5.50 - $6.50'
    },
    {
        name: 'Vanilla Latte',
        description: 'A latte with vanilla syrup.',
        price: '$6.00 - $7.00'
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
    },
    {
        type: 'Specialty Drinks'
    },
    {
        name: 'Black Sesame Latte',
        description: 'We take our signature latte and top it with black sesame foam. Note: This foam contains dairy.',
        price: '$7.00 - $8.00'
    },
    {
        name: 'Ube Latte',
        description: "A latte with house made ube syrup",
        price: '$7.00 - $8.00'
    }
];

const teas = [
    {
        type: 'Tea'
    },
    {
        name: 'Hot Tea',
        description: 'Tea from Smith Tea Makers',
        price: '$3.50'
    },
    {
        name: 'London Fog',
        description: 'Early gray mixed with steamed milk and vanilla syrup.',
        price: '$4.00 - $5.00'
    },
    {
        name: 'Matcha Latte',
        description: 'Made using matcha that we source ourselves and import directly from Kyoto.',
        price: '$6.00 - $7.00'
    },
    {
        name: 'Hojicha Latte',
        description: 'Made using hojicha that we source ourselves and import directly from Kyoto.',
        price: '$6.00 - $7.00'
    }
];

const bobaTea = [
    {
        type: 'Milk Tea',
        description: 'Milk in all of these drinks can be substituted for any of our dairy free options'
    },
    {
        name: 'Oolong Milk Tea',
        price: '$5.50'
    },
    {
        name: 'Jasmine Milk Tea',
        price: '$5.50'
    },
    {
        name: 'Thai Milk Tea',
        price: '$5.50'
    },
    {
        name: 'Taro Milk Tea',
        price: '$5.50'
    },
    {
        name: 'Assam Black Milk Tea',
        price: '$5.50'
    },
    {
        type: 'Lattes',
        description: 'Milk in all of these drinks can be substituted for any of our dairy free options'
    },
    {
        name: 'Hojicha Latte',
        price: '$6.00'
    },
    {
        name: 'Matcha Latte',
        price: '$6.00'
    },
    {
        name: 'Café Latte',
        price: '$6.00'
    },
    {
        type: 'Fruit Teas'
    },
    {
        name: 'Mango Passion Fruit Green Tea',
        price: '$5.50'
    },
    {
        name: 'Grapefruit Lemon Tea',
        price: '$5.50'
    },
    {
        name: 'Honey Citron Ginger Tea',
        price: '$5.50'
    },
    {
        name: 'Kumquat Lychee Tea',
        price: '$5.50'
    }
]

const milks = [
    {
        type: 'Milk Options',
        name: '2% Milk'
    },
    {
        name: 'Lactose Free Milk'
    },
    {
        name: 'Soy Milk'
    },
    {
        name: 'Oat Milk'
    },
    {
        name: 'Almond Milk'
    },
]

const bobaToppings = [
    {
        type: 'Toppings',
        name: 'Brown Sugar Tapioca Pearls'
    },
    {
        name: 'Lychee Jelly'
    },
    {
        name: 'Rainbow Jelly'
    },
    {
        name: 'Grass Jelly'
    },
    {
        name: 'Coffee Jelly'
    },
    {
        name: 'Egg Pudding'
    },
]


export function loadMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const cafe = document.createElement('div');
    cafe.classList.add('coffee');

    const tea = document.createElement('div');
    tea.classList.add('tea');

    const boba = document.createElement('div');
    boba.classList.add('boba');

    const milk = document.createElement('div');
    milk.classList.add('milk');

    const toppings = document.createElement('div');
    toppings.classList.add('toppings');

    const options = document.createElement('div');
    options.classList.add('options');
    

    coffee.forEach((item) => {
        const nameNode = document.createElement('h2');
        nameNode.textContent = item.name;
        cafe.appendChild(nameNode);

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;
        cafe.appendChild(price);

        const descNode = document.createElement('p')
        descNode.classList.add('description');
        descNode.textContent = item.description;
        cafe.appendChild(descNode);

        const product = document.createElement('div')
        product.classList.add('product');
        const prodPrice = document.createElement('div')
        prodPrice.classList.add('prodPrice');

        if(item.type != null) {
            const typeNode = document.createElement('h1');
            typeNode.classList.add('drinkType')
            typeNode.textContent = item.type;
            cafe.appendChild(typeNode);
            cafe.appendChild(typeNode);
        }
        
        cafe.appendChild(product);
        product.appendChild(prodPrice);
        prodPrice.appendChild(nameNode);
        prodPrice.appendChild(price);
        product.appendChild(descNode);
    })
    
    teas.forEach((item) => {
        const nameNode = document.createElement('h2');
        nameNode.textContent = item.name;
        tea.appendChild(nameNode);

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;
        tea.appendChild(price);

        const descNode = document.createElement('p')
        descNode.classList.add('description');
        descNode.textContent = item.description;
        tea.appendChild(descNode);

        const product = document.createElement('div')
        product.classList.add('product');
        const prodPrice = document.createElement('div')
        prodPrice.classList.add('prodPrice');

        if(item.type != null) {
            const typeNode = document.createElement('h1');
            typeNode.classList.add('drinkType')
            typeNode.textContent = item.type;
            tea.appendChild(typeNode);
            tea.appendChild(typeNode);
        }
        
        tea.appendChild(product);
        product.appendChild(prodPrice);
        prodPrice.appendChild(nameNode);
        prodPrice.appendChild(price);
        product.appendChild(descNode);
    })

    bobaTea.forEach((item) => {
        const nameNode = document.createElement('h2');
        nameNode.textContent = item.name;
        boba.appendChild(nameNode);

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;
        boba.appendChild(price);

        const product = document.createElement('div')
        product.classList.add('product');
        const prodPrice = document.createElement('div')
        prodPrice.classList.add('prodPrice');

        if(item.type != null) {
            const typeNode = document.createElement('h1');
            typeNode.classList.add('drinkType')
            typeNode.textContent = item.type;
            boba.appendChild(typeNode);
            boba.appendChild(typeNode);
        }

        if(item.description != null) {
            const descNode = document.createElement('p')
            descNode.classList.add('description');
            descNode.textContent = item.description;
            boba.appendChild(descNode);
        }
        
        boba.appendChild(product);
        product.appendChild(prodPrice);
        prodPrice.appendChild(nameNode);
        prodPrice.appendChild(price);
        // product.appendChild(descNode);
    })

    milks.forEach((item) => {
        const nameNode = document.createElement('p');
        nameNode.textContent = item.name;
        milk.appendChild(nameNode);

        if(item.type != null) {
            const typeNode = document.createElement('h1');
            typeNode.classList.add('drinkOption')
            typeNode.textContent = item.type;
            milk.appendChild(typeNode);
            milk.appendChild(typeNode);
        }
        milk.appendChild(nameNode);
        options.appendChild(milk);
    })

    bobaToppings.forEach((item) => {
        const nameNode = document.createElement('p');
        nameNode.textContent = item.name;
        toppings.appendChild(nameNode);

        if(item.type != null) {
            const typeNode = document.createElement('h1');
            typeNode.classList.add('drinkOption')
            typeNode.textContent = item.type;
            toppings.appendChild(typeNode);
            toppings.appendChild(typeNode);
        }
        toppings.appendChild(nameNode);
        options.appendChild(toppings);
    })

    menu.appendChild(cafe);
    menu.appendChild(tea);
    menu.appendChild(boba);
    menu.appendChild(options)
    
    return menu
}
