const Discord = require("discord.js");
const request = require("request");
const fs = require("fs");
const notice = require("./notice.json");
const cheerio = require("cheerio");
const util = require("util");
const opus = require("opusscript");
const search = require("yt-search");
const money = require("./money.json");
const rest = {
  bool: "no",
  ch: null
};
const restart = require("./restart.json");
const ytdl = require("ytdl-core");
const client = new Discord.Client();
const hook = new Discord.WebhookClient(
  "666196758258384917",
  "MuBpdXTGWkYwcY6PPp8ZD-TtRlp6aGhPYnqQrrgOK38NpSbZtjyWG8ghbTy6-YgNHIWE"
);
const gunei = new Discord.WebhookClient(
  "666906780701294592",
  "Qp-UPrRzhZUAx9FVEnbJTlvDszmJJ8mN989SZv_V8PYSgOtH_oHbKtIgzAbRrz8804hw"
);
var random = 0;
var boolcount = true;
var p1 = 0;
var f = 0;
var resta = false;
var relogin = false;
var relogch = 0;
var channel = 0;
var mme = null;
async function pingpong(text, ch) {
  const headers = {
    Authorization: process.env.PINGPONG,
    "Content-Type": "application/json"
  };
  const dataString = {
    request: {
      query: text
    }
  };

  const options = {
    url:
      `https://builder.pingpong.us/api/builder/` +
      process.env.PINGPONGID +
      `/integration/v0.2/custom/${mme.author.id}`,
    method: "POST",
    headers: headers,
    body: JSON.stringify(dataString)
  };
  channel = ch;
  request(options, callback);
}
async function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    let msg = JSON.parse(body, null, 1).response.replies[0].text;
    console.log(msg);
    client.channels.get(channel).send(msg);
    let msg2 = JSON.parse(body, null, 1).response.replies[1].text;
    if (msg2) {
      client.channels.get(channel).send(msg2);
    }
    let img = JSON.parse(body, null, 1).response.replies[1].image.url;
    if (img) {
      client.channels.get(channel).send(img);
    }
    let img2 = JSON.parse(body, null, 1).response.replies[2].image.url;
    if (img2) {
      client.channels.get(channel).send(img2);
    }
  }
}
var verifylv = 0;
var nch = 0;
var reload = 0;
var gamename = null;
const queue = new Map();
function isdefined(input) {
  if (input == null || input == "undefined" || !input) {
    return "없음";
  } else {
    return input;
  }
}
var mm = "undefined";
var g = 0;
var rauth = null;
function link(baseurl, blank, query, pref) {
  var cmd = query.substr(pref);
  var tt = cmd.split(" ");
  var res = baseurl;
  for (var i = 0; i < tt.length; i++) {
    res += tt[i];
    if (i != tt.length - 1) {
      res += blank;
    }
  }
  return res;
}
var gid = null;
function counttime(time) {
  var remaining = time;
  var day = 0;
  var hour = 0;
  var minute = 0;
  var second = 0;
  var ms = 0;
  day = parseInt(remaining / 86400000);
  remaining -= day * 86400000;
  hour = parseInt(remaining / 3600000);
  remaining -= hour * 3600000;
  minute = parseInt(remaining / 60000);
  remaining -= minute * 60000;
  second = parseInt(remaining / 1000);
  remaining -= second * 1000;
  ms = remaining;
  return (
    day + "일 " + hour + "시간 " + minute + "분 " + second + "초 " + ms + "ms"
  );
}
function clean(text) {
  if (typeof text === "string")
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  else return text;
}
function type(text) {
  if (text.toLowerCase().startsWith("promise")) {
    if (typeof text === "Promise { <pending> }") {
      return "promise 실행 중";
    } else if (typeof text === "Promise { <fulfilled> }") {
      return "promise 실행 성공";
    } else if (typeof text === "Promise { <rejected> }") {
      return "promise 실행 실패";
    } else {
      return "promise";
    }
  } else if (typeof text.toLowerCase() === "string") {
    return "문자열";
  } else if (typeof text.toLowerCase() === "number") {
    return "숫자";
  } else if (typeof text.toLowerCase() === "object") {
    return "객체";
  } else if (typeof text.toLowerCase() === "array") {
    return "배열";
  } else if (
    typeof text.toLowerCase() === "undefined" ||
    typeof text.toLowerCase() === null
  ) {
    return "NULL(값이 없음)";
  } else {
    return text;
  }
}
var reg = 0;
var pname = null;
var psend = false;
var pcount = 0;
var afk = null;
var afktime = null;
var pauthor = null;
const bug = new Discord.WebhookClient(
  "670905572295704586",
  "Jkt2dX0Ckdq_X4nhJqgxJhxt26bafBSC8LnyF4xFyJaK6c1ZRpbtfPePoE6RrTYe2KWL"
);
var ntitle = null;
var ncont = null;
var gongji = 0;
var poptions = [];
var calculator = 0;
var rsp = 0;
var boolrsp = false;
var userrsp = 0;
var h = 0;
function poll(channel) {
  pcount--;
  psend = true;
  if (pcount === 2) {
    const embed = new Discord.RichEmbed()
      .setTitle("투표")
      .setDescription(pname)
      .setColor(0xffff00)
      .addField("1번째 선택지", poptions[0])
      .addField("2번째 선택지", poptions[1])
      .setTimestamp();
    channel.send(embed);
  }
  if (pcount === 3) {
    const embed = new Discord.RichEmbed()
      .setTitle("투표")
      .setDescription(pname)
      .setColor(0xffff00)
      .addField("1번째 선택지", poptions[0])
      .addField("2번째 선택지", poptions[1])
      .addField("3번째 선택지", poptions[2])
      .setTimestamp();
    channel.send(embed);
  }
  if (pcount === 4) {
    const embed = new Discord.RichEmbed()
      .setTitle("투표")
      .setDescription(pname)
      .setColor(0xffff00)
      .addField("1번째 선택지", poptions[0])
      .addField("2번째 선택지", poptions[1])
      .addField("3번째 선택지", poptions[2])
      .addField("4번째 선택지", poptions[3])
      .setTimestamp();
    channel.send(embed);
  }
  if (pcount === 5) {
    const embed = new Discord.RichEmbed()
      .setTitle("투표")
      .setDescription(pname)
      .setColor(0xffff00)
      .addField("1번째 선택지", poptions[0])
      .addField("2번째 선택지", poptions[1])
      .addField("3번째 선택지", poptions[2])
      .addField("4번째 선택지", poptions[3])
      .addField("5번째 선택지", poptions[4])
      .setTimestamp();
    channel.send(embed);
  }
  if (pcount === 6) {
    const embed = new Discord.RichEmbed()
      .setTitle("투표")
      .setDescription(pname)
      .setColor(0xffff00)
      .addField("1번째 선택지", poptions[0])
      .addField("2번째 선택지", poptions[1])
      .addField("3번째 선택지", poptions[2])
      .addField("4번째 선택지", poptions[3])
      .addField("5번째 선택지", poptions[4])
      .addField("6번째 선택지", poptions[5])
      .setTimestamp();
    channel.send(embed);
  }
  if (pcount === 7) {
    const embed = new Discord.RichEmbed()
      .setTitle("투표")
      .setDescription(pname)
      .setColor(0xffff00)
      .addField("1번째 선택지", poptions[0])
      .addField("2번째 선택지", poptions[1])
      .addField("3번째 선택지", poptions[2])
      .addField("4번째 선택지", poptions[3])
      .addField("5번째 선택지", poptions[4])
      .addField("6번째 선택지", poptions[5])
      .addField("7번째 선택지", poptions[6])
      .setTimestamp();
    channel.send(embed);
  }
  if (pcount === 8) {
    const embed = new Discord.RichEmbed()
      .setTitle("투표")
      .setDescription(pname)
      .setColor(0xffff00)
      .addField("1번째 선택지", poptions[0])
      .addField("2번째 선택지", poptions[1])
      .addField("3번째 선택지", poptions[2])
      .addField("4번째 선택지", poptions[3])
      .addField("5번째 선택지", poptions[4])
      .addField("6번째 선택지", poptions[5])
      .addField("7번째 선택지", poptions[6])
      .addField("8번째 선택지", poptions[7])
      .setTimestamp();
    channel.send(embed);
  }
  if (pcount === 9) {
    const embed = new Discord.RichEmbed()
      .setTitle("투표")
      .setDescription(pname)
      .setColor(0xffff00)
      .addField("1번째 선택지", poptions[0])
      .addField("2번째 선택지", poptions[1])
      .addField("3번째 선택지", poptions[2])
      .addField("4번째 선택지", poptions[3])
      .addField("5번째 선택지", poptions[4])
      .addField("6번째 선택지", poptions[5])
      .addField("7번째 선택지", poptions[6])
      .addField("8번째 선택지", poptions[7])
      .addField("9번째 선택지", poptions[8])
      .setTimestamp();
    channel.send(embed);
  }
  if (pcount === 10) {
    const embed = new Discord.RichEmbed()
      .setTitle("투표")
      .setDescription(pname)
      .setColor(0xffff00)
      .addField("1번째 선택지", poptions[0])
      .addField("2번째 선택지", poptions[1])
      .addField("3번째 선택지", poptions[2])
      .addField("4번째 선택지", poptions[3])
      .addField("5번째 선택지", poptions[4])
      .addField("6번째 선택지", poptions[5])
      .addField("7번째 선택지", poptions[6])
      .addField("8번째 선택지", poptions[7])
      .addField("9번째 선택지", poptions[8])
      .addField("10번째 선택지", poptions[9])
      .setTimestamp();
    channel.send(embed);
  }
}
var j = 0;
var p = 0;
var p2 = 0;
var v = 1;
var s = 0;
//const dispatcher = connection.playFile('D:\Windows Background.mp3');
var nowgame = "'/도움'을 입력해주세요!";
var nowstatus = "online";
var status = {
  online: "온라인",
  idle: "자리 비움",
  dnd: "다른 용무 중",
  offline: "오프라인"
};

