const BookPropositionPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {const main = document.querySelector('main');
    const mainfiller = `
    <div class="container mt-5">
        <h1>Book suggestion</h1>
        <form>
          <div class="mb-3">
            <label for="inputTitle" class="form-label">Title</label>
            <input type="text" class="form-control" id="inputTitle" placeholder="Title" required>
          </div>
          <div class="mb-3">
            <label for="inputPages" class="form-label">Number of pages</label>
            <input type="number" class="form-control" id="inputPages" placeholder="Page count" required>
          </div>
          <div class="mb-3">
            <label for="inputAuthor" class="form-label">Author</label>
            <input type="text" class="form-control" id="inputAuthor" placeholder="Author" required>
          </div>
          <div class="mb-3">
            <label for="inputDescription" class="form-label">Description</label>
            <textarea class="form-control" id="inputDescription" placeholder="Description" rows="3" required></textarea>
          </div>
          <div class="mb-3">
            <label for="inputSlutiness" class="form-label">Slutiness score</label>
            <input type="range" class="form-range" id="inputSlutiness" min="0" max="10" step="1" value="5">
          </div>
          <div class="mb-3">
            <label for="inputDarkness" class="form-label">Darkness score</label>
            <input type="range" class="form-range" id="inputDarkness" min="0" max="10" step="1" value="5">
          </div>
          <div class="mb-3">
            <label for="inputFluffiness" class="form-label">Fluffiness score</label>
            <input type="range" class="form-range" id="inputFluffiness" min="0" max="10" step="1" value="5">
          </div>
          <div class="mb-3">
            <label for="inputPhoto" class="form-label">Photo</label>
            <input type="file" class="form-control" id="inputPhoto" accept="image/*" required>
          </div>
          <button type="submit" class="btn btn-primary">Suggest this book to be added to Boonder !</button>
        </form>
      </div>
    `;
    main.innerHTML = mainfiller;

  } else {
      const main = document.querySelector('main');
      main.innerHTML = `<h1>You are not supposed to be here</h1>`;
      console.log('user not connected ?');
  }
};

export default BookPropositionPage;