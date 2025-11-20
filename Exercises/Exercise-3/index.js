 const jokeButton = document.getElementById('jokeButton');

 const jokeDisplay = document.getElementById('jokeDisplay');


// A big array of jokes of different nature. Name: `jokes`.
const jokes = [
	// One-liners / puns
	"I told my computer I needed a break, and now it won't stop sending me KitKat ads.",
	"Why don't scientists trust atoms? Because they make up everything.",
	"I used to play piano by ear, but now I use my hands.",
	"I told a joke about UDP — I’m not sure if anyone got it.",
	"Parallel lines have so much in common. It’s a shame they’ll never meet.",

	// Dad jokes
	"I'm reading a book about anti-gravity. It's impossible to put down.",
	"Why did the scarecrow win an award? Because he was outstanding in his field.",
	"I would tell you a construction pun, but I'm still working on it.",
	"Did you hear about the restaurant on the moon? Great food, no atmosphere.",
	"What do you call fake spaghetti? An impasta.",

	// Programmer / tech jokes
	"There are only 10 types of people in the world: those who understand binary and those who don't.",
	"A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
	"Why do programmers prefer dark mode? Because light attracts bugs.",
	"How many programmers does it take to change a light bulb? None — it's a hardware problem.",
	"I changed my password to 'incorrect' so whenever I forget it, the computer will say 'Your password is incorrect.'",

	// Knock-knock style (single-line adaptions)
	"Knock knock. Who's there? Lettuce. Lettuce who? Lettuce in, it's cold out here!",
	"Knock knock. Who's there? Boo. Boo who? Don't cry, it's just a joke.",

	// Observational / situational
	"I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day.",
	"I told my wife she was drawing her eyebrows too high. She looked surprised.",
	"My boss told me to have a good day — so I went home.",

	// Short witty
	"I used to be indecisive. Now I'm not so sure.",
	"I broke my finger last week. On the other hand, I'm okay.",
	"Change is hard. Have you ever tried to bend a coin?",

	// Classic / clean
	"Why did the bicycle fall over? Because it was two-tired.",
	"What do you call cheese that isn't yours? Nacho cheese.",
	"Why don't skeletons fight each other? They don't have the guts.",

	// Wordplay
	"I'm on a seafood diet. I see food and I eat it.",
	"I used to be a baker, but I couldn't make enough dough.",
	"The rotation of the earth really makes my day.",

	// Clever one-liners
	"I told my therapist about my kleptomania. He said I should take something for it.",
	"My memory has gotten so bad it has actually improved my sense of surprise.",

	// Lightly meta / self-referential
	"This joke will self-destruct in 5 seconds. Just kidding — it never was that good.",
	"I'm not lazy, I'm on energy-saving mode.",

	// Short story jokes
	"A perfectionist walked into a bar... apparently it wasn't set high enough.",
	"A termite walks into the bar and asks, 'Is the bartender here?'",

	// Knock-knock (again)
	"Knock knock. Who's there? Cow says. Cow says who? No — cow says moooo!",

	// Slightly longer / silly
	"I once got fired from a calendar factory. All I did was take a day off.",
	"I told the librarian I was looking for books about paranoia. She whispered, 'They're right behind you.'",

	// Family-friendly observational
	"Why did the math book look sad? Because it had too many problems.",
	"What did one wall say to the other? I'll meet you at the corner.",

	// Animal jokes
	"Why don't oysters share their pearls? Because they're shellfish.",
	"What do you call a fish wearing a bowtie? Sofishticated.",

	// Office humor
	"My resume is just a list of things I hope I never have to do again.",
	"I have a photographic memory, but I always forget to bring the film.",

	// Food jokes
	"Why did the tomato blush? Because it saw the salad dressing.",
	"What do you call a fake noodle? An impasta (yes, it's worth repeating).",

	// Word twist
	"If we shouldn't eat at night, why is there a light in the fridge?",
	"I told my suitcases there will be no vacation this year. Now I'm dealing with emotional baggage.",

	// Clever puns
	"I once heard a joke about amnesia, but I forgot how it goes.",
	"Broken pencils are pointless.",

	// Gentle dark-ish but safe
	"I'd tell you a chemistry joke, but I know I wouldn't get a reaction.",
	"Velcro — what a rip-off.",

	// Programmer extra
	"Why was the JavaScript developer sad? Because they didn't Node how to Express themself.",
	"To understand recursion you must first understand recursion.",

	// Closing fun ones
	"What do you call a snowman with a six-pack? An abdominal snowman.",
	"I used to be a foster parent for bees. They were hive kids.",
	"If you see a robbery at an Apple Store does that make you an iWitness?",
	"I stayed up all night to see where the sun went. Then it dawned on me.",
	"Why did the golfer bring two pairs of pants? In case he got a hole in one.",
	"Sometimes I tuck my knees into my chest and lean forward. That's my sit-up joke.",
];

function getRandomJoke(){
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

jokeButton.addEventListener('click', () =>{
    const joke = getRandomJoke();
    jokeDisplay.textContent = joke;
    jokeDisplay.classList.remove("fade-in");
     void jokeDisplay.offsetWidth;
    jokeDisplay.classList.add("fade-in");

})
