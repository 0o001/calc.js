function calc(operation) {

    if(!operation.match(/[0-9%^*\/()\-+.]/g)) {
        throw 'only use numbers and operators'
    }

    //remove all whitespaces
    operation = operation.replace(/\s+/g, '')

    //if parenthesis on the side of the digit then replace
    //etc. 1(2+2) to 1*(2+2)
    operation = operation.replace(/(-?\d)(\()/g, '$1*$2')
    
    return Function(`return +${operation}`)()

}