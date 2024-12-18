var add = function(a,b){    // anonimus function
    return a+b;
}
function complexExp(add){      // callback function
    console.warn(add(200,300));
}
complexExp(add);