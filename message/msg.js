"use strict";
const { color } = require("../lib/color");
const moment = require("moment-timezone");
const util = require("util");
/**          Chess Game             */
const { Chess } = require("chess.js");
const chess = new Chess()

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async (conn, msg, m) => {
	try {
		// Block code below if you want self bot and can be used by others too
		if (msg.key.fromMe) return
		const { type, isQuotedMsg, quotedMsg, mentioned, now, fromMe } = msg;
		const toJSON = (j) => JSON.stringify(j, null, "\t");
		const messageType = Object.keys(msg.message)[0]
		const from = msg.key.remoteJid;
		const msgKey = msg.key
		const chats = type === "conversation" && msg.message.conversation ? msg.message.conversation : type === "imageMessage" && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : type === "videoMessage" && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : type === "extendedTextMessage" && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : type === "buttonsResponseMessage" && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : type === "templateButtonReplyMessage" && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : type === "messageContextInfo" ? msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId : type == "listResponseMessage" && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : "";
		const args = chats.split(" ");
		const command = chats.toLowerCase().split(" ")[0] || "";
		const q = chats.slice(command.length + 1, chats.length);
		const isGroup = msg.key.remoteJid.endsWith("@g.us");
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const sender = isGroup ? msg.key.participant ? msg.key.participant : msg.participant : msg.key.remoteJid;
		// Replace with your number
		const isOwner = ["62xxx@s.whatsapp.net"].includes(sender) ? true : false;
		const pushname = msg.pushName;
		const isCmd = chats.startsWith('#')
		
		const reply = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: msg });
		}
		
		const reactMessage = (react) => {
			var reactMsg = {
				react: {
					text: react,
					key: msgKey
				}
			}
			conn.sendMessage(from, reactMsg)
		}
		
		// Auto Read + Online
		conn.readMessages([msg.key]);
		conn.sendPresenceUpdate("available", from);
		
		// Console command in group
		if (isGroup && isCmd && !fromMe) {
			console.log("->[\x1b[1;32mCMD\x1b[1;37m]", color(moment(msg.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"), "yellow"), color(`${command} [${args.length}]`), "from", color(pushname), "in", color(groupName));
		}
		
		switch(command) {
			case '#chess':
			case '#catur':
				if (!isGroup) return reply('This feature can only be used within a group.')
				function _0x5cf3(_0x3e0e66,_0x519be8){const _0x5ca2f2=_0x604f();return _0x5cf3=function(_0x275854,_0x1bbc7a){_0x275854=_0x275854-0x184;let _0x604f09=_0x5ca2f2[_0x275854];return _0x604f09;},_0x5cf3(_0x3e0e66,_0x519be8);}function _0x604f(){const _0x773ca4=['join','17163SEVyRU','sendMessage','indexOf','✋🏻\x20You\x20have\x20joined\x20this\x20session.','toLowerCase','.png','190GXYkWw','821176lwCATo','mulai','random','🕹️\x20Game\x20is\x20starting,\x20wait\x20until\x20session\x20is\x20finished\x20or\x20delete\x20session\x20to\x20restart.','papan','fen','✋🏻\x20The\x20game\x20has\x20not\x20started\x20yet.','⚠️\x20*Checkmate.*\x0a🏳️\x20*Chess\x20Game\x20Stopped.*\x0a*Winner:*\x20@','search','create','⚠️\x20The\x20game\x20has\x20not\x20started\x20yet.','split','chess','(((.+)+)+)+$','gabung','Type\x20*\x22#chess\x20board\x22*\x20if\x20you\x20forgot.','white','🎲\x20*Turn:*\x20','constructor','log','🏳️','\x0a\x0a*Black:*\x20@','White','\x0a\x0aType\x20*\x22#chess\x20start\x22*\x20to\x20start\x20the\x20game.\x0a\x0aBot\x20Created\x20by\x20*@febbyadityan*\x20&\x20*@rzkyy.dev*','help','toString','push','delete','ready','includes','⚠️\x20There\x20are\x20currently\x20no\x20chess\x20games\x20available.\x20Type\x20*\x22#chess\x20create\x22*\x20to\x20create\x20a\x20session.','*Chess\x20Game\x20Stopped.*\x20🏳️','black','8akTOEv','*\x20that\x20moves.','-\x20@','3259776QffxEQ','&flip=true','🕺🏻\x20Successfully\x20joined.\x20Wait\x20for\x20other\x20Players\x20to\x20start\x20the\x20game.','hapus','start','&board=blue&piece=classic&size=3&coordinates=inside','apply','buat','2463360MAWnEO','924721ODnFAl','👥\x20Players\x20are\x20ready,\x20the\x20game\x20will\x20start\x20automatically.','currentTurn','playing','\x0a*White:*\x20@','map','rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR\x20w\x20KQkq\x20-\x200\x201','status','🕹️\x20Game\x20session\x20successfully\x20created.\x20Wait\x20for\x20other\x20Players\x20to\x20join.','waiting','move','⏳\x20Currently\x20the\x20*','⚠️\x20*Draw\x20game.*\x0a🏳️\x20*Chess\x20Game\x20Stopped.*\x0a*Player:*\x20','📢\x20*The\x20Players\x20have\x20joined*\x0a','328HblBfZ','https://chessboardimage.com/','-flip','🚫\x20Unable\x20to\x20start\x20game.\x20Waiting\x20for\x20players\x20to\x20join.','1416240mCnhOr','2177eFXEYB','Black'];_0x604f=function(){return _0x773ca4;};return _0x604f();}const _0x2cbdcd=_0x5cf3;(function(_0x4ead62,_0x1cb3a4){const _0x1284c4=_0x5cf3,_0x22c18f=_0x4ead62();while(!![]){try{const _0x4db72d=-parseInt(_0x1284c4(0x1c3))/0x1*(parseInt(_0x1284c4(0x1be))/0x2)+parseInt(_0x1284c4(0x1c2))/0x3+parseInt(_0x1284c4(0x1cd))/0x4+-parseInt(_0x1284c4(0x1af))/0x5+parseInt(_0x1284c4(0x1a7))/0x6+-parseInt(_0x1284c4(0x1b0))/0x7*(parseInt(_0x1284c4(0x1a4))/0x8)+-parseInt(_0x1284c4(0x1c6))/0x9*(-parseInt(_0x1284c4(0x1cc))/0xa);if(_0x4db72d===_0x1cb3a4)break;else _0x22c18f['push'](_0x22c18f['shift']());}catch(_0x15e110){_0x22c18f['push'](_0x22c18f['shift']());}}}(_0x604f,0x4329c));const _0x1bbc7a=(function(){let _0x45a520=!![];return function(_0x5e8698,_0x56f726){const _0x2a74a2=_0x45a520?function(){const _0x59ac90=_0x5cf3;if(_0x56f726){const _0x5a7a5c=_0x56f726[_0x59ac90(0x1ad)](_0x5e8698,arguments);return _0x56f726=null,_0x5a7a5c;}}:function(){};return _0x45a520=![],_0x2a74a2;};}()),_0x275854=_0x1bbc7a(this,function(){const _0x2370e5=_0x5cf3;return _0x275854[_0x2370e5(0x19c)]()['search'](_0x2370e5(0x190))[_0x2370e5(0x19c)]()[_0x2370e5(0x195)](_0x275854)[_0x2370e5(0x18b)](_0x2370e5(0x190));});_0x275854();if(conn['chess']){let chessData=conn[_0x2cbdcd(0x18f)][msgKey]||{'gameData':null,'fen':null,'currentTurn':null,'players':[],'hasJoined':[]};conn['chess'][msgKey]=chessData;const {gameData,fen,currentTurn,players,hasJoined}=chessData,feature=args[0x1]?.[_0x2cbdcd(0x1ca)]();if(feature===_0x2cbdcd(0x19e)||feature===_0x2cbdcd(0x1aa))return delete conn['chess'][msgKey],reactMessage(_0x2cbdcd(0x197)),reply(_0x2cbdcd(0x1a2));if(feature===_0x2cbdcd(0x18c)||feature===_0x2cbdcd(0x1ae)){if(gameData)return reply(_0x2cbdcd(0x186));return chessData['gameData']={'status':_0x2cbdcd(0x1b9),'black':null,'white':null},reply(_0x2cbdcd(0x1b8));}if(feature===_0x2cbdcd(0x1c5)||feature===_0x2cbdcd(0x191)){if(players[_0x2cbdcd(0x1a0)](sender))return reply(_0x2cbdcd(0x1c9));if(!gameData||gameData['status']!==_0x2cbdcd(0x1b9))return reply(_0x2cbdcd(0x1a1));if(players['length']>=0x2)return reply(_0x2cbdcd(0x1b1));players[_0x2cbdcd(0x19d)](sender),hasJoined[_0x2cbdcd(0x19d)](sender);if(players['length']===0x2){gameData[_0x2cbdcd(0x1b7)]=_0x2cbdcd(0x19f);const [black,white]=Math[_0x2cbdcd(0x185)]()<0.5?[players[0x1],players[0x0]]:[players[0x0],players[0x1]];return gameData[_0x2cbdcd(0x1a3)]=black,gameData[_0x2cbdcd(0x193)]=white,chessData[_0x2cbdcd(0x1b2)]=white,conn[_0x2cbdcd(0x1c7)](from,{'text':_0x2cbdcd(0x1bd)+hasJoined[_0x2cbdcd(0x1b5)](_0xd76e72=>_0x2cbdcd(0x1a6)+_0xd76e72['split']('@')[0x0])[_0x2cbdcd(0x1c5)]('\x0a')+_0x2cbdcd(0x198)+black['split']('@')[0x0]+_0x2cbdcd(0x1b4)+white[_0x2cbdcd(0x18e)]('@')[0x0]+_0x2cbdcd(0x19a),'mentions':hasJoined},{'quoted':msg});}else return reply(_0x2cbdcd(0x1a9));}if(feature===_0x2cbdcd(0x1ab)||feature===_0x2cbdcd(0x184))try{if(gameData[_0x2cbdcd(0x1b7)]!==_0x2cbdcd(0x19f))return reply(_0x2cbdcd(0x1c1));gameData[_0x2cbdcd(0x1b7)]=_0x2cbdcd(0x1b3);if(players['length']===0x2){const fen=_0x2cbdcd(0x1b6);chessData[_0x2cbdcd(0x188)]=fen;const encodedFen=encodeURIComponent(fen),turn='🎲\x20*Turn:*\x20Putih\x20@'+gameData[_0x2cbdcd(0x193)]['split']('@')[0x0],flipParam=sender===gameData[_0x2cbdcd(0x1a3)]?'':_0x2cbdcd(0x1a8),flipParam2=sender===gameData[_0x2cbdcd(0x1a3)]?'':_0x2cbdcd(0x1c0),boardUrl='https://www.chess.com/dynboard?fen='+encodedFen+_0x2cbdcd(0x1ac)+flipParam;try{var img1=await conn[_0x2cbdcd(0x1c7)](from,{'image':{'url':boardUrl},'mentions':[gameData['white']],'caption':_0x2cbdcd(0x192),'viewOnce':!![]},{'quoted':msg});conn[_0x2cbdcd(0x1c7)](from,{'text':turn,'mentions':[gameData[_0x2cbdcd(0x193)]]},{'quoted':img1});}catch(_0xc4b487){const boardUrl2=_0x2cbdcd(0x1bf)+(encodedFen+flipParam2)+'.png';var img2=await conn['sendMessage'](from,{'image':{'url':boardUrl2},'mentions':[gameData[_0x2cbdcd(0x1a3)]],'caption':_0x2cbdcd(0x192),'viewOnce':!![]},{'quoted':msg});conn[_0x2cbdcd(0x1c7)](from,{'text':turn,'mentions':[gameData[_0x2cbdcd(0x1a3)]]},{'quoted':img2});}return;}else return reply('🕺🏻\x20Successfully\x20joined.\x20Wait\x20for\x20other\x20Players\x20to\x20start\x20the\x20game.');}catch(_0x4a2a59){return reply(_0x2cbdcd(0x189));}if(args[0x1]&&args[0x2]){if(!gameData||gameData[_0x2cbdcd(0x1b7)]!==_0x2cbdcd(0x1b3))return reply(_0x2cbdcd(0x18d));chessData[_0x2cbdcd(0x1b2)]!==sender&&await conn['sendMessage'](from,{'text':_0x2cbdcd(0x1bb)+(chessData['currentTurn']===gameData[_0x2cbdcd(0x193)]?_0x2cbdcd(0x199):_0x2cbdcd(0x1c4))+_0x2cbdcd(0x1a5),'mentions':[chessData[_0x2cbdcd(0x1b2)]]},{'quoted':msg});if(chess['isCheckmate']())return delete conn[_0x2cbdcd(0x18f)][msgKey],conn[_0x2cbdcd(0x1c7)](from,{'text':_0x2cbdcd(0x18a)+sender[_0x2cbdcd(0x18e)]('@')[0x0],'mentions':[sender]},{'quoted':msg});if(chess['isDraw']())return delete conn[_0x2cbdcd(0x18f)][msgKey],conn[_0x2cbdcd(0x1c7)](from,{'text':_0x2cbdcd(0x1bc)+hasJoined['map'](_0x3ecbd1=>_0x2cbdcd(0x1a6)+_0x3ecbd1[_0x2cbdcd(0x18e)]('@')[0x0])[_0x2cbdcd(0x1c5)]('\x0a'),'mentions':[hasJoined]},{'quoted':msg});const dari=args[0x1]?.['toLowerCase'](),ke=args[0x2]?.[_0x2cbdcd(0x1ca)]();try{chess[_0x2cbdcd(0x1ba)](dari+'-'+ke);}catch(_0x4131a9){return console[_0x2cbdcd(0x196)](_0x4131a9),reply('❌\x20Invalid\x20move,\x20or\x20you\x20are\x20checkmated.');}chessData[_0x2cbdcd(0x188)]=chess['fen']();const currentTurnIndex=players[_0x2cbdcd(0x1c8)](chessData[_0x2cbdcd(0x1b2)]),nextTurnIndex=(currentTurnIndex+0x1)%0x2;chessData[_0x2cbdcd(0x1b2)]=players[nextTurnIndex];const encodedFen=encodeURIComponent(chess['fen']()),currentColor=chessData['currentTurn']===gameData[_0x2cbdcd(0x193)]?_0x2cbdcd(0x199):_0x2cbdcd(0x1c4),turn=_0x2cbdcd(0x194)+currentColor+'\x20@'+chessData[_0x2cbdcd(0x1b2)][_0x2cbdcd(0x18e)]('@')[0x0]+'\x0a\x0a'+(chess['getComment']()||''),flipParam=sender===gameData[_0x2cbdcd(0x1a3)]?'':_0x2cbdcd(0x1a8),flipParam2=sender===gameData[_0x2cbdcd(0x1a3)]?'':_0x2cbdcd(0x1c0),boardUrl='https://www.chess.com/dynboard?fen='+encodedFen+'&board=blue&piece=classic&size=3&coordinates=inside'+flipParam;try{var img3=await conn['sendMessage'](from,{'image':{'url':boardUrl},'mentions':[chessData[_0x2cbdcd(0x1b2)]],'caption':_0x2cbdcd(0x192),'viewOnce':!![]},{'quoted':msg});conn[_0x2cbdcd(0x1c7)](from,{'text':turn,'mentions':[chessData[_0x2cbdcd(0x1b2)]]},{'quoted':img3});}catch(_0x595e2d){console[_0x2cbdcd(0x196)](_0x595e2d);const boardUrl2=_0x2cbdcd(0x1bf)+(encodedFen+flipParam2)+_0x2cbdcd(0x1cb);var img4=await conn[_0x2cbdcd(0x1c7)](from,{'image':{'url':boardUrl2},'mentions':[chessData['currentTurn']],'caption':_0x2cbdcd(0x192),'viewOnce':!![]},{'quoted':msg});conn[_0x2cbdcd(0x1c7)](from,{'text':turn,'mentions':[chessData[_0x2cbdcd(0x1b2)]]},{'quoted':img4});}chess['deleteComment']();return;}if(feature==='board'||feature===_0x2cbdcd(0x187)){if(!gameData||gameData[_0x2cbdcd(0x1b7)]!=='playing')return reply('⚠️\x20The\x20game\x20has\x20not\x20started\x20yet.');const encodedFen=encodeURIComponent(chess[_0x2cbdcd(0x188)]()),boardUrl='https://www.chess.com/dynboard?fen='+encodedFen+_0x2cbdcd(0x1ac);return await conn[_0x2cbdcd(0x1c7)](from,{'image':{'url':boardUrl}},{'quoted':msg});}if(feature===_0x2cbdcd(0x19b))return reply('✨\x20*Chess\x20Game\x20Commands:*\x0a\x0a*#chess\x20create*\x20-\x20Create\x20a\x20game\x20session\x0a*#chess\x20join*\x20-\x20Join\x20an\x20existing\x20session\x0a*#chess\x20start*\x20-\x20Start\x20the\x20game\x20when\x20two\x20players\x20have\x20joined\x0a*#chess\x20delete*\x20-\x20Stopping\x20a\x20game\x20session\x0a*#chess\x20[from]\x20[to]*\x20-\x20Making\x20moves\x20in\x20chess\x0a*#chess\x20board*\x20-\x20To\x20see\x20the\x20chess\x20board\x0a\x0a*Contoh:*\x0aType\x20*#chess\x20a2\x20a3*\x20to\x20move\x20the\x20chess\x20pieces.\x0a\x0aBot\x20created\x20by\x20*@febbyadityan*\x20&\x20*@rzkyy.dev*');return reply('🚫\x20Invalid\x20command.\x20Type\x20*\x22#chess\x20help\x22*\x20to\x20see\x20available\x20commands.');}
				break
			case '>>':
				if (!isOwner) return
				try {
					let evaled = await eval(q);
					if (typeof evaled !== "string")
					evaled = require("util").inspect(evaled);
					reply(`${evaled}`);
				} catch (e) {
					reply(`${e}`)
				}
				break
			default:
				if (!chats) return
				break
		}
	} catch (err) {
		console.log(color("[ERROR]", "red"), err);
	}
};