const chai = "chai";
const spies = "chai-spies";
function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){

    return function named(){
        console.log(`ok`)
    };
}

function returnsAnAnonymousFunction(){
    return function(){};
}