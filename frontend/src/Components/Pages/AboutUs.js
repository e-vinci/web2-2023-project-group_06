const AboutUsPage = () => {
    const main = document.querySelector('main');
    const mainfiller = `
    <header>
        <h1>Bienvenue sur Notre Site</h1>
        <p>Trouvez le livre parfait à votre goût !</p>
    </header>

    <section id="about">
        <h2>À Propos de Nous</h2>
        <p>Notre équipe est passionnée par la lecture et est déterminée à vous aider à trouver le livre qui correspond à vos préférences. Que vous recherchiez un roman, un thriller, de la science-fiction, de la fantasy, ou tout autre genre, nous sommes là pour vous guider.</p>
    </section>

    `;
    
    main.innerHTML = mainfiller;
};
    
export default AboutUsPage;