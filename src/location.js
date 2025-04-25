const data = {
        location: 'We are located at:',
        address: '5544 SE Main St. Any City, Any State',
        hours: 'Our hours are 8am - 7pm Monday through Friday.'
    }

export const loadLocation = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    

    const location = document.createElement('p');
    location.classList.add('location');
    location.textContent = data.location;

    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = data.address;

    const hours = document.createElement('p');
    hours.classList.add('hours');
    hours.textContent = data.hours;

    container.appendChild(location);
    container.appendChild(address);
    container.appendChild(hours);

    return container;
}