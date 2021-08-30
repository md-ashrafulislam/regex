/* let para = "RegExr was created by gskinner.com, and is proudly hosted by Media Temple.Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.";

// let firstReg = /community/gi
// let firstReg = /community|help/gi
// let firstReg = /(can|help) also/gi
// let firstReg = /\w/gi // \w = all word
// let firstReg = /\d/gi // \d == all digit
// let firstReg = /\s/gi // \s = space
// let firstReg = /\W/gi
// let firstReg = /\D/gi
// let firstReg = /\S/gi
// let firstReg = /\n/gilet // \n = new line space
// let firstReg = /./gi
// let firstReg = /[abc]/gi
// let firstReg = /[a-gA-G]/g
// let firstReg = /[a-g]/gi
// let firstReg = /[^abc]/gi   //not ba negetive , abc sara
// let firstReg = /[^a-g]/gi
// let firstReg = /created?/gi // 0? = 0-1 time
// let firstReg = /Com*unity/gi // * = 0-multipull
// let firstReg = /Com+unity/gi  // + = 1-multipull
// let firstReg = /Com{2}unity/gi
// let firstReg = /Com{1,2}unity/gi // min=1 max=2
// let firstReg = /\?/gi
// let firstReg = /^regexr/gi //start
// let firstReg = /\.$/gi //end
// let firstReg = /^[0-9]/gi //start number
// let firstReg = /gim / //m flag multiline



let result = para.match(firstReg);

console.log(result) */


// const text = '#2a2a2a'

// const regex = /#?([\da-f]{2})([\da-f]{2})([\da-f]{2})/gi

const text = '01734429666'

const regex = /(\+88)?-?01[0-9]\d{8}/gi

const matches = text.match(regex)

const index = text.search(regex)

const replaced = text.replace(regex, '#0a0F0e')

const testing = regex.test(text)

console.log(matches, index, replaced, testing)