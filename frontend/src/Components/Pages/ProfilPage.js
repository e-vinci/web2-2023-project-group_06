const ProfilPage = () => {
    const main = document.querySelector('main');
    const mainfiller = 
    `<div class="container py-5">
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <div class="card">
                <div class="card-body">
                    <div class="e-profile">
                        <div class="row">
                            <div class="col-12 col-sm-auto mb-3">
                                <div class="mx-auto" style="width: 140px;">
                                    <div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
                                        <span style="color: rgb(166, 168, 170); font: bold 8pt Arial;">140x140</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                <div class="text-center text-sm-left mb-2 mb-sm-0">
                                    <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">John Doe</h4>
                                    <p class="mb-0">@johndoe</p>
                                    <div class="text-muted"><small>Dernière connexion il y a 2 heures</small></div>
                                </div>
                            </div>
                        </div>
                        <ul class="nav nav-tabs">
                            <li class="nav-item"><a href="" class="active nav-link">Settings</a></li>
                        </ul>
                        <div class="tab-content pt-3">
                            <div class="tab-pane active">
                                <form class="form" novalidate="">
                                    <div class="row">
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label>Full name</label>
                                                        <input class="form-control" type="text" name="name" placeholder="John Doe" value="John Doe">
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label>Username</label>
                                                        <input class="form-control" type="text" name="username" placeholder="johndoe" value="johndoe">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col mb-3">
                                                    <div class="form-group">
                                                        <label>About</label>
                                                        <textarea class="form-control" rows="5" placeholder="My bio..."></textarea>
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
`
main.innerHTML = mainfiller;
}

export default ProfilPage;

