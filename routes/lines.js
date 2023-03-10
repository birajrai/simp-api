const express = require('express');
const router = express.Router();
const linesArray = [
    'Are you a magician? Because whenever I look at you, everyone else disappears.',
    'Are you an interior decorator? Because when I saw you, the entire room became beautiful.',
    'Is your name Google? Because you have everything I’ve been searching for.',
    'Do you have a map? I just got lost in your eyes.',
    'Excuse me, do you have a name or can I call you mine?',
    'Do you believe in love at first sight, or should I walk by again?',
    'I must be a snowflake, because I’ve fallen for you.',
    'If you were a vegetable, you’d be a cutecumber.',
    'Do you have a Band-Aid? I just scraped my knee falling for you.',
    'If you were a library book, I’d never return you.',
    'Do you have a sunburn or are you always this hot?',
    'Do you have a map to your heart? I keep getting lost in your eyes.',
    'Can I follow you where you go? Because my parents always told me to follow my dreams.',
    'Are you a camera? Because every time I look at you, I smile.',
    'Did it hurt when you fell from heaven?',
    'Do you have a name, or can I call you mine?',
    'Can I tie your shoes? Because I can’t have you falling for anyone else.',
    'I’m not a genie, but I can make your dreams come true.',
    'I must be a snowflake because I’ve fallen for you.',
    'Do you have a name, or can I call you mine?',
    'Are you Australian? Because when I look at you, I feel like I’m down under.',
    'Can I borrow a quarter? I want to call my mom and tell her I just met the man/woman of my dreams.',
    'I’m not a photographer, but I can definitely picture us together.',
    'Do you have a Band-Aid? Because I just scraped my knee falling for you.',
    'I’m not saying you’re the best catch out there, but you’re definitely a catch worth keeping.',
    'Excuse me, but I think you dropped something: my jaw.',
    'Are you a magician? Because every time I look at you, everyone else disappears.',
    'Do you have a map? Because I just got lost in your eyes.',
    'Do you have a Band-Aid? I just scraped my knee falling for you.',
    'Excuse me, do you have a name or can I call you mine?',
    'Do you believe in love at first sight, or should I walk by again?',
    'Are you a bank loan? Because you have my interest.',
    'Are you an alien? Because you just abducted my heart.',
    'Are you a parking ticket? Because you’ve got FINE written all over you.',
    'Do you have a name or can I call you mine?',
    'I’m sorry, do you mind if we share this umbrella?',
    'Are you a magician? Because every time I look at you, everyone else disappears.',
    'Do you have a name, or can I call you mine?',
    'Can I follow you where you go? Because my parents always told me to follow my dreams.',
    'Excuse me, but I think you dropped something: my jaw.',
    'Are you a camera? Because every time I look at you, I smile.',
    'Do you have a map to your heart? I keep getting lost in your eyes.',
    'I must be lost because heaven is a long way from here.',
    'Do you have a name, or can I call you mine?',
    'Are you a thief? Because you just stole my heart.',
    'Excuse me, but I think you dropped something: my jaw.',
    'Do you have a map? Because I just got lost in your eyes.',
    "Damn, I'm no weather man, but you can expect a couple inches tonight.",
    "Hey, my name's Microsft. Can I crash at your place tonight?",
    'Did the sun come out or did you just smile at me?',
    "I'm no photographer, but I can picture us together.",
    'Feel my shirt. Know what it’s made of? Boyfriend material.',
    'If I could rearrange the alphabet, I would put U and I together.',
    'I was blinded by your beauty; I’m going to need your name and phone number for insurance purpose',
    'Can I follow you where you’re going right now? Because my parents always told me to follow my dreams.',
    'Is this the Hogwarts Express? Because it feels like you and I are headed somewhere magical.',
    "I'm not drunk, I'm just intoxicated by YOU.",
    'Are you Jewish? Cause you ISRAELI HOT.',
    'Are you a cat? Cause you are purrrfect',
    'They say Disneyland is the happiest place on earth. Well apparently, no one has ever been standing next to you.',
    'Are you religious? Because you’re the answer to all my prayers.',
    'I seem to have lost my phone number. Can I have yours?',
    'Aside from being sexy, what do you do for a living?',
    'Hi, how was heaven when you left it?',
    "My love for you is like diarrhea, I just can't hold it in.",
    "Baby, if you were words on a page, you'd be fine print.",
    'Was that an earthquake, or did you just rock my world.',
    'Do you want to go to In-and-Out for burgers or just in-and-out of me?',
    'We’re not socks, but I think we’d make a great pair.',
    'Do you have a map? I keep getting lost in your eyes.',
    'Do you like Star Wars? Because Yoda only one for me!',
    'You’re so beautiful that you made me forget my pickup line',
    'Did you invent the airplane? Because you seem Wright for me.',
    'I’m lost. Can you give me directions to your heart?',
    'There’s only one thing I want to change about you, and that’s your last name.',
    "You're so sweet, you'd put Hershey's out of business!",
    "You must be made of cheese. Because you're looking Gouda tonight!",
    "I'm glad I remembered to bring my library card. 'Cause I am totally checking you out!",
    "Kiss me if I'm wrong. But dinosaurs still exist, right?",
    'You must be a high test score. Because I want to take you home and show you to my mother.',
    "I wasn't always religious. But I am now, because you're the answer to all my prayers.",
    'Mario is red, Sonic is blue, will you be my player 2.',
    'Do you know CPR? Because you are taking my breath away!',
    'Are you an elevator? Because I’ll go up and down on you.',
    'Are you lost ma’am? Because heaven is a long way from here.',
    'Are you a cat because I’m feline a connection between us.',
    'If you were a flower you’d be a damnnn-delion.',
    'They say that kissing is a language of love, so would you mind starting a conversation with me?',
    'Did your licence get suspended for driving all these guys crazy?',
    "I'd like to do Astronomy, but instead of looking at the heavens I'd like to look at you.",
    'Was your dad a boxer? Because damn, you’re a knockout!',
    'Is there an airport nearby or is it my heart taking off?',
    'Is your dad a terrorist? Cause you’re the bomb.',
    'Are you my phone charger? Because without you, I’d die.',
    'You must be a broom, ‘cause you just swept me off my feet.',
    'Roses are red, I want you to remember. You are the reason, I lost no nut November.',
    'You are so hot, that the temperature itself broke the ice.',
    "Just took a DNA test. Turns out I'm 100% your type.",
    'Not really into sunsets, but I would love to see you go down.',
    "Call me country roads, cause I'mma take you home.",
    'Screw the alphabet, cause U R A Q T.',
    'If I asked you out on a date, would your answer be the same as your answer to this one?',
    "One a scale of 1 to 10, you are an 8. And I'm in 2 you.",
    'Excuse me, miss, do you have a name or can I call you mine?',

    "I must be a snowflake because I've fallen for you, beautiful.",

    "Is your name Google? Because you have everything I've been searching for.",

    'You must be a magician, because every time I look at you, everyone else disappears.',

    "I'm no mathematician, but I think we're a perfect match.",

    "Excuse me, miss, but I couldn't help but notice you're beautiful. Can I take you out sometime?",

    'Do you have a map? I keep getting lost in your eyes.',

    'I must be lost because heaven is a long way from here, and yet, I found an angel.',

    "If I could rearrange the alphabet, I'd put 'U' and 'I' together.",

    "Are you a parking ticket? 'Cause you've got 'fine' written all over you.",
];
var lines = [];
for (let i = 0; i < linesArray.length; i++) {
    lines.push({
        id: i,
        line: linesArray[i],
    });
}

// Getting all pick up lines
router.get('/', (req, res) => {
    res.json(lines);
});

// Getting random pick up lines
router.get('/random', (req, res) => {
    res.json(lines[Math.floor(Math.random() * lines.length)]);
});

// Getting the pick up line with id
router.get('/:id', (req, res) => {
    res.json(lines[req.params.id]);
});

module.exports = router;
