function generateA000124(n){
    let result = "";
    for (let i = 0; i< n; i++){
        let value = (i*(i+1))/2+1;
        result += value;
        if(i < n-1){
            result += "-";
        }
    }
    return result;
}
console.log(generateA000124(7));