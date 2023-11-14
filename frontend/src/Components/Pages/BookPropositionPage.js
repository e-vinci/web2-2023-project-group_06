const BookPropositionPage = () => {
    const main = document.querySelector('main');
const mainfiller = `
<div class="container mt-5">
    <h1>Proposition de livre</h1>
    <form>
      <div class="mb-3">
        <label for="inputTitle" class="form-label">Titre</label>
        <input type="text" class="form-control" id="inputTitle" placeholder="Titre du livre" required>
      </div>
      <div class="mb-3">
        <label for="inputPages" class="form-label">Nombre de pages</label>
        <input type="number" class="form-control" id="inputPages" placeholder="Nombre de pages" required>
      </div>
      <div class="mb-3">
        <label for="inputAuthor" class="form-label">Auteur</label>
        <input type="text" class="form-control" id="inputAuthor" placeholder="Nom de l'auteur" required>
      </div>
      <div class="mb-3">
        <label for="inputDescription" class="form-label">Description</label>
        <textarea class="form-control" id="inputDescription" placeholder="Description du livre" rows="3" required></textarea>
      </div>
      <div class="mb-3">
        <label for="inputSlutiness" class="form-label">Score de Slutiness</label>
        <input type="range" class="form-range" id="inputSlutiness" min="0" max="10" step="1" value="5">
      </div>
      <div class="mb-3">
        <label for="inputDarkness" class="form-label">Score de Darkness</label>
        <input type="range" class="form-range" id="inputDarkness" min="0" max="10" step="1" value="5">
      </div>
      <div class="mb-3">
        <label for="inputFluffiness" class="form-label">Score de Fluffiness</label>
        <input type="range" class="form-range" id="inputFluffiness" min="0" max="10" step="1" value="5">
      </div>
      <div class="mb-3">
        <label for="inputPhoto" class="form-label">Photo</label>
        <input type="file" class="form-control" id="inputPhoto" accept="image/*" required>
      </div>
      <button type="submit" class="btn btn-primary">Proposer le livre</button>
    </form>
  </div>

`;

main.innerHTML = mainfiller;
};

export default BookPropositionPage;