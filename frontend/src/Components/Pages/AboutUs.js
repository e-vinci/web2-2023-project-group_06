const AboutUsPage = () => {
    const main = document.querySelector('main');
    const mainfiller = `
    <header>
        <h1>Welcome to Boonder</h1>
        <p>Find the perfect book match for you !</p>
    </header>

    <section id="about">
        <h2>About us</h2>
        <p>Our team is made of a bunch of young people, some of them bookworms, some of them obsessed with dating apps, some of them both. Either way, we'll help you find the book that is meant for you.</p>
    </section>

    `;
    
    main.innerHTML = mainfiller;
};
    
export default AboutUsPage;