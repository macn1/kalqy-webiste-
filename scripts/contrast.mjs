// WCAG 2.x contrast ratios for the token pairs used in the UI.
const lum = (h) => { const c = [1,3,5].map(i => parseInt(h.slice(i,i+2),16)/255).map(v => v<=0.03928? v/12.92 : ((v+0.055)/1.055)**2.4); return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2]; };
const ratio = (a,b) => { const [x,y]=[lum(a),lum(b)].sort((p,q)=>q-p); return (x+0.05)/(y+0.05); };
const T = { blue:"#39A9F9", blueStrong:"#0B6AAE", yellow:"#FFD34E", coral:"#FF8C78", coralStrong:"#B8412C", mint:"#B9E8C9", cream:"#FFF9ED", navy:"#20304A", white:"#FFFFFF", text2:"#4B5A70" };
const pairs = [["white","blue"],["navy","blue"],["navy","yellow"],["white","navy"],["navy","cream"],["navy","white"],["text2","cream"],["text2","white"],["navy","coral"],["navy","mint"],["white","blueStrong"],["blueStrong","cream"],["blueStrong","white"],["coralStrong","cream"],["white","coral"],["blue","cream"],["blue","navy"],["yellow","navy"],["text2","mint"]];
for (const [f,b] of pairs) { const r = ratio(T[f],T[b]); console.log(`${f.padEnd(11)} on ${b.padEnd(11)} ${r.toFixed(2)}  ${r>=7?"AAA":r>=4.5?"AA":r>=3?"large/UI only":"FAIL"}`); }
