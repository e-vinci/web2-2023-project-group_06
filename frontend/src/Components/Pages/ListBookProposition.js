const ListBookProposition = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
    const main = document.querySelector('main');
    const mainfiller = `
    <h1> List of the books suggested by the community </h1>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>ID</th>
                <th>Book title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Titre du Livre 1</td>
                <td>Auteur 1</td>
                <td><a href="/book" class="btn btn-primary">Voir détails</a></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Titre du Livre 2</td>
                <td>Auteur 2</td>
                <td><a href="/book" class="btn btn-primary">Voir détails</a></td>
            </tr>
        </tbody>
    </table>
    `;

    main.innerHTML = mainfiller;
    } else {
        const main = document.querySelector('main');
        main.innerHTML = `
                <h1>You are not supposed to be here</h1>
                `;
        console.log('user not connected ?');
    }
};

export default ListBookProposition;