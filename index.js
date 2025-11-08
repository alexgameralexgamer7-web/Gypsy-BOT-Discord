require('dotenv').config(); // Permet de lire le fichier .env
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express'); // Nouveau : serveur HTTP pour Render

// --------------------
// Setup du bot Discord
// --------------------
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Événement lorsque le bot est prêt
client.on('ready', () => {
  console.log(`✅ Connecté en tant que ${client.user.tag}`);
});

// Événement lorsque le bot reçoit un message
client.on('messageCreate', msg => {
  if (msg.author.bot) return; // Ignore les messages du bot lui-même

  const content = msg.content.toLowerCase();

  if (content === '!gypsy') {
    msg.reply('Crew ! 🔥🤠');
  } else if (content === '!tiktok') {
    msg.reply('Voici le TikTok : https://www.tiktok.com/@gypsy_crew63?_t=ZN-8vUnAUx1VNW&_r=1');
  } else if (content === '!help') {
    msg.reply(
      "**Commandes disponibles :**\n" +
      "!Gypsy → Répond Crew ! 🔥🤠\n" +
      "!tiktok → Donne le TikTok officiel\n" +
      "!help → Liste toutes les commandes"
    );
  } else if (content.includes('gypsy crew')) {
    msg.reply('Gypsy Crews sont les meilleurs Pirates des Terres de Sea Of Thieves ! 🏴‍☠️');
  }
});

// Connexion du bot avec le token sécurisé
client.login(process.env.TOKEN);

// --------------------
// Serveur HTTP pour Render
// --------------------
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot Gypsy en ligne ! 🚀');
});

app.listen(port, () => {
  console.log(`🌐 Serveur HTTP actif sur le port ${port}`);
});
