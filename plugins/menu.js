let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `

       πΉ πππππ’πͺπ’π₯ππ πΉ
	
β­βββββββββββββββββββββ βΫͺΫͺΰ½΄ΰ½»βΈ
β ${ucapan()}, Kackππ» ${name}
ββ¬βββββββββββββββββ β³Ή
ββ€      γ USER γ
βββ¦β Nama : %name
βββ¦β Money : 0
βββ¦β Exp : (%exp / %maxexp) [%xp4levelup]
βββ¦β %totalexp XP 
βββ¦β Limit : %limit Limit
βββ¦β Level : %level
βββ¦β Rank : %role
βββ¦β Umur : ${age} Tahun
βββ¦β Sn : ${sn}
βββ¦β Database : %rtotalreg dari %totalreg
βββββββββββββββββββ β³Ή
β       γ TIME γ
ββ¦β Hari : %date
ββ¦β Weton : %weton
ββ¦β Tanggal : %week 
ββ¦β Waktu : %time
ββ¦β Islam : %dateIslamic
ββ¦β Uptime : %uptime (%muptime)
ββββββββββββββββββββ β³Ή
β      γ INFO OWNER γ
β ππ : https://youtu.be/_De5EgwBPM8
β πΈπΆ :https://www.instagram.com/reteam.id/
β πΆπ² π±πΎπ : https://bit.ly/3zWEnWt
β NOTE : *ORANG BAIK ADALAH ORANG YANG MENGHARGAI KARYA KITA*
β°βββββββββββββββββββββ βΫͺΫͺΰ½΄ΰ½»βΈ	
	
	ί·β¬ *ππππππ¬π¦ π¦πππ ππ’π§* β­ί·


%readmore`.trimStart(),
  header: 'ββββοΈΒ°β¬ *%category* β­Β°βοΈβββ',
  body: 'β£β₯*Ω¬ΰΏβπ€‘* %cmd %islimit %isPremium',
  footer: 'βββββ\n',
  after: `
*ππππππ ππ βοΈ
πΉοΈοΈοΈππ΄ππ΄π°πΌ πΈπ³
πΉοΈοΈοΈπ°π³πΈππ°πΉππ·πΈπ½πΆ
πΉοΈοΈοΈππ·π°πππ°πΏπΏ
πΉοΈοΈοΈπ°π»π» π²ππ΄π°ππΎπ*
${'```Bot WhatsApp```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `${ucapan()}, Kackππ» ${name}`.trim(),
          "description": "πΌπ°π³π΄ ππΈππ· ππ΄ππ΄π°πΌ",
          "buttonText": "Click Here",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `Semua Perintah`,
                  "description": "πππππππππππ πππππ πππππ",
                  "rowId": `${_p}? all`
                }, {
                  "title": "Game",
                  "description": "πππππππππππ ππππ ππππ",
                  "rowId": `${_p}? game`

                }, {
                  "title": "XP",
                  "description": "πππππππππππ ππππ ππ",
                  "rowId": `${_p}? xp`

                }, {
                  "title": "Stiker",
                  "description": "πππππππππππ ππππ πππππππ",
                  "rowId": `${_p}? stiker`
                }, {
                  "title": "Kerang Ajaib",
                  "description": "πππππππππππ ππππ ππππππ πππππ",
                  "rowId": `${_p}? kerangajaib`
                }, {
                  "title": "Quotes",
                  "description": "πππππππππππ ππππ ππππππ",
                  "rowId": `${_p}? quotes`
                }, {
                  "title": "Admin",
                  "description": "πππππππππππ ππππ πππππ",
                  "rowId": `${_p}? admin`
                }, {
                  "title": "Grup",
                  "description": "πππππππππππ ππππ ππππ",
                  "rowId": `${_p}? grup`
                }, {
                  "title": "Premium",
                  "description": "πππππππππππ ππππ πππππππ",
                  "rowId": `${_p}? premium`
                }, {
                  "title": "Internet",
                  "description": "πππππππππππ ππππ ππππππππ",
                  "rowId": `${_p}? internet`
                }, {
                  "title": "Anonymous",
                  "description": "πππππππππππ ππππ πππππππππ",
                  "rowId": `${_p}? anonymous`
                }, {
                  "title": "Nulis & Logo",
                  "description": "πππππππππππ ππππ πππππ",
                  "rowId": `${_p}? nulis`
                }, {
                  "title": "Downloader",
                  "description": "πππππππππππ ππππ ππππππππππ",
                  "rowId": `${_p}? downloader`
                }, {
                  "title": "Tools",
                  "description": "πππππππππππ ππππ πππππ",
                  "rowId": `${_p}? tools`
                }, {
                  "title": "Fun",
                  "description": "πππππππππππ ππππ πππ",
                  "rowId": `${_p}? fun`
                }, {
                  "title": "Database",
                  "description": "πππππππππππ ππππ ππππππππ",
                  "rowId": `${_p}? database`
                }, {
                  "title": "Vote & Absen",
                  "description": "πππππππππππ ππππ ππππ",
                  "rowId": `${_p}? vote`
                }, {
                  "title": "Al-Qur\'an",
                  "description": "πππππππππππ ππππ ππ-πππ ππ",
                  "rowId": `${_p}? quran`
                }, {
                  "title": "Pengubah Suara",
                  "description": "πππππππππππ ππππ ππππππππ πππππ",
                  "rowId": `${_p}? audio`
                }, {
                  "title": "Jadi Bot",
                  "description": "πππππππππππ ππππ πππππππ",
                  "rowId": `${_p}? jadibot`
                }, {
                  "title": "Info",
                  "description": "πππππππππππ ππππ ππππ",
                  "rowId": `${_p}? info`
                }, {
                  "title": "Tanpa kategori",
                  "description": "πππππππππππ ππππ πππππ ππππππππ",
                  "rowId": `${_p}? tanpakategori`
                }, {
                  "title": "Owner",
                  "description": "πππππππππππ ππππ πππππ",
                  "rowId": `${_p}? owner`
                }
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // βγ DAFTAR MENU γ
    // β ${_p + command} all
    // β ${_p + command} game
    // β ${_p + command} xp
    // β ${_p + command} stiker
    // β ${_p + command} kerang
    // β ${_p + command} quotes
    // β ${_p + command} admin
    // β ${_p + command} group
    // β ${_p + command} premium
    // β ${_p + command} internet
    // β ${_p + command} anonymous
    // β ${_p + command} nulis
    // β ${_p + command} downloader
    // β ${_p + command} tools
    // β ${_p + command} fun
    // β ${_p + command} database
    // β ${_p + command} vote
    // β ${_p + command} quran
    // β ${_p + command} audio
    // β ${_p + command} jadibot
    // β ${_p + command} info
    // β ${_p + command} tanpa kategori
    // β ${_p + command} owner
    // βββββ  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch(global.fla)).buffer(), text.trim(), 'π΄πππ ππππ @πππ‘πππ', 'Owner', `${_p}owner`, 'Donasi', `${_p}donasi`, m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
