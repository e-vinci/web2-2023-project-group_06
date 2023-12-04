const SignInPage = () => {
    const main = document.querySelector('main');
    const mainfiller = `
    <header class="text-center"><div id="navbarWrapper"></div>    
        <h1>Welcome to Boonder</h1>
    </header>
    
    <div class="container login-container">
        <form>
            <div class="col-lg-4 mx-auto">
                <div class="form-group">
                    <input type="text" class="form-control mb-2" id="emailSignup" placeholder="Email address">
                </div>
            </div>
            <div class="col-lg-4 mx-auto">
                <div class="form-group">
                    <input type="password" class="form-control mb-2" id="passwordSignup" placeholder="Password">
                </div>
            </div>
            <div class="col-lg-4 mx-auto">    
                <div class="form-group">
                    <input type="password" class="form-control mb-2" id="passwordSignupConfirmation" placeholder="Password Confirmation">
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-block btn-light myButton">Sign Up</button>
            </div>
        </form>
    </div>

    <script src="Router.js"></script>
`;
    
    main.innerHTML = mainfiller;
};

export default SignInPage;
