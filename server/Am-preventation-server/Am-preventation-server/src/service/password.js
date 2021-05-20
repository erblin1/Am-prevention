const { scrypt, randomBytes } = require('crypto');
const { promisify } = require('util');

const scyrptAsync = promisify(scrypt);

class Password {
    static async toHash(password) {
        const salt = randomBytes(8).toString('hex');
        const buffer = Buffer(await scyrptAsync(password, salt, 64));

        return `${buffer.toString('hex')}.${salt}`;

    }
    static async Compare(storedPassword, suppliedPassword) {

        const [ hashedPassword, salt ] = storedPassword.split('.');       
        const buffer =  Buffer(await scyrptAsync(suppliedPassword, salt, 64));
        
        return buffer.toString('hex') === hashedPassword;
    }
}

module.exports = {Password}