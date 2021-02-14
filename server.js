const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ''

     client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = ['NAQEB is Here #7574','peryamلەبێگانەیەکەوە بووی بە ھەموو کەسم','ژیانم لە کەسێکدایە',' بوونت بۆمن شانازیە ']
  
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
 

case "<@790600594838257696>":
        
      
message.channel.send("فــەرمـــوو   ")
        


}
});

client.on("message", msg => {
  if (msg.content === "slaw") {
    msg.reply("**baxer bey  **");
  }
});


client.on("message", msg => {
  if (msg.content === "reklam") {
    msg.reply("** farmw https://discord.gg/99KsGZHrsv **");
  }
});

client.on("message", msg => {
  if (msg.content === "hi") {
    msg.reply("**baxer bey  **");
  }
});

client.on("message", msg => {
  if (msg.content === "O cash") {
    msg.reply("** 50k bnera ba aqre   **");
  }
});

client.on("message", msg => {
  if (msg.content === "mama") {
    msg.reply("**<@790600594838257696>  jare majale nya **");
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



client.login("mfa.cKjw9e6z-FHslmAqL1clh5TSGW5CiLvNZLr750CCZgqswEA9jGrGtSpZCga3WZhiAQEErffpSLp1_TRcQNUl");



