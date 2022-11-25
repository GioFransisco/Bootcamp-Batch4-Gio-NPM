const readline = require('readline')
const validator = require('validator')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is your name : ', (name) => {
    rl.question('\nwhat is your email : ', (email) => {
        rl.question('\nwhat is your phone : ', (phone) => {
            if (validator.isEmpty(name)){
                console.log('this is empty value')
            }else{
                console.log(`your name is : ${name}`)
            }
            if(validator.isEmail(email) != true){
                console.log('your email is wrong')
            }else{
                console.log(`your email is : ${email}`)
            }
            if(validator.isMobilePhone(phone,'id-ID') == false){
                console.log('your phone is wrong')
            }else{
                console.log(`your phone number is : ${phone}`)
            }
            rl.close();
        })
    })
    // console.log(`thank you ${name}`);
    // rl.close();
})