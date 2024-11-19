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
				const _0x17b4d4=_0x45f7;(function(_0x4abf19,_0x199e7c){const _0x1e7a4a=_0x45f7,_0x283921=_0x4abf19();while(!![]){try{const _0x40c9f2=parseInt(_0x1e7a4a(0x95))/0x1+parseInt(_0x1e7a4a(0x90))/0x2*(-parseInt(_0x1e7a4a(0x7a))/0x3)+parseInt(_0x1e7a4a(0x85))/0x4*(parseInt(_0x1e7a4a(0x9d))/0x5)+parseInt(_0x1e7a4a(0x91))/0x6*(parseInt(_0x1e7a4a(0xa8))/0x7)+-parseInt(_0x1e7a4a(0x7d))/0x8+-parseInt(_0x1e7a4a(0xad))/0x9+-parseInt(_0x1e7a4a(0x7b))/0xa*(parseInt(_0x1e7a4a(0x82))/0xb);if(_0x40c9f2===_0x199e7c)break;else _0x283921['push'](_0x283921['shift']());}catch(_0x35416f){_0x283921['push'](_0x283921['shift']());}}}(_0xaec7,0x1a9c5));const _0x1d1b1c=(function(){let _0x17b83b=!![];return function(_0x1f91a8,_0x419a46){const _0x265fc4=_0x17b83b?function(){const _0x3082bc=_0x45f7;if(_0x419a46){const _0x524f37=_0x419a46[_0x3082bc(0x88)](_0x1f91a8,arguments);return _0x419a46=null,_0x524f37;}}:function(){};return _0x17b83b=![],_0x265fc4;};}()),_0x362371=_0x1d1b1c(this,function(){const _0x1eaa3b=_0x45f7;return _0x362371[_0x1eaa3b(0x75)]()['search'](_0x1eaa3b(0x7e))[_0x1eaa3b(0x75)]()['constructor'](_0x362371)[_0x1eaa3b(0x94)]('(((.+)+)+)+$');});function _0x45f7(_0x4327da,_0x15865d){const _0x50ee5c=_0xaec7();return _0x45f7=function(_0x362371,_0x1d1b1c){_0x362371=_0x362371-0x65;let _0xaec7e4=_0x50ee5c[_0x362371];return _0xaec7e4;},_0x45f7(_0x4327da,_0x15865d);}_0x362371();function _0xaec7(){const _0x5b0892=['✨\x20*Chess\x20Game\x20Commands:*\x0a\x0a*#chess\x20create*\x20-\x20Create\x20a\x20game\x20session\x0a*#chess\x20join*\x20-\x20Join\x20an\x20existing\x20session\x0a*#chess\x20start*\x20-\x20Start\x20the\x20game\x20when\x20two\x20players\x20have\x20joined\x0a*#chess\x20delete*\x20-\x20Stopping\x20a\x20game\x20session\x0a*#chess\x20[from]\x20[to]*\x20-\x20Making\x20moves\x20in\x20chess\x0a*#chess\x20board*\x20-\x20To\x20see\x20the\x20chess\x20board\x0a\x0a*Contoh:*\x0aType\x20*#chess\x20a2\x20a3*\x20to\x20move\x20the\x20chess\x20pieces.\x0a\x0aBot\x20created\x20by\x20*@febbyadityan*\x20&\x20*@rzkyy.dev*','-flip','1866051JtPODG','create','waiting','⚠️\x20Game\x20belum\x20dimulai.','🕹️\x20Game\x20is\x20starting,\x20wait\x20until\x20session\x20is\x20finished\x20or\x20delete\x20session\x20to\x20restart.','gabung','-\x20@','chess','map','✋🏻\x20You\x20have\x20joined\x20this\x20session.','🎲\x20*Section:*\x20White\x20@','Type\x20*\x22#chess\x20board\x22*\x20if\x20you\x20forgot.','buat','&board=graffiti&piece=graffiti&size=3&coordinates=inside','rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR\x20w\x20KQkq\x20-\x200\x201','isCheckmate','papan','*\x20that\x20moves.','👥\x20Players\x20are\x20ready,\x20the\x20game\x20will\x20start\x20automatically.','toString','\x0a*White:*\x20@','❌\x20Invalid\x20move,\x20or\x20you\x20are\x20checkmated.','Black','🚫\x20Invalid\x20command.\x20Type\x20*\x22#chess\x20help\x22*\x20to\x20see\x20available\x20commands.','3uyHksO','105880JMuCRf','🏳️','1059464RMklHm','(((.+)+)+)+$','length','toLowerCase','🕺🏻\x20Successfully\x20joined.\x20Wait\x20for\x20other\x20Players\x20to\x20start\x20the\x20game.','22vRxhTt','push','\x0a\x0aType\x20*\x22#chess\x20start\x22*\x20to\x20start\x20the\x20game.\x0a\x0aBot\x20Created\x20by\x20*@febbyadityan*\x20&\x20*@rzkyy.dev*','4afHhAV','mulai','⚠️\x20*Checkmate.*\x0a🏳️\x20*Chess\x20Game\x20Stopped.*\x0a*Winner:*\x20@','apply','black','https://chessboardimage.com/','deleteComment','White','.png','currentTurn','https://www.chess.com/dynboard?fen=','248866JUNwNH','6ZFOORq','white','delete','search','209618osccbL','fen','*Chess\x20Game\x20Stopped.*\x20🏳️','gameData','log','playing','🕹️\x20Game\x20session\x20successfully\x20created.\x20Wait\x20for\x20other\x20Players\x20to\x20join.','isDraw','962435CDIMjM','⚠️\x20There\x20are\x20currently\x20no\x20chess\x20games\x20available.\x20Type\x20*\x22#chess\x20create\x22*\x20to\x20create\x20a\x20session.','board','status','join','ready','⚠️\x20*Draw\x20game.*\x0a🏳️\x20*Chess\x20Game\x20Stopped.*\x0a*Player:*\x20','split','&flip=true','📢\x20*The\x20Players\x20have\x20joined*\x0a','random','1345911vBTUNx','🎲\x20*Turn:*\x20','sendMessage'];_0xaec7=function(){return _0x5b0892;};return _0xaec7();}if(conn[_0x17b4d4(0x69)]){let chessData=conn[_0x17b4d4(0x69)][msgKey]||{'gameData':null,'fen':null,'currentTurn':null,'players':[],'hasJoined':[]};conn[_0x17b4d4(0x69)][msgKey]=chessData;const {gameData,fen,currentTurn,players,hasJoined}=chessData,feature=args[0x1]?.[_0x17b4d4(0x80)]();if(feature===_0x17b4d4(0x93)||feature==='hapus')return delete conn[_0x17b4d4(0x69)][msgKey],reactMessage(_0x17b4d4(0x7c)),reply(_0x17b4d4(0x97));if(feature===_0x17b4d4(0xae)||feature===_0x17b4d4(0x6e)){if(gameData)return reply(_0x17b4d4(0x66));return chessData[_0x17b4d4(0x98)]={'status':_0x17b4d4(0xaf),'black':null,'white':null},reply(_0x17b4d4(0x9b));}if(feature===_0x17b4d4(0xa1)||feature===_0x17b4d4(0x67)){if(players['includes'](sender))return reply(_0x17b4d4(0x6b));if(!gameData||gameData[_0x17b4d4(0xa0)]!=='waiting')return reply(_0x17b4d4(0x9e));if(players[_0x17b4d4(0x7f)]>=0x2)return reply(_0x17b4d4(0x74));players['push'](sender),hasJoined[_0x17b4d4(0x83)](sender);if(players[_0x17b4d4(0x7f)]===0x2){gameData['status']=_0x17b4d4(0xa2);const [black,white]=Math[_0x17b4d4(0xa7)]()<0.5?[players[0x1],players[0x0]]:[players[0x0],players[0x1]];return gameData[_0x17b4d4(0x89)]=black,gameData[_0x17b4d4(0x92)]=white,chessData[_0x17b4d4(0x8e)]=white,conn[_0x17b4d4(0xaa)](from,{'text':_0x17b4d4(0xa6)+hasJoined['map'](_0x2ed1ef=>_0x17b4d4(0x68)+_0x2ed1ef[_0x17b4d4(0xa4)]('@')[0x0])[_0x17b4d4(0xa1)]('\x0a')+'\x0a\x0a*Black:*\x20@'+black['split']('@')[0x0]+_0x17b4d4(0x76)+white[_0x17b4d4(0xa4)]('@')[0x0]+_0x17b4d4(0x84),'mentions':hasJoined},{'quoted':msg});}else return reply(_0x17b4d4(0x81));}if(feature==='start'||feature===_0x17b4d4(0x86)){if(gameData[_0x17b4d4(0xa0)]!==_0x17b4d4(0xa2))return reply('🚫\x20Unable\x20to\x20start\x20game.\x20waiting\x20for\x20players\x20to\x20join.');gameData['status']=_0x17b4d4(0x9a);if(players[_0x17b4d4(0x7f)]===0x2){const fen=_0x17b4d4(0x70);chessData['fen']=fen;const encodedFen=encodeURIComponent(fen),turn=_0x17b4d4(0x6c)+gameData[_0x17b4d4(0x92)]['split']('@')[0x0],flipParam=sender===gameData[_0x17b4d4(0x89)]?'':_0x17b4d4(0xa5),flipParam2=sender===gameData[_0x17b4d4(0x89)]?'':_0x17b4d4(0xac),boardUrl=_0x17b4d4(0x8f)+encodedFen+_0x17b4d4(0x6f)+flipParam;try{var img1=await conn[_0x17b4d4(0xaa)](from,{'image':{'url':boardUrl},'mentions':[gameData[_0x17b4d4(0x92)]],'caption':_0x17b4d4(0x6d),'viewOnce':!![]},{'quoted':msg});conn[_0x17b4d4(0xaa)](from,{'text':turn,'mentions':[gameData['white']]},{'quoted':img1});}catch(_0x4a0ad6){const boardUrl2='https://chessboardimage.com/'+(encodedFen+flipParam2)+'.png';var img2=await conn[_0x17b4d4(0xaa)](from,{'image':{'url':boardUrl2},'mentions':[gameData[_0x17b4d4(0x89)]],'caption':'Type\x20*\x22#chess\x20board\x22*\x20if\x20you\x20forgot.','viewOnce':!![]},{'quoted':msg});conn[_0x17b4d4(0xaa)](from,{'text':turn,'mentions':[gameData['black']]},{'quoted':img2});}return;}else return reply('🕺🏻\x20Successfully\x20joined.\x20Wait\x20for\x20other\x20Players\x20to\x20start\x20the\x20game.');}if(args[0x1]&&args[0x2]){if(!gameData||gameData[_0x17b4d4(0xa0)]!==_0x17b4d4(0x9a))return reply('⚠️\x20The\x20game\x20has\x20not\x20started\x20yet.');chessData[_0x17b4d4(0x8e)]!==sender&&await conn[_0x17b4d4(0xaa)](from,{'text':'⏳\x20Currently\x20the\x20*'+(chessData[_0x17b4d4(0x8e)]===gameData['white']?'White':_0x17b4d4(0x78))+_0x17b4d4(0x73),'mentions':[chessData[_0x17b4d4(0x8e)]]},{'quoted':msg});if(chess[_0x17b4d4(0x71)]())return delete conn[_0x17b4d4(0x69)][msgKey],conn['sendMessage'](from,{'text':_0x17b4d4(0x87)+sender[_0x17b4d4(0xa4)]('@')[0x0],'mentions':[sender]},{'quoted':msg});if(chess[_0x17b4d4(0x9c)]())return delete conn[_0x17b4d4(0x69)][msgKey],conn[_0x17b4d4(0xaa)](from,{'text':_0x17b4d4(0xa3)+hasJoined[_0x17b4d4(0x6a)](_0x514c3a=>'-\x20@'+_0x514c3a['split']('@')[0x0])[_0x17b4d4(0xa1)]('\x0a'),'mentions':[hasJoined]},{'quoted':msg});const dari=args[0x1]?.['toLowerCase'](),ke=args[0x2]?.[_0x17b4d4(0x80)]();try{chess['move'](dari+'-'+ke);}catch(_0x2bcf17){return console[_0x17b4d4(0x99)](_0x2bcf17),reply(_0x17b4d4(0x77));}chessData[_0x17b4d4(0x96)]=chess[_0x17b4d4(0x96)]();const currentTurnIndex=players['indexOf'](chessData[_0x17b4d4(0x8e)]),nextTurnIndex=(currentTurnIndex+0x1)%0x2;chessData[_0x17b4d4(0x8e)]=players[nextTurnIndex];const encodedFen=encodeURIComponent(chess[_0x17b4d4(0x96)]()),currentColor=chessData[_0x17b4d4(0x8e)]===gameData['white']?_0x17b4d4(0x8c):_0x17b4d4(0x78),turn=_0x17b4d4(0xa9)+currentColor+'\x20@'+chessData[_0x17b4d4(0x8e)][_0x17b4d4(0xa4)]('@')[0x0]+'\x0a\x0a'+(chess['getComment']()||''),flipParam=sender===gameData['black']?'':'&flip=true',flipParam2=sender===gameData['black']?'':_0x17b4d4(0xac),boardUrl=_0x17b4d4(0x8f)+encodedFen+_0x17b4d4(0x6f)+flipParam;try{var img3=await conn['sendMessage'](from,{'image':{'url':boardUrl},'mentions':[chessData[_0x17b4d4(0x8e)]],'caption':_0x17b4d4(0x6d),'viewOnce':!![]},{'quoted':msg});conn['sendMessage'](from,{'text':turn,'mentions':[chessData[_0x17b4d4(0x8e)]]},{'quoted':img3});}catch(_0x1a782b){console[_0x17b4d4(0x99)](_0x1a782b);const boardUrl2=_0x17b4d4(0x8a)+(encodedFen+flipParam2)+_0x17b4d4(0x8d);var img4=await conn[_0x17b4d4(0xaa)](from,{'image':{'url':boardUrl2},'mentions':[chessData[_0x17b4d4(0x8e)]],'caption':_0x17b4d4(0x6d),'viewOnce':!![]},{'quoted':msg});conn[_0x17b4d4(0xaa)](from,{'text':turn,'mentions':[chessData[_0x17b4d4(0x8e)]]},{'quoted':img4});}chess[_0x17b4d4(0x8b)]();return;}if(feature===_0x17b4d4(0x9f)||feature===_0x17b4d4(0x72)){if(!gameData||gameData[_0x17b4d4(0xa0)]!=='playing')return reply(_0x17b4d4(0x65));const encodedFen=encodeURIComponent(chess[_0x17b4d4(0x96)]()),boardUrl=_0x17b4d4(0x8f)+encodedFen+_0x17b4d4(0x6f);return await conn['sendMessage'](from,{'image':{'url':boardUrl}},{'quoted':msg});}if(feature==='help')return reply(_0x17b4d4(0xab));return reply(_0x17b4d4(0x79));}
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