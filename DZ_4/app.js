const request = new XMLHttpRequest();
request.open('GET', 'persons.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = () => {
    const data = JSON.parse(request.response);
    console.log(data);

    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';

    data.forEach(character => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        card.innerHTML = `
            <div class="person-photo">
                <img src="${character.personPhoto}" alt="${character.name}'s photo">
            </div>
            <h3>${character.name}</h3>
            <span>Age: ${character.age}</span>
            <span> is married: ${character.isMarried ? 'Yes' : 'No'}</span>
        `
        wrapper.append(card);
    });
};