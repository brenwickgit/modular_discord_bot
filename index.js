// Imports
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client();

// Environment Variables
require('dotenv').config()
const loginKey = process.env.CLIENT_KEY
const botChannel = process.env.BOT_CHANNEL

// Autonomous Features
const ProfanityFilter = require('./automations/profanity_filter')
const profanity = new ProfanityFilter(mode = 'green');

//  Commands
const CommandManager = require('./commands/command_manager')
const commands = new CommandManager(delimeter = '!');


client.login(loginKey);
bot_channel = botChannel;

// Handles all messages in all channels
client.on('ready', async () => {
    console.log('Bot Ready...');
})

// Reads all messages from all channels
client.on('message', (message) => {
    console.log(message.content);
    // Ignores all bot messages (including itself)
    if (!message.author.bot) {
        // Autonomous features
        profanity.checkMessage(message)
        // Command Handling
        commands.handleCommand(message)
    }
});

