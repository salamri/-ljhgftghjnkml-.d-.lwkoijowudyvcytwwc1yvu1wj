const Discord = require('discord.js');
const moment = require("moment");
const fs = require("fs");
const client = new Discord.Client();
 const prefix = "-";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
    client.user.setActivity("-help || -inv ",{type: 'PLAYING'})

});


client.on('message', ra3d => {
 
  if (ra3d.content ===  prefix + 'colors'){
              if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage(':radio_button: Hey! || You Don\'t Have Perms . ')
	  ra3d.channel.send('**Done || Create The Colors . :ballot_box_with_check: **')
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < 101; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

 // اعمل ريستارت يا بوت يا وسخ

const temp = {};
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'click here',
      channel : 'click here'
       }
        if(message.content.startsWith('-temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('click here', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done || Temporary Rooms Has Been Activated . :ballot_box_with_check: **')
              client.on('message' , message => {
               if(message.content === '-temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done || Closed . :ballot_box_with_check:  ')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "fgfdkjfdhfgdjghdhghj")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });







  client.on('message', async message => {
  if(message.content.startsWith(prefix + "bcall")) {
    let i = client.users.size;
    if(message.author.id !== '456641975932813345') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});



  client.on('guildCreate', guild => {
client.channels.get("480471610617233419").send(`:white_check_mark: **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("480471610617233419").send(`:negative_squared_cross_mark: **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
  


client.on('message', message => {
         if (message.content === prefix + "td") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";

            }
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png")
                .setTitle( "Time & Date.")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                 .addField('- KSA. :flag_sa: ',
                ""+ hours2 + ":" + minutes +":"+ seconds  + "")
                .addField('- EGY. :flag_eg: ',
                ""+ hours3 + ":" + minutes +":"+ seconds  + "")

                .addField('- Date.',
                ""+ Day + "-" + Month + "-" + Year +  "")

                 message.channel.sendEmbed(Date15);
        }
    });

  client.on('message', message => {
if(message.content.startsWith("-slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = " : ** لقد فزت   ** ."
  } else {
    we = ": ** لقد خسرت  ** ."
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

client.on('message', message => {
var prefix = "-";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send(`** - أستعمل : -bc [الرسالة] \n يمكنك أرسال صوره مع البرودكاست :smile:**`);
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `<@${message.author.id}>`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            m.send(`${m}`,{embed: bc})
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
}
})
}
}
});

client.on('message', message => {
  if(message.content.startsWith(prefix + "ping")) {
message.channel.send(`MessageTaken: \`${Date.now() - message.createdTimestamp}\`ms\n DiscordAPi: \`${Math.round(client.ping)}\`ms\nAverage: \`${Math.round(client.pings[0])}\`ms. `)
}
});

 client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("-avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});





client.on('message',function(message) {
    let w = ['Rock','Paper','Scissors'];
   if(message.content.startsWith(prefix + "rps")) {
       message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( Rock )
#2 ( Paper )
#3 ( Scissors )
\`\`\`

__امامك  5 توان للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});


client.on('message',function(message) {
   if(message.content.startsWith(prefix + "guilds")) {
       message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
   } 
});
//========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "users")) {
       message.channel.send(`Users: \`\`${client.users.size}\`\``);
   } 
});
//=========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "channels")) {
       message.channel.send(`channels: \`\`${client.channels.size}\`\``);
   } 
});



