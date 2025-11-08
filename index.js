require('dotenv').config(); // Permet de lire le fichier .env
const { Client, GatewayIntentBits } = require('discord.js');

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

  // Commande !Gypsy
  if (content === '!gypsy') {
    msg.reply('Crew ! 🔥🤠');
  }

  // Commande !tiktok
  else if (content === '!tiktok') {
    msg.reply('Voici le TikTok : https://www.tiktok.com/@gypsy_crew63?_t=ZN-8vUnAUx1VNW&_r=1');
  }

  // Commande !help
  else if (content === '!help') {
    msg.reply(
      "**Commandes disponibles :**\n" +
      "!Gypsy → Répond Crew ! 🔥🤠\n" +
      "!tiktok → Donne le TikTok officiel\n" +
      "!help → Liste toutes les commandes"
    );
  }

  // Réponse automatique si quelqu'un dit "gypsy crew"
  else if (content.includes('gypsy crew')) {
    msg.reply('Gypsy Crews sont les meilleurs Pirates des Terres de Sea Of Thieves ! 🏴‍☠️');
  }
});

// Connexion du bot avec le token sécurisé
client.login(process.env.TOKEN);
