/* eslint-disable no-console */
const BookPage = async () => {
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
                    <header>
                        <h1>BOONDER</h1>
                    </header>

                    <section id="about">
                        <h2>À Propos de Nous</h2>
                        <p>Notre équipe est passionnée par la lecture et est déterminée à vous aider à trouver le livre qui correspond à vos préférences. Que vous recherchiez un roman, un thriller, de la science-fiction, de la fantasy, ou tout autre genre, nous sommes là pour vous guider.</p>
                    </section>

                    <div class="action-buttons">
                        <button id="acceptButton">Accepter</button>
                        <button id="rejectButton">Refuser</button>
                    </div>
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

export default BookPage;