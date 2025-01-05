const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  crypt(message, key, enCrypt) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const arrAlf = alfabet.split('');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      let messageChar = message[i];
      if (messageChar < 'A' || messageChar > 'Z') {
        result += messageChar;
        continue;
      }
      let keyChar = key[j % key.length];
      let index;
      if (enCrypt === true) {
        index = (arrAlf.indexOf(messageChar) + arrAlf.indexOf(keyChar)) % 26;
      } else {
        index = (arrAlf.indexOf(messageChar) - arrAlf.indexOf(keyChar) + 26) % 26;
      }

      result += arrAlf[index];
      j++
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.crypt(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.crypt(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
