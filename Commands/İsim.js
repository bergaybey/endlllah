const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const db = new qdb.table("ayarlar");

module.exports.execute = async (client, message, args, ayar, emoji) => {
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter("Endless ❤️").setColor(client.randomColor()).setTimestamp();
  if(!ayar.teyitciRolleri) return message.channel.send("**Roller ayarlanmamış!**").then(x => x.delete({timeout: 5000}));
  if(!ayar.teyitciRolleri.some(rol => message.member.roles.cache.has(rol)) && !message.member.roles.cache.has(ayar.sahipRolu)) return message.channel.send(embed.setDescription(`İsim komutunu kullanabilmek için herhangi bir yetkiye sahip değilsin.`)).then(x => x.delete({timeout: 5000}));
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!uye) return message.channel.send(embed.setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({timeout: 5000}));
  if (message.member.roles.highest.position <= uye.roles.highest.position) return message.channel.send(embed.setDescription(`Belirttiğin kişi senden üstün veya onunla aynı yetkidesin!`)).then(x => x.delete({timeout: 5000}));
  args = args.filter(a => a !== "" && a !== " ").splice(1);
  let yazilacakIsim;
  if (db.get(`ayar.isim-yas`)) {
    let isim = args.filter(arg => isNaN(arg)).map(arg => arg.charAt(0).replace('i', "İ").toUpperCase()+arg.slice(1)).join(" ");
    let yaş = args.filter(arg => !isNaN(arg))[0] || undefined;
    if(!isim || !yaş) return message.channel.send(embed.setDescription("Geçerli bir isim ve yaş belirtmelisin!")).then(x => x.delete({timeout: 5000}));
    yazilacakIsim = ` ${isim} | ${yaş}`;

  };
  uye.setNickname(`${yazilacakIsim}`).catch();
  message.channel.send(new MessageEmbed().setColor(client.randomColor()).setTitle("Kayıt Sistemi").setThumbnail(uye.user.avatarURL({dynamic: true, size: 2048})).setFooter("Arox ❤️").setTimestamp().setDescription(`${emoji("gif1")} İsmi Değiştirilen Kullanıcı: ${uye}\n${emoji("gif1")} İsmi Değiştiren Yetkili: ${message.author}\n${emoji("gif1")} Güncellenen İsim: \`${yazilacakIsim}\``)).catch();
};
module.exports.configuration = {
  name: "isim",
  aliases: ["name", "nick"],
  usage: "isim [üye] [isim] [yaş]",
  description: "Belirtilen üyenin isim ve yaşını değiştirir."
};