//try 1
function reverse(str) {
    var rtnStr = [];
    if (!str || typeof str != 'string' || str.length < 2) return str;

    for (var i = str.length - 1; i >= 0; i--) {
        rtnStr.push(str[i]);
    }
    return rtnStr.join('');
}

const output = reverse("I love Afsana");


//try 2
function reverse2(str) {
    if(!str || str.length < 2 ) return str;
    
    return str.split('').reverse().join('');
}

console.log(reverse2("I love Jarin"));