client.on("ready", () => {
  console.log(client.guilds.size);
  console.log(Math.floor(client.ping));
  console.log("로그인됨");
  nowgame =
    "'/도움' 명령어 입력 | ditto7890#8948님이 봇 개발에 많이 기여(?)하셨습니다.";
  nowstatus = "online";
  function getping() {
    if (Math.floor(client.ping) === NaN || Math.floor(client.ping) === null) {
      getping();
    } else {
      return Math.floor(client.ping);
    }
  }
  p = Math.floor(client.ping);
  const embed = new Discord.RichEmbed()
    .setTitle("봇 켜짐")
    .setColor(0x00ff00)
    .setTimestamp();
  client.channels.get("669435108096344064").send(embed);
  client.channels.get("670882155366449153").send("test");
  console.log(notice);
  if (boolcount) {
    client.user.setPresence({
      status: "online",
      game: {
        name:
          nowgame +
          "|" +
          client.guilds.size +
          "개의 서버에 참여중 | " +
          client.users.size +
          "명의 사용자와 함께하는 중",
        type: "PLAYING"
      }
    });
  } else {
    client.user.setPresence({
      status: "online",
      game: {
        name: nowgame,
        type: "PLAYING"
      }
    });
  }
  if (relogin == true) {
    client.channels.get(relogch).send("Complete...!");
    relogin = false;
    relogch = 0;
  }
  if (restart.bool === "yes") {
    client.channels.get(restart.ch).send("Complete...!");
    rest.bool = "no";
    rest.ch = null;
    fs.writeFile("./restart.json", JSON.stringify(rest), err => {
      if (err) console.log(err);
    });
  }
  setInterval(() => {
    client.channels
      .get("683194993476894721")
      .send(
        "봇이 글릿치에 의해 안꺼지도록 하기 위해 4분 간격으로 보내는 메세지입니다."
      );
  }, 240000);
});

