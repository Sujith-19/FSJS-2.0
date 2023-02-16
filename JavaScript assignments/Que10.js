// 4 > 3 true
// 4 >= 3 true
// 4 < 3 false
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false
// 4 !== 4 false
// 4 != '4'true
// 4 == '4'true
// 4 === '4' false

let word1='python'
let word2='jargon'

let length1=word1.length
let length2=word2.length

console.log(Boolean(length1!=length2));