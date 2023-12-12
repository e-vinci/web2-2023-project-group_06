// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import anime from 'animejs/lib/anime.es.js';
import bookDetails from "./bookDetails";
/* eslint-disable no-console */
const ListBooks = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        const main = document.querySelector('main');
        // CSS
        main.style.display = 'flex';
        main.style.justifyContent = 'center';
        main.style.fontSize = '1em';
        main.style.width = '100vw';
        main.style.overflowX = 'hidden';
     
        const response = await fetch(`${process.env.API_BASE_URL}/books`);
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        const data = await response.json();
    
        const rows = data.map((book, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td><a href = "#" data-id="${book.id_book}" class="btn btn-primary book-link">Voir détails</a></td>
            </tr>
        `).join('');
    
        // Animation de fou
        const battery = {
            charged: '0%',
        }
        anime({
            targets: battery,
            charged: '100%',
            round: 0.1,
            easing: 'linear',
            update() {
                main.innerHTML = JSON.stringify(battery);
            },
            complete() {
                // Remplacez le contenu de 'main' une fois l'animation terminée
                main.innerHTML = `
                    <div class="card-header text-center"><h1>Liste des livres proposés par la communauté</h1></div>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Titre du Livre</th>
                                <th>Auteur</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                `;
    
                const links = document.querySelectorAll('.book-link');
    
                links.forEach((link) => {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
            
                        // Récupérez l'ID du livre à partir de l'attribut 'data-id'
                        const bookId = event.target.dataset.id;
                        console.log(bookId);
            
                        // Appelez la fonction bookDetails avec l'ID du livre
                        bookDetails(bookId);
                    });
                });
            }
        });
    } else {
        const main = document.querySelector('main');
        main.innerHTML = `
                <h1>You are not supposed to be here</h1>
                `;
        console.log('user not connected ?');
    }
};

export default ListBooks;