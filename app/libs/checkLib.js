/**
 * @description This is to trim the function
 * @author Titus Vimal Raj
 * @returns String without whitespaces
 * @param {String} x 
 */
let trim = (x) => {
  let value = String(x)
  return value.replace(/^\s+|\s+$/gm, '')
}//end trim

/**
 * @description check whether input is empty or not
 * @author Titus Vimal Raj
 * @param {*} value 
 * @returns boolean to check whether field is empty or not
 */
let isEmpty = (value) => {
  if (value === null || value === undefined || trim(value) === '' || value.length === 0 || value === 'undefined') {
    return true;
  } else {
    return false;
  }
}//end isEmpty

/**
 * exporting functions.
 */
module.exports = {
  isEmpty: isEmpty,
  trim: trim
}
