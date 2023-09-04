let exp = "123-45+765*7"

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
    //display.innerHTML = digit1
    console.log(digit1)
}
equals()