import{sticker}from'../lib/sticker.js';import _0x19b86c from'../lib/uploadFile.js';import _0x47f20a from'../lib/uploadImage.js';import{webp2png}from'../lib/webp2mp4.js';let handler=async(_0x5458d6,{conn:_0x4f567a,args:_0x4d80da,usedPrefix:_0x236e4e,command:_0x427611})=>{let _0x8479aa={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x5458d6['sender']['split']('@')[0x0]+':'+_0x5458d6['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'},_0x610fec=![];try{let _0x369045=_0x5458d6['quoted']?_0x5458d6['quoted']:_0x5458d6,_0x631715=(_0x369045['msg']||_0x369045)['mimetype']||_0x369045['mediaType']||'';if(/webp|image|video/g['test'](_0x631715)){if(/video/g['test'](_0x631715)){if((_0x369045['msg']||_0x369045)['seconds']>0x8)return _0x4f567a['reply'](_0x5458d6['chat'],'*[❗𝐈𝐍𝐅𝐎❗]\x20𝙴𝙻\x20𝚅𝙸𝙳𝙴𝙾\x20𝙽𝙾\x20𝙿𝚄𝙴𝙳𝙴\x20𝙳𝚄𝚁𝙰𝚁\x20𝙼𝙰𝚂\x20𝙳𝙴\x20𝟽\x20𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂*',_0x8479aa,_0x5458d6);}let _0x547428=await _0x369045['download']?.();if(!_0x547428)return _0x4f567a['reply'](_0x5458d6['chat'],'*[❗𝐈𝐍𝐅𝐎❗]\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴\x20𝙰\x20𝚄𝙽\x20𝚅𝙸𝙳𝙴𝙾,\x20𝙸𝙼𝙰𝙶𝙴𝙽\x20𝙾\x20𝙸𝙽𝚂𝙴𝚁𝚃𝙴\x20𝙴𝙻\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20𝙳𝙴\x20𝚄𝙽𝙰\x20𝙸𝙼𝙰𝙶𝙴𝙽\x20𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙲𝙸𝙾́𝙽\x20.𝚓𝚙𝚐\x20𝙴𝙻\x20𝙲𝚄𝙰𝙻\x20𝚂𝙴𝚁𝙰\x20𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾\x20𝙴𝙽\x20𝚂𝚃𝙸𝙲𝙺𝙴𝚁,\x20𝙳𝙴𝙱𝙴\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁\x20𝙾\x20𝚄𝚂𝙰𝚁\x20𝙴𝙻\x20𝙲𝙾𝙼𝙰𝙽𝙳𝙾\x20'+(_0x236e4e+_0x427611)+'*',_0x8479aa,_0x5458d6);let _0x249b41;try{_0x610fec=await sticker(_0x547428,![],global['igfg'],global['author']);}catch(_0x3616b7){console['error'](_0x3616b7);}finally{if(!_0x610fec){if(/webp/g['test'](_0x631715))_0x249b41=await webp2png(_0x547428);else{if(/image/g['test'](_0x631715))_0x249b41=await _0x47f20a(_0x547428);else{if(/video/g['test'](_0x631715))_0x249b41=await _0x19b86c(_0x547428);}}if(typeof _0x249b41!=='string')_0x249b41=await _0x47f20a(_0x547428);_0x610fec=await sticker(![],_0x249b41,global['fgif'],global['author']);}}}else{if(_0x4d80da[0x0]){if(isUrl(_0x4d80da[0x0]))_0x610fec=await sticker(![],_0x4d80da[0x0],global['packname'],global['author']);else return _0x4f567a['reply'](_0x5458d6['chat'],'*[❗𝐈𝐍𝐅𝐎❗]\x20𝙴𝙻\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20/\x20𝚄𝚁𝙻\x20/\x20𝙻𝙸𝙽𝙺\x20𝙽𝙾\x20𝙴𝚂\x20𝚅𝙰𝙻𝙸𝙳𝙰,\x20𝙻𝙰\x20𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙲𝙸𝙾𝙽\x20𝙳𝙴𝙻\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20/\x20𝚄𝚁𝙻\x20/\x20𝙻𝙸𝙽𝙺\x20𝙳𝙴𝙱𝙴\x20𝚂𝙴𝚁\x20.𝚓𝚙𝚐,\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\x20#s\x20https://telegra.ph/file/0dc687c61410765e98de2.jpg*',_0x8479aa,_0x5458d6);}}}catch(_0x51fc20){console['error'](_0x51fc20);if(!_0x610fec)_0x610fec=_0x51fc20;}finally{if(_0x610fec)_0x4f567a['sendFile'](_0x5458d6['chat'],_0x610fec,'sticker.webp','',_0x5458d6,!![],{'contextInfo':{'forwardingScore':0xc8,'isForwarded':![],'externalAdReply':{'showAdAttribution':![],'title':wm,'body':'h','mediaType':0x2,'sourceUrl':nn,'thumbnail':imagen1}}},{'quoted':_0x5458d6});else return _0x4f567a['reply'](_0x5458d6['chat'],'*[❗𝐈𝐍𝐅𝐎❗]\x20𝙻𝙾\x20𝚂𝙸𝙴𝙽𝚃𝙾,\x20𝙾𝙲𝚄𝚁𝚁𝙸𝙾\x20𝚄𝙽\x20𝙴𝚁𝚁𝙾𝚁,\x20𝚅𝚄𝙴𝙻𝚅𝙰\x20𝙰\x20𝙸𝙽𝚃𝙴𝚁𝙽𝚃𝙰𝚁𝙻𝙾.\x20𝙽𝙾\x20𝙾𝙻𝚅𝙸𝙳𝙴\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴\x20𝙰\x20𝚄𝙽\x20𝚅𝙸𝙳𝙴𝙾,\x20𝙸𝙼𝙰𝙶𝙴𝙽\x20𝙾\x20𝙸𝙽𝚂𝙴𝚁𝚃𝙴\x20𝙴𝙻\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20𝙳𝙴\x20𝚄𝙽𝙰\x20𝙸𝙼𝙰𝙶𝙴𝙽\x20𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙲𝙸𝙾́𝙽\x20.𝚓𝚙𝚐\x20𝙴𝙻\x20𝙲𝚄𝙰𝙻\x20𝚂𝙴𝚁𝙰\x20𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾\x20𝙴𝙽\x20𝚂𝚃𝙸𝙲𝙺𝙴𝚁*',_0x8479aa,_0x5458d6);}};handler['help']=['stiker\x20(caption|reply\x20media)','stiker\x20<url>','stikergif\x20(caption|reply\x20media)','stikergif\x20<url>'],handler['tags']=['sticker'],handler['command']=/^s(tic?ker)?(gif)?(wm)?$/i;export default handler;const isUrl=_0x51b612=>{return _0x51b612['match'](new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/,'gi'));};