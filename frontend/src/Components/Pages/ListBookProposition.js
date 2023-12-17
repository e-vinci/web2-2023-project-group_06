/* eslint-disable no-console */
const ListBookProposition = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));
    console.log('1 user : ', user);
    console.log('1 token : ', token);

    if (user && token) {
        try {
            console.log('BEFORE FETCH');
            const responseToken = await fetch(`${process.env.API_BASE_URL}/checkToken`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });
            console.log(`AFTER FETCH + token : ${token}`);

            console.log('Server Response:', responseToken);

            if (!responseToken.ok) {
                throw new Error(`fetch error : ${responseToken.status} : ${responseToken.statusText}`);
            }
            const result = await responseToken.json();

            if (result.isValid) {
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
                console.log('Token has expired. Perform logout or other necessary actions.');
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
        } catch (error) {
        console.error('Error checking token validity:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
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