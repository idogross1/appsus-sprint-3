import { storageService } from "../../../services/async-storage-service.js";
import { utilService } from "../../../services/util-service.js";

const EMAIL_KEY = 'emails';

var gEmails = _createEmails();

export const emailService = {
    query,
    addEmail,
    removeEmail,
    getEmailById,
    updateEmail,

}

function query(){
    return storageService.query(EMAIL_KEY);
}

function addEmail(subject, body){
    var email = _createEmail(subject, body);
    return storageService.post(EMAIL_KEY, email);
}

function removeEmail(emailId){
    return storageService.remove(EMAIL_KEY, emailId)
}

function getEmailById(emailId){
    return storageService.get(EMAIL_KEY, emailId)
}

function updateEmail(email){
    if (email.id){
        return storageService.put(EMAIL_KEY, email);
    }
}

function _createEmails(){
    let emails = utilService.loadFromStorage(EMAIL_KEY);
    if (!emails || !emails.length) {
        emails = [
            {id: utilService.makeId(), subject: 'subject1', body: 'this is email #1', isRead: false, sentAt: 1551133930594},
            {id: utilService.makeId(), subject: 'subject2', body: 'this is email #2', isRead: true, sentAt: 1551133330594},
            {id: utilService.makeId(), subject: 'subject3', body: 'this is email #3', isRead: false, sentAt: 1551132930594},
            {id: utilService.makeId(), subject: 'subject4', body: 'this is email #4', isRead: true, sentAt: 1551133730594},
        ]

        // emails.forEach(email => {
        //     emails.push(email)
        //     console.log('just added', email);
        // })
        utilService.saveToStorage(EMAIL_KEY, emails)
    }
    return emails
}

// function _createEmail(subject, body){
//     const email = {
//             id:utilService.makeId(),
//             subject,
//             body,
//             isRead: false,
//             sentAt: new Date()
//     }
//     return email;
// }