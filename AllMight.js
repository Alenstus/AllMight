const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log('${bot.user.username} is online!');
	bot.user.setGame("Sucking Deku's Cock.");
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	
	//Say Hello
	if(cmd === `*hello`){
		return message.channel.send("Hello, Citizens!")
		
	}
	
	//Ping-Pong
	if(cmd === `*ping`){
		message.reply('Pong!');
	}
	
	//NO U 
	if(message.content.toLowerCase() === "fag"){
		message.reply('No, u!');
	}
	if(message.content.toLowerCase() === "faggot"){
		message.reply('No, u!');
	}
	if(message.content.toLowerCase() === "Faggot"){
		message.reply('No, u!');
	}
	if(message.content.toLowerCase() === "Fag"){
		message.reply('No, u!');
	}
	
	//CLEAR MESSAGES
	if (message.content == `*clear`) {

     

      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        return;
      }

      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; 
            message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
      }
    }
  });



bot.login(botconfig.token);