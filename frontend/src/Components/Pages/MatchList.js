const MatchList = () => {
    const main = document.querySelector('main');
    const mainfiller = `
    <h1> Liste des livres proposés par la communauté </h1>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>Photo</th>
                <th>Title</th>
                <th>Likes</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>photo</td>
                <td>Title</td>
                <td>liked this person</td>
                <td><a href="/book" class="btn btn-primary">Voir détails</a></td>
            </tr>
            <tr>
                <td>photo</td>
                <td>Title</td>
                <td>liked this person</td>
                <td><a href="/book" class="btn btn-primary">Voir détails</a></td>
            </tr>
        </tbody>
    </table>
    `;

    main.innerHTML = mainfiller;
};

export default MatchList;
