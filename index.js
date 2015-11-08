/*
    This module starts a sequence from the given base10 or base64 encoded integer
*/
var B62 = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var PowerRadix= require("power-radix");
var sequence= function(start){
    var current;

    if (!Number.isInteger(start)){
        current= this.decode(start) || 0;
    }
    else {
        current = start;
    }
    //Display current Sequence Number do not increment
    this.current= function(){
        return new PowerRadix(current, 10).toString(B62);
    };
    //Get current Sequence Number and increment sequence
    this.next= function(){
        var next= new PowerRadix(current, 10).toString(B62);
        current++;
        return next
    };
};
//Decode a base62 integer
sequence.prototype.decode= function(num){
    if (!this.isBase62(num)){
        return null;
    }
    return new PowerRadix(num,B62).toString(10);
};
//Encode an integer into a base62 integer
sequence.prototype.encode= function(num){
    if (!Number.isInteger(num)){
        return 0;
    }
    return new PowerRadix(num, 10).toString(B62);
};
//Detect whether a string is a base62 integer
sequence.prototype.isBase62= function(num){
    var re= /^(0x|0X)?[a-zA-Z0-9]+$/;
    return re.test(num);
}

module.exports= sequence;

