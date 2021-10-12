function calc(operation) {

    if(!operation.match(/[0-9%^*\/()\-+.]/g)) {
        throw 'only use numbers and operators'
    }

    //remove all whitespaces
    operation = operation.replace(/\s+/g, '')

    //if parenthesis on the side of the digit then replace
    //etc. 1(2+2) to 1*(2+2)
    operation = operation.replace(/(-?\d)(\()/g, '$1*$2')

    //etc. (2+2)1 to (2+2)*1
    operation = operation.replace(/(-?\))(\d)/g, '$1*$2')

    //etc. --+ to +
    operation = operation.replace(/\-{2}/g, '+')

    //etc. ++ more operation letter to one +
    operation = operation.replace(/\+{2,}/, '+')
    
    return Function(`return +${operation}`)()

}