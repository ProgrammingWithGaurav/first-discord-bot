require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ['MESSAGE']
});


client.on('ready', () => {
    console.log('Our bot is ready to go')
})

client.on('message', msg => {
    if (msg.content === 'Talk about something') {
        const questions = [
            "What have you created that you are most proud of?",
            "What's the best thing you got from one of your parents?",
            "What bends your mind every time you think about it?",
            "In your group of friends, what role do you play?",
            "What incredibly strong opinion do you have that is completely unimportant in the grand scheme of things?",
            "What's your favorite piece of clothing you own?",
            "What fictional place would you most like to go to?",
            "What's one place you've travelled that you never want to go back to?",
            "When people come to you for help, what do they usually want help with?",
            "What are you interested in that most people haven't heard of?",
            "Mountains or ocean?",
            "What was your best birthday?",
            "Pizza or tacos?",
            "What's the story behind one of your scars?",
            "Pancakes or waffles?",
            "Pirates or ninjas?",
            "What was the best compliment you've ever received?",
            "If you lost all of your possessions but one, what would you want it to be?",
            "Who inspires you to be better?",
            "What dumb accomplishment are you most proud of?",
            "When was the last time you changed your opinion about something major?",
            "What is something you can never seem to finish?",
            "What is one of your favorite smells?",
            "If you had to change your name, what would you change it to?",
            "What are you a natural at?",
            "What do you like most about your family?",
            "Have you ever saved someone's life?",
            "What's an unpopular opinion you have?",
            "Who is one of your best friends, and what do you love about them?",
            "Do you have any nicknames?",
            "What's one of your favorite comfort foods?",
            "What is your theme song?",
            "What is one of the great values that guides your life?",
            "What's your favorite book?",
            "What's the last book you gave up on and stopped reading?",
            "What's the worst movie you've ever seen?",
            "What issue will you always speak your mind about?",
            "What would you do on a free afternoon in the middle of the week?",
            "Pet peeves?",
            "What's the best piece of advice you ever received?",
            "Who was your favorite teacher and why?",
            "If you could have any superpower, what would it be and why?",
            "What's on your bucket list this year?",
            "If you could live in a book, TV show, or movie, what would it be?",
            "What languages do you speak?",
            "Would you rather be stuck on a broken ski lift or a broken elevator?",
            "If you were a vegetable, what vegetable would you be?",
            "What makes you cry?",
            "Who are some of your heroes?",
            "What's something you wish you'd figured out sooner?",
            "What's your favorite candy?",
            "What's your worst habit?",
            "Favorite city?",
            "What's your go-to dance move?",
            "Do you ever sing when you're alone? What songs?",
            "What's your earliest memory?",
            "What's something you learned in the last week?",
            "What story does your family always tell about you?",
            "What talent would you show off in a talent show?",
        ];

        const randomNumber = Math.floor(Math.random() * (questions.length));
        msg.author.send(questions[randomNumber]);
    }

    // if message ping then reply with pong
    if (msg.content === 'ping') {
        msg.reply('pong');
    }

    // If message is "!help" then reply with help message
    if (msg.content === '!help') {
        msg.reply('Hello! My name is Botty. I am a bot created by @Dracula#1945. I am currently in development and will be updated regularly. If you have any questions or concerns, please contact @Dracula#1945.');
    }
        
})

client.login(process.env.BOT_TOKEN)
