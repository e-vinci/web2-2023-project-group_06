import bookDetails from "./bookDetails";
/* eslint-disable no-console */
const ListBooks = async () => {
    const main = document.querySelector('main');

    const response = await fetch('/api/books');
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

    main.innerHTML = `
    <h1> Liste des livres proposés par la communauté </h1>
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
};

export default ListBooks;