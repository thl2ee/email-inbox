const emailConfig = require("../config/email.json");
const host = emailConfig.host;
const endpoints = emailConfig.endpoints;

class Email {
    constructor({ from, body, subject, dateTime }) {
        this.from = from || {
            name: "",
            email: ""
        };        
        this.body = body || "";        
        this.subject = subject || "";          
        this.dateTime = dateTime || "";       
    }
}

const getEmails = () => new Promise((resolve, reject) => {
    return fetch(`${host}${endpoints.getEmails.path}`)
    .then(res => res.json())
    .then((data) => {
        return (data && data.emails) ?
            resolve(data.emails.map((email) => new Email(email))) :
            reject(new Error("Failed to parse"));
    })
    .catch((error) => (
        reject(new Error("Server Error")
    )));
});

module.exports.Email = Email;
module.exports.getEmails = getEmails;