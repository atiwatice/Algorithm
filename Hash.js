let input = 'studenty';
let check = 'abcdefghijklmnopqrstuvwxyz'

let plus = 3;

let output =''

for (let i=0;i<input.length;i++){
    for(let j=0;j<check.length;j++){
        if(input[i]==check[j]){
            if((j+plus)<check.length){
                output = output+check[j+plus]
            }else if((j+plus)>=check.length){
                z = j+plus-check.length-1;
                output = output+check[z];
            }
        }
    }
} 
console.log(output)

// let text = "STUDENT"
// let b = ''
// for (let i = 0; i < text.length; i++) {
//    var n = text.charCodeAt(i)+3;
//    b = b + String.fromCharCode(n)
// }
// console.log(b)

let encrypt = (str,key) => {
    str.toUpperCase()
    let encryptedMsg = "";
    for (let c of str){
        encryptedMsg +=String.fromCharCode((c.charCodeAt(0)-65+key)%26+65)
    }
    return encryptedMsg
}

console.log(encrypt('xyz',3))

let array = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
let sumodd =0

for(let c of array){
    sum = sum+c
    if(c%2!=0){
        sumodd = sumodd+c
    }
}
console.log(sum)
console.log(sumodd)