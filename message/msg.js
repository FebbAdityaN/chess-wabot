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
				* follow ig: @febbyadityan
				* ig partner: @rzkyy.dev
				* Mau marah? wkwk
				*/
				function _0x46d4(_0x200314,_0x578956){const _0x7832a7=_0x18ae();return _0x46d4=function(_0x30389a,_0x1f01c5){_0x30389a=_0x30389a-0xd3;let _0x18ae97=_0x7832a7[_0x30389a];return _0x18ae97;},_0x46d4(_0x200314,_0x578956);}const _0x7956f5=_0x46d4;(function(_0x1611d1,_0x48f915){const _0x242757=_0x46d4,_0x582782=_0x1611d1();while(!![]){try{const _0x1c92f5=-parseInt(_0x242757(0x111))/0x1*(-parseInt(_0x242757(0xdc))/0x2)+parseInt(_0x242757(0xe1))/0x3*(parseInt(_0x242757(0x107))/0x4)+-parseInt(_0x242757(0xe3))/0x5*(-parseInt(_0x242757(0x10a))/0x6)+-parseInt(_0x242757(0xdd))/0x7*(-parseInt(_0x242757(0xde))/0x8)+parseInt(_0x242757(0x10e))/0x9+parseInt(_0x242757(0xda))/0xa*(-parseInt(_0x242757(0x112))/0xb)+-parseInt(_0x242757(0xd3))/0xc;if(_0x1c92f5===_0x48f915)break;else _0x582782['push'](_0x582782['shift']());}catch(_0x34bf84){_0x582782['push'](_0x582782['shift']());}}}(_0x18ae,0x7d3e4));const _0x1f01c5=(function(){let _0x5befa6=!![];return function(_0x4e8941,_0x28587e){const _0x54cd06=_0x5befa6?function(){const _0x82ac32=_0x46d4;if(_0x28587e){const _0x5d1266=_0x28587e[_0x82ac32(0xfd)](_0x4e8941,arguments);return _0x28587e=null,_0x5d1266;}}:function(){};return _0x5befa6=![],_0x54cd06;};}()),_0x30389a=_0x1f01c5(this,function(){const _0x47b833=_0x46d4;return _0x30389a[_0x47b833(0x103)]()[_0x47b833(0xdb)](_0x47b833(0xd5))[_0x47b833(0x103)]()['constructor'](_0x30389a)[_0x47b833(0xdb)](_0x47b833(0xd5));});function _0x18ae(){const _0x40057d=['random','currentTurn','Hitam','log','26798964TEVaTY','sendMessage','(((.+)+)+)+$','ready','&flip=true','split','deleteComment','246730mSqbBC','search','4bijcUY','42ngRRvi','1212496NPVhRV','toLowerCase','Putih','36ZKdtZB','buat','19255Hanayq','👥\x20Pemain\x20telah\x20siap,\x20game\x20akan\x20memulai\x20secara\x20otomatis.','⏳\x20Saat\x20ini\x20*','waiting','&board=graffiti&piece=graffiti&size=3&coordinates=inside','rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR\x20w\x20KQkq\x20-\x200\x201','🚫\x20Tidak\x20dapat\x20memulai\x20permainan.\x20tunggu\x20para\x20pemain\x20bergabung.','playing','\x0a*Putih:*\x20@','status','hapus','✋🏻\x20Kamu\x20telah\x20bergabung\x20dengan\x20sesi\x20ini.','push','✨\x20*Perintah\x20Game\x20Catur:*\x0a\x0a*#chess\x20buat*\x20-\x20Membuat\x20sesi\x20game\x0a*#chess\x20join*\x20-\x20Bergabung\x20dengan\x20sesi\x20yang\x20ada\x0a*#chess\x20mulai*\x20-\x20Memulai\x20game\x20ketika\x20dua\x20pemain\x20telah\x20bergabung\x0a*#chess\x20hapus*\x20-\x20Menghentikan\x20sesi\x20game\x0a*#chess\x20[dari]\x20[ke]*\x20-\x20Membuat\x20gerakan\x20di\x20catur\x0a\x0a*Contoh:*\x0aKetik\x20*#chess\x20a2\x20a3*\x20untuk\x20menggerakan\x20catur.','🕹️\x20Sesi\x20game\x20berhasil\x20dibuat.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20bergabung.','isDraw','gabung','🚫\x20Perintah\x20invalid.\x20Ketik\x20*\x22#chess\x20help\x22*\x20untuk\x20melihat\x20perintah\x20yang\x20tersedia.','getComment','-\x20@','start','chess','isCheckmate','https://chessboardimage.com/','-flip','📢\x20*Para\x20Pemain\x20telah\x20bergabung*\x0a','apply','🎲\x20*Bagian:*\x20Putih\x20@','create','help','https://www.chess.com/dynboard?fen=','map','toString','*\x20yang\x20bergerak.','fen','delete','79088MJoMmR','🕹️\x20Game\x20sedang\x20dimulai,\x20tunggu\x20sampai\x20sesi\x20selesai\x20atau\x20hapus\x20sesi\x20untuk\x20mulai\x20ulang.','indexOf','582gbpxXn','.png','gameData','⚠️\x20Game\x20belum\x20dimulai.','5400549nYkKog','black','join','498047dTcVeu','165EyEjMu','mulai','white','length'];_0x18ae=function(){return _0x40057d;};return _0x18ae();}_0x30389a(),conn['chess']=conn[_0x7956f5(0xf8)]||{};if(conn[_0x7956f5(0xf8)]){let chessData=conn['chess'][msgKey]||{'gameData':null,'fen':null,'currentTurn':null,'players':[],'hasJoined':[]};conn[_0x7956f5(0xf8)][msgKey]=chessData;const {gameData,fen,currentTurn,players,hasJoined}=chessData,feature=args[0x1]?.[_0x7956f5(0xdf)]();if(feature===_0x7956f5(0x106)||feature===_0x7956f5(0xed))return delete conn[_0x7956f5(0xf8)][msgKey],reactMessage('🏳️'),reply('*Permainan\x20dihentikan.*\x20🏳️');if(feature===_0x7956f5(0xff)||feature===_0x7956f5(0xe2)){if(gameData)return reply(_0x7956f5(0x108));return chessData[_0x7956f5(0x10c)]={'status':_0x7956f5(0xe6),'black':null,'white':null},reply(_0x7956f5(0xf1));}if(feature===_0x7956f5(0x110)||feature===_0x7956f5(0xf3)){if(players['includes'](sender))return reply(_0x7956f5(0xee));if(!gameData||gameData[_0x7956f5(0xec)]!==_0x7956f5(0xe6))return reply('⚠️\x20Saat\x20ini\x20tidak\x20ada\x20permainan\x20catur.\x20Ketik\x20*\x22#chess\x20buat\x22*\x20untuk\x20membuat\x20sesi.');if(players[_0x7956f5(0x115)]>=0x2)return reply(_0x7956f5(0xe4));players[_0x7956f5(0xef)](sender),hasJoined[_0x7956f5(0xef)](sender);if(players[_0x7956f5(0x115)]===0x2){gameData['status']=_0x7956f5(0xd6);const [black,white]=Math[_0x7956f5(0x116)]()<0.5?[players[0x1],players[0x0]]:[players[0x0],players[0x1]];return gameData[_0x7956f5(0x10f)]=black,gameData[_0x7956f5(0x114)]=white,chessData['currentTurn']=white,conn[_0x7956f5(0xd4)](from,{'text':_0x7956f5(0xfc)+hasJoined[_0x7956f5(0x102)](_0x483f01=>_0x7956f5(0xf6)+_0x483f01[_0x7956f5(0xd8)]('@')[0x0])[_0x7956f5(0x110)]('\x0a')+'\x0a\x0a*Hitam:*\x20@'+black['split']('@')[0x0]+_0x7956f5(0xeb)+white['split']('@')[0x0]+'\x0a\x0aKetik\x20\x27*#chess\x20mulai*\x27\x20untuk\x20memulai\x20permainan.\x0a\x0a*Bot\x20Created\x20by\x20@febbyadityan\x20&\x20@rzkyy.dev','mentions':hasJoined},{'quoted':msg});}else return reply('🕺🏻\x20Berhasil\x20bergabung.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20memulai\x20permainan.');}if(feature===_0x7956f5(0xf7)||feature===_0x7956f5(0x113)){if(!gameData||gameData['status']!==_0x7956f5(0xe6))return reply('⚠️\x20Saat\x20ini\x20tidak\x20ada\x20permainan\x20catur.\x20Ketik\x20*\x22#chess\x20buat\x22*\x20untuk\x20membuat\x20sesi.');if(gameData['status']!==_0x7956f5(0xd6))return reply(_0x7956f5(0xe9));gameData[_0x7956f5(0xec)]=_0x7956f5(0xea);if(players[_0x7956f5(0x115)]===0x2){const fen=_0x7956f5(0xe8);chessData[_0x7956f5(0x105)]=fen;const encodedFen=encodeURIComponent(fen),turn=_0x7956f5(0xfe)+gameData[_0x7956f5(0x114)][_0x7956f5(0xd8)]('@')[0x0],flipParam=sender===gameData[_0x7956f5(0x10f)]?'':_0x7956f5(0xd7),flipParam2=sender===gameData[_0x7956f5(0x10f)]?'':_0x7956f5(0xfb),boardUrl=_0x7956f5(0x101)+encodedFen+_0x7956f5(0xe7)+flipParam;try{await conn[_0x7956f5(0xd4)](from,{'image':{'url':boardUrl},'mentions':[gameData['white']],'caption':turn},{'quoted':msg});}catch(_0x19a09a){const boardUrl2=_0x7956f5(0xfa)+(encodedFen+flipParam2)+_0x7956f5(0x10b);await conn['sendMessage'](from,{'image':{'url':boardUrl2},'mentions':[gameData['black']],'caption':turn},{'quoted':msg});}return;}else return reply('🕺🏻\x20Berhasil\x20bergabung.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20memulai\x20permainan.');}if(args[0x1]&&args[0x2]){if(!gameData||gameData[_0x7956f5(0xec)]!==_0x7956f5(0xea))return reply(_0x7956f5(0x10d));chessData['currentTurn']!==sender&&await conn['sendMessage'](from,{'text':_0x7956f5(0xe5)+(chessData[_0x7956f5(0x117)]===gameData[_0x7956f5(0x114)]?_0x7956f5(0xe0):_0x7956f5(0x118))+_0x7956f5(0x104),'mentions':[chessData['currentTurn']]},{'quoted':msg});if(chess[_0x7956f5(0xf9)]())return delete conn[_0x7956f5(0xf8)][msgKey],conn[_0x7956f5(0xd4)](from,{'text':'⚠️\x20*Sekakmat.*\x0a🏳️\x20*Game\x20Catur\x20dihentikan.*\x0a*Pemenang:*\x20@'+sender[_0x7956f5(0xd8)]('@')[0x0],'mentions':[sender]},{'quoted':msg});if(chess[_0x7956f5(0xf2)]())return delete conn[_0x7956f5(0xf8)][msgKey],conn[_0x7956f5(0xd4)](from,{'text':'⚠️\x20*Game\x20Seri.*\x0a🏳️\x20*Game\x20Catur\x20dihentikan.*\x0a*Pemain:*\x20'+hasJoined[_0x7956f5(0x102)](_0x4e42da=>'-\x20@'+_0x4e42da['split']('@')[0x0])[_0x7956f5(0x110)]('\x0a'),'mentions':[hasJoined]},{'quoted':msg});const dari=args[0x1]?.['toLowerCase'](),ke=args[0x2]?.[_0x7956f5(0xdf)]();try{chess['move'](dari+'-'+ke);}catch(_0x3fb0a6){return console[_0x7956f5(0x119)](_0x3fb0a6),reply('❌\x20Gerakan\x20tidak\x20sah.');}chessData[_0x7956f5(0x105)]=chess['fen']();const currentTurnIndex=players[_0x7956f5(0x109)](chessData[_0x7956f5(0x117)]),nextTurnIndex=(currentTurnIndex+0x1)%0x2;chessData['currentTurn']=players[nextTurnIndex];const encodedFen=encodeURIComponent(chess[_0x7956f5(0x105)]()),currentColor=chessData[_0x7956f5(0x117)]===gameData[_0x7956f5(0x114)]?'White':'Black',turn='🎲\x20*Bagian:*\x20'+currentColor+'\x20@'+chessData[_0x7956f5(0x117)]['split']('@')[0x0]+'\x0a\x0a'+(chess[_0x7956f5(0xf5)]()||''),flipParam=sender===gameData[_0x7956f5(0x10f)]?'':_0x7956f5(0xd7),flipParam2=sender===gameData[_0x7956f5(0x10f)]?'':_0x7956f5(0xfb),boardUrl='https://www.chess.com/dynboard?fen='+encodedFen+_0x7956f5(0xe7)+flipParam;try{await conn['sendMessage'](from,{'image':{'url':boardUrl},'mentions':[chessData['currentTurn']],'caption':turn},{'quoted':msg});}catch(_0x5f23a4){console[_0x7956f5(0x119)](_0x5f23a4);const boardUrl2=_0x7956f5(0xfa)+(encodedFen+flipParam2)+'.png';await conn[_0x7956f5(0xd4)](from,{'image':{'url':boardUrl2},'mentions':[chessData[_0x7956f5(0x117)]],'caption':turn},{'quoted':msg});}chess[_0x7956f5(0xd9)]();return;}if(feature===_0x7956f5(0x100))return reply(_0x7956f5(0xf0));return reply(_0x7956f5(0xf4));}
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