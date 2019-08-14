function f(){
    console.log(2222);
    return 50;
}
let [aaa,bbb=f()]=[];
console.log(aaa,bbb);
