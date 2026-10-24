
   function encrypt(data) {
    return `${`ENCRYPTED:${data}`}`
 };
    function decrypt (data) {
    return `DECRYPTED: ${data}`
  };
   const MAX_ATTEMPTS = 5;

//    EXPORTING
 export {encrypt,decrypt,MAX_ATTEMPTS}
