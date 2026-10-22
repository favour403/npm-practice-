
 import camera from "./models/camera.js";
 import { encrypt,decrypt,MAX_ATTEMPTS } from "./utils/security.js";
  
    // LOGGING DATA
    camera('CAM-01', 'Main Gate');
     const e = encrypt('Pass123')
    const d = decrypt('Pass123');
     console.log (e);
     console.log (d)
     console.log (MAX_ATTEMPTS);
      //  CREATING A FUNCTION
     function loginSystem(isServeOnline) {
       try {
         if (isServeOnline) {
          console.log (`Login Successfull`)
         }else {
          throw new Error ('Server is offline')
         }
       }catch (error){
         console.log(error.message)
       }finally {
        console.log ('Security check complete')
       }
     }
      loginSystem(false);

        