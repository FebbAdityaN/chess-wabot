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
		const isOwner = ["6285770269605@s.whatsapp.net"].includes(sender) ? true : false;
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
		
		if (isGroup && isCmd && !fromMe) {
			console.log("->[\x1b[1;32mCMD\x1b[1;37m]", color(moment(msg.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"), "yellow"), color(`${command} [${args.length}]`), "from", color(pushname), "in", color(groupName));
		}
		
		switch(command) {
			case '#chess':
			case '#catur':
				if (!isGroup) return reply('Fitur hanya dapat digunakan didalam grup.')
				/**
				*
				* Bot dibuat oleh @febbyadityan
				* dan @rzkyy.dev
				* Mau marah? wkwk
				*
				*/
				const _0x2a6be2=_0x3f88;(function(_0x4b302a,_0x29666b){const _0x52e196=_0x3f88,_0x27c72f=_0x4b302a();while(!![]){try{const _0x29d731=parseInt(_0x52e196(0x126))/0x1*(-parseInt(_0x52e196(0x105))/0x2)+-parseInt(_0x52e196(0xee))/0x3+-parseInt(_0x52e196(0xff))/0x4+parseInt(_0x52e196(0x11f))/0x5*(-parseInt(_0x52e196(0x10b))/0x6)+parseInt(_0x52e196(0xf8))/0x7*(-parseInt(_0x52e196(0x129))/0x8)+parseInt(_0x52e196(0x114))/0x9*(parseInt(_0x52e196(0xe8))/0xa)+parseInt(_0x52e196(0x11a))/0xb;if(_0x29d731===_0x29666b)break;else _0x27c72f['push'](_0x27c72f['shift']());}catch(_0x1fb7e0){_0x27c72f['push'](_0x27c72f['shift']());}}}(_0x2d9f,0x7eab5));const _0x31e24c=(function(){let _0x3cb84b=!![];return function(_0x18183b,_0x3019d7){const _0x4172a4=_0x3cb84b?function(){const _0x64fef0=_0x3f88;if(_0x3019d7){const _0x1d4f82=_0x3019d7[_0x64fef0(0x12a)](_0x18183b,arguments);return _0x3019d7=null,_0x1d4f82;}}:function(){};return _0x3cb84b=![],_0x4172a4;};}()),_0xf91c68=_0x31e24c(this,function(){const _0x146b4c=_0x3f88;return _0xf91c68[_0x146b4c(0xeb)]()['search'](_0x146b4c(0x10e))['toString']()[_0x146b4c(0x10c)](_0xf91c68)[_0x146b4c(0x11c)]('(((.+)+)+)+$');});function _0x3f88(_0x5a2279,_0x1f869b){const _0x3ac594=_0x2d9f();return _0x3f88=function(_0xf91c68,_0x31e24c){_0xf91c68=_0xf91c68-0xe1;let _0x2d9f72=_0x3ac594[_0xf91c68];return _0x2d9f72;},_0x3f88(_0x5a2279,_0x1f869b);}_0xf91c68();function _0x2d9f(){const _0x241674=['chess','18EXcFLI','currentTurn','Black','toLowerCase','length','sendMessage','28193671QFlaiq','start','search','\x0a\x0aKetik\x20*\x22#chess\x20mulai\x22*\x20untuk\x20memulai\x20permainan.\x0a\x0aBot\x20Created\x20by\x20*@febbyadityan*\x20&\x20*@rzkyy.dev*','deleteComment','1336715fApcta','white','https://chessboardimage.com/','black','isCheckmate','❌\x20Gerakan\x20tidak\x20sah,\x20atau\x20kamu\x20terkena\x20skakmat.','🕺🏻\x20Berhasil\x20bergabung.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20memulai\x20permainan.','1oUUiuG','random','⚠️\x20*Game\x20Seri.*\x0a🏳️\x20*Game\x20Catur\x20dihentikan.*\x0a*Pemain:*\x20','246336oojnlq','apply','Ketik\x20*\x22#chess\x20board\x22*\x20jika\x20kamu\x20lupa.','buat','✨\x20*Perintah\x20Game\x20Catur:*\x0a\x0a*#chess\x20buat*\x20-\x20Membuat\x20sesi\x20game\x0a*#chess\x20join*\x20-\x20Bergabung\x20dengan\x20sesi\x20yang\x20ada\x0a*#chess\x20mulai*\x20-\x20Memulai\x20game\x20ketika\x20dua\x20pemain\x20telah\x20bergabung\x0a*#chess\x20hapus*\x20-\x20Menghentikan\x20sesi\x20game\x0a*#chess\x20board*\x20-\x20Untuk\x20melihat\x20papan\x20catur\x0a*#chess\x20[dari]\x20[ke]*\x20-\x20Membuat\x20gerakan\x20di\x20catur\x0a\x0a*Contoh:*\x0aKetik\x20*#chess\x20a2\x20a3*\x20untuk\x20menggerakan\x20catur.\x0a\x0aBot\x20created\x20by\x20*@febbyadityan*\x20&\x20*@rzkyy.dev*','delete','papan','\x0a*Putih:*\x20@','*Permainan\x20dihentikan.*\x20🏳️','3852490IVQuis','Hitam','⚠️\x20Saat\x20ini\x20tidak\x20ada\x20permainan\x20catur.\x20Ketik\x20*\x22#chess\x20buat\x22*\x20untuk\x20membuat\x20sesi.','toString','move','create','2625147pbCJXX','split','⚠️\x20*Sekakmat.*\x0a🏳️\x20*Game\x20Catur\x20dihentikan.*\x0a*Pemenang:*\x20@','ready','🕹️\x20Game\x20sedang\x20dimulai,\x20tunggu\x20sampai\x20sesi\x20selesai\x20atau\x20hapus\x20sesi\x20untuk\x20mulai\x20ulang.','log','rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR\x20w\x20KQkq\x20-\x200\x201','waiting','&board=graffiti&piece=graffiti&size=3&coordinates=inside','status','7ZnTJLs','mulai','includes','fen','🎲\x20*Bagian:*\x20','*\x20yang\x20bergerak.','🎲\x20*Bagian:*\x20Putih\x20@','3460960BuIpga','-flip','help','push','indexOf','playing','1017910pBjQks','map','Putih','White','https://www.chess.com/dynboard?fen=','gabung','12WaxvZV','constructor','🕹️\x20Sesi\x20game\x20berhasil\x20dibuat.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20bergabung.','(((.+)+)+)+$','⏳\x20Saat\x20ini\x20*','&flip=true','board','join'];_0x2d9f=function(){return _0x241674;};return _0x2d9f();}if(conn[_0x2a6be2(0x113)]){let chessData=conn[_0x2a6be2(0x113)][msgKey]||{'gameData':null,'fen':null,'currentTurn':null,'players':[],'hasJoined':[]};conn[_0x2a6be2(0x113)][msgKey]=chessData;const {gameData,fen,currentTurn,players,hasJoined}=chessData,feature=args[0x1]?.[_0x2a6be2(0x117)]();if(feature===_0x2a6be2(0xe4)||feature==='hapus')return delete conn[_0x2a6be2(0x113)][msgKey],reactMessage('🏳️'),reply(_0x2a6be2(0xe7));if(feature===_0x2a6be2(0xed)||feature===_0x2a6be2(0xe2)){if(gameData)return reply(_0x2a6be2(0xf2));return chessData['gameData']={'status':_0x2a6be2(0xf5),'black':null,'white':null},reply(_0x2a6be2(0x10d));}if(feature===_0x2a6be2(0x112)||feature===_0x2a6be2(0x10a)){if(players[_0x2a6be2(0xfa)](sender))return reply('✋🏻\x20Kamu\x20telah\x20bergabung\x20dengan\x20sesi\x20ini.');if(!gameData||gameData[_0x2a6be2(0xf7)]!==_0x2a6be2(0xf5))return reply(_0x2a6be2(0xea));if(players[_0x2a6be2(0x118)]>=0x2)return reply('👥\x20Pemain\x20telah\x20siap,\x20game\x20akan\x20memulai\x20secara\x20otomatis.');players[_0x2a6be2(0x102)](sender),hasJoined[_0x2a6be2(0x102)](sender);if(players['length']===0x2){gameData[_0x2a6be2(0xf7)]=_0x2a6be2(0xf1);const [black,white]=Math[_0x2a6be2(0x127)]()<0.5?[players[0x1],players[0x0]]:[players[0x0],players[0x1]];return gameData[_0x2a6be2(0x122)]=black,gameData[_0x2a6be2(0x120)]=white,chessData[_0x2a6be2(0x115)]=white,conn[_0x2a6be2(0x119)](from,{'text':'📢\x20*Para\x20Pemain\x20telah\x20bergabung*\x0a'+hasJoined[_0x2a6be2(0x106)](_0x1345ef=>'-\x20@'+_0x1345ef[_0x2a6be2(0xef)]('@')[0x0])[_0x2a6be2(0x112)]('\x0a')+'\x0a\x0a*Hitam:*\x20@'+black[_0x2a6be2(0xef)]('@')[0x0]+_0x2a6be2(0xe6)+white[_0x2a6be2(0xef)]('@')[0x0]+_0x2a6be2(0x11d),'mentions':hasJoined},{'quoted':msg});}else return reply(_0x2a6be2(0x125));}if(feature===_0x2a6be2(0x11b)||feature===_0x2a6be2(0xf9)){if(gameData[_0x2a6be2(0xf7)]!==_0x2a6be2(0xf1))return reply('🚫\x20Tidak\x20dapat\x20memulai\x20permainan.\x20tunggu\x20para\x20pemain\x20bergabung.');gameData[_0x2a6be2(0xf7)]=_0x2a6be2(0x104);if(players[_0x2a6be2(0x118)]===0x2){const fen=_0x2a6be2(0xf4);chessData[_0x2a6be2(0xfb)]=fen;const encodedFen=encodeURIComponent(fen),turn=_0x2a6be2(0xfe)+gameData['white'][_0x2a6be2(0xef)]('@')[0x0],flipParam=sender===gameData[_0x2a6be2(0x122)]?'':_0x2a6be2(0x110),flipParam2=sender===gameData[_0x2a6be2(0x122)]?'':_0x2a6be2(0x100),boardUrl=_0x2a6be2(0x109)+encodedFen+_0x2a6be2(0xf6)+flipParam;try{var msg1=await conn[_0x2a6be2(0x119)](from,{'image':{'url':boardUrl},'mentions':[gameData['white']],'caption':_0x2a6be2(0xe1),'viewOnce':!![]},{'quoted':msg});await conn['sendMessage'](from,{'text':turn,'mentions':[gameData['white']]},{'quoted':msg1});}catch(_0x3923a8){const boardUrl2='https://chessboardimage.com/'+(encodedFen+flipParam2)+'.png';var msg2=await conn['sendMessage'](from,{'image':{'url':boardUrl2},'mentions':[gameData['black']],'caption':_0x2a6be2(0xe1),'viewOnce':!![]},{'quoted':msg});await conn[_0x2a6be2(0x119)](from,{'text':turn,'mentions':[gameData[_0x2a6be2(0x122)]]},{'quoted':msg2});}return;}else return reply('🕺🏻\x20Berhasil\x20bergabung.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20memulai\x20permainan.');}if(args[0x1]&&args[0x2]){if(!gameData||gameData[_0x2a6be2(0xf7)]!==_0x2a6be2(0x104))return reply('⚠️\x20Game\x20belum\x20dimulai.');chessData[_0x2a6be2(0x115)]!==sender&&await conn[_0x2a6be2(0x119)](from,{'text':_0x2a6be2(0x10f)+(chessData[_0x2a6be2(0x115)]===gameData[_0x2a6be2(0x120)]?_0x2a6be2(0x107):_0x2a6be2(0xe9))+_0x2a6be2(0xfd),'mentions':[chessData[_0x2a6be2(0x115)]]},{'quoted':msg});if(chess[_0x2a6be2(0x123)]())return delete conn[_0x2a6be2(0x113)][msgKey],conn[_0x2a6be2(0x119)](from,{'text':_0x2a6be2(0xf0)+sender[_0x2a6be2(0xef)]('@')[0x0],'mentions':[sender]},{'quoted':msg});if(chess['isDraw']())return delete conn[_0x2a6be2(0x113)][msgKey],conn[_0x2a6be2(0x119)](from,{'text':_0x2a6be2(0x128)+hasJoined[_0x2a6be2(0x106)](_0x1ff7a8=>'-\x20@'+_0x1ff7a8[_0x2a6be2(0xef)]('@')[0x0])['join']('\x0a'),'mentions':[hasJoined]},{'quoted':msg});const dari=args[0x1]?.[_0x2a6be2(0x117)](),ke=args[0x2]?.[_0x2a6be2(0x117)]();try{chess[_0x2a6be2(0xec)](dari+'-'+ke);}catch(_0x4769a4){return console[_0x2a6be2(0xf3)](_0x4769a4),reply(_0x2a6be2(0x124));}chessData['fen']=chess['fen']();const currentTurnIndex=players[_0x2a6be2(0x103)](chessData['currentTurn']),nextTurnIndex=(currentTurnIndex+0x1)%0x2;chessData[_0x2a6be2(0x115)]=players[nextTurnIndex];const encodedFen=encodeURIComponent(chess[_0x2a6be2(0xfb)]()),currentColor=chessData['currentTurn']===gameData[_0x2a6be2(0x120)]?_0x2a6be2(0x108):_0x2a6be2(0x116),turn=_0x2a6be2(0xfc)+currentColor+'\x20@'+chessData['currentTurn'][_0x2a6be2(0xef)]('@')[0x0]+'\x0a\x0a'+(chess['getComment']()||''),flipParam=sender===gameData['black']?'':_0x2a6be2(0x110),flipParam2=sender===gameData['black']?'':_0x2a6be2(0x100),boardUrl=_0x2a6be2(0x109)+encodedFen+_0x2a6be2(0xf6)+flipParam;try{var msg3=await conn['sendMessage'](from,{'image':{'url':boardUrl},'mentions':[chessData[_0x2a6be2(0x115)]],'caption':_0x2a6be2(0xe1),'viewOnce':!![]},{'quoted':msg});await conn[_0x2a6be2(0x119)](from,{'text':turn,'mentions':[chessData['currentTurn']]},{'quoted':msg3});}catch(_0x4f8d70){console[_0x2a6be2(0xf3)](_0x4f8d70);const boardUrl2=_0x2a6be2(0x121)+(encodedFen+flipParam2)+'.png';var msg4=await conn[_0x2a6be2(0x119)](from,{'image':{'url':boardUrl2},'mentions':[chessData[_0x2a6be2(0x115)]],'caption':_0x2a6be2(0xe1),'viewOnce':!![]},{'quoted':msg});await conn['sendMessage'](from,{'text':turn,'mentions':[chessData['currentTurn']]},{'quoted':msg4});}chess[_0x2a6be2(0x11e)]();return;}if(feature===_0x2a6be2(0x111)||feature===_0x2a6be2(0xe5)){if(!gameData||gameData[_0x2a6be2(0xf7)]!==_0x2a6be2(0x104))return reply('⚠️\x20Game\x20belum\x20dimulai.');const encodedFen=encodeURIComponent(chess['fen']()),boardUrl='https://www.chess.com/dynboard?fen='+encodedFen+_0x2a6be2(0xf6);return await conn['sendMessage'](from,{'image':{'url':boardUrl}},{'quoted':msg});}if(feature===_0x2a6be2(0x101))return reply(_0x2a6be2(0xe3));return reply('🚫\x20Perintah\x20invalid.\x20Ketik\x20*\x22#chess\x20help\x22*\x20untuk\x20melihat\x20perintah\x20yang\x20tersedia.');}
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