const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/Mbaz2g9.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bᴏᴛ Nᴀᴍᴇ 🇦 🇲 🇷 🇺   🇸 🇪 🇷  🇧 🇴 🇹 *

*Cʀᴇᴀᴛᴇʀ number : wa.me/12098020068?text=Hi%20sᴘɪʀɪᴛ%20bro.%20


 *Sᴘɪʀɪᴛ sᴇʀ Cʜᴀɴᴀʟ : https://youtube.com/channel/UCBv1Z1zkOmdGeWU2QRdYBnA
     
 
 *Sᴘɪʀɪᴛ sᴇʀ Bᴏᴛ Gʀᴏᴜᴘ: https://chat.whatsapp.com/F3adhxvYpd3KzVptzDxhC4

 *Gɪᴛ Lɪɴᴋ : https://github.com/SPlRlT-YT/spirit-ser

 Sᴘɪʀɪᴛ-sᴇʀ-ʙᴏᴛꫂ⁩..♡︎
`}) 

}));
