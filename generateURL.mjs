// import TripleDES from "crypto-js/tripledes.js";
// import enc from "crypto-js/enc-latin1.js";
import framework from '/usr/local/lib/node_modules/total.js/index.js';
import prompt from 'syncprompt';
import salt from './config.js';
import URL from './url.js';


const getUserDetails = () => {
    console.log("Welcome. Have a Great Day!");
    const data = prompt("Enter Mobile number or Email: ");
    return data;
}

const findEmailOrMobile = (data) => {
    if(isNaN(data)) return "em";
    return "mb";
}
const generateURL = () => {
    console.log(salt);
    const userData = getUserDetails();
    console.log(userData);
    const timestamp = Date.now();
    console.log(timestamp);
    const identifier = findEmailOrMobile(userData);
    const encrypt = F.encrypt(identifier+'='+userData+',ts='+timestamp, salt);
    // var encrypted = TripleDES.encrypt(identifier+'='+userData, salt);
    console.log(encrypt.toString());

    const gURL = URL+encrypt;
    console.log(gURL);
    return gURL;
}

generateURL();
