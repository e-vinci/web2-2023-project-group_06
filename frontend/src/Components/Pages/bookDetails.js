async function bookDetails(id){
        console.log(`before : ${id}`);
        // Faites une requête à l'API pour obtenir les détails du livre
        try {
            const response = await fetch(`${process.env.API_BASE_URL}/books/${id}`);
            if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
            const book = await response.json();
            console.log(book);

            // Créez le contenu HTML pour afficher les détails du livre
            const html = ` 
                <div class="d-flex justify-content-center align-items-center vh-100">
                    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                        <div class="card-header">${book[0].title}</div>
                        <div class="card-body">
                            <h5 class="card-title">${book[0].author}</h5>
                            <p class="card-text">${book[0].description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                             <li class="list-group-item">Nombre de pages : ${book[0].nb_pages}</li>
                            <li class="list-group-item">Score Sluttiness : ${book[0].score_sluttiness}</li>
                            <li class="list-group-item">Score Fluffiness : ${book[0].score_fluffiness}</li>
                            <li class="list-group-item">Score Darkness : ${book[0].score_darkness}</li>
                        </ul>
                    </div>
            </div>
            `;

            // Ajoutez le contenu HTML à l'élément 'main' de la page
            const main = document.querySelector('main');
            main.innerHTML = html;
        } catch (error) {
            console.error('Error:', error);
        }
    }

export default bookDetails;