/*client.on('messageReactionAdd', messageReaction, author => {
    messageReaction.message.channel.send(author.username + ' 님이 반응을 다셨네요');
});*/
client.on("message", async message => {
  try {
    const serverQueue = queue.get(message.guild.id);
    if (resta) {
      process.exit();
    }
    if (h === 1) {
      message.channel.send("커져라");
    }
    if (j === 1) {
      message.channel.send("망해라");
    }
    if (calculator === 3) {
      if (
        message.content === "+" ||
        message.content === "-" ||
        message.content === "*" ||
        message.content === "/"
      ) {
        if (message.content === "+") {
          message.reply(first + second);
        } else if (message.content === "-") {
          message.reply(first - second);
        } else if (message.content === "*") {
          message.reply(first * second);
        } else if (message.content === "/") {
          message.reply(first / second);
        }
        calculator = 0;
      }
    }
    if (message.content === "//공지등록") {
      reg = 1;
      rauth = message.author.id;
      message.reply("공지채널의 id를 입력해주세요");
    } else if (reg === 1 && rauth === message.author.id) {
      notice.channels.push(message.content);
      rauth = null;
      fs.writeFile("./notice.json", JSON.stringify(notice), err => {
        if (err) console.log(err);
      });
      message.reply("공지채널 등록 완료!");
    }
    if (
      message.content === "//공지" &&
      message.author.id === "647736678815105037"
    ) {
      gongji = 1;
      message.reply("공지 제목을 입력해주세요");
    } else if (gongji === 1 && message.author.id === "647736678815105037") {
      gongji = 2;
      ntitle = message.content;
      message.reply("공지 내용을 입력해주세요");
    } else if (
      message.content === "//공지 초기화" &&
      message.author.id === "647736678815105037"
    ) {
      notice.channels = [];
      fs.writeFile("./notice.json", JSON.stringify(notice), err => {
        if (err) console.log(err);
      });
    } else if (
      message.content === "//재시작" &&
      message.author.id === "647736678815105037"
    ) {
      resta = true;
      rest.bool = "yes";
      rest.ch = message.channel.id;
      await fs.writeFile("./restart.json", JSON.stringify(rest), err => {
        if (err) message.channel.send(err);
      });
      await console.log(rest);
      await console.log(restart);
      await message.react("👌");
      await message.channel.send(`Restarting...`);
    } else if (message.content === "/오픈소스") {
      const embed = new Discord.RichEmbed()
        .setTitle("mswgen봇 오픈소스 코드")
        .setDescription("https://github.com/mswgen/mswgenbot")
        .setThumbnail(
          "https://playentry.org/uploads/profile/5c/ff/avatar_5cff3addbc5c91571a8b8ecd.png?1578276384708"
        )
        .setColor(0x00ffff)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp();
      message.channel.send(embed);
    } else if (
      message.content === "test" &&
      message.author.id === "657958609526849536" &&
      message.channel.id === "670882155366449153"
    ) {
      const embed = new Discord.RichEmbed()
        .setTitle("현재 핑")
        .addField("핑", Math.floor(client.ping))
        .setThumbnail(
          "https://playentry.org/uploads/profile/5c/ff/avatar_5cff3addbc5c91571a8b8ecd.png?1578276384708"
        )
        .setColor(0x00ff00)
        .setTimestamp();
      client.channels.get("669435108096344064").send(embed);
    } else if (gongji === 2 && message.author.id === "647736678815105037") {
      /*
              else if (message.content === '//리로드') {
                  if (message.author.id !== '647736678815105037') return;
                  const embed = new Discord.RichEmbed()
                      .setTitle('Reloading Started')
                      .setDescription('봇의 파일을 리로딩하기 시작했습니다.')
                      .setColor(0x00ffff)
                      .setFooter(message.author.tag, message.author.avatarURL)
                      .setTimestamp()
                  const m = await message.channel.send(embed);
                  fs.readdirSync("./commands/").forEach(dir => {
                      const commands = fs.readdirSync(`./commands/${dir}`).filter(f => f.endsWith(".js"));
      
                      for (let file of commands) {
                          let pull = require(`../${dir}/${file}`);
      
                          if (pull.name) {
                              delete require.cache[require.resolve(`../${dir}/${file}`)];
                              commands.delete(pull);
                              commands.set(pull.name, pull);
                          } else {
                              continue;
                          }
                      }
                      reload += 1;
                      const embed3 = new Discord.RichEmbed()
                          .setTitle('Reloading...')
                          .setDescription('봇의 파일을 리로딩 중입니다.')
                          .addField('현재 리로딩 상태', reload + '/' + client.commands.size + '개의 파일 리로드 완료')
                          .addField('파일 이름', `${file}`)
                          .setColor(0x00ffff)
                          .setFooter(message.author.tag, message.author.avatarURL)
                          .setTimestamp()
                      m.edit(embed3);
                  });
                  const embed2 = new Discord.RichEmbed()
                      .setTitle('Reloaded!')
                      .setDescription(client.commands.size + '개 파일 리로딩 완료!')
                      .setFooter(message.author.tag, message.author.avatarURL)
                      .setColor(0x00ff00)
                      .setTimestamp()
                  m.edit(embed2);
                  reload = 0;
              }
              */
      ncont = message.content;
      if (notice.channels != []) {
        const embed = new Discord.RichEmbed()
          .setTitle(ntitle)
          .setDescription(ncont)
          .setColor(0x00ff00)
          .setFooter("작성자: " + message.author.tag, message.author.avatarURL)
          .setThumbnail(
            "https://playentry.org/uploads/profile/5c/ff/avatar_5cff3addbc5c91571a8b8ecd.png?1578276384708"
          )
          .setTimestamp();
        const embed2 = new Discord.RichEmbed().setTitle("공지 전송 시작!");
        let ggg = await message.channel.send(embed2);
        for (var i = 0; i < notice.channels.length; i++) {
          const test = client.channels.get(notice.channels[i]);
          if (test) {
            embed2.setTitle("공지 전송중...");
            embed2.setDescription(
              message.author.tag +
                "님에 의해 작성된 공지\n현재 전송 완료율\n" +
                i +
                "/" +
                notice.channels.length +
                "개 채널 전송 완료\n현재 전송중인 채널 정보\n" +
                client.channels.get(notice.channels[i]).name +
                "(" +
                notice.channels[i] +
                ")"
            );
            embed2.setColor(0xffff00);
            embed2.setFooter(message.author.tag, message.author.avatarURL);
            embed2.setTimestamp();
            await ggg.edit(embed2);
            nch = client.channels.get(notice.channels[i]);
            if (nch) {
              client.channels.get(notice.channels[i]).send(embed);
            }
          }
        }
        const embed3 = new Discord.RichEmbed()
          .setTitle("공지 전송 완료!")
          .setDescription(
            message.author.tag + "님이 작성한 공지를 전송했습니다."
          )
          .addField("채널 수", notice.channels.length)
          .addField("공지 제목", ntitle)
          .addField("공지 내용", ncont)
          .setThumbnail(message.author.avatarURL)
          .setFooter(message.author.tag, message.author.avatarURL)
          .setColor(0x00ff00)
          .setTimestamp();
        await ggg.edit(embed3);
        ntitle = null;
        ncont = null;
        gongji = 0;
      } else {
        ncont = null;
        ntitle = null;
      }
    }
    if (message.content === "/돈받기") {
      if (!money[message.author.id]) {
        money[message.author.id] = {
          money: 0
        };
      }

      let moneyAmt = Math.floor(Math.random() * 100) + 1;
      let baseAmt = moneyAmt;

      if (moneyAmt === baseAmt) {
        money[message.author.id] = {
          money: money[message.author.id].money + moneyAmt
        };

        fs.writeFile("./money.json", JSON.stringify(money), err => {
          if (err) console.log(err);
        });
        console.log(money);

        let umoney = money[message.author.id].money;

        const embed = new Discord.RichEmbed()
          .setTitle("돈 지급 완료!")
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setTimestamp()
          .setColor(0xffff00)
          .setThumbnail(message.author.displayAvatarURL)
          .addField("지급된 돈(원)", `${moneyAmt}`)
          .addField("보유 금액(원)", `${umoney}`);
        message.channel.send(embed);
      }
    } else if (message.content.startsWith("/초대 ")) {
      const embed = new Discord.RichEmbed().setTitle("초대 링크 생성 중...");
      const c = client.channels.get(message.content.substr(4));
      if (!c) return;
      let sug = await message.channel.send(embed);
      if (c) {
        let i = c.createInvite().then(i => {
          const embbed = new Discord.RichEmbed()
            .setTitle("초대 링크 생성 완료!")
            .setDescription("초대 링크: https://discord.gg/" + i.code)
            .setColor(0x00ff00)
            .setThumbnail(c.guild.iconURL)
            .addField("초대 서버", c.guild.name)
            .addField("초대 채널", c.name)
            .addField("사용 가능 기간", "1일")
            .addField("사용 가능 유저 수", "무제한")
            .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp();
          sug.edit(embbed);
        });
        message.delete();
      }
    } else if (message.content === "/올인") {
      if (!money[message.author.id]) {
        message.channel.send("먼저 돈을 받아주세요");
      } else {
        message.channel.send("확률은 절반! 2배가 되거나 잔고가 0원이 됩니다.");
        if (Math.floor(Math.random() * 2) + 1 === 1) {
          message.channel.send(
            "올인 성공!\n현재 돈: " + money[message.author.id].money * 2 + "원"
          );
          money[message.author.id] = {
            money: money[message.author.id].money * 2
          };
          fs.writeFile("./money.json", JSON.stringify(money), err => {
            if (err) console.log(err);
          });
        } else {
          message.channel.send("올인 실패...\n현재 돈: 0원");
          money[message.author.id] = {
            money: 0
          };
          fs.writeFile("./money.json", JSON.stringify(money), err => {
            if (err) console.log(err);
          });
        }
      }
    } else if (message.content === "/돈") {
      if (message.content === "/돈") {
        if (!money[message.author.id]) {
          money[message.author.id] = {
            money: 0
          };
        }

        let umoney = money[message.author.id].money;

        const embed = new Discord.RichEmbed()
          .setTitle(`${message.author.username}님의 돈`)
          .setFooter(message.author.username, message.author.displayAvatarURL)
          .setThumbnail(message.author.displayAvatarURL)
          .setTimestamp()
          .setColor(0xffff00)
          .addField("현재 돈(원)", `${umoney}`);
        message.channel.send(embed);
      }
    } else if (calculator === 2) {
      if (message.content < 0) {
        var second = message.content;
        message.reply("연산 기호를 입력해주세요(+,-,*,/)");
        calculator = 3;
      }
    } else if (message.content === "//게임") {
      v = 1;
      message.reply("입력");
    } else if (message.content === "//상태") {
      s = 1;
      message.reply("입력(online/idle/dnd/offline)");
    } else if (
      v === 1 &&
      message.author.id === "647736678815105037" &&
      message.channel.id === "666906733754712095"
    ) {
      nowgame = message.content;
      if (boolcount) {
        client.user.setPresence({
          status: nowstatus,
          game: {
            name:
              nowgame +
              " | " +
              client.guilds.size +
              "개의 서버에 참여중 | " +
              client.users.size +
              "명의 사용자와 함께하는 중",
            type: "PLAYING"
          }
        });
      } else {
        client.user.setPresence({
          status: nowstatus,
          game: {
            name: nowgame,
            type: "PLAYING"
          }
        });
      }
      v = 0;
    } else if (
      message.content === "//count false" &&
      message.author.id === "647736678815105037" &&
      message.channel.id === "666906733754712095"
    ) {
      boolcount = false;
      client.user.setPresence({
        status: nowstatus,
        game: {
          name: nowgame,
          type: "PLAYING"
        }
      });
    } else if (
      message.content === "//count true" &&
      message.author.id === "647736678815105037" &&
      message.channel.id === "666906733754712095"
    ) {
      boolcount = true;
      client.user.setPresence({
        status: nowstatus,
        game: {
          name:
            nowgame +
            " | " +
            client.guilds.size +
            "개의 서버에 참여중 | " +
            client.users.size +
            "명의 사용자와 함께하는 중",
          type: "PLAYING"
        }
      });
    } else if (message.content === "/건의") {
      g = 1;
      gid = message.author.id;
      message.reply("건의사항을 입력해주세요");
    } else if (message.author.id === gid && g === 1) {
      const embed = new Discord.RichEmbed()
        .setTitle("건의")
        .addField("건의 작성자", message.author.tag)
        .addField("건의사항", message.content)
        .setThumbnail(message.author.avatarURL)
        .setColor(0xffff00)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp();
      gunei.send(embed);
      gid = null;
      g = 0;
    }
    const args = message.content.split(" ").slice(1);

    if (message.content.startsWith("/eval ")) {
      if (
        message.author.id != "647736678815105037" &&
        message.author.id != "657958609526849536"
      )
        return;
      const imbed = new Discord.RichEmbed()
        .setTitle("Evaling...")
        .addField("입력", "```js\n" + message.content.substr(6) + "\n```")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp();
      const m = await message.channel.send(imbed);
      try {
        const code = args.join(" ");
        let evaled = eval(code);
        console.log(evaled);
        if (typeof evaled !== "string") evaled = util.inspect(evaled);
        if (evaled.length >= 1020) evaled = `${evaled.substr(0, 1010)}...`;
        console.log(clean(evaled));
        const embed = new Discord.RichEmbed()
          .setTitle("eval 결과")
          .setDescription(
            "~~이건 제가 ditto7890#8948님 도움 없이 혼자서 만든 코드입니다.~~"
          )
          .addField(
            "입력 코드",
            "```js\n" + message.content.substr(6) + "\n```"
          )
          .addField("결과", "```js\n" + clean(evaled) + "\n```")
          .addField("결과 자료형", "```js\n" + type(clean(evaled)) + "\n```")
          .setColor(0x00ff00)
          .setFooter(message.author.tag, message.author.avatarURL)
          .setTimestamp();
        m.edit(embed);
      } catch (err) {
        if (message.channel.type != "text") return;
        const embed = new Discord.RichEmbed()
          .setTitle("에러...")
          .setDescription("봇 제작자에게 에러가 전송되었습니다. ")
          .addField("에러 내용", err)
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/665169857972797440/670904480388218900/unknown.png"
          );
        const embed2 = new Discord.RichEmbed()
          .setTitle("eval 오류")
          .setDescription(
            "~~이건 제가 ditto7890#8948님 도움 없이 혼자서 만든 코드입니다.~~"
          )
          .addField(
            "입력 코드",
            "```js\n" + message.content.substr(6) + "\n```"
          )
          .addField("오류 내용", "```js\n" + err + "\n```")
          .setColor(0xff0000)
          .setFooter(message.author.tag, message.author.avatarURL)
          .setTimestamp();
        m.edit(embed2);
        bug.send(embed);
      }
    } else if (
      s === 1 &&
      message.author.id === "647736678815105037" &&
      message.channel.id === "666906733754712095"
    ) {
      nowstatus = message.content;
      if (boolcount) {
        client.user.setPresence({
          status: nowstatus,
          game: {
            name:
              nowgame +
              " | " +
              client.guilds.size +
              "개의 서버에 참여중 | " +
              client.users.size +
              "명의 사용자와 함께하는 중",
            type: "PLAYING"
          }
        });
      } else {
        client.user.setPresence({
          status: nowstatus,
          game: {
            name: nowgame,
            type: "PLAYING"
          }
        });
      }
      s = 0;
    } else if (calculator === 1) {
      if (message.content < 0) {
        var first = message.content;
        message.reply("두번째 수를 입력해주세요");
        calculator = 2;
      }
    } else if (message.content === "/초대링크") {
      const embed = new Discord.RichEmbed()
        .setTitle("초대 링크")
        .setDescription("이용해 주셔서 감사합니다!")
        .setURL(
          "https://discordapp.com/api/oauth2/authorize?client_id=657958609526849536&permissions=8&scope=bot",
          "기본 권한으로 초대하기"
        )
        .addField(
          "권한 직접 설정(아이디: 657958609526849536",
          "https://mswgen.github.io/discordbotlink"
        );
      message.channel.send(embed);
      console.log("초대링크 제공 완료");
    } else if (message.content === "/랜덤숫자") {
      message.reply(Math.floor(Math.random() * 100) + 1);
      console.log("랜덤수 작성 완료");
    } else if (message.content === "/투표") {
      p1 = 1;
      pname = null;
      poptions = [];
      pauthor = message.author.id;
      message.reply("투표 이름을 입력해주세요");
    } else if (message.content === "/ㅅㅈㅅㄱ") {
      message.reply("ㅎ2");
    } else if (message.content === "/ㅅㅁㅅㄱ") {
      message.reply("ㅃ2");
    } else if (message.content === "/찬반투표") {
      p2 = 1;
      pauthor = message.author.id;
      message.reply("투표 이름을 입력해주세요");
    } else if (p2 === 1 && message.author.id === pauthor) {
      pname = message.content;
      p2 = 0;
      const embed = new Discord.RichEmbed()
        .setTitle("투표")
        .setColor(0xffff00)
        .setDescription(pname + "(찬반투표)")
        .setTimestamp();
      message.channel.send(embed);
      p2 = 2;
    } else if (p2 === 2 && message.author.id === "657958609526849536") {
      async function rreact() {
        await message.react("👍");
        await message.react("👎");
      }
      rreact();
      p2 = 0;
    } else if (p1 === 1 && message.author.id === pauthor) {
      pname = message.content;
      p1 = 0;
      pcount = 1;
      message.reply("1번째 투표 항목을 입력하세요");
    } else if (pcount === 1 && message.author.id === pauthor) {
      if (true) {
        poptions.push(message.content);
        p1 = 0;
        pcount = 2;
        message.reply(
          "2번째 투표 항목을 입력하세요(취소하려면 esc를 입력해주세요)"
        );
      } else {
        poll(message.channel);
      }
    } else if (pcount === 2 && message.author.id === pauthor) {
      if (message.content != "esc") {
        poptions.push(message.content);
        p1 = 0;
        pcount = 3;
        message.reply(
          "3번째 투표 항목을 입력하세요(취소하려면 esc를 입력해주세요)"
        );
      } else {
        poll(message.channel);
      }
    } else if (pcount === 3 && message.author.id === pauthor) {
      if (message.content != "esc") {
        poptions.push(message.content);
        p1 = 0;
        pcount = 4;
        message.reply(
          "4번째 투표 항목을 입력하세요(취소하려면 esc를 입력해주세요)"
        );
      } else {
        poll(message.channel);
      }
    } else if (pcount === 4 && message.author.id === pauthor) {
      if (message.content != "esc") {
        poptions.push(message.content);
        p1 = 0;
        pcount = 5;
        message.reply(
          "5번째 투표 항목을 입력하세요(취소하려면 esc를 입력해주세요)"
        );
      } else {
        poll(message.channel);
      }
    } else if (pcount === 5 && message.author.id === pauthor) {
      if (message.content != "esc") {
        poptions.push(message.content);
        p1 = 0;
        pcount = 6;
        message.reply(
          "6번째 투표 항목을 입력하세요(취소하려면 esc를 입력해주세요)"
        );
      } else {
        poll(message.channel);
      }
    } else if (pcount === 6 && message.author.id === pauthor) {
      if (message.content != "esc") {
        poptions.push(message.content);
        p1 = 0;
        pcount = 7;
        message.reply(
          "7번째 투표 항목을 입력하세요(취소하려면 esc를 입력해주세요)"
        );
      } else {
        poll(message.channel);
      }
    } else if (pcount === 7 && message.author.id === pauthor) {
      if (message.content != "esc") {
        poptions.push(message.content);
        p1 = 0;
        pcount = 8;
        message.reply(
          "8번째 투표 항목을 입력하세요(취소하려면 esc를 입력해주세요)"
        );
      } else {
        poll(message.channel);
      }
    } else if (pcount === 8 && message.author.id === pauthor) {
      if (message.content != "esc") {
        poptions.push(message.content);
        p1 = 0;
        pcount = 9;
        message.reply(
          "9번째 투표 항목을 입력하세요(취소하려면 esc를 입력해주세요)"
        );
      } else {
        poll(message.channel);
      }
    } else if (pcount === 9 && message.author.id === pauthor) {
      if (message.content != "esc") {
        poptions.push(message.content);
        p1 = 0;
        pcount = 10;
        message.reply(
          "10번째 투표 항목을 입력하세요(취소하려면 esc를 입력해주세요)"
        );
      } else {
        poll(message.channel);
      }
    } else if (pcount === 10 && message.author.id === pauthor) {
      if (message.content != "esc") {
        pcount = 11;
        poptions.push(message.content);
        p1 = 0;
        poll(message.channel);
      } else {
        poll(message.channel);
      }
    } else if (message.author.id === "657958609526849536" && psend) {
      async function rrreact(pcount) {
        await message.react("1️⃣");
        await message.react("2️⃣");
        if (pcount > 2) {
          await message.react("3️⃣");
        }
        if (pcount > 3) {
          await message.react("4️⃣");
        }
        if (pcount > 4) {
          await message.react("5️⃣");
        }
        if (pcount > 5) {
          await message.react("6️⃣");
        }
        if (pcount > 6) {
          await message.react("7️⃣");
        }
        if (pcount > 7) {
          await message.react("8️⃣");
        }
        if (pcount > 8) {
          await message.react("9️⃣");
        }
        if (pcount > 9) {
          await message.react("🔟");
        }
      }
      rrreact(pcount);
      psend = false;
      pcount = 0;
    } else if (message.content === "/안녕") {
      random = Math.floor(Math.random() * 2) + 1;
      if (random === 1) {
        message.reply("안녕");
        console.log("안녕이라고 대답(랜덤 1)");
      } else if (random === 2) {
        message.reply("안녕하세요");
        console.log("안녕하세요라고 대답(랜덤 2)");
      }
    } else if (message.content.startsWith(`/재생 `)) {
      console.log(message.content);
      execute(message.content, message, serverQueue, "undefined");
      return;
    } else if (message.content.startsWith(`/스킵`)) {
      skip(message, serverQueue);
      return;
    } else if (message.content.startsWith(`/정지`)) {
      stop(message, serverQueue);
    } else if (message.content === "/핑") {
      /*
              else if (message.content === '재생') {
             dispatcher.on('end', () => {
               // The song has finished
              });
          
              dispatcher.on('error', e => {
               // Catch any errors that may arise
              console.log(e);
              });
          
              dispatcher.setVolume(0.5); // Set the volume to 50%
              dispatcher.setVolume(1); // Set the volume back to 100%
          
              console.log(dispatcher.time); // The time in milliseconds that the stream dispatcher has been playing for
          
              dispatcher.pause(); // Pause the stream
              dispatcher.resume(); // Carry on playing
          
              dispatcher.end(); // End the dispatcher, emits 'end' event
              }
              */
      const eeembed = new Discord.RichEmbed().setTitle("핑 측정 중...");
      const m = await message.channel.send(eeembed);
      p = Math.floor(client.ping);
      const embed = new Discord.RichEmbed()
        .setTitle("퐁!")
        .setColor(0x00ff00)
        .addField("현재 봇의 핑(ms)", p)
        .setTimestamp()
        .setThumbnail("https://i.imgur.com/1Gk4tOj.png");
      m.edit(embed);
    } else if (message.content.startsWith("/추방")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member && message.author.id === "647736678815105037") {
          member
            .kick("이유 없음")
            .then(() => {
              message.reply(`${user.tag}님을 추방했어요.`);
              console.log("멤버 추방 완료");
            })
            .catch(err => {
              message.reply("멤버를 추방할 수 없어요.");
              console.log("추방 실패");
            });
        } else {
          if (message.author.id === "647736678815105037") {
            message.reply("mswgen님만 추방 기능을 사용할 수 있어요.");
          } else {
            message.reply("That user isn't in this guild!");
          }
        }
      } else {
        message.reply("추방시킬 유저를 멘션해주세요.");
      }
    } else if (message.content.startsWith("/차단")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member && message.author.id === "647736678815105037") {
          member
            .ban("이유 없음")
            .then(() => {
              message.reply(`${user.tag}님을 차단했어요.`);
              console.log("멤버 차단 완료");
            })
            .catch(err => {
              message.reply("멤버를 차단할 수 없어요.");
              console.log("차단 실패");
            });
        } else {
          if (message.author.id === "647736678815105037") {
            message.reply("mswgen님만 차단 기능을 사용할 수 있어요.");
          } else {
            message.reply("That user isn't in this guild!");
          }
        }
      } else {
        message.reply("차단시킬 유저를 멘션해주세요.");
      }
    } else if (message.content === "/embed 초록색") {
      const embed = new Discord.RichEmbed()
        .setTitle("제목")
        .setColor(0x00ff00)
        .setDescription("내용");
      message.channel.send(embed);
    } else if (message.content === "/embed 빨간색") {
      const embed = new Discord.RichEmbed()
        .setTitle("제목")
        .setColor(0xff0000)
        .setDescription("내용");
      message.channel.send(embed);
    } else if (message.content === "/embed 파란색") {
      const embed = new Discord.RichEmbed()
        .setTitle("제목")
        .setColor(0x0000ff)
        .setDescription("내용");
      message.channel.send(embed);
    } else if (message.content === "/도움" || message.content === "/도움말") {
      const embed = new Discord.RichEmbed()
        .setTitle("mswgen봇(?) 도움말")
        .setColor(0x00ff00)
        .setDescription(
          "도움: 봇의 도움말을 확인\nping: pong이라고 응답\n랜덤숫자: 1~100사이의 랜덤 숫자를 제공\nembed (색상): 빨간색,초록색,파란색 중 선택한 색으로 임베드 메세지를 제공함\n 초대링크: 봇의 초대링크를 제공\n안녕: 안녕 또는 안녕하세요 중 랜덤으로 하나를 대답함\n추방 (유저 멘션): 멘션한 유저를 추방\n차단 (유저 멘션): 멘션한 유저를 차단\n핑: 현재 핑값을 알려줌\n가위바위보: 봇과 가위바위보를 시작\n햄스터시작: 햄스터봇 레벨업을 위한 도배를 시작\n햄스터끝: 햄스터봇 레벨업을 위한 도배를 끝냄\n일본: 일본파괴봇 도배 시작\n일본끝: 일본파괴봇 도배 끝"
        )
        .setThumbnail(
          "https://playentry.org/uploads/profile/5c/ff/avatar_5cff3addbc5c91571a8b8ecd.png?1578276384708"
        )
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp();
      message.author.send("도움말 망했습니다...ㅠㅠㅠ");
    } else if (message.content === "/계산기") {
      message.reply("첫번째 수를 입력해주세요");
      calculator = 1;
    } else if (message.content === "/음성 연결") {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join().then(connection => {
          message
            .reply("음성채널 연결 완료!")
            .then(console.log(connection))
            .catch(console.error);
        });
      } else {
        message.reply("먼저 음성 채널에 들어가주세요");
      }
    } else if (message.content.startsWith(":sob:")) {
      message
        .react(":sob:")
        .then(console.log)
        .catch(console.error);
    } else if (boolrsp) {
      if (message.content === "/가위") {
        userrsp = 1;
        message.reply("**가위**라고 응답하셨습니다.");
        boolrsp = false;
      } else if (message.content === ">>바위") {
        userrsp = 2;
        message.reply("**바위**라고 응답하셨습니다.");
        boolrsp = false;
      } else if (message.content === ">>보") {
        userrsp = 3;
        message.reply("**보**라고 응답하셨습니다.");
        boolrsp = false;
      }
      if (!boolrsp) {
        if (userrsp === 1) {
          if (rsp === 1) {
            message.reply("비겼어요");
          } else if (rsp === 2) {
            message.reply("제가 이겼어요!");
          } else if (rsp === 3) {
            message.reply("제가 졌어요...:sob:");
          }
        } else if (userrsp === 2) {
          if (rsp === 1) {
            message.reply("제가 졌어요...:sob:");
          } else if (rsp === 2) {
            message.reply("비겼어요");
          } else if (rsp === 3) {
            message.reply("제가 이겼어요!");
          }
        } else if (userrsp === 3) {
          if (rsp === 1) {
            message.reply("제가 이겼어요!");
          } else if (rsp === 2) {
            message.reply("제가 졌어요...:sob:");
          } else if (rsp === 3) {
            message.reply("비겼어요");
          }
        }
      }
    } else if (message.content === "/가위바위보") {
      rsp = Math.floor(Math.random() * 3) + 1;
      message.reply("가위, 바위, 보 중 하나를 입력해주세요");
      boolrsp = true;
    } else if (message.content === "/햄스터시작") {
      if (message.channel.startsWith("도배")) {
        message.reply("햄스터봇 도배 시작!");
        h = 1;
      }
      message.channel.send("커져라");
    } else if (message.content === "/햄스터끝") {
      message.reply("햄스터봇 도배 끝!");
      h = 0;
    } else if (message.content === "/react") {
      message
        .react("🤔")
        .then(console.log)
        .catch(console.error);
    } else if (message.content === "/일본") {
      j = 1;
      message.channel.send("일본 도배 시작!");
    } else if (message.content === "/일본끝") {
      j = 0;
      message.channel.send("일본 도배 끝!");
    } else if (message.content === "/서버현황") {
      var gu = "";
      const embed = new Discord.RichEmbed()
        .setTitle(
          "mswgen봇이 있는 서버 리스트(총 " + client.guilds.size + "개)"
        )
        .setColor(0x00ff00)
        .setThumbnail(
          "https://playentry.org/uploads/profile/5c/ff/avatar_5cff3addbc5c91571a8b8ecd.png?1578276384708"
        )
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp();
      client.guilds.forEach(g => {
        gu += g.name;
        gu += "(서버 id: ";
        gu += g.id;
        gu += ")\n";
      });
      embed.setDescription(gu);
      message.channel.send(embed);
    } else if (
      message.content === "/내 정보" ||
      message.content === "/내정보"
    ) {
      if (!message.author.presence.game.name) {
        gamename = "플레이 중인 게임 없음";
      } else {
        gamename = message.author.presence.game.name;
      }
      const embed = new Discord.RichEmbed()
        .setTitle("디스코드 유저 정보")
        .setColor(0x00ff00)
        .addField("닉네임", message.author.username)
        .addField("상세 닉네임(디스코드 테그 포함)", message.author.tag)
        .addField("서버 내 별명", message.member.nickname)
        .addField("id", message.author.id)
        .addField("봇 여부", message.author.bot, true)
        .addField("디스코드 가입일", message.author.createdAt, true)
        .addField("서버 참가일", message.member.joinedAt, true)
        .addField("현재 상태", message.author.presence.status, true)
        .addField("플레이 중인 게임", gamename, true)
        .addField("현재 상태 메세지", message.author.presence.game.state, true)
        .addField("가진 역할", message.member.roles)
        .addField("가장 높은 역할", message.member.highestRole, true)
        .setThumbnail(message.author.avatarURL)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp();
      message.channel.send(embed);
      console.log(message.member.roles);
    } else if (message.content === "/서버정보") {
      if (message.guild.explicitContentFilter === 0) {
        f = "미디어 콘탠츠를 스캔하지 않음";
      } else if (message.guild.explicitContentFilter === 1) {
        f = "역할 없는 멤버의 미디어 콘텐츠를 스캔함";
      } else if (message.guild.explicitContentFilter === 2) {
        f = "모든 멤버의 미디어 콘텐츠를 스캔함";
      }
      console.log(f);
      if (message.guild.verificationLevel === 0) {
        verifylv = "없음";
      } else if (message.guild.verificationLevel === 1) {
        verifylv = "낮음(Discord 이메일 인증 필요)";
      } else if (message.guild.verificationLevel === 2) {
        verifylv = "보통(Discord 이메일 인증 + 가입 5분 경과 필요)";
      } else if (message.guild.verificationLevel === 3) {
        verifylv =
          "높음(Discord 이메일 인증 + 가입 5분 경과 + 서버 참가 10분 경과 필요)";
      } else if (message.guild.verificationLevel === 4) {
        verifylv =
          "매우 높음(DIscord 이메일, 휴대폰 인증 + 가입 5분 경과 + 서버 참가 10분 경과 필요)";
      }
      console.log(verifylv);
      if (message.guild.afkChannel === null) {
        afk = "잠수 채널 없음";
        afktime = 0;
      } else {
        afk = message.guild.afkChannel;
        afktime = message.guild.afkTimeout;
      }
      const embed = new Discord.RichEmbed()
        .setTitle("서버 정보")
        .setColor(0x00ff00)
        .setThumbnail(message.guild.iconURL)
        .setDescription(message.guild.name + " 서버의 정보")
        .addField("서버 이름", message.guild.name)
        .addField("서버 id", message.guild.id, true)
        .addField("서버 생성일", message.guild.createdAt, true)
        .addField("서버 주인", message.guild.owner.user.username, true)
        .addField("서버 위치", message.guild.region, true)
        .addField("서버 인원 수(명)", message.guild.memberCount, true)
        .addField("서버 보안 수준", verifylv, true)
        .addField(
          "서버 관리에 2단계 인증 필요 여부",
          message.guild.mfaLevel,
          true
        )
        .addField("서버 잠수 시간(초)", afktime, true)
        .addField("서버 잠수채널", afk, true)
        .addField("서버 메세지 필터 옵션", f, true)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp();
      message.channel.send(embed);
    } else if (message.content === "/봇정보") {
      const embed = new Discord.RichEmbed()
        .setTitle("봇 정보")
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        .addField("봇 태그", client.user.tag)
        .addField("봇 id", client.user.id)
        .addField(
          "봇 제작자",
          "Skype와 Teamspeak랑 이별할 시간이에요#5458(참고로 원래 닉네임은 mswgen#5458입니다.)"
        )
        .addField("봇 업타임(초)", counttime(client.uptime))
        .addField("최근 핑", Math.floor(client.ping))
        .addField("봇 상태", client.status)
        .setColor(0x00ff00);
      message.channel.send(embed);
    } else if (message.content === "/삭제") {
      message.delete();
      message.delete();
    } else if (message.content.startsWith("/유튜브링크 ")) {
      message.channel.send(
        link(
          "https://www.youtube.com/results?search_query=",
          "+",
          message.content,
          7
        )
      );
      message.delete();
    } else if (message.content.startsWith("/네이버링크 ")) {
      message.channel.send(
        link(
          "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=",
          "+",
          message.content,
          7
        )
      );
      message.delete();
    } else if (message.content.startsWith("/다음링크 ")) {
      message.channel.send(
        link(
          "https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=",
          "+",
          message.content,
          6
        )
      );
      message.delete();
    } else if (message.content.startsWith("/구글링크 ")) {
      message.channel.send(
        link("https://www.google.co.kr/search?q=", "+", message.content, 6)
      );
      message.delete();
    } else if (message.content.startsWith("/나무위키 ")) {
      message.channel.send(
        link("https://namu.wiki/Search?q=", "%20", message.content, 6)
      );
      message.delete();
    } else if (
      message.content === "//재로그인" &&
      message.author.id === "647736678815105037"
    ) {
      relogin = true;
      relogch = message.channel.id;
      await message.react("👌");
      await message.channel.send("Relogining...");
      await client.destroy();
      await client.login(process.env.TOKEN);
    } else if (message.content === "/입력여부") {
      if (message.author.typingIn) {
        message.channel.send(message.author.username + " 님이 입력하고 있어요");
      }
    } else if (message.content.startsWith("/노래검색 ")) {
      var args2 = message.content;
      search(args2, function(err, res) {
        let videos = res.videos.slice(0, 1);
        console.log(videos);
        console.log(videos[0].url);
        execute("/재생 " + videos[0].url, message, serverQueue, videos[0]);
      });
    } else if (message.content === "/코로나") {
      var url = "http://ncov.mohw.go.kr/index_main.jsp";
      var url2 =
        "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true";
      var url3 =
        "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&outSR=102100&cacheHint=true";
      var url4 =
        "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&outSR=102100&cacheHint=true";

      var coronavirus_national = new Array();

      const embed = new Discord.RichEmbed()
        .setTitle("코로나 19 현황(코드 출처: ditto7890#8948)")
        .setColor(0xffff00)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

      request(url, function(error, ghkrwls, html) {
        if (!error) {
          var $ = cheerio.load(html);

          for (var i = 0; i < 3; i++) {
            $(".co_cur > ul > li > a").each(function() {
              var ghkr = $(this);
              var text = ghkr.text();
              coronavirus_national[i] = text;
              i++;
            });
          }

          var a = coronavirus_national[0].replace(/ /gi, "");
          var b = coronavirus_national[1].replace(/ /gi, "");
          var c = coronavirus_national[2].replace(/ /gi, "");

          request(url2, function(error, dd, html) {
            if (!error) {
              var d = JSON.parse(html, null, 1).features[0].attributes.value;
              request(url3, function(error, dd, html) {
                if (!error) {
                  var e = JSON.parse(html, null, 1).features[0].attributes
                    .value;
                  request(url4, function(error, dd, html) {
                    if (!error) {
                      var f = JSON.parse(html, null, 1).features[0].attributes
                        .value;

                      embed.setDescription(
                        `**국내**\n확진: **${a}**\n퇴원: **${b}**\n검사 진행: **${c}**\n\n**전세계**\n감염자: **${d}명**\n사망자: **${e}명**\n완치: **${f}명**\n\n**참고**\n[질병관리본부](http://ncov.mohw.go.kr/index_main.jsp)\n[존스홉킨스대학](https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)`
                      );

                      message.channel.send(embed);
                    }
                  });
                }
              });
            }
          });
        }
      });
    } else if (message.content === "/네이버실검") {
      var url = "https://www.naver.com/srchrank?frm=main";

      const embed = new Discord.RichEmbed()
        .setAuthor(
          "Naver",
          "https://images-ext-2.discordapp.net/external/42ygoEiRXm11O1d1fr9HLm5qcr0avgCd7zquMYh-9jU/http/pluspng.com/img-png/naver-logo-png-naver-300.png"
        )
        .setTitle("네이버 실시간 검색어")
        .setColor(0x00ff00)
        .setTimestamp()
        .setDescription("ditto7890#8948님의 코드를 사용했습니다.");

      request(url, function(error, tlfrja, html) {
        if (!error) {
          for (var i = 0; i < 20; i++) {
            embed.addField(
              `${i + 1}위`,
              `[${
                JSON.parse(html, null, 1).data[i].keyword
              }](https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=${JSON.parse(
                html,
                null,
                1
              ).data[i].keyword.replace(/ /gi, "+")})`
            );
          }

          message.channel.send(embed);
        }
      });
    } else if (message.content === "/친추") {
      message.author.addFriend();
    } else if (
      message.content === "/도배" &&
      message.channel.startsWith("도배")
    ) {
      message.channel.send("도배");
    } else if (message.content === "에러") {
      message.esuthjirkg();
    } else if (
      message.content.startsWith("/전체전송 ") &&
      message.author.id === "647736678815105037"
    ) {
      message.guild.channels.forEach(channel => {
        if (channel.type === "text") {
          channel.send(message.content.substr(6));
        }
      });
    } else if (message.content.startsWith("/핑퐁")) {
      mme = message;
      pingpong(message.content.substr(4), message.channel.id);
    }
  } catch (err) {
    if (message.channel.type != "text") return;
    const embed = new Discord.RichEmbed()
      .setTitle("에러...")
      .setDescription("봇 제작자에게 에러가 전송되었습니다. ")
      .addField("에러 내용", err)
      .setColor(0xff0000)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/665169857972797440/670904480388218900/unknown.png"
      );
    message.channel.send(embed);
    bug.send(embed);
  }
});
client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(ch => ch.name === "인사");
  if (!channel) return;
  random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    channel.send(`${member}님, 이 서버에 오신 걸 환영해요!`);
  } else if (random === 2) {
    channel.send(`ㅎ2 ${member}`);
  } else if (random === 3) {
    channel.send(`누가 새로 왔네요 ${member} 이분`);
  }
  return;
});
client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.find(ch => ch.name === "인사");
  if (!channel) return;
  random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    channel.send(`${member}님이 이 서버를 나가셨어요`);
  } else if (random === 2) {
    channel.send(`ㅃ2 ${member}`);
  } else if (random === 3) {
    channel.send(`가지마요 ${member}님ㅠㅠㅠ`);
  }
  return;
});

async function execute(content, message, serverQueue, song2) {
  if (song2 != null && song2 != "undefined") {
    const embed = new Discord.RichEmbed()
      .setTitle("노래 재생 시작!")
      .setDescription(message.author.tag + "님이 재생함")
      .setImage(song2.image)
      .setColor(0x00ffff)
      .addField("노래 제목", isdefined(song2.title))
      .addField("노래 URL", isdefined(song2.url))
      .addField("노래 설명", isdefined(song2.description))
      .addField("노래 재생 시간", isdefined(song2.timestamp))
      .addField("제작자 닉네임", isdefined(song2.author.name))
      .addField("제작자 id", isdefined(song2.author.id))
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp();
    mm = await message.channel.send(embed);
  }

  const args = content.split(" ");
  console.log(args);
  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel)
    return message.channel.send("먼저 음성 채널에 들어가주세요");
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send("음성 채널 연결과 말하기 권한이 없어요.");
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    return message.channel.send(`${song.title} 이(가) 대기열에 추가되었어요`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voiceChannel)
    return message.channel.send("음성 채널에 들어가주세요");
  if (!serverQueue)
    return message.channel.send("현재 플레이 중인 노래가 없어요");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voiceChannel)
    return message.channel.send("음성 채널에 들어가주세요");
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection.playStream(ytdl(song.url));
  dispatcher.on("end", () => {
    console.log("Music ended!");
    //musicoff(mm);
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0]);
  });
  dispatcher.on("error", error => {
    console.error(error);
  });
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}
/*
function musicoff(embed) {
    const embed2 = new Discord.RichEmbed()
        .setTitle('노래 재생 완료!')
        .setColor(0x00ff00)
        .setDescription(message.author.tag + '님이 재생함')
        .setImage(song2.image)
        .addField('노래 제목', song2.title)
        .addField('노래 URL', song2.url)
        .addField('노래 설명', song2.description)
        .addField('노래 재생 시간', song2.timestamp)
        .addField('제작자 닉네임', song2.author.name)
        .addField('제작자 id', song2.author.id)
        .setFooter(message.author.id, message.author.avatarURL)
        .setTimestamp()
    embed.edit(embed2);
}
*/
client.login(process.env.TOKEN);
