const { MessageEmbed } = require("discord.js");
const conf = require('../ayarlar.json');
const qdb = require("quick.db");
const cdb = new qdb.table("cezalar");
const db = new qdb.table("ayarlar");
const client = global.client;

client.komutlar = [
  {isim: "vip", rol: "777192076567379978"},
  {isim: "elite", rol: "777192076567379978"},
  {isim: "important", rol: ""},
  {isim: "rapper", rol: ""},
  {isim: "beatboxer", rol: ""},
  {isim: "vocalist", rol: "777192096099729438"},
  {isim: "gitarist", rol: ""},
  {isim: "kemanist", rol: ""},
  {isim: "piyanist", rol: "777192098008006656"},
  {isim: "designer", rol: "777192094690967572"},
  {isim: "gamer", rol: ""},
  {isim: "intro-maker", rol: ""},
  {isim: "poet", rol: ""},
  {isim: "painter", rol: "777192097375322162"},
  {isim: "instagram-user", rol: ""},
  {isim: "lovers", rol: "777192101191614465"},
  {isim: "sap", rol: "777192102311755776"},
  {isim: "ekip", rol: "777192075136729128"},
  {isim: "terapist", rol: "777192083936772147"},
  {isim: "rehber", rol: ""},
  {isim: "uyarı1", rol: ""},
  {isim: "uyarı2", rol: ""},
  {isim: "uyarı3", rol: ""},
  {isim: "streamer", rol: ""},
  {isim: "yetkilial1", rol: ""},
  {isim: "yetkilial2", rol: ""},
  {isim: "yetkilial3", rol: ""},
  {isim: "teyitver", rol: "777192072523546645"},
];

module.exports = (message) => {
  if (!message.content.startsWith(conf.prefix)) return;
  let ayar = db.get('ayar') || {};
  let args = message.content.substring(conf.prefix.length).split(" ");
  let command = args[0];
  args = args.splice(1);
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!uye) return;
  let komut = client.komutlar.find(k => k.isim === command);
  if (komut && (komut.isim === "yetkilial1" || komut.isim === "yetkilial2" || komut.isim === "yetkilial3")) {
    if (!message.member.roles.cache.has("") && !message.member.roles.cache.has(ayar.sahipRolu) && !conf.sahip.some(id => message.author.id === id)) return;
    uye.roles.add([komut.rol, "", "", ""]);
    return message.react(client.emojiler.onay);
  };

  if (komut && (komut.isim === "teyitver")) {
    if (!message.member.roles.cache.has("") && !message.member.roles.cache.has(ayar.sahipRolu) && !conf.sahip.some(id => message.author.id === id)) return;
    uye.roles.add(["777192072523546645"]);
    return message.react(client.emojiler.onay);
  };

  if (komut && komut.isim === "terapist") {
  if (!message.member.roles.cache.has("") && !message.member.roles.cache.has(ayar.sahipRolu) && !conf.sahip.some(id => message.author.id === id)) return;
    uye.roles.cache.has(komut.rol) ? uye.roles.remove(komut.rol) : uye.roles.add(komut.rol);
    return message.react(client.emojiler.onay);
  };
  if (komut && (komut.isim === "rehber" || komut.isim === "uyarı1" || komut.isim === "uyarı2" || komut.isim === "uyarı3")) {
  if (!message.member.roles.cache.has("") && !message.member.roles.cache.has(ayar.sahipRolu) && !conf.sahip.some(id => message.author.id === id)) return;
    uye.roles.cache.has(komut.rol) ? uye.roles.remove(komut.rol) : uye.roles.add(komut.rol);
    return message.react(client.emojiler.onay);
  };
  if (komut && (komut.isim === "streamer" || komut.isim === "youtuber" || komut.isim === "coder" || komut.isim === "famous")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    uye.roles.cache.has(komut.rol) ? uye.roles.remove(komut.rol) : uye.roles.add(komut.rol);
    return message.react(client.emojiler.onay);
  };

  if (komut && (komut.isim === "elite")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    uye.roles.cache.has(komut.rol) ? uye.roles.remove(komut.rol) : uye.roles.add(komut.rol);
    return message.react(client.emojiler.onay);
  };
  if (!message.member.roles.cache.has("") && !message.member.roles.cache.has(ayar.sahipRolu) && !conf.sahip.some(id => message.author.id === id)) return;
  if (!uye || !komut) return;
  uye.roles.cache.has(komut.rol) ? uye.roles.remove(komut.rol).catch() : uye.roles.add(komut.rol).catch();
  return message.react(client.emojiler.onay);
};

module.exports.configuration = {
  name: "message"
};