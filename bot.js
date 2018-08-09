const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "-";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg =>{
    let message=msg;
    if(message.content.startsWith("-bc")){
        var args = message.content.split(' ').slice(1).join(' ');
    msg.guild.members.forEach(m=>{
        m.send(args.replace(/[user]/g,m)).catch();
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
	    message.channel.send(`**Well Done , Send for ${message.guild.memberCount} ` )
    }
    })    ;
    }
});


  client.on('message' , async (message) => {
var prefix = "-"
    if(message.content.startsWith(prefix + "Tinv")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' ** » الأمر في السيرفرات فقط . **');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
      if (i.uses === 123223232323131) {//يمديك تعدل رقم وصول العدد حق الانفايت الى اأقل أو أكثر
          message.member.addRole(message.member.guild.roles.find("name",""))//هنآ أسم ألرتبه اللي تجيهه
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 211212124232312) {
message.member.addRole(message.member.guild.roles.find("name",""))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 112121212) {
message.member.addRole(message.member.guild.roles.find("name",""))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
      }//معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`**${(possibleInvites)}**`)

    message.channel.send(embed)
    }
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('** Server Loction :**',`** __${msg.guild.region}__ **`,true)
            .addField('**Server Owner :**',`**${msg.guild.owner}**`,true)
                  .addField('**Server ID**',`**${msg.guild.id}**`,true)
      .addField('**Roles :**',`** __${msg.guild.roles.size}__ **`,true)
      .addField('**Members :**',`** __${msg.guild.memberCount}__ **`,true)
      .addField('**Text Channels :**',`** __${msg.guild.channels.filter(m => m.type === 'text').size}__** `,true)
      .addField('**Voice Channels :**',`** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **`,true)
      msg.channel.send({embed:embed});
    }
  });


client.on('message', message => {
if (message.author.codes) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "ban") {
             if(!message.channel.guild) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
       
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(":x:**انت لا تملك الصلاحيات المطلوبه**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply(":x: **ليس معي الصلاحيات الكافية**");
let user = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.reply("- **منشن شخص**");
if (!message.guild.member(user)
.bannable) return message.reply(":x:**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: »  ${user.tag} banned from the server ! :airplane: **  `)

}
});


client.on('message', message => {
if (message.author.codes) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "kick") {
             if(!message.channel.guild) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
       
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply(":x:**انت لا تملك الصلاحيات المطلوبه**");
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply(":x: **ليس معي الصلاحيات الكافية**");
let user = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.reply("- **منشن شخص**");
if (!message.guild.member(user)
.bannable) return message.reply(":x:**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طردة**");


message.guild.member(user).kick(7, user);

message.channel.send(`**:white_check_mark: »  ${user.tag} kicked from the server ! :airplane: **  `)

}
});


client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
    let pages = ['**الأوامر العامة : - \n \`\`\`-server\n -id\n -emojis\n -rank\n -Tinv \`\`\`** ','**الأوامر الأدارية : - \n \`\`\`\n -kick\n -ban\n -voice\n -bc \`\`\`**','']
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/attachments/477011368403271680/477011788987367435/monogram-l-logo-letter-overlapping-thin-line-vector-5868172.jpg')
    .setDescription(pages[page-1])

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            msg.edit(embed)
        })
        })
    })
    }
});

client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle(':negative_squared_cross_mark: »  Emojis.') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});


client.on('message', async message => {
  if(message.content.startsWith(prefix + "voice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send('**:negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__**');
  if(!args) args = ` » VoiceOnline :  ${message.guild.members.filter(s => s.voiceChannel).size} . `;
  message.channel.send('**:white_check_mark: » تم عمل الروم الصوتي بنجاح**');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});


var userData = {};
client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
	if (!userData[message.author.id]) {
		userData[message.author.id] = {Money:0,Xp:0,Level:0}
	}
     var mentionned = message.mentions.users.first();

      var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }

	
	var CulLevel = Math.floor(0.25 * Math.sqrt(userData[message.author.id].Xp +1));
	if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
	let pEmbed = new Discord.RichEmbed()
	.setColor("Random")
	.addField("» UserName :", message.author.tag)
	.addField("» Level :", userData[message.author.id].Level)
	.addField("» XP :",Math.floor(userData[message.author.id].Xp))
	message.channel.send(pEmbed);
}
if (!userData[message.author.id]) {
	userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
	}

userData[message.author.id].Xp+= 0.25;
userData[message.author.id].Money+= 0.25;

});





client.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return message.reply('** » الأمر في السيرفرات فقط . ** ')
      if (message.content.startsWith(prefix + 'id')) {

  

				let embed = new Discord.RichEmbed()
					.setThumbnail(message.author.avatarURL)
					.setColor("#8A2BE2")
					.setDescription(`User info for: **${message.author.username}**`)
					.addField("Avatar:", `${message.author.avatarURL}`, true)
					.addField("Status:", message.author.presence.status, true)
					.addField("Bot: ", message.author.bot, true)
					.addField("Tag: ", message.author.tag, true)
					.addField("Discriminator:", message.author.discriminator, true)
					.setFooter(`Created at: ${message.author.createdAt}`)

				message.channel.send(embed)
      }
});



 client.login(process.env.BOT_TOKEN); 
