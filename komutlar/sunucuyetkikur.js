const Discord = require ('discord.js');
exports.run = function(client, message, args) {

if (!message.guild) {

  const ozelmesajuyari = new Discord.RichEmbed()
.setcolor ("BLUE")
.setAuthor(message.author.username, message.author.avatarUrl)
.setTitle('Komutlarımızı Özelden Kullanamassın! | EndlessLove Ekibi')
 return message.author.sendEmbed(ozelmesajuyari); }
if (!message.member.hasPermission("Administrator")) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle(":x: Bu komutu Kullanabilmek için **Yonetici** Yetkisine sahip olmalısın"));
message.guild.createRole({
name: 'SunucuSahibi',
color: 'BLUE',
permissions: [
"ADMINISTRATOR",
]
})

message.guild.createRole({
name: 'Yönetici',
color: 'RED',
permissions: [
"ADMINISTRATOR",
]
})

message.guild.createRole({
name: 'MODERATÖR',
color: 'ORANGE',
permissions: [
"MANAGE_GUILD",
"MANAGE_ROLES",
"MUTE_MEMBERS",
"DEAFEN_MEMBERS",
"MANAGE_MESSAGES",
"MANAGE_NICKNAMES",
]
  })

message.guild.createRole({
name: 'YouTuber',
color: 'RED',
})

message.guild.createRole({
name: 'Üye',
color: 'PURPLE',
})

message.guild.createRole({
name: 'Bot',
color: 'WHİTE'

})
.then(role => message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle(":heavy_check_mark: Roller Kuruldu!")))
  .catch(console.error)
    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucuyetkikur',
  description: 'yetki',
  usage: 'yetki'
}