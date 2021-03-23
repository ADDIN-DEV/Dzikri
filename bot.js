let Discord = require("discord.js");
let bot = new Discord.Client();

bot.on("ready", () => {
  console.log(`Your Assistance is ready!`);
  bot.user.setActivity('a!help' , { type: "WATCHING"})

});
 
bot.on("message", msg => {
  if (msg.content === "p") {
    msg.channel.send("Mau apa kau??!");
  }

  if (msg.content === "a!av") {
    let embed = new Discord.MessageEmbed()
  
  .setThumbnail(msg.author.displayAvatarURL())
  .setColor("#33c5ff")
.setTitle("Your Avatar:")
  msg.channel.send(embed)

}

if(msg.content === 'gabut') {
  msg.reply('Mau ngapain yah?')
}
  

  if (msg.content === "a!slmt pagi") {
    msg.channel.send("iya, pagi! 🌅");
  }

  if (msg.content === "a!slmt siang") {
    msg.channel.send("iya, siang! ☀️");
  }

  if (msg.content === "a!slmt sore") {
    msg.channel.send("iya, sore! 🌇");
  }

  if (msg.content === "a!slmt malam") {
    msg.channel.send("iya, Malam! 🌙");
  }

  if (msg.content === "pagi") {
    msg.reply("iya, pagi! 🌅");
  }

  if (msg.content === "siang") {
    msg.reply("iya, siang! ");
  }

  if (msg.content === "panas") {
    msg.reply("Jadi pengen makan Es krim 🍨. nyam nyam nyam 😋");
  }

  if (msg.content === "a!traktirin es krim dong") {
    msg.reply("kagak punya duit gw, kamu ajalah");
  }

  if (msg.content === "off dulu ya dzikri") {
    msg.reply("Oke boss!");
  }
  
  
  if(msg.content === 'gak punya duit') {
    msg.reply('Bodo amat!')
  }

  if(msg.content === 'dingin') {
    msg.reply('punya jaket gak??.')
  }  
  
  if(msg.content === 'gak punya') {
    msg.reply('Beli sana :v')
  }

if(msg.content === 'sepi') {
  msg.reply('iya nih 🦗 🦗 🦗')
}
  
if(msg.content === 'bye') {
  msg.reply('bye')
}


if(msg.content === 'robot pintar') {
  msg.reply('terima kasih ☺️')
}

if(msg.content === "a!help") {
let embed = new Discord.MessageEmbed()
  .setTitle("=======> Dzikri's Commands <=======")
  .setColor("#ffa233")
  .setDescription("`a!slmt pagi`, `a!slmt siang`, `a!slmt sore`, `a!slmt malam`, `sepi`, `p`, `a!av`, `panas`, `dingin`, 'gabut', `robot pintar`, ")
  .setFooter("Thanks for use this bot ☺️")
  msg.channel.send(embed)

}
});


bot.login("ODE0MDAwMzQ2ODg4MjczOTMw.YDXe5g.drrhPqEQiBMppZYjXWue5TArsWc");
