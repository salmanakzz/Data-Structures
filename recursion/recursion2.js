function f(num){
    if (num <= 1) {
        return
    }
    f(num - 1);
    process.stdout.write(num+'');
    f(num - 1);
}
f(5)