client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'clear')) {
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("**:octagonal_sign: || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("**:bulb: || أختر كميه الرسائل المراد مسحها .**").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });

 

client.on('message',async message => {
  if(message.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(`\`${message.guild.name}\``)
    .setThumbnail(message.guild.iconURL)
    .addField('• iD:', `- ${message.guild.id}`,true)
    .addField('• Owner:', `- ${message.guild.owner}`, true)
    .addField('• Channels:', `\`#\` ${message.guild.channels.filter(a => a.type === 'text').size} - \`🎤\` ${message.guild.channels.filter(a => a.type === 'voice').size}`, true)
    .addField('• Members:', `\`Count\` ${message.guild.memberCount} - \`Last\` ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `${m}`).splice(0, 1)}`, true)
    .addField('• AFK Channel:', `${message.guild.afkChannel || 'None'}`, true)
    .addField('• Other:', `\`Roles\` ${message.guild.roles.size} - \`Emojis\` ${message.guild.emojis.size} \`[\` ${message.guild.emojis.map(m => m).join(' **|** ')} \`]\``,true)
    .addField('• Region:', `${message.guild.region}`, true);

    message.channel.send(embed);
  }
});

const giphy = require('giphy-api')();
    function getValue(key, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}

    client.on('message', message => {
    if(message.content.startsWith(prefix + 'gif')) {
        sb = message.content.substring(4)
      giphy.random({
        tag: sb,
        rating: 'g',
        fmt: 'json'
      }, function(err, res) {
        if (getValue("image_url", res)) {

          message.channel.send({files:[{
              attachment: getValue("image_url", res),
              name: 'gif'+sb+'.gif'
          }]
        });
        }

      });
      }
});

  client.on('message', message => {
    if (message.content.startsWith('-invites')) {
    let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ;
      let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
      let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
      message.guild.fetchInvites().then(invs => {
        let member = client.guilds.get(message.guild.id).members.get(oi);
        let personalInvites = invs.filter(i => i.inviter.id === oi);
        let urll = invs.filter(i => i.inviter.id === oi);
        let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
       let exec = personalInvites.reduce((p, v) => v.inviter);
     let possibleInvites = [['Total de membros recrutados:']];
    possibleInvites.push([inviteCount, exec]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
    const alpha = new Discord.RichEmbed()
    .setAuthor(img)
    .setDescription(`**\n► لقد قمت بدعوة   \`\`${Number(inviteCount)}\`\` عضو \n\n► لقد انضممت لللسيرفر مند \`${daysJoined.toFixed(0)}\` يوم **`)
    .setThumbnail(imagemm)
    .setColor(0x4959e9);
    message.channel.send(alpha);

    });

    };
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

message.channel.send(`**Done || ${user.tag} Banned . :ballot_box_with_check: **`)

}
});

 client.on('message' , message => {

    if (message.content === "-inv") {
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**')
        message.channel.send(`**تم الأرسال في الخاص . **`)
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
.setTitle('Click Here .')
.setURL('https://discordapp.com/oauth2/authorize?client_id=477008338048253983&permissions=8&scope=bot')
  message.author.sendEmbed(embed);
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

message.channel.send(`**Done || ${user.tag} Kicked . :ballot_box_with_check: **`)

}
});


    client.on('message', message => {
    if (message.content.startsWith(prefix + 'help')) {
        let pages = ['**╭╮╱╱╱╱╱╭━━╮╱╱╱╭╮\n┃┃╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮\n┃┃╱╱╭━━┫╰╯╰┳━┻╮╭╯\n┃┃╱╭┫┃━┫╭━╮┃╭╮┃┃\n┃╰━╯┃┃━┫╰━╯┃╰╯┃╰┳╮\n╰━━━┻━━┻━━━┻━━┻━┻╯\n\`\`\` General Commands \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n-server | معلومات السيرفر \n-id | أيدي حسابك\n-emojis | أيموجي السيرفر\n-rank | مستواك الكتابي \n-stats | معلومات البوت\n-avatar | صورة بروفايلك\n-ping | سرعة الأتصال\n-gif | صورة متحركه \n-invites | لرؤية دعواتك\n-slots | لعبة الفواكة\n-td | التاريخ والوقت\n-dis | لتغيير تاقك \n-sug | لعمل أقتراح \`\`\`** ','**╭╮╱╱╱╱╱╭━━╮╱╱╱╭╮\n┃┃╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮\n┃┃╱╱╭━━┫╰╯╰┳━┻╮╭╯\n┃┃╱╭┫┃━┫╭━╮┃╭╮┃┃\n┃╰━╯┃┃━┫╰━╯┃╰╯┃╰┳╮\n╰━━━┻━━┻━━━┻━━┻━┻╯\n\`\`\`Admin Commands \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n-kick | طرد عضو\n-ban | حظر عضو\n-voice | المتصلين بالصوت\n-bc | البرودكاست\n-clear | مسح الشات\n-mute | الأسكات\n-unmute | فك الأسكات\n-welcome |  نظام الترحيب\n-temp on | لعمل قسم خاص بـ صناعه روم بأسمك\n-temp off | لتقفيل الخاصيه .   \`\`\` ** ']

        let page = 1;

        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/477011368403271680/477011788987367435/monogram-l-logo-letter-overlapping-thin-line-vector-5868172.jpg')
        .setDescription(pages[page-1])

        message.channel.sendEmbed(embed).then(msg => {

            msg.react('🌍').then( r => {
                msg.react('🔌')


            const backwardsFilter = (reaction, user) => reaction.emoji.name === '🌍' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '🔌' && user.id === message.author.id;


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



client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "id")) {
    let newID = new Discord.RichEmbed()
    .setAuthor(`Userinfo.`, message.author.avatarURL)
    .setTitle(`• ${client.user.tag}`)
    .setThumbnail(client.user.avatarURL)
    .addField('• iD', `${client.user.id}`,true)
    .addField('• Nickname', `${client.nickname || 'None'}`,true)
    .addField('• Status', `${client.status.toUpperCase()}`,true)
    .addField('• Joined Discord', `${client.user.createdAt.toLocaleString()}`,true)
    .addField('• Joined Server', `${client.joinedAt.toLocaleString()}`,true)
    .addField('• Roles', `\`${client.roles.map(a => a.name).join('\n')}\``,true)
    .addField('• VoiceChannel', `${client.voiceChannel.name || 'None'}`,true);

    message.channel.send(newID);
  }
});







 client.login(process.env.BOT_TOKEN); 
