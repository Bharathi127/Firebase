const regEMail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regpass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

export const signUpValidation=(name,password,email)=>{
   const isname=name!==''
   const isPassword=regpass.test(password) && password!==""
   const isEMail=regEMail.test(email) && email!==''
   if(!isname ) return "Enter Valid Name"
   if(!isPassword) return "Enter Valid Password"
   if(!isEMail) return "Enter Valid Email"
   return
}

export const signInValidation=(name,password)=>{
    const isname=name!==''
    const isPassword=regpass.test(password) && password!==""
    if(!isname ) return "Enter Valid Name"
    if(!isPassword) return "Enter Valid Password"
    return 
 }