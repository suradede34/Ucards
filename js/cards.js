const usersList = document.querySelector('.usersList');
const userList = document.getElementById('userList');
let filteredText = ''; 
const filterForm = document.getElementById('filterForm');

function handleSubmit(e) {
   e.preventDefault();
   filteredText = filterForm.filteredText.value.toLowerCase();
   render();
}
filterForm.addEventListener('submit', handleSubmit);

async function init() {
    usersList.innerText = 'Yukleniyor...';
    const data = await fetch('https://dummyjson.com/users').then(res => res.json());
    //console.log(data.users);
    usersList.innerHTML = '';

    for (const user of data.users) {

        let userCardClass = 'userCard'; 
        if (user.age >= 18 && user.age <= 25) {
            userCardClass = 'userCard age18-25';
        } else if (user.age >= 26 && user.age <= 40) {
            userCardClass = 'userCard age26-40'; 
        } else if (user.age > 40) {
            userCardClass = 'userCard age40'; 
        }

        usersList.innerHTML += `
            <li class="${userCardClass}">
                <p>${user.username}</p>
                <h3>${user.firstName} ${user.lastName}</h3>
                <p>${user.age}</p>
                <p>${user.email}</p>
                <p>${user.phone}</p>
                <img src="${user.image}"/>
                <p>${user.company.name} - ${user.company.department}</p>
                <p>${user.address.address}, ${user.address.city}, ${user.address.state}</p>
            </li>
        `;
    }
}


init();  
