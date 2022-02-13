const { roleMention } = require("@discordjs/builders");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const Canvas = require("canvas");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ]
});

const data = new SlashCommandBuilder()
    .setName("h")
    .setDescription("permet de voir les commandes quand tu as une petite panne")

    .setName("j")
    .setDescription("pour rouler son meilleur kamas")

    .setName("start_colonel")
    .setDescription("pour demarrer une session de puff intense")

    .setName("variété")
    .setDescription("les diffents types de forme de thc")

    .setName("help")
    .setDescription("pour voir les commandes");
  

Client.on("ready", () => {
    //Client.application.commands.create(data);
    Client.guilds.cache.get("932777853077033000").commands.create(data);
    Client.guilds.cache.get("941828963456675861").commands.create(data);

    console.log("bot operationnel");
});

Client.login(process.env.TOKEN);         //token



Client.on("interactionCreate", interaction => {                //ouverture boucle
    if(interaction.commandName === "help"){                                                 //help
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Liste des commandes")
            .setDescription("vous y trouverez les commandes du bot")
            .addField("__/h__", "pour avoir les commandes")
            .addField("__/start_colonel __", "pour lancer un colonel")
            .addField("__/j __", "pour ce que tu dois avoir pour ton j")
            .addField("__/info_conso__", "pour voir les types de consomations")
            .addField("__/melange__", "pour voir les differentes options de mélange de drogue")
            .addField("__/var__", "pour voir les différents types de variétés de consomation");
        interaction.reply({ embeds: [embed]});
    }
    if(interaction.commandName === "j"){                                                //j
        const embed = new Discord.MessageEmbed()
        .setColor()
            .setTitle("Recette du join")
            .addField("**tabac**", "il vous en faudra environ 0.8g")
            .addField("**cons**", "je vous conseil un bon 0.3g mais faitent comme vous le sentez")
            .addField("**slime**", "si vous avez que des petites allez dans #roulage")
            .addField("**tonc**", "differentes techniques de tonc dans #roulage")
        interaction.reply({ embeds: [embed]});
    }
    if(interaction.commandName === "start_colonel"){                               //start colonel
        const embed = new Discord.MessageEmbed()
            .setColor("#336600")
            .setTitle("Colonel éclatax")
            .addField("colonel V1", "https://youtu.be/N9v1Z4hyU7I")
            .addField("colonel V2", "https://youtu.be/CXf4vUgPmFQ")
            .addField("colonel V3", "https://youtu.be/upx14b23lF0")
            .setAuthor("colonel eclatax", "https://wallpaperaccess.com/full/479238.jpg")
            .setDescription("Un colonel va commencer tenez vous prêt à vs enfumer le crâne 🤯🤯")
            .setImage("https://i1.sndcdn.com/artworks-msPsulblz7Qlfg9j-Cezy4w-t500x500.jpg")
            .setTimestamp()
            .setFooter("ps: utilise /j si tu sais pas quelle dose mettre", "https://wallpaperaccess.com/full/479238.jpg");
        interaction.reply({ embeds: [embed]});
    }
    if(interaction.commandName === "mélange"){
        interaction.reply("https://i0.wp.com/knowyourstuff.nz/wp-content/uploads/2018/02/tripsit-interaction-guide.jpg?fit=1568%2C1131&ssl=1")
    }
    if(interaction.commandName === "variété"){
        interaction.reply("https://www.royalqueenseeds.fr/img/cms/Concentrates-Mobile-Solvent-Solventless.jpg")
    }
    if(interaction.commandName === "info_c"){
        interaction.reply("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRO4GppCjY44raSndZg8SC20aeXYIcNkce1Z1zaL-CbEn0g_Oz7")
    }
});

                                                                                //canvas

Client.on("guildMemberAdd", async member => {
    console.log("un membre est arrivé")
    Client.channels.cache.get("937464640982642729").send("<@" + member.id + "> est arrivé.");

    var canvas = Canvas.createCanvas(650,433);

    ctx = canvas.getContext("2d")

    var background = await Canvas.loadImage("./619.png");
    ctx.drawImage(background, 0, 0, 650, 433);
    ctx.font = "42px Impact";
    ctx.fillstyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(member.user.tag.toUpperCase(), 325, 100);
    ctx.beginPath();
    ctx.arc(325,  240, 110, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
        format: "png",
        size: 1024
    }));
    ctx.drawImage(avatar, 205, 120, 238, 238)
    var attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png");
    Client.channels.cache.get("937464640982642729").send({files: [attachment]});
});


                                                                                                                            //musique
