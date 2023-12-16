const ListBookProposition = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
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
                    <td><a href="BookPage.html" class="btn btn-primary">Voir détails</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Titre du Livre 2</td>
                    <td>Auteur 2</td>
                    <td><a href="BookPage.html" class="btn btn-primary">Voir détails</a></td>
                </tr>
                <!-- Ajoutez d'autres lignes de proposition ici -->
            </tbody>
        </table>
        `;
        // Ajout du contenu au DOM
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
