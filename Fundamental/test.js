const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7257cf3b6ccdb3",
        pass: "9799f48964fea2"
    }
};
const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error);
        }
        else{
            console.log(info);
            return info.response;
        }
    });
};

let emailData = {
    from: 'moons@unist.ac.kr',
    to:'moons@unist.ac.kr',
    subject:'테스트 메일 입니다',
    text:'nodejs 한시간 가능할까?'
}
send(emailData);