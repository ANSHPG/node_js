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
    subNetBit: 1
}
ipObj['ipStr'] = ipDec('196.168.0.1')
ipObj['firstOctect'] = ipObj['ipStr'][0]
fOct = ipObj['firstOctect']
ipObj['class'] = fOct<=127?'A':fOct<=191?'B':'C'
ipObj['nBit'] = fOct<=127?8:fOct<=191?16:24
ipObj['nId'] = ipObj['ipStr'].map((octect,index)=>index<=ipObj['nBit']/8-1?octect:0)
ipObj['hBit'] = 32 - ipObj['nBit']
ipObj['subNetReq'] = 3
ipObj['subNetDiv'] = ipObj['subNetReq']
while(true){
    if(Math.sqrt(ipObj['subNetDiv']%2)==0) break
    ipObj['subNetDiv']++
}
ipObj['subNetBit'] = Math.ceil(Math.log2(ipObj['subNetDiv']))
console.log(ipObj);
