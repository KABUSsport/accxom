const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ''

     client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = ['|𝗔𝗠_𝗨𝗣📌✌|','|با بتبا ئاو، مەدە لە پردی ناپیاو⛔|','|☀𝗔𝗕𝗢 𝗨𝗣⬆☀|',' 💔😥 خۆشبەختی گران بوو ئێمەشە هەژار بووین']
  
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "p") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});


client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {

case "avatar":
message.channel.send(`وێنەی ئەکاونتەکەت ئەوەیە <:emoji_299:765347080515354654>: ${message.author.avatarURL}`)
break;
 

case "<@652999772122120202>":
        
      
message.channel.send("فــەرمـــوو دڵـــی مــن ❤ ")
        


}
});

client.on("message", msg => {
  if (msg.content === "slaw") {
    msg.reply("**baxer bey dlm ❤**");
  }
});


client.on("message", msg => {
  if (msg.content === "reklam") {
    msg.reply("** farmw dllm https://discord.gg/bnMJzry ❤**");
  }
});

client.on("message", msg => {
  if (msg.content === "hi") {
    msg.reply("**baxer bey gyana ❤ **");
  }
});

client.on("message", msg => {
  if (msg.content === "222") {
    msg.reply("**hawl dawa dllm ❤ **");
  }
});

client.on("message", msg => {
  if (msg.content === "abo") {
    msg.reply("**<@652999772122120202> xoy chwabt adatawa ❤**");
  }
});

// ======== { • move  • }======== //
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "mov")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send(
          "``To use the command type this command <a:emoji_23:799005021303210024>: " + prefix + "move [USER]``"
        );
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `You have withdrawn<@${usermentioned}> to Your voice rum✅ `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name}`)
            .setColor("RANDOM")
            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "``You can not withdraw" +
              message.mentions.members.first() +
              " `This member must be in a vocal rome`"
          );
        }
      } else {
        message.channel.send(
          "**``You must be in an audio ROM in order to pull the member out to you``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});


// ======== { • moveall • }======== //
client.on("message", message => {
  if (message.content.startsWith(prefix + "moveall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**:x: You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null)
      return message.channel.send(`**You Have To Be In Room Voice**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send(
      `**__:❤: Success Moved All To Your Channel__**`
    );
  }
});



client.login("");



