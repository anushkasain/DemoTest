export const EMAIl_EMPTY_ERR = 'Please enter email id'
export const EMAIl_INVALID_ERR = 'Please enter valid email id'
export const PASS_EMPTY_ERR = 'Please enter password'

export const EMPTY_NAME_ERR = 'Please enter name'
export const EMPTY_TYPE_ERR = 'Please enter type'

export const EMAIL_REGAX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export const emailValidation=(txtField)=>{
    let error = ''
    if (txtField == '') {
        error = EMAIl_EMPTY_ERR
      } else if (!EMAIL_REGAX.test(txtField)) {
        error = EMAIl_INVALID_ERR
      } 
    error!=''&&alert(error)
    return error!=''?false:true
}
export const passValidation=(txtField)=>{
    let error = ''
    if (txtField == '') {
        error = PASS_EMPTY_ERR
      } 
      error!=''&&alert(error)
      return error!=''?false:true
}