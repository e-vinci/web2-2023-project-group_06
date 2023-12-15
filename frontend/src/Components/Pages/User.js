/* eslint-disable no-console */
const ListUsers = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
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
        <h1> ICI </h1>
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
        const main = document.querySelector('main');
        main.innerHTML = `
                <h1>You are not supposed to be here</h1>
                `;
        console.log('user not connected ?');
    }
};

export default ListUsers;
