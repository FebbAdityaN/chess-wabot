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
				const _0x13c6f3=_0x3dd6;function _0x3dd6(_0x31c38b,_0xe33899){const _0x5a3a71=_0x5d4f();return _0x3dd6=function(_0x2e0fdb,_0x2d3beb){_0x2e0fdb=_0x2e0fdb-0xc2;let _0x5d4f50=_0x5a3a71[_0x2e0fdb];return _0x5d4f50;},_0x3dd6(_0x31c38b,_0xe33899);}(function(_0x5b67d4,_0x42d90c){const _0x3a03fb=_0x3dd6,_0x3933b7=_0x5b67d4();while(!![]){try{const _0x4da383=parseInt(_0x3a03fb(0xc2))/0x1*(-parseInt(_0x3a03fb(0xe3))/0x2)+-parseInt(_0x3a03fb(0xf7))/0x3+parseInt(_0x3a03fb(0xf4))/0x4*(-parseInt(_0x3a03fb(0xd0))/0x5)+-parseInt(_0x3a03fb(0xe4))/0x6*(parseInt(_0x3a03fb(0xcd))/0x7)+parseInt(_0x3a03fb(0xe5))/0x8+-parseInt(_0x3a03fb(0xe6))/0x9+parseInt(_0x3a03fb(0xd1))/0xa;if(_0x4da383===_0x42d90c)break;else _0x3933b7['push'](_0x3933b7['shift']());}catch(_0x291b35){_0x3933b7['push'](_0x3933b7['shift']());}}}(_0x5d4f,0xdddc4));const _0x2d3beb=(function(){let _0xc45dcf=!![];return function(_0x500c9d,_0xd9bcf){const _0x39a1a5=_0xc45dcf?function(){if(_0xd9bcf){const _0x45b83b=_0xd9bcf['apply'](_0x500c9d,arguments);return _0xd9bcf=null,_0x45b83b;}}:function(){};return _0xc45dcf=![],_0x39a1a5;};}()),_0x2e0fdb=_0x2d3beb(this,function(){const _0xab1729=_0x3dd6;return _0x2e0fdb[_0xab1729(0xf3)]()[_0xab1729(0xfd)]('(((.+)+)+)+$')[_0xab1729(0xf3)]()[_0xab1729(0xd7)](_0x2e0fdb)[_0xab1729(0xfd)](_0xab1729(0xe9));});_0x2e0fdb(),conn['chess']=conn[_0x13c6f3(0xca)]||{};function _0x5d4f(){const _0x23c8aa=['toString','12lWMqdM','*\x20yang\x20bergerak.','Black','1956408yVEXWr','length','gameData','status','rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR\x20w\x20KQkq\x20-\x200\x201','✋🏻\x20Kamu\x20telah\x20bergabung\x20dengan\x20sesi\x20ini.','search','📢\x20*Para\x20Pemain\x20telah\x20bergabung*\x0a','https://www.chess.com/dynboard?fen=','Hitam','&board=graffiti&piece=graffiti&size=3&coordinates=inside','join','isCheckmate','push','👥\x20Pemain\x20telah\x20siap,\x20game\x20akan\x20memulai\x20secara\x20otomatis.','help','5CzYFfi','create','start','Putih','https://chessboardimage.com/','random','getComment','\x0a*Putih:*\x20@','chess','move','-\x20@','11486237UwAhIc','split','✨\x20*Perintah\x20Game\x20Catur:*\x0a\x0a*#chess\x20buat*\x20-\x20Membuat\x20sesi\x20game\x0a*#chess\x20join*\x20-\x20Bergabung\x20dengan\x20sesi\x20yang\x20ada\x0a*#chess\x20mulai*\x20-\x20Memulai\x20game\x20ketika\x20dua\x20pemain\x20telah\x20bergabung\x0a*#chess\x20hapus*\x20-\x20Menghentikan\x20sesi\x20game\x0a*#chess\x20[dari]\x20[ke]*\x20-\x20Membuat\x20gerakan\x20di\x20catur\x0a\x0a*Contoh:*\x0aKetik\x20*#chess\x20a2\x20a3*\x20untuk\x20menggerakan\x20catur.\x0a\x0a*Bot\x20created\x20by\x20@febbyadityan\x20&\x20@rzkyy.dev*','164545HkYSsJ','24518790vDJvPw','isDraw','indexOf','🕹️\x20Sesi\x20game\x20berhasil\x20dibuat.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20bergabung.','-flip','sendMessage','constructor','toLowerCase','White','.png','playing','hapus','fen','log','\x0a\x0aKetik\x20*\x22#chess\x20mulai\x22*\x20untuk\x20memulai\x20permainan.\x0a\x0a*Bot\x20Created\x20by\x20@febbyadityan\x20&\x20@rzkyy.dev*','gabung','*Permainan\x20dihentikan.*\x20🏳️','ready','102094xMBIQX','6HQeVIb','9243584SAlSqE','464382vLSypt','&flip=true','white','(((.+)+)+)+$','buat','⚠️\x20*Sekakmat.*\x0a🏳️\x20*Game\x20Catur\x20dihentikan.*\x0a*Pemenang:*\x20@','map','waiting','currentTurn','black','🕺🏻\x20Berhasil\x20bergabung.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20memulai\x20permainan.','❌\x20Gerakan\x20tidak\x20sah.','⚠️\x20*Game\x20Seri.*\x0a🏳️\x20*Game\x20Catur\x20dihentikan.*\x0a*Pemain:*\x20'];_0x5d4f=function(){return _0x23c8aa;};return _0x5d4f();}if(conn['chess']){let chessData=conn['chess'][msgKey]||{'gameData':null,'fen':null,'currentTurn':null,'players':[],'hasJoined':[]};conn[_0x13c6f3(0xca)][msgKey]=chessData;const {gameData,fen,currentTurn,players,hasJoined}=chessData,feature=args[0x1]?.['toLowerCase']();if(feature==='delete'||feature===_0x13c6f3(0xdc))return delete conn[_0x13c6f3(0xca)][msgKey],reactMessage('🏳️'),reply(_0x13c6f3(0xe1));if(feature===_0x13c6f3(0xc3)||feature===_0x13c6f3(0xea)){if(gameData)return reply('🕹️\x20Game\x20sedang\x20dimulai,\x20tunggu\x20sampai\x20sesi\x20selesai\x20atau\x20hapus\x20sesi\x20untuk\x20mulai\x20ulang.');return chessData[_0x13c6f3(0xf9)]={'status':_0x13c6f3(0xed),'black':null,'white':null},reply(_0x13c6f3(0xd4));}if(feature===_0x13c6f3(0x102)||feature===_0x13c6f3(0xe0)){if(players['includes'](sender))return reply(_0x13c6f3(0xfc));if(!gameData||gameData['status']!==_0x13c6f3(0xed))return reply('⚠️\x20Saat\x20ini\x20tidak\x20ada\x20permainan\x20catur.\x20Ketik\x20*\x22#chess\x20buat\x22*\x20untuk\x20membuat\x20sesi.');if(players[_0x13c6f3(0xf8)]>=0x2)return reply(_0x13c6f3(0x105));players[_0x13c6f3(0x104)](sender),hasJoined[_0x13c6f3(0x104)](sender);if(players[_0x13c6f3(0xf8)]===0x2){gameData[_0x13c6f3(0xfa)]='ready';const [black,white]=Math[_0x13c6f3(0xc7)]()<0.5?[players[0x1],players[0x0]]:[players[0x0],players[0x1]];return gameData[_0x13c6f3(0xef)]=black,gameData['white']=white,chessData[_0x13c6f3(0xee)]=white,conn[_0x13c6f3(0xd6)](from,{'text':_0x13c6f3(0xfe)+hasJoined['map'](_0x776b4b=>'-\x20@'+_0x776b4b['split']('@')[0x0])[_0x13c6f3(0x102)]('\x0a')+'\x0a\x0a*Hitam:*\x20@'+black[_0x13c6f3(0xce)]('@')[0x0]+_0x13c6f3(0xc9)+white[_0x13c6f3(0xce)]('@')[0x0]+_0x13c6f3(0xdf),'mentions':hasJoined},{'quoted':msg});}else return reply('🕺🏻\x20Berhasil\x20bergabung.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20memulai\x20permainan.');}if(feature===_0x13c6f3(0xc4)||feature==='mulai'){if(gameData[_0x13c6f3(0xfa)]!==_0x13c6f3(0xe2))return reply('🚫\x20Tidak\x20dapat\x20memulai\x20permainan.\x20tunggu\x20para\x20pemain\x20bergabung.');gameData[_0x13c6f3(0xfa)]=_0x13c6f3(0xdb);if(players[_0x13c6f3(0xf8)]===0x2){const fen=_0x13c6f3(0xfb);chessData['fen']=fen;const encodedFen=encodeURIComponent(fen),turn='🎲\x20*Bagian:*\x20Putih\x20@'+gameData[_0x13c6f3(0xe8)][_0x13c6f3(0xce)]('@')[0x0],flipParam=sender===gameData[_0x13c6f3(0xef)]?'':'&flip=true',flipParam2=sender===gameData['black']?'':_0x13c6f3(0xd5),boardUrl='https://www.chess.com/dynboard?fen='+encodedFen+_0x13c6f3(0x101)+flipParam;try{await conn['sendMessage'](from,{'image':{'url':boardUrl},'mentions':[gameData['white']],'caption':turn},{'quoted':msg});}catch(_0x5c0f03){const boardUrl2=_0x13c6f3(0xc6)+(encodedFen+flipParam2)+_0x13c6f3(0xda);await conn[_0x13c6f3(0xd6)](from,{'image':{'url':boardUrl2},'mentions':[gameData[_0x13c6f3(0xef)]],'caption':turn},{'quoted':msg});}return;}else return reply(_0x13c6f3(0xf0));}if(args[0x1]&&args[0x2]){if(!gameData||gameData['status']!==_0x13c6f3(0xdb))return reply('⚠️\x20Game\x20belum\x20dimulai.');chessData[_0x13c6f3(0xee)]!==sender&&await conn[_0x13c6f3(0xd6)](from,{'text':'⏳\x20Saat\x20ini\x20*'+(chessData['currentTurn']===gameData[_0x13c6f3(0xe8)]?_0x13c6f3(0xc5):_0x13c6f3(0x100))+_0x13c6f3(0xf5),'mentions':[chessData['currentTurn']]},{'quoted':msg});if(chess[_0x13c6f3(0x103)]())return delete conn['chess'][msgKey],conn[_0x13c6f3(0xd6)](from,{'text':_0x13c6f3(0xeb)+sender[_0x13c6f3(0xce)]('@')[0x0],'mentions':[sender]},{'quoted':msg});if(chess[_0x13c6f3(0xd2)]())return delete conn[_0x13c6f3(0xca)][msgKey],conn['sendMessage'](from,{'text':_0x13c6f3(0xf2)+hasJoined[_0x13c6f3(0xec)](_0xc9902e=>_0x13c6f3(0xcc)+_0xc9902e[_0x13c6f3(0xce)]('@')[0x0])[_0x13c6f3(0x102)]('\x0a'),'mentions':[hasJoined]},{'quoted':msg});const dari=args[0x1]?.['toLowerCase'](),ke=args[0x2]?.[_0x13c6f3(0xd8)]();try{chess[_0x13c6f3(0xcb)](dari+'-'+ke);}catch(_0x357701){return console[_0x13c6f3(0xde)](_0x357701),reply(_0x13c6f3(0xf1));}chessData[_0x13c6f3(0xdd)]=chess[_0x13c6f3(0xdd)]();const currentTurnIndex=players[_0x13c6f3(0xd3)](chessData[_0x13c6f3(0xee)]),nextTurnIndex=(currentTurnIndex+0x1)%0x2;chessData['currentTurn']=players[nextTurnIndex];const encodedFen=encodeURIComponent(chess[_0x13c6f3(0xdd)]()),currentColor=chessData[_0x13c6f3(0xee)]===gameData['white']?_0x13c6f3(0xd9):_0x13c6f3(0xf6),turn='🎲\x20*Bagian:*\x20'+currentColor+'\x20@'+chessData[_0x13c6f3(0xee)][_0x13c6f3(0xce)]('@')[0x0]+'\x0a\x0a'+(chess[_0x13c6f3(0xc8)]()||''),flipParam=sender===gameData['black']?'':_0x13c6f3(0xe7),flipParam2=sender===gameData[_0x13c6f3(0xef)]?'':_0x13c6f3(0xd5),boardUrl=_0x13c6f3(0xff)+encodedFen+_0x13c6f3(0x101)+flipParam;try{await conn['sendMessage'](from,{'image':{'url':boardUrl},'mentions':[chessData[_0x13c6f3(0xee)]],'caption':turn},{'quoted':msg});}catch(_0x2562ad){console['log'](_0x2562ad);const boardUrl2=_0x13c6f3(0xc6)+(encodedFen+flipParam2)+_0x13c6f3(0xda);await conn[_0x13c6f3(0xd6)](from,{'image':{'url':boardUrl2},'mentions':[chessData[_0x13c6f3(0xee)]],'caption':turn},{'quoted':msg});}chess['deleteComment']();return;}if(feature===_0x13c6f3(0x106))return reply(_0x13c6f3(0xcf));return reply('🚫\x20Perintah\x20invalid.\x20Ketik\x20*\x22#chess\x20help\x22*\x20untuk\x20melihat\x20perintah\x20yang\x20tersedia.');}
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