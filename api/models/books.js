const path = require('node:path');

const jsonDbPath = path.join(__dirname, '/../data/pizzas.json');

const { parse } = require('../utils/json');

const defaultBooks = [
  {
    title: '100 years of solitude',
    nb_pages: 480,
    author: 'Gabriel Garcia Marquez',
    description: 'Magic and destiny intertwined in a soulbreaking story',
    score_sluttiness: 7,
    score_darkness: 6,
    score_fluffiness: 4,
    photo: '',
  },

  {
    title: 'Reunion',
    nb_pages: 110,
    author: 'Fred Uhlman',
    description: 'Friendship and nazis, barely gay',
    score_sluttiness: 5,
    score_darkness: 5,
    score_fluffiness: 4,
    photo: '',
  },

  {
    title: 'Dune',
    nb_pages: 826,
    author: 'Frank Herbert',
    description: 'Simply. DUNE.',
    score_sluttiness: 5,
    score_darkness: 8,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: 'The Country Girls trilogy',
    nb_pages: 704,
    author: "Edna O'Brien",
    description: "What it's like to be a girl in 1950s Ireland, and what it's like to be a woman in general",
    score_sluttiness: 4,
    score_darkness: 6,
    score_fluffiness: 2,
    photo: '',
  },

  {
    title: 'The Little Prince',
    nb_pages: 93,
    author: 'Antoine de Saint-Exupéry',
    description: 'The story of a cute little prince and his fox friend, until it gets worse',
    score_sluttiness: 10,
    score_darkness: 5,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    nb_pages: 448,
    author: 'J.K. Rowling',
    description: 'I mean, come on, we know you know',
    score_sluttiness: 10,
    score_darkness: 4,
    score_fluffiness: 6,
    photo: '',
  },

  {
    title: 'Percy Jackson : The Lightning Thief',
    nb_pages: 370,
    author: 'Rick Riordan',
    description: 'Greek Gods had kids and of course, they have to save the world somehow',
    score_sluttiness: 8,
    score_darkness: 4,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: 'Do androids dream of electric sheep ?',
    nb_pages: 270,
    author: 'Philip K. Dick',
    description: 'A.k.a. Blade Runner',
    score_sluttiness: 7,
    score_darkness: 9,
    score_fluffiness: 4,
    photo: '',
  },

  {
    title: 'Fahrenheit 451',
    nb_pages: 272,
    author: 'Ray Bradbury',
    description: 'Where firemen burn books and spirits thrive for freedom',
    score_sluttiness: 7,
    score_darkness: 6,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'My brilliant friend',
    nb_pages: 336,
    author: 'Elena Ferrante',
    description: "A woman's life in 1960s Naples, her fights for freedom, love and happiness",
    score_sluttiness: 5,
    score_darkness: 5,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'Norwegian Wood',
    nb_pages: 350,
    author: 'Haruki Murakami',
    description: "Sex, drugs and rock'n'roll, but it's melancholic and flirts with death a bit more than I would recommend",
    score_sluttiness: 9,
    score_darkness: 7,
    score_fluffiness: 6,
    photo: '',
  },

  {
    title: 'The Prince',
    nb_pages: 164,
    author: 'Niccolo Machiavelli',
    description: 'How to invade neighbouring land and keep power over it for dummies',
    score_sluttiness: 8,
    score_darkness: 5,
    score_fluffiness: 3,
    photo: '',
  },

  {
    title: 'The Metamorphosis',
    nb_pages: 70,
    author: 'Franz Kafka',
    description: "One day, Gregor wakes up in the body of a giant bug. What could possibly go wrong ? Everything, you're right",
    score_sluttiness: 9,
    score_darkness: 7,
    score_fluffiness: 2,
    photo: '',
  },

  {
    title: 'The Picture of Dorian Gray',
    nb_pages: 344,
    author: 'Oscar Wilde',
    description: 'Handsome young man gets his soul trapped into his portrait. Of course, it goes wrong',
    score_sluttiness: 10,
    score_darkness: 6,
    score_fluffiness: 8,
    photo: '',
  },

  {
    title: 'Conversations with friends',
    nb_pages: 320,
    author: 'Sally Rooney',
    description: "Probably one of the best books about what it's like to be a woman in our modern society",
    score_sluttiness: 6,
    score_darkness: 5,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'Pride and Prejudice',
    nb_pages: 432,
    author: 'Jane Austen',
    description: 'Your best 18th century drama gossip story',
    score_sluttiness: 9,
    score_darkness: 2,
    score_fluffiness: 8,
    photo: '',
  },

  {
    title: 'The Bible',
    nb_pages: 1200,
    author: 'Unknown',
    description: 'Because you need Jesus you reckless slut',
    score_sluttiness: 10,
    score_darkness: 7,
    score_fluffiness: 2,
    photo: '',
  },

  {
    title: 'A Distant Neighborhood',
    nb_pages: 400,
    author: 'Jiro Taniguchi',
    description: 'When a middle-aged man goes back to his hometown and suddenly wakes up in his 10 year-old body, he feels like he might be able to change his past',
    score_sluttiness: 1,
    score_darkness: 5,
    score_fluffiness: 6,
    photo: '',
  },

  {
    title: 'Nana, Vol. 1',
    nb_pages: 196,
    author: 'Ai Yazawa',
    description: "2 girls sharing a name and a friendship living their rock'n'roll, drama-fulfilled lives",
    score_sluttiness: 7,
    score_darkness: 6,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: 'Brave New World',
    nb_pages: 311,
    author: 'Aldoux Huxley',
    description: 'Dystopia, love and lab-made babies',
    score_sluttiness: 7,
    score_darkness: 5,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'The Sun also rises',
    nb_pages: 278,
    author: 'Ernest Hemingway',
    description: 'Crazy parties in Spain, fucked-up people who try to love each other and fail',
    score_sluttiness: 5,
    score_darkness: 5,
    score_fluffiness: 6,
    photo: '',
  },

  {
    title: 'Froth on the Daydream',
    nb_pages: 221,
    author: 'Boris Vian',
    description: 'The worls is all pretty and they love each other, until it takes the wrong turn',
    score_sluttiness: 9,
    score_darkness: 7,
    score_fluffiness: 6,
    photo: '',
  },

  {
    title: 'The Fall',
    nb_pages: 147,
    author: 'Albert Camus',
    description: 'Philosophical sassy monologue about life',
    score_sluttiness: 6,
    score_darkness: 5,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'The Secret History',
    nb_pages: 659,
    author: 'Donna Tart',
    description: 'Dark-academia, murder-filled fascinating story',
    score_sluttiness: 10,
    score_darkness: 7,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: '1984',
    nb_pages: 328,
    author: 'George Orwell',
    description: 'THE dystopia',
    score_sluttiness: 9,
    score_darkness: 8,
    score_fluffiness: 1,
    photo: '',
  },

  {
    title: 'The Hunger Games',
    nb_pages: 374,
    author: 'Suzanne Collins',
    description: "Fighting for your life, fighting for your love and fighting for freedom. It's great",
    score_sluttiness: 8,
    score_darkness: 5,
    score_fluffiness: 6,
    photo: '',
  },

  {
    title: 'The Seagull',
    nb_pages: 96,
    author: 'Anton Chekhov',
    description: 'A play about the soul-wrenching pain of living in a plain, desperate world',
    score_sluttiness: 3,
    score_darkness: 7,
    score_fluffiness: 8,
    photo: '',
  },

  {
    title: 'Don Juan on trial',
    nb_pages: 112,
    author: 'Eric-Emmanuel Schmitt',
    description: 'A queer Don Juan and (of course) a lot of drama',
    score_sluttiness: 2,
    score_darkness: 5,
    score_fluffiness: 8,
    photo: '',
  },

  {
    title: 'Heavier than heaven : a biography of Kurt Cobain',
    nb_pages: 448,
    author: 'Charles R. Cross',
    description: 'The biography of the best person ever',
    score_sluttiness: 3,
    score_darkness: 8,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: 'The Big Sleep',
    nb_pages: 240,
    author: 'Raymond Chandler',
    description: "One of Philip Marlowe's cases, and as always, it is full of femme fatales, whiskey and cigarettes",
    score_sluttiness: 6,
    score_darkness: 7,
    score_fluffiness: 6,
    photo: '',
  },

  {
    title: 'Dubliners',
    nb_pages: 182,
    author: 'James Joyce',
    description: "Come take a walk along the Liffey with Dublin's vibrant inhabitants",
    score_sluttiness: 6,
    score_darkness: 6,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'The Sailor who fell from grace with the sea',
    nb_pages: 192,
    author: 'Yukio Mishima',
    description: 'Psychopathic tendencies and daddy issues meet in the person of a reckless young boy',
    score_sluttiness: 4,
    score_darkness: 7,
    score_fluffiness: 3,
    photo: '',
  },

  {
    title: 'The Ice People',
    nb_pages: 282,
    author: 'René Barjavel',
    description: 'Love and magic in Antarctica',
    score_sluttiness: 3,
    score_darkness: 5,
    score_fluffiness: 9,
    photo: '',
  },

  {
    title: 'No Exit',
    nb_pages: 66,
    author: 'Jean-Paul Sartre',
    description: "L'enfer c'est les autres (yes, hell is other people, you're right Jean-Paul)",
    score_sluttiness: 5,
    score_darkness: 4,
    score_fluffiness: 6,
    photo: '',
  },

  {
    title: 'The Girl with the dragon tattoo',
    nb_pages: 544,
    author: 'Stieg Larsson',
    description: 'Breathtaking thriller, wrecked characters, Sweden, what else do you want ?',
    score_sluttiness: 7,
    score_darkness: 7,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: 'Crimes and punishments',
    nb_pages: 496,
    author: 'Fyodor Dostoievski',
    description: 'Is murder okay if your neighbour is a bitch ? Asking for a friend',
    score_sluttiness: 6,
    score_darkness: 8,
    score_fluffiness: 1,
    photo: '',
  },

  {
    title: 'The Great Gatsby',
    nb_pages: 208,
    author: 'F. Scott Fitzgerald',
    description: 'Rich guy throws crazy parties for his crush, but she is a heartless witch (I love her)',
    score_sluttiness: 9,
    score_darkness: 5,
    score_fluffiness: 8,
    photo: '',
  },

  {
    title: 'Wunderkind',
    nb_pages: 306,
    author: 'Nikolai Grozni',
    description: "Classical music students lead a rock'n'roll life in communist Bulgaria",
    score_sluttiness: 3,
    score_darkness: 5,
    score_fluffiness: 6,
    photo: '',
  },

  {
    title: 'Little Women',
    nb_pages: 362,
    author: 'Louisa May Alcott',
    description: 'Four sisters navigate their early life as the war begins in the US',
    score_sluttiness: 9,
    score_darkness: 4,
    score_fluffiness: 8,
    photo: '',
  },

  {
    title: 'Circe',
    nb_pages: 416,
    author: 'Madeline Miller',
    description: 'A fascinating retelling of some infamous Greek myths, with an amazing female protagonist',
    score_sluttiness: 7,
    score_darkness: 7,
    score_fluffiness: 8,
    photo: '',
  },

  {
    title: 'Flowers of Evil',
    nb_pages: 228,
    author: 'Charles Baudelaire',
    description: 'French dude being unhinged about life and stuff for hundreds of poems straight. A must-read',
    score_sluttiness: 8,
    score_darkness: 9,
    score_fluffiness: 3,
    photo: '',
  },

  {
    title: 'Tender is the night',
    nb_pages: 320,
    author: 'F. Scott Fitzgerald',
    description: 'Dramatic love stories on the French Riviera, mentally-ill characters involved',
    score_sluttiness: 6,
    score_darkness: 7,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: 'The perks of being a wallflower',
    nb_pages: 224,
    author: 'Stephen Chbosky',
    description: 'A touching and relatable coming-of age story, set in high school of course',
    score_sluttiness: 7,
    score_darkness: 4,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'I am Pilgrim',
    nb_pages: 624,
    author: 'Terry Hayes',
    description: 'Page-turning thriller that will make you want to be either a spy or a writer',
    score_sluttiness: 4,
    score_darkness: 6,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'The song of Achilles',
    nb_pages: 416,
    author: 'Madeline Miller',
    description: "The story of the Trojan war, told by Patroclus. Oh, and it's gay af",
    score_sluttiness: 9,
    score_darkness: 4,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'Novel with cocaine',
    nb_pages: 204,
    author: 'M. Agueev',
    description: "I mean, it's in the title, but yeah, this dude does drugs. And thinks about life a lot, too",
    score_sluttiness: 2,
    score_darkness: 7,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: 'Goodnight Punpun, Vol. 1',
    nb_pages: 396,
    author: 'Inio Asano',
    description: 'The life story of a pretty fucked-up boy. Your soul will be torn apart by the end of the series',
    score_sluttiness: 6,
    score_darkness: 9,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: "Childhood's end",
    nb_pages: 214,
    author: 'Arthur C. Clarke',
    description: 'Depressive sci-fi with a touch of apocalypse',
    score_sluttiness: 6,
    score_darkness: 7,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: 'Gone Girl',
    nb_pages: 432,
    author: 'Gillian Flynn',
    description: "She's a ten, but she's crazy. Girl boss though",
    score_sluttiness: 6,
    score_darkness: 8,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: 'Fight Club',
    nb_pages: 224,
    author: 'Chuck Palahniuk',
    description: "When you're new BFF turns out to be a mentally unstable, anti-capitalist, violent arsonist, so you become him",
    score_sluttiness: 5,
    score_darkness: 8,
    score_fluffiness: 2,
    photo: '',
  },

  {
    title: 'We were liars',
    nb_pages: 256,
    author: 'E. Lockhart',
    description: 'Privileged adventure-seeking teens fucked up, but how exactly ?',
    score_sluttiness: 7,
    score_darkness: 4,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'Kafka on the shore',
    nb_pages: 480,
    author: 'Haruki Murakami',
    description: 'A lost young man goes away, looking for a meaning to his life, and answers to his questions',
    score_sluttiness: 6,
    score_darkness: 6,
    score_fluffiness: 6,
    photo: '',
  },

  {
    title: 'Jonathan Strange and Mr. Norrell',
    nb_pages: 864,
    author: 'Susanna Clarke',
    description: 'Two dark academia gentlemen wizards (who should probably hook up) deal with fairies and stuff',
    score_sluttiness: 5,
    score_darkness: 5,
    score_fluffiness: 6,
    photo: '',
  },

  {
    title: 'A game of thrones',
    nb_pages: 694,
    author: 'George R. R. Martin',
    description: 'Fantasy, political intrigues and unhinged sex, what more could you want ?',
    score_sluttiness: 5,
    score_darkness: 7,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: 'Never let me go',
    nb_pages: 288,
    author: 'Kazuo Ishiguro',
    description: 'What is it like to be human ?',
    score_sluttiness: 6,
    score_darkness: 6,
    score_fluffiness: 8,
    photo: '',
  },

  {
    title: 'Holes',
    nb_pages: 288,
    author: 'Louis Sachar',
    description: 'The adventures of incarcerated boys who have to dig holes. Like, a lot of them',
    score_sluttiness: 4,
    score_darkness: 4,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'Coraline',
    nb_pages: 176,
    author: 'Neil Gaiman',
    description: "The mysteries surrounding a little girl's house slowly reveal themselves in this spooky story",
    score_sluttiness: 6,
    score_darkness: 6,
    score_fluffiness: 5,
    photo: '',
  },

  {
    title: 'The Catcher in the Rye',
    nb_pages: 240,
    author: 'J. D. Salinger',
    description: 'The unhinged wandering of a funny but depressed boy in New York',
    score_sluttiness: 8,
    score_darkness: 7,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'Hollywood',
    nb_pages: 248,
    author: 'Charles Bukowski',
    description: 'The following of a funny laid-back screenwriter on his journey through the making of a movie',
    score_sluttiness: 4,
    score_darkness: 6,
    score_fluffiness: 7,
    photo: '',
  },

  {
    title: 'The light we carry',
    nb_pages: 336,
    author: 'Michelle Obama',
    description: "The Bible didn't work ? There, take this",
    score_sluttiness: 7,
    score_darkness: 3,
    score_fluffiness: 8,
    photo: '',
  },

  {
    title: 'Vicious',
    nb_pages: 400,
    author: 'V.E. Schwab',
    description: 'Friends to enemies and super powers',
    score_sluttiness: 6,
    score_darkness: 5,
    score_fluffiness: 6,
    photo: '',
  },
];

function readAllBooks(orderBy) {
  const orderByTitle = orderBy?.includes('title') ? orderBy : undefined;
  let orderedMenu;
  const pizzas = parse(jsonDbPath, defaultBooks);
  if (orderByTitle) orderedMenu = [...pizzas].sort((a, b) => a.title.localeCompare(b.title));
  if (orderByTitle === '-title') orderedMenu = orderedMenu.reverse();

  const allPizzasPotentiallyOrderd = orderedMenu ?? pizzas;
  return allPizzasPotentiallyOrderd;
}

module.exports = readAllBooks;
