function validaCPF (){
    prompt ('Digite aqui o seu CPF: ')
}
if (validaCPF.length < 11) {
    return 'Digite um CPF válido!'
}
else if (validaCPF.length = 11){
    return 'CPF válido.'
}
else if (validaCPF.length > 11) {
    return 'Digite um CPF válido!'
}
alert(validaCPF());