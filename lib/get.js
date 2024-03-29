var jsonDao = require('./dao/jsonDao.js');

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports ={

    getAnniversaire:(name) => {




        return new Promise(function (resolve, reject) {
            jsonDao.readContact(name).then((result) => {
                resolve(result.birthdate);}).catch((e) => {
                console.error('Contacts module: getAnniversaire=>', e);
                return reject(e);
            });





})



    },
    getTelephone:(name) =>{


        return new Promise(function (resolve, reject) {
            jsonDao.readContact(name).then((result) => {
                resolve(result.phone);}).catch((e) => {
                console.error('Contacts module: getTelephone=>', e);
                return reject(e);
            });


        })

    },

    getContacts:() =>{
        return new Promise(function (resolve, reject) {
            jsonDao.readAllContacts().then((result) => {

                resolve(result);}).catch((e) => {
                console.error('Contacts module: getContacts=>', e);
                return reject(e);
            });


        })



    }
}
