// * In JS every "value" either a "object" or "Primitive"
// * There is "7" "Primitive Data Types"
// ! Number -> Floating Point Numbers , used for decimals and integers
// ! String -> Sequence of Characters , used for text
// ! Boolean -> logical type that can only be "true" or "false" , used for taking decisions
// ! Undefinied -> "Value" taken by a "variable" that is not yet defined ("empty value")
// ! Null -> Also means "empty value"
// ! Symbol -> Value that is unique and can not be changed
// ! BigInt -> Larger integers than the Number type can hold

// !!!!!!! VALUE HAS A TYPE, NOT VARIABLE !!!!!!!!!!!!

// ?? JS HAS DYNAMIC TYPING: We do not have to manually define the "data types" of the "value" stored in the "variable". Instead types are determined "automatically"

var urunAdi = 'Iphone 13' // string
var fiyat = '15000' //string
var urunFiyatı = 15000 //number
console.log(typeof urunAdi)
console.log(typeof fiyat)
console.log(typeof urunFiyatı)

// * Use "comma" to write all we want nearby each other.
console.log(urunAdi, fiyat, urunFiyatı)

// * It is important know that when we define a "variable" and assigned a "value" to that "variable", then we can freely change the "value" of that variable.
// ! Reassigninga "value" to a "variable" called "mutate variable"
let javaScriptIsFun = true
console.log(javaScriptIsFun)
console.log(typeof javaScriptIsFun)

javaScriptIsFun = 'YES!'
console.log(javaScriptIsFun)
console.log(typeof javaScriptIsFun)

// * When we declare a empty "variable" both "value" and "type" will be "undefinied"
let year
console.log(year) // undefinied
console.log(typeof year) //undefinied

// ! There is a "bug" in JS that when we asked "typeof" "null" , JS says "object". This "bug" never corrected because of "legacy"
console.log(typeof null) // object

console.log(null) // object
