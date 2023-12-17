/* eslint-disable no-console */
const ProfilPage = async () => {
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
                <div class="container py-5">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="card">
                                <div class="card-body">
                                    <div class="e-profile">
                                        <div class="row">
                                            <div class="col-12 col-sm-auto mb-3">
                                                <div class="mx-auto" style="width: 140px;">
                                                <div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
                                                <input type="file" accept="image/*" id="profilePictureInput" style="display: none;">
                                                <input type="file" accept="image/*" id="profilePictureInput" style="display: none;">
                                                <label for="profilePictureInput" style="cursor: pointer; width: 100%; height: 100%;">
                                                    <div class="d-flex justify-content-center align-items-center" style="width: 100%; height: 100%; color: black;">
                                                        Cliquez ici pour changer la photo
                                                    </div>                                      
                                                </label>
                                            </div>
                                            
                                                </div>
                                            </div>
                                            <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                                <div class="text-center text-sm-left mb-2 mb-sm-0">
                                                    <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">${user[0].name} ${user[0].surname}</h4>
                                                    <p class="mb-0">@${user[0].name}${user[0].surname}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="nav nav-tabs">
                                            <li class="nav-item">Settings</li>
                                        </ul>
                                        <div class="tab-content pt-3">
                                            <div class="tab-pane active">
                                                <form class="form" novalidate="">
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="row">
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label>Name</label>
                                                                        <input class="form-control" type="text" name="name" placeholder="${user[0].name}">
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="form-group">
                                                                        <label>Surname</label>
                                                                        <input class="form-control" type="text" name="surname" placeholder="${user[0].surname}">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br>
                                                            <div class="row">
                                                                <div class="col mb-3">
                                                                    <div class="form-group">
                                                                        <label>About</label>
                                                                        <textarea class="form-control" rows="5" placeholder="${user[0].profile_description}" id="description"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col d-flex justify-content-end">
                                                            <button class="btn btn-primary" type="submit">Save modifications</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                main.innerHTML = mainfiller;

                const form = document.querySelector('form');

                const profilePictureInput = document.getElementById('profilePictureInput');

                profilePictureInput.addEventListener('change', async (event) => {
                    event.preventDefault();
                    if (event.target.files && event.target.files[0]) {
                        const formData = new FormData();
                        formData.append('profilePicture', event.target.files[0]);
                        formData.append('id', user[0].id_user);
                        
                        console.log('VOUS ETES ICI ::');
                        console.log(formData);
                
                        try {
                            const options = {
                                method: 'POST',
                                body: formData,
                            };
                            // Récupérez la réponse du serveur
                            const response = await fetch(`${process.env.API_BASE_URL}/uploadProfilePicture`, options);
                            // Convertissez la réponse en JSON
                            const data = await response.json();
                
                            // Vérifiez si l'upload a réussi
                            if (data.success) {
                                // Mettez à jour l'objet utilisateur avec le nouveau chemin de l'image
                                user[0].profile_picture = data.imagePath;
                                localStorage.setItem('user', JSON.stringify(user));
                            }
                        } catch (error) {
                            console.error('Error uploading profile picture:', error);
                        }
                    }
                });


                const profileModification = async (event) => {
                    event.preventDefault();
                    const userName = document.getElementsByName('name')[0].value;
                    const surname = document.getElementsByName('surname')[0].value;
                    const profileDescription = document.getElementById('description').value;
                    
                    const id = user[0].id_user;
                    try {
                        const options = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ userName, surname, profileDescription, id }),
                        };
                        await fetch(`${process.env.API_BASE_URL}/profilePage`, options);
                        if (userName !== null && userName !== undefined && userName !== '') {
                            user[0].name = userName;
                        }
                        if (surname !== null && surname !== undefined && surname !== '') {
                            user[0].surname = surname;
                        }
                        if (profileDescription !== null && profileDescription !== undefined && profileDescription !== '') {
                            user[0].profile_description = profileDescription;
                        }
                        localStorage.setItem('user', JSON.stringify(user));
                        window.location.href = '/profiluser';
                    } catch (error) {
                        console.error('Error modifying user:', error);
                        // Handle error here 
                    }
                };
                form.addEventListener('submit', profileModification);
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
        console.log('user not connected?');
    }
}

export default ProfilPage;
