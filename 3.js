function balancedBracket(input){
    let stack = [];
    let pair ={
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    for (const bracket of input){
        if(['(','{', "["].includes(bracket)){
            stack.push(bracket);
        }
        else if ([')','}', "]"].includes(bracket)){
            if(stack.length === 0 || stack.pop() !== pair[bracket]){
                return "NO";
            }
        }
    }

    return stack.length === 0 ? "YES" : "NO"; 
}

console.log(balancedBracket("{[()]}")); 
console.log(balancedBracket("{[(])}")); 
console.log(balancedBracket("{(([])[[]])[[]]}"));