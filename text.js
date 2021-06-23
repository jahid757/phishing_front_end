// 1245679345

const yourID = 'jahid575';

const split = yourID.split('');

const split1 = Math.round(split.length/2)

let fakeId ='';
let fakeId2 = '&&query=24798dak+ded&&refer+facebook&&redirect=jkl';

for (let i = 0; i < split1; i++) {
    const element = split[i];
    fakeId += element
}

for (let i = split1; i < split.length; i++) {
    const element = split[i];
    fakeId2 +=element
}

const splitIdForFinal = fakeId+fakeId2;
const finalIdSplit = splitIdForFinal.split('&&query=24798dak+ded&&refer+facebook&&redirect=jkl');

const finalId = finalIdSplit[0]+finalIdSplit[1]

console.log(finalId);