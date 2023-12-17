/* eslint-disable no-console */
const BookPropositionPage = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = JSON.parse(localStorage.getItem('token'));
  console.log('1 user : ', user);
  console.log('1 token : ', token);

  if (user && token) {
    const main = document.querySelector('main');
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

export default BookPropositionPage;