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

    <section id="about">
        <h2>How does Boonder work ?</h2>
        <p>
            As a user, you will be asked to answer a quizz (if you change your mind don't worry, the quizz can be taken again any time you want).
            Depending on the results, you will fall into one of two categories : dark of fluffy. Pretty self-explanatory, right ?
            <br>
            Books, on the other hand, are given a score out of ten in 2 categories : fluffiness and darkness.
            <br>
            The fluffiness score measures a book's cuteness. For example if the story ends well, or is pretty positive in general, this score will be higher.
            And on the other hand, if a book scores high in darkness, it means the story might end sadly, or even make you cry... (sorry)
        </p>
    </section>

    `;
    
    main.innerHTML = mainfiller;
};
    
export default AboutUsPage;