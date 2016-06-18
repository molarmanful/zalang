zalang={
    commands:{
    '\u0300':'`',
    '\u0302':'^',
    '\u0303':'~',
    '\u0320':'--',
    '\u0304':'-',
    '\u0305':'_',
    '\u0324':'...',
    '\u0323':'.',
    '\u0309':'?',
    '\u030d':"'",
    '\u030e':'"',
    '\u0310':';',
    '\u0318':'&&',
    '\u031b':',',
    '\u031f':'+',
    '\u0308':':',
    '\u032a':'[',
    '\u0337':'/',
    '\u0338':'\\',
    '\u033a':']',
    '\u0362':'=>',
    '\u0347':'===',
    '\u033f':'==',
    '\u0333':'=',
    '\u0336':'||',
    '\u0335':'|',
    '\u033e':'$',
    '\u0349':'&',
    '\u0352':'!',
    '\u0354':'<',
    '\u0355':'>',
    '\u0359':'*',
    '\u035c':')',
    '\u035e':'{',
    '\u035f':'}',
    '\u0361':'(',
    '\u0363':'a',
    '\u0364':'e',
    '\u0365':'i',
    '\u0366':'o',
    '\u0367':'u',
    '\u0368':'c',
    '\u0369':'d',
    '\u036a':'h',
    '\u036b':'m',
    '\u036c':'r',
    '\u036d':'t',
    '\u036e':'v',
    '\u036f':'x'
  },
  decode:x=>Object.getOwnPropertyNames(zalang.commands).map(a=>x=x.replace(RegExp(a,'g'),zalang.commands[a]))&&x,
  encode:x=>Object.getOwnPropertyNames(zalang.commands).map(a=>x=x.replace(RegExp(zalang.commands[a].replace(/([?*+^().[\\|$])/g,'\\$1'),'g'),a))&&x
}
