    const Quizz = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            const main = document.querySelector('main');
            const mainfiller = `
            <header>
                <h1>It's quizz time !!!</h1>
            </header>
    
            <section id="questions">
                <h2>Quizz</h2>
                <form id="form">
                    <label>Question 1 : Would you rather have a dragon or be a dragon ?</label><br>
                    <input type="radio" value="plus" name="one">Have a dragon <br>
                    <input type="radio" value="minus" name="one">Be a dragon <br><br>
    
                    <label>Question 2 : Who is your favourite Michael ?</label><br>
                    <input type="radio" value="plus" name="two">Michael Jackson <br>
                    <input type="radio" value="minus" name="two">Michael Collins <br>
                    <input type="radio" value="plus" name="two">Michael Jordan <br>
                    <input type="radio" value="minus" name="two">Michael Fassbender <br><br>
    
                    <label>Question 3 : Would you rather stop listening to music or stop drinking alcohol forever ?</label><br>
                    <input type="radio" value="plus" name="three">Stop drinking alcohol <br>
                    <input type="radio" value="minus" name="three">Stop listening to music <br><br>
    
                    <label>Question 4 : What do you eat curry with ?</label><br>
                    <input type="radio" value="plus" name="four">Rice <br>
                    <input type="radio" value="minus" name="four">Pasta <br>
                    <input type="radio" value="plus" name="four">Naan bread <br>
                    <input type="radio" value="minus" name="four">French fries <br><br>
    
                    <label>Question 5 : Is pineapple on pizza okay ?</label><br>
                    <input type="radio" value="plus" name="five">Yes <br>
                    <input type="radio" value="minus" name="five">No <br><br>
                    
                    <label>Question 6 : Who is your favourite Jennifer ?</label><br>
                    <input type="radio" value="plus" name="six">Jennifer Aniston <br>
                    <input type="radio" value="minus" name="six">Jennifer Connely <br>
                    <input type="radio" value="plus" name="six">Jennifer Lawrence <br>
                    <input type="radio" value="minus" name="six">Jennifer Love Hewitt <br><br>
    
                    <label>Question 7 : Which panda do you prefer ?</label><br>
                    <input type="radio" value="plus" name="seven">The black and white one who eats bamboo<br>
                    <input type="radio" value="minus" name="seven">The red one <br><br>
    
                    <label>Question 8 : Do you like capybaras ? </label><br>
                    <input type="radio" value="plus" name="eight">I love them<br>
                    <input type="radio" value="minus" name="eight">No <br>
                    <input type="radio" value="plus" name="eight">Of course ! <br>
                    <input type="radio" value="minus" name="eight">What are they ? <br><br>
    
                    <label>Question 9 : Which Nirvana do you like more ? </label><br>
                    <input type="radio" value="minus" name="nine"> The music band <br>
                    <input type="radio" value="plus" name="nine">The Buddhist one <br><br>
                    
                    <label>Question 10 : Which type of wine do you prefer ?</label><br>
                    <input type="radio" value="plus" name="ten">Red <br>
                    <input type="radio" value="minus" name="ten">Rosé<br>
                    <input type="radio" value="minus" name="ten">White<br>
                    <input type="radio" value="plus" name="ten">I don't drink wine <br><br>
    
                    <label>Question 11 : Which American president would you rather watch fight a bear ?</label><br>
                    <input type="radio" value="plus" name="eleven">Donald Trump <br>
                    <input type="radio" value="minus" name="eleven">Barack Obama <br>
                    <input type="radio" value="plus" name="eleven">Violence is not the solution <br>
                    <input type="radio" value="minus" name="eleven">Does the bear become president if it wins ? <br><br>
    
                    <label>Question 12 : What do you think about first when I say "Apple" ?</label><br>
                    <input type="radio" value="plus" name="twelve">The fruit <br>
                    <input type="radio" value="minus" name="twelve">The brand <br><br>
                    
                    <label>Question 13 : If you had a superpower, which element would you want it to be linked to ?</label><br>
                    <input type="radio" value="minus" name="thirteen">Fire <br>
                    <input type="radio" value="plus" name="thirteen">Earth <br>
                    <input type="radio" value="plus" name="thirteen">Water <br>
                    <input type="radio" value="minus" name="thirteen">Air <br><br>
    
                    <label>Question 14 : Who is better at rugby ?</label><br>
                    <input type="radio" value="plus" name="fourteen">Ireland<br>
                    <input type="radio" value="minus" name="fourteen">France <br>
                    <input type="radio" value="plus" name="fourteen">New Zealand <br>
                    <input type="radio" value="minus" name="fourteen">England <br><br>
    
                    <label>Question 15 : Barbie or Oppenheimer ?</label><br>
                    <input type="radio" value="plus" name="fifteen">Barbie <br>
                    <input type="radio" value="minus" name="fifteen">Oppenheimer <br>
                    <input type="radio" value="plus" name="fifteen">Both <br>
                    <input type="radio" value="minus" name="fifteen">Neither <br><br>
    
                    <label>Question 16 : If you had to only eat one animal for the rest of your life, which one would you choose ?</label><br>
                    <input type="radio" value="plus" name="sixteen">None, I don't eat animals <br>
                    <input type="radio" value="plus" name="sixteen">Chicken <br>
                    <input type="radio" value="minus" name="sixteen">Beef <br>
                    <input type="radio" value="minus" name="sixteen">Human <br><br>
    
                    <label>Question 17 : Which Ryan is better ?</label><br>
                    <input type="radio" value="minus" name="seventeen">Ryan Gosling <br>
                    <input type="radio" value="plus" name="seventeen">Ryan Reynolds <br><br>
    
                    <label>Question 18 : Who killed Kurt Cobain ?</label><br>
                    <input type="radio" value="plus" name="eighteen">Himself <br>
                    <input type="radio" value="minus" name="eighteen">Courtney Love<br>
                    <input type="radio" value="plus" name="eighteen">Who ? <br>
                    <input type="radio" value="minus" name="eighteen">Dave Grohl <br><br>
    
                    <label>Question 19 : Tattoos or piercings ?</label><br>
                    <input type="radio" value="plus" name="nineteen">Tattoos <br>
                    <input type="radio" value="plus" name="nineteen">Piercings <br>
                    <input type="radio" value="minus" name="nineteen">Neither <br>
                    <input type="radio" value="minus" name="nineteen">Both <br><br>
    
                    <label>Question 20 : In which 70s would you rather spend the rest of your life ?</label><br>
                    <input type="radio" value="plus" name="twenty">1970s <br>
                    <input type="radio" value="minus" name="twenty">1870s <br><br>
                    
                    <label>Question 21 : Which doctor will save mankind ?</label><br>
                    <input type="radio" value="plus" name="twenty-one">Doctor Who <br>
                    <input type="radio" value="minus" name="twenty-one"> Doctor House <br>
                    <input type="radio" value="minus" name="twenty-one">Doctor Jekyll <br>
                    <input type="radio" value="plus" name="twenty-one">Mona's father (he is a surgeon) <br><br>
    
                    <input type="submit" value="Submit">    
                </form>
            </section>
    
            `;
            
            main.innerHTML = mainfiller;

            const form = document.getElementById('form');
            form.addEventListener('submit', async (event) => {
                event.preventDefault(); // Prevent form submission for now

                // Get all selected radio buttons
                const selectedOptions = document.querySelectorAll('input[type="radio"]:checked');

                // Create an array to store the choices
                const choices = Array.from(selectedOptions).map(option => option.value);

                // Call the function to count and compare and saves the result
                const userType = countAndCompare(choices);

                const userId = user[0].id_user;

                try {
                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ userType, userId }),
                    };

                    await fetch(`${process.env.API_BASE_URL}/quizz`, options);

                    window.location.href = '/profilePage';
                } catch (error) {
                    console.error('Error processing the quizz result :', error); 
                }
            });
        } else {
            const main = document.querySelector('main');
            main.innerHTML = `
                    <h1>You are not supposed to be here</h1>
                    `;
            console.log('user not connected ?');
        }
    }
    
    // Function to count and compare
    function countAndCompare(choices) {
        let countPlus = 0;
        let countMinus = 0;
        let userType = "";

        // Loop through choices and count "plus" and "minus"
        // eslint-disable-next-line no-restricted-syntax
        for (const choice of choices) {
            if (choice === 'plus') {
                countPlus += 1;
            } else if (choice === 'minus') {
                countMinus += 1;
            }
        }

        // Compare counts and perform actions accordingly
        if (countPlus > countMinus) {
            userType = "fluffy";
        } else {
            userType = "dark";
        }

        console.log(userType);
        return userType; 
    }

export default Quizz;