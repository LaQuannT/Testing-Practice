export const caesarCipher = (string) => {
 let cipherText = []
 let text = string.split('')

  for (let i = 0; i < text.length; i++){
    if (isAlpha(text[i])){
      if (/[z]/.test(text[i])){
        cipherText.push('a')
      } else if (/[Z]/.test(text[i])){
        cipherText.push('A')
      } else{
        cipherText.push(String.fromCharCode(text[i].charCodeAt() + 1))
      }
    } else {
      cipherText.push(text[i])
    }
  }
 return cipherText.join('')
}
const isAlpha = (char) =>  /[A-Z]/i.test(char);
