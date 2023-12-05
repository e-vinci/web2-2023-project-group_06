async function bookDetails(id){
        console.log(`before : ${id}`);
        // Faites une requête à l'API pour obtenir les détails du livre
        try {
            const response = await fetch(`/api/books/${id}`);
            if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
            const book = await response.json();
            console.log(book);

            // Créez le contenu HTML pour afficher les détails du livre
            const html = ` 
                <p> Titre : ${book[0].title}</p>
                <p>Author : ${book[0].author}</p>
                <p>Description : ${book[0].description}</p>
                <p>nombre de pages : ${book[0].nb_pages}</p>
                <p>score sluttiness : ${book[0].score_sluttiness}</p>
                <p>score fluffiness : ${book[0].score_fluffiness}</p>
                <p>score darkness : ${book[0].score_darkness}</p>
            `;

            // Ajoutez le contenu HTML à l'élément 'main' de la page
            const main = document.querySelector('main');
            main.innerHTML = html;
        } catch (error) {
            console.error('Error:', error);
        }
    }

export default bookDetails;