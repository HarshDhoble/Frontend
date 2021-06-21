//Write a JavaScript program to get the length of a JavaScript object.

Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = { 
    name : "Harsh Dhoble", 
    sclass : "6CTB", 
    rollno : 148 };

var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);
