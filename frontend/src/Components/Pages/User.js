/* eslint-disable no-console */
const ListUsers = async () => {
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

                fetch(`${process.env.API_BASE_URL}/listUsers`)
                .then((response) => {
                    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
                    return response.json();
                })
                .then((data) => {
                    const rows = data.map((users) => `
                        <tr>
                            <td>${users.id_user}</td>
                            <td>${users.name}</td>
                            <td>${users.surname}</td>
                            <td>${users.profile_description}</td>
                            <td>${users.password}</td>
                            <td>${users.login}</td>
                            <td>${users.category}</td>
                            <td>${users.quizz_score}</td>
                            <td>${users.is_admin}</td>
                            <td>${users.profile_picture}</td>
                        </tr>
                    `).join('');

                    main.innerHTML = `
                        <h1> Can be deleted </h1>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Description</th>
                                    <th>Password</th>
                                    <th>Login</th>
                                    <th>Category</th>
                                    <th>Quizz score</th>
                                    <th>Admin</th>
                                    <th>Picture</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rows}
                            </tbody>
                        </table>
                    `;
                })
                .catch((err) => {
                    console.error('ListUsers::error: ', err);
                })
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

export default ListUsers;
