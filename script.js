
let display = document.getElementById('display')

let exp = ""
function input(digit){
    let last = exp[exp.length-1]
    let next = exp[exp.length-2]
   // console.log(last)
   // console.log(next)
    if((next == '-' || next == '+' || next == '/' || next == '*') && (last == '-' || last == '+' || last == '/' || last == '*')){
        display.innerHTML = "not valid"
        exp = ""
    }else if(exp[0] == '/' || exp[0] == '*'){
        display.innerHTML = "not valid"
        exp = ""
    }else{
        exp += digit;
    display.innerHTML = exp
    }
    
   // console.log(exp)
}

function del(){
    exp = exp.slice(0,-1)
    display.innerHTML = exp
}

function reset(){
    exp = ""
    display.innerHTML = ""
}

function getDigit(s){
    let digit = ""
    while((s < exp.length) && !(exp[s] == '-' || exp[s] == '+' || exp[s] == '/' || exp[s] == '*')){
        digit += exp[s]
        //console.log(digit)
        s++
    }
    return digit
}

function operation(digit1 , digit2 , operator){
    let result = 0
    if(operator === '+'){
        result = Number(digit1) + Number(digit2)
    }else if(operator === '-'){
        result = Number(digit1) - Number(digit2)
    }else if(operator === '*'){
        result = Number(digit1) * Number(digit2)
    }else if(operator === '/'){
        result = Number(digit1) / Number(digit2)
    }
    return result
}

function equals(){
    let digit1 = ""
    let digit2 = ""
    let operator = ""
    let s = 0, e = exp.length
    digit1 = getDigit(s)
   // console.log(digit1)
    
    s = digit1.length
   // console.log(s)

    while(s < e){
       if(exp[s] == '-' || exp[s] == '+' || exp[s] == '/' || exp[s] == '*'){
        
            operator = exp[s]
            s++
       }
       digit2 = getDigit(s)
      // console.log(digit2)
       s += digit2.length
    //    console.log(s)
    //    return
       digit1 = operation(digit1 , digit2 , operator)
    }
    display.innerHTML = digit1
    exp = "" + digit1
    
   // console.log(digit1)
}