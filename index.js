console.clear();




/* function isFloat(number){

   const reg = /\d?\.\d/

    if(reg.test(number) && typeof number === 'number'){
        return 'float'
    }
    return 'number'
}

console.log(isFloat(22.3)) */

/* function cleanSpace(string){

    let res = string.replace(/\s{2,}/g, ' ')

    return res.trim()
}

const result = cleanSpace( "       i                         am            ashraf   .   my   fathers       name        is    ")
console.log(result) */

/* function matchColor (str){

    let reg = /^#([0-9a-f]{3}([0-9a-f])?|[0-9a-f]{6})$/i
    if(str.match(reg)) return true
    
    return false


}

let res = matchColor('#eafeaa')

console.log(res)
 */

/* function rgba(value) {
    
  
   /*  return value.match(new RegExp('^rgb\\((25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])\\)$')) !== null;
  } 
  let reg = /'^rgb\\((25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])\\)$'/
  
   let reg = /rgb\(\s*(?:(?:\d{1,2}|1\d\d|2(?:[0-4]\d|5[0-5]))\s*,?){3}\)$/g
  if (typeof value !== 'string') {
    return false;
  }
   if(value.match(reg)){
    return true
 }
  return false
}
console.log(rgb('rgba(245,23,45,45)')) */

/* function rgb(value) {
    if (typeof value !== 'string') {
      return false;
    }
  
    return value.match(new RegExp('^rgb\\((25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])\\)$')) !== null;
  } */
  
  function isRgba(str) {
    
    // let reg = /^rgba\((\s*?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])\W*?)\,?(\s*?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])\W*?)\,(\s*?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])\W*?)\,?(\s*?1?|(0?\.[0-9]{1,})?\W*?)?\)/g
    let reg = /^rgba?\(((\s*(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])\W*?)\,?){3}(\s*?1?|(0?\.[0-9]{1,})?\s*)?\)/g

    if(str.match(reg)){
        return true
     }
  
    return false;
  }
console.log(isRgba('rgba(23,6,.2)'))
