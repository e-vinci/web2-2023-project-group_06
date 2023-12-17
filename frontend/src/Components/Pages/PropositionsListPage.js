/* eslint-disable no-console */
const ListBookProposition = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));
    console.log('1 user : ', user);
    console.log('1 token : ', token);

    // Check if the user is logged in and the token exists
    if (user && token) {
        try {
            console.log('BEFORE FETCH');
            // Check token validity by making a request to the server
            const response = await fetch(`${process.env.API_BASE_URL}/checkToken`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });
            console.log(`AFTER FETCH + token : ${token}`);

            console.log('Server Response:', response);

            if (!response.ok) {
                throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
            }
            const result = await response.json();

            if (result.isValid) {
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
                // Token has expired, perform logout or other necessary actions
                console.log('Token has expired. Perform logout or other necessary actions.');
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                // Redirect to the login page or perform other necessary actions
                // Example: 
                window.location.href = '/login';
                }
            } catch (error) {
                console.error('Error checking token validity:', error);
                // Handle the error, e.g., perform logout
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                // Redirect to the login page or perform other necessary actions
                // Example: window.location.href = '/login';
            }
    } else {
        const main = document.querySelector('main');
        main.innerHTML = `
            <h1>You are not supposed to be here</h1>
        `;
        console.log('user not connected ?');
    }
};

export default ListBookProposition;
