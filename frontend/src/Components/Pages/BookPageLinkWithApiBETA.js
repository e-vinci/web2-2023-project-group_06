const ListBooks = () => {
    const main = document.querySelector('main');

    fetch('/api/books')
    .then((response) => {
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
    })
    .then((data) => {
        const rows = data.map((book, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td><a href="/book/${book.id}" class="btn btn-primary">Voir détails</a></td>
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
    })
    .catch((err) => {
        console.log('ListBooks::error: ', err);
    })
};

export default ListBooks;