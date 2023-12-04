/* eslint-disable no-console */
const ListUsers = () => {
    const main = document.querySelector('main');

    fetch('/api/listUsers')
    .then((response) => {
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
    })
    .then((data) => {
        const rows = data.map((user) => `
            <tr>
                <td>${user.id_user}</td>
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.profile_description}</td>
                <td>${user.password}</td>
                <td>${user.login}</td>
                <td>${user.category}</td>
                <td>${user.quizz_score}</td>
                <td>${user.is_admin}</td>
                <td>${user.profile_picture}</td>
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
};

export default ListUsers;
