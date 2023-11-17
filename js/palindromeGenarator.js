
// 1. function to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}

// 2. function to generate Polindrome
function poliGnerator() {
    var len = document.getElementById("pali").value;

    let strLen = parseInt(len/2);
    
    let str = '';
    let strOdd = '';
    let poliResult = '';
    var revStr = "";

    str = generateString(strLen);

    //reverse the String
    for(let i=str.length-1;i>=0;i--)
{
    revStr+=str[i];
}
    

        // convert str into array
        let arrValue = str.split('');
        var revArrval = revStr.split('');

    
    // add the between character into the array if the user added lenth odd

    if (len%2!== 0) {
        strOdd = generateString(1);
        arrValue.push(strOdd);
    }
    

    // conatinate the two arrays
    arrValue = arrValue.concat(revArrval);
    

    // convert the array into string 
    poliResult =arrValue.join('');

document.getElementById("pali2").value = poliResult;
    //return poliResult;


}

const strNUm = prompt ("Enter the numeber of characters : ")
//console.log(poliGnerator(strNUm));

