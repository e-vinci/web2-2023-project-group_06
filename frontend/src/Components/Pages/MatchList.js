/* eslint-disable no-console */
const MatchList = async () => {
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
                console.error('Token verification failed:', responseToken.statusText);
                throw new Error(`fetch error : ${responseToken.status} : ${responseToken.statusText}`);
            }
            const result = await responseToken.json();
            console.log('Token Verification Result:', result);

            if (result.isValid) {
                console.log('user vaut dans le localstorage::::::');
                console.log(user[0].id_user);


                const response = await fetch(`${process.env.API_BASE_URL}/match/${user[0].id_user}`);

                if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
                const match = await response.json();
                console.log('match vaut :::::');
                console.log(match);


                const rows = match.map(m => `
                <tr>
                    <td>${m.title}</td>
                    <td>${m.nb_pages}</td>
                    <td>${m.author}</td>
                    <td>${m.description}</td>
                </tr>
                `).join('');

                const main = document.querySelector('main');
                const mainfiller = `
                    <h1> Liste des livres proposés par la communauté </h1>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>Title</th>
                                <th>nb_pages</th>
                                <th>author</th>
                                <th>description</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
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

export default MatchList;
