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
		
		if (isGroup && isCmd && !fromMe) {
			console.log("->[\x1b[1;32mCMD\x1b[1;37m]", color(moment(msg.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"), "yellow"), color(`${command} [${args.length}]`), "from", color(pushname), "in", color(groupName));
		}
		
		switch(command) {
			case '#chess':
			case '#catur':
				if (!isGroup) return reply('Fitur hanya dapat digunakan didalam grup.')
				const _0x22ec7a=_0x4c94;function _0x4c94(_0x1c4e78,_0x52e0a6){const _0x3cc059=_0x43ac();return _0x4c94=function(_0x1d4c8b,_0xb2df89){_0x1d4c8b=_0x1d4c8b-0x71;let _0x43ac63=_0x3cc059[_0x1d4c8b];return _0x43ac63;},_0x4c94(_0x1c4e78,_0x52e0a6);}(function(_0x20cfe6,_0x5b4756){const _0x221276=_0x4c94,_0x393483=_0x20cfe6();while(!![]){try{const _0x5529ff=-parseInt(_0x221276(0x89))/0x1*(parseInt(_0x221276(0xb8))/0x2)+-parseInt(_0x221276(0x90))/0x3+-parseInt(_0x221276(0xa4))/0x4+-parseInt(_0x221276(0x8e))/0x5+-parseInt(_0x221276(0x73))/0x6+parseInt(_0x221276(0x8c))/0x7+parseInt(_0x221276(0xba))/0x8;if(_0x5529ff===_0x5b4756)break;else _0x393483['push'](_0x393483['shift']());}catch(_0x14ccc9){_0x393483['push'](_0x393483['shift']());}}}(_0x43ac,0x8cd9f));const _0xb2df89=(function(){let _0x4c1400=!![];return function(_0xba3cdb,_0x4db7f4){const _0x3fd35a=_0x4c1400?function(){const _0x655575=_0x4c94;if(_0x4db7f4){const _0x10ac1b=_0x4db7f4[_0x655575(0x9d)](_0xba3cdb,arguments);return _0x4db7f4=null,_0x10ac1b;}}:function(){};return _0x4c1400=![],_0x3fd35a;};}()),_0x1d4c8b=_0xb2df89(this,function(){const _0x5a7f07=_0x4c94;return _0x1d4c8b[_0x5a7f07(0xa3)]()[_0x5a7f07(0x71)](_0x5a7f07(0xa8))[_0x5a7f07(0xa3)]()[_0x5a7f07(0x96)](_0x1d4c8b)['search']('(((.+)+)+)+$');});_0x1d4c8b();if(conn[_0x22ec7a(0x95)]){let chessData=conn['chess'][msgKey]||{'gameData':null,'fen':null,'currentTurn':null,'players':[],'hasJoined':[]};conn[_0x22ec7a(0x95)][msgKey]=chessData;const {gameData,fen,currentTurn,players,hasJoined}=chessData,feature=args[0x1]?.[_0x22ec7a(0x85)]();if(feature===_0x22ec7a(0xb3)||feature==='hapus')return delete conn[_0x22ec7a(0x95)][msgKey],reactMessage(_0x22ec7a(0xb0)),reply(_0x22ec7a(0x8a));if(feature===_0x22ec7a(0x87)||feature===_0x22ec7a(0x78)){if(gameData)return reply(_0x22ec7a(0xa0));return chessData['gameData']={'status':'waiting','black':null,'white':null},reply(_0x22ec7a(0x92));}if(feature==='join'||feature===_0x22ec7a(0x7d)){if(players[_0x22ec7a(0x8d)](sender))return reply(_0x22ec7a(0x83));if(!gameData||gameData[_0x22ec7a(0x98)]!=='waiting')return reply(_0x22ec7a(0x9b));if(players['length']>=0x2)return reply(_0x22ec7a(0x9a));players['push'](sender),hasJoined['push'](sender);if(players[_0x22ec7a(0xa6)]===0x2){gameData['status']=_0x22ec7a(0x93);const [black,white]=Math[_0x22ec7a(0x91)]()<0.5?[players[0x1],players[0x0]]:[players[0x0],players[0x1]];return gameData[_0x22ec7a(0xac)]=black,gameData['white']=white,chessData[_0x22ec7a(0xaf)]=white,conn[_0x22ec7a(0xa1)](from,{'text':_0x22ec7a(0x99)+hasJoined[_0x22ec7a(0x84)](_0x2aa27b=>_0x22ec7a(0x7e)+_0x2aa27b[_0x22ec7a(0xb5)]('@')[0x0])[_0x22ec7a(0x8f)]('\x0a')+_0x22ec7a(0xa2)+black[_0x22ec7a(0xb5)]('@')[0x0]+_0x22ec7a(0x79)+white['split']('@')[0x0]+_0x22ec7a(0x7b),'mentions':hasJoined},{'quoted':msg});}else return reply(_0x22ec7a(0x86));}if(feature===_0x22ec7a(0x94)||feature===_0x22ec7a(0xb6))try{if(gameData['status']!==_0x22ec7a(0x93))return reply(_0x22ec7a(0x76));gameData[_0x22ec7a(0x98)]=_0x22ec7a(0x7a);if(players['length']===0x2){const fen='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR\x20w\x20KQkq\x20-\x200\x201';chessData[_0x22ec7a(0xa5)]=fen;const encodedFen=encodeURIComponent(fen),turn=_0x22ec7a(0x75)+gameData[_0x22ec7a(0x97)]['split']('@')[0x0],flipParam=sender===gameData[_0x22ec7a(0xac)]?'':'&flip=true',flipParam2=sender===gameData[_0x22ec7a(0xac)]?'':'-flip',boardUrl=_0x22ec7a(0x7f)+encodedFen+_0x22ec7a(0x7c)+flipParam;try{var img1=await conn[_0x22ec7a(0xa1)](from,{'image':{'url':boardUrl},'mentions':[gameData['white']],'caption':_0x22ec7a(0x88),'viewOnce':!![]},{'quoted':msg});conn[_0x22ec7a(0xa1)](from,{'text':turn,'mentions':[gameData['white']]},{'quoted':img1});}catch(_0x20b509){const boardUrl2=_0x22ec7a(0xad)+(encodedFen+flipParam2)+_0x22ec7a(0xb7);var img2=await conn[_0x22ec7a(0xa1)](from,{'image':{'url':boardUrl2},'mentions':[gameData[_0x22ec7a(0xac)]],'caption':_0x22ec7a(0x88),'viewOnce':!![]},{'quoted':msg});conn['sendMessage'](from,{'text':turn,'mentions':[gameData['black']]},{'quoted':img2});}return;}else return reply('🕺🏻\x20Berhasil\x20bergabung.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20memulai\x20permainan.');}catch(_0x2f6fd2){return reply(_0x22ec7a(0x8b));}if(args[0x1]&&args[0x2]){if(!gameData||gameData['status']!=='playing')return reply(_0x22ec7a(0x9e));chessData[_0x22ec7a(0xaf)]!==sender&&await conn[_0x22ec7a(0xa1)](from,{'text':_0x22ec7a(0x81)+(chessData[_0x22ec7a(0xaf)]===gameData[_0x22ec7a(0x97)]?'Putih':_0x22ec7a(0xa7))+_0x22ec7a(0xbc),'mentions':[chessData[_0x22ec7a(0xaf)]]},{'quoted':msg});if(chess[_0x22ec7a(0xaa)]())return delete conn[_0x22ec7a(0x95)][msgKey],conn[_0x22ec7a(0xa1)](from,{'text':_0x22ec7a(0xb2)+sender[_0x22ec7a(0xb5)]('@')[0x0],'mentions':[sender]},{'quoted':msg});if(chess[_0x22ec7a(0xb1)]())return delete conn[_0x22ec7a(0x95)][msgKey],conn['sendMessage'](from,{'text':_0x22ec7a(0x80)+hasJoined['map'](_0x2e8938=>'-\x20@'+_0x2e8938['split']('@')[0x0])[_0x22ec7a(0x8f)]('\x0a'),'mentions':[hasJoined]},{'quoted':msg});const dari=args[0x1]?.['toLowerCase'](),ke=args[0x2]?.[_0x22ec7a(0x85)]();try{chess[_0x22ec7a(0xbd)](dari+'-'+ke);}catch(_0x16913e){return console['log'](_0x16913e),reply(_0x22ec7a(0xbb));}chessData[_0x22ec7a(0xa5)]=chess[_0x22ec7a(0xa5)]();const currentTurnIndex=players[_0x22ec7a(0xab)](chessData[_0x22ec7a(0xaf)]),nextTurnIndex=(currentTurnIndex+0x1)%0x2;chessData[_0x22ec7a(0xaf)]=players[nextTurnIndex];const encodedFen=encodeURIComponent(chess['fen']()),currentColor=chessData[_0x22ec7a(0xaf)]===gameData[_0x22ec7a(0x97)]?_0x22ec7a(0x77):_0x22ec7a(0x9c),turn=_0x22ec7a(0xae)+currentColor+'\x20@'+chessData[_0x22ec7a(0xaf)][_0x22ec7a(0xb5)]('@')[0x0]+'\x0a\x0a'+(chess['getComment']()||''),flipParam=sender===gameData[_0x22ec7a(0xac)]?'':_0x22ec7a(0xa9),flipParam2=sender===gameData[_0x22ec7a(0xac)]?'':_0x22ec7a(0xb9),boardUrl='https://www.chess.com/dynboard?fen='+encodedFen+_0x22ec7a(0x7c)+flipParam;try{var img3=await conn[_0x22ec7a(0xa1)](from,{'image':{'url':boardUrl},'mentions':[chessData['currentTurn']],'caption':'Ketik\x20*\x22#chess\x20board\x22*\x20jika\x20kamu\x20lupa.','viewOnce':!![]},{'quoted':msg});conn[_0x22ec7a(0xa1)](from,{'text':turn,'mentions':[chessData['currentTurn']]},{'quoted':img3});}catch(_0x258996){console[_0x22ec7a(0xb4)](_0x258996);const boardUrl2=_0x22ec7a(0xad)+(encodedFen+flipParam2)+'.png';var img4=await conn[_0x22ec7a(0xa1)](from,{'image':{'url':boardUrl2},'mentions':[chessData[_0x22ec7a(0xaf)]],'caption':_0x22ec7a(0x88),'viewOnce':!![]},{'quoted':msg});conn[_0x22ec7a(0xa1)](from,{'text':turn,'mentions':[chessData[_0x22ec7a(0xaf)]]},{'quoted':img4});}chess['deleteComment']();return;}if(feature==='board'||feature===_0x22ec7a(0x74)){if(!gameData||gameData[_0x22ec7a(0x98)]!=='playing')return reply(_0x22ec7a(0x9e));const encodedFen=encodeURIComponent(chess[_0x22ec7a(0xa5)]()),boardUrl='https://www.chess.com/dynboard?fen='+encodedFen+_0x22ec7a(0x7c);return await conn['sendMessage'](from,{'image':{'url':boardUrl}},{'quoted':msg});}if(feature===_0x22ec7a(0x9f))return reply(_0x22ec7a(0x72));return reply(_0x22ec7a(0x82));}function _0x43ac(){const _0x38600a=['Hitam','(((.+)+)+)+$','&flip=true','isCheckmate','indexOf','black','https://chessboardimage.com/','🎲\x20*Bagian:*\x20','currentTurn','🏳️','isDraw','⚠️\x20*Sekakmat.*\x0a🏳️\x20*Game\x20Catur\x20dihentikan.*\x0a*Pemenang:*\x20@','delete','log','split','mulai','.png','61606YlWPja','-flip','22363120uSFgsF','❌\x20Gerakan\x20tidak\x20sah,\x20atau\x20kamu\x20terkena\x20skakmat.','*\x20yang\x20bergerak.','move','search','✨\x20*Perintah\x20Game\x20Catur:*\x0a\x0a*#chess\x20buat*\x20-\x20Membuat\x20sesi\x20game\x0a*#chess\x20join*\x20-\x20Bergabung\x20dengan\x20sesi\x20yang\x20ada\x0a*#chess\x20mulai*\x20-\x20Memulai\x20game\x20ketika\x20dua\x20pemain\x20telah\x20bergabung\x0a*#chess\x20hapus*\x20-\x20Menghentikan\x20sesi\x20game\x0a*#chess\x20[dari]\x20[ke]*\x20-\x20Membuat\x20gerakan\x20di\x20catur\x0a*#chess\x20board*\x20-\x20Untuk\x20melihat\x20papan\x20catur\x0a\x0a*Contoh:*\x0aKetik\x20*#chess\x20a2\x20a3*\x20untuk\x20menggerakan\x20catur.\x0a\x0a*Bot\x20created\x20by\x20@febbyadityan\x20&\x20@rzkyy.dev*','2587872XPgESD','papan','🎲\x20*Bagian:*\x20Putih\x20@','🚫\x20Tidak\x20dapat\x20memulai\x20permainan.\x20tunggu\x20para\x20pemain\x20bergabung.','White','buat','\x0a*Putih:*\x20@','playing','\x0a\x0aKetik\x20*\x22#chess\x20mulai\x22*\x20untuk\x20memulai\x20permainan.\x0a\x0aBot\x20Created\x20by\x20*@febbyadityan*\x20&\x20*@rzkyy.dev*','&board=blue&piece=classic&size=3&coordinates=inside','gabung','-\x20@','https://www.chess.com/dynboard?fen=','⚠️\x20*Game\x20Seri.*\x0a🏳️\x20*Game\x20Catur\x20dihentikan.*\x0a*Pemain:*\x20','⏳\x20Saat\x20ini\x20*','🚫\x20Perintah\x20invalid.\x20Ketik\x20*\x22#chess\x20help\x22*\x20untuk\x20melihat\x20perintah\x20yang\x20tersedia.','✋🏻\x20Kamu\x20telah\x20bergabung\x20dengan\x20sesi\x20ini.','map','toLowerCase','🕺🏻\x20Berhasil\x20bergabung.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20memulai\x20permainan.','create','Ketik\x20*\x22#chess\x20board\x22*\x20jika\x20kamu\x20lupa.','11stJUZX','*Permainan\x20dihentikan.*\x20🏳️','✋🏻\x20Game\x20belum\x20dimulai.','704179xSBJlE','includes','3569605cfdBrv','join','276018iHCldS','random','🕹️\x20Sesi\x20game\x20berhasil\x20dibuat.\x20Tunggu\x20Pemain\x20lain\x20untuk\x20bergabung.','ready','start','chess','constructor','white','status','📢\x20*Para\x20Pemain\x20telah\x20bergabung*\x0a','👥\x20Pemain\x20telah\x20siap,\x20game\x20akan\x20memulai\x20secara\x20otomatis.','⚠️\x20Saat\x20ini\x20tidak\x20ada\x20permainan\x20catur.\x20Ketik\x20*\x22#chess\x20buat\x22*\x20untuk\x20membuat\x20sesi.','Black','apply','⚠️\x20Game\x20belum\x20dimulai.','help','🕹️\x20Game\x20sedang\x20dimulai,\x20tunggu\x20sampai\x20sesi\x20selesai\x20atau\x20hapus\x20sesi\x20untuk\x20mulai\x20ulang.','sendMessage','\x0a\x0a*Hitam:*\x20@','toString','2971952dhuopJ','fen','length'];_0x43ac=function(){return _0x38600a;};return _0x43ac();}
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