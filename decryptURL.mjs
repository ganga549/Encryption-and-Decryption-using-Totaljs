import totaljs from '/usr/local/lib/node_modules/total.js/index.js';
import prompt from 'syncprompt';
import salt from './config.js';
import URL from './url.js';

const getURL = () => {
    console.log("Welcome. Have a Great Day!");
    const eURL = prompt("Enter Encrypted URL ");
    return eURL;
}

const decryptURL = () => {
    const eURL = getURL();
    const encrypt = eURL.replace(new RegExp(URL,'g'),'');
    console.log(encrypt);
    var j = encrypt.replace(/\//g, '');
    var i = F.decrypt(j, salt, false);
    console.log(i);
    var iden_parts = (i.split(','))[0].split('=');
    console.log(iden_parts);
    console.log("-----------------------------")
    console.log("Decrypted URL is -> "+iden_parts[1]);
}

decryptURL();