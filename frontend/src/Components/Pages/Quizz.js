const Quizz = () => {
    const main = document.querySelector('main');
    const mainfiller = `
    <header align="center">
        <h1>It's quizz time !!!</h1>
    </header>

    <section id="questions" align="center">
        <h2>Quizz</h2>
        <form>
            <label>Question 1 : Would you rather have a dragon or be a dragon ?</label><br>
            <input type="radio" value="1" name="one">Have a dragon <br>
            <input type="radio" value="-1" name="one">Be a dragon <br><br>

            <label>Question 2 : Who is your favourite Michael ?</label><br>
            <input type="radio" value="1" name="two">Michael Jackson <br>
            <input type="radio" value="-1" name="two">Michael Collins <br>
            <input type="radio" value="1" name="two">Michael Jordan <br>
            <input type="radio" value="-1" name="two">Michael Fassbender <br><br>

            <label>Question 3 : Would you rather stop listening to music or stop drinking alcohol forever ?</label><br>
            <input type="radio" value="1" name="three">Stop drinking alcohol <br>
            <input type="radio" value="-1" name="three">Stop listening to music <br><br>

            <label>Question 4 : What do you eat curry with ?</label><br>
            <input type="radio" value="1" name="four">Rice <br>
            <input type="radio" value="-1" name="four">Pasta <br>
            <input type="radio" value="1" name="four">Naan bread <br>
            <input type="radio" value="-1" name="four">French fries <br><br>

            <label>Question 5 : Is pineapple on pizza okay ?</label><br>
            <input type="radio" value="1" name="five">Yes <br>
            <input type="radio" value="-1" name="five">No <br><br>
            
            <label>Question 6 : Who is your favourite Jennifer ?</label><br>
            <input type="radio" value="1" name="six">Jennifer Aniston <br>
            <input type="radio" value="-1" name="six">Jennifer Connely <br>
            <input type="radio" value="1" name="six">Jennifer Lawrence <br>
            <input type="radio" value="-1" name="six">Jennifer Love Hewitt <br><br>

            <label>Question 7 : Which panda do you prefer ?</label><br>
            <input type="radio" value="1" name="seven">The black and white one who eats bamboo<br>
            <input type="radio" value="-1" name="seven">The red one <br><br>

            <label>Question 8 : Do you like capybaras ? </label><br>
            <input type="radio" value="1" name="eight">I love them<br>
            <input type="radio" value="-1" name="eight">No <br>
            <input type="radio" value="1" name="eight">Of course ! <br>
            <input type="radio" value="-1" name="eight">What are they ? <br><br>

            <label>Question 9 : Which Nirvana do you like more ? </label><br>
            <input type="radio" value="-1" name="nine"> The music band <br>
            <input type="radio" value="1" name="nine">The Buddhist one <br><br>
            
            <label>Question 10 : Which type of wine do you prefer ?</label><br>
            <input type="radio" value="1" name="ten">Red <br>
            <input type="radio" value="-1" name="ten">Rosé<br>
            <input type="radio" value="-1" name="ten">White<br>
            <input type="radio" value="1" name="ten">I don't drink wine <br><br>

            <label>Question 11 : Which American president would you rather watch fight a bear ?</label><br>
            <input type="radio" value="1" name="eleven">Donald Trump <br>
            <input type="radio" value="-1" name="eleven">Barack Obama <br>
            <input type="radio" value="1" name="eleven">Violence is not the solution <br>
            <input type="radio" value="-1" name="eleven">Does the bear become president if it wins ? <br><br>

            <label>Question 12 : What do you think about first when I say "Apple" ?</label><br>
            <input type="radio" value="1" name="twelve">The fruit <br>
            <input type="radio" value="-1" name="twelve">The brand <br><br>
            
            <label>Question 13 : If you had a superpower, which element would you want it to be linked to ?</label><br>
            <input type="radio" value="-1" name="thirteen">Fire <br>
            <input type="radio" value="1" name="thirteen">Earth <br>
            <input type="radio" value="1" name="thirteen">Water <br>
            <input type="radio" value="-1" name="thirteen">Air <br><br>

            <label>Question 14 : Who is better at rugby ?</label><br>
            <input type="radio" value="1" name="fourteen">Ireland<br>
            <input type="radio" value="-1" name="fourteen">France <br>
            <input type="radio" value="1" name="fourteen">New Zealand <br>
            <input type="radio" value="-1" name="fourteen">England <br><br>

            <label>Question 15 : Barbie or Oppenheimer ?</label><br>
            <input type="radio" value="1" name="fifteen">Barbie <br>
            <input type="radio" value="-1" name="fifteen">Oppenheimer <br>
            <input type="radio" value="1" name="fifteen">Both <br>
            <input type="radio" value="-1" name="fifteen">Neither <br><br>

            <label>Question 16 : If you had to only eat one animal for the rest of your life, which one would you choose ?</label><br>
            <input type="radio" value="1" name="sixteen">None, I don't eat animals <br>
            <input type="radio" value="1" name="sixteen">Chicken <br>
            <input type="radio" value="-1" name="sixteen">Beef <br>
            <input type="radio" value="-1" name="sixteen">Human <br><br>

            <label>Question 17 : Which Ryan is better ?</label><br>
            <input type="radio" value="-1" name="seventeen">Ryan Gosling <br>
            <input type="radio" value="1" name="seventeen">Ryan Reynolds <br><br>

            <label>Question 18 : Who killed Kurt Cobain ?</label><br>
            <input type="radio" value="1" name="eighteen">Himself <br>
            <input type="radio" value="-1" name="eighteen">Courtney Love<br>
            <input type="radio" value="1" name="eighteen">Who ? <br>
            <input type="radio" value="-1" name="eighteen">Dave Grohl <br><br>

            <label>Question 19 : Tattoos or piercings ?</label><br>
            <input type="radio" value="1" name="nineteen">Tattoos <br>
            <input type="radio" value="1" name="nineteen">Piercings <br>
            <input type="radio" value="-1" name="nineteen">Neither <br>
            <input type="radio" value="-1" name="nineteen">Both <br><br>

            <label>Question 20 : In which 70s would you rather spend the rest of your life ?</label><br>
            <input type="radio" value="1" name="twenty">1970s <br>
            <input type="radio" value="-1" name="twenty">1870s <br><br>
            
            <label>Question 21 : Which doctor will save mankind ?</label><br>
            <input type="radio" value="1" name="twenty-one">Doctor Who <br>
            <input type="radio" value="-1" name="twenty-one"> Doctor House <br>
            <input type="radio" value="-1" name="twenty-one">Doctor Jekyll <br>
            <input type="radio" value="1" name="twenty-one">Mona's father (he is a surgeon) <br><br>

            <input type="submit" value="Submit" id="submitButton">    
        </form>
    </section>

    `;

    let totalScore; 
    let userType = "didn't work";
    const nameArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one"];

   
    
    main.innerHTML = mainfiller;

    document.querySelector("form").addEventListener("submit", () =>{
        for(let i = 0; i < nameArray.length; i+=1){
            const nameElement = nameArray[i];
            totalScore += parseInt(document.querySelector(`input[name=${nameElement}, checked]`).value, 10);
        }
    })

    if(totalScore <= 0){
        userType = "dark";
    }else{
        userType = "fluffy";
    }
    
    console.log(userType);
}


export default Quizz;