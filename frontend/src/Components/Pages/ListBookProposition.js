const ListBookProposition = () => {
    const main = document.querySelector('main');
    const mainfiller = `
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
};

export default ListBookProposition;
