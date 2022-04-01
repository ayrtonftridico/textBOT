const Discord = require('discord.js');
require('dotenv').config()
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const TOKEN = process.env.DISCORDKEY;

client.on("ready", () => {
    console.log('textBOT online!');
});

client.on("message", (msg) => {
    if(msg.content === '!commands'){
        
        const commands = 'Os comandos disponiveis nesta versão são: \n\n!randomranger = Qual power ranger você é?? \n!v = Qual versão estamos??'

        msg.channel.send('' + commands);}

    })

client.on("message", (msg) => {
    if(msg.content === '!randomranger'){

        let rangerMsg = [
            ["Azul"],
            ["Amarelo"],
            ["Preto"],
            ["Verde"],
            ["Rosa"]
        ];
        let random = Math.floor( (Math.random() * rangerMsg.length ) +1)  ;
        msg.channel.send('Vocé é o power ranger ' + rangerMsg[random-1] );}
   
    if(msg.content === '!v'){
        msg.channel.send(' Estamos na versão 1.0 ');}

})

client.login(TOKEN);