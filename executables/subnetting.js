const ipDec = (ipStr) => ipStr.split('.').map((num)=>Number(num))
const ipObj = {
    ipStr: '192.168.0.1',
    nId: '192.168.0.0',
    firstOctect: 192,
    class: 'A',
    nBit:8,
    hBit: 32,
    subNetReq: 1,
    subNetDiv: 8,
    subNetBit: 1,
    subNetMask: [255,255,255,255]
}
ipObj['ipStr'] = ipDec('108.168.0.1')
ipObj['subNetReq'] = 512

ipObj['firstOctect'] = ipObj['ipStr'][0]
fOct = ipObj['firstOctect']
ipObj['class'] = fOct<=127?'A':fOct<=191?'B':'C'
ipObj['nBit'] = fOct<=127?8:fOct<=191?16:24
ipObj['nId'] = ipObj['ipStr'].map((octect,index)=>index<=ipObj['nBit']/8-1?octect:0)
ipObj['hBit'] = 32 - ipObj['nBit']
ipObj['subNetDiv'] = ipObj['subNetReq']
while(true){
    if(Math.sqrt(ipObj['subNetDiv']%2)==0) break
    ipObj['subNetDiv']++
}
ipObj['subNetBit'] = Math.ceil(Math.log2(ipObj['subNetDiv']))
const bitWeigtage = [0,128,192,224,240,248,252,254,255]
ipObj['subNetMask'] = ipObj['subNetMask'].map((val,pos)=>pos>ipObj['nBit']/8-1?0:val)
// ipObj['subNetMask'] = ipObj['subNetMask'].map((val,pos)=>{
//     if(val == 0) {
//         ipObj['subNetBit'] = ipObj['subNetBit']-8
//         if(ipObj['subNetBit']<=0) ipObj['subNetBit']+=8
//         else if(ipObj['subNetBit'] == 0) return bitWeigtage[ipObj['subNetBit']-1]
//         else return bitWeigtage[ipObj['subNetBit']]
//      }
//     else {
//         return val
//     }
// } )
ipObj['subNetBit']<=8?ipObj['subNetMask'][ipObj['nBit']/8]=bitWeigtage[ipObj['subNetBit']]:null
console.log(ipObj);
