function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    return function myfunc(){return 2};
}

function returnsAnAnonymousFunction(){
    return function (){return 2};
}