// * "Strict Mode" is a special mode that we can activate in JS which makes it easier for us to write a secure JS code.
// * To activate it just write "use strict" at the start of the JS.
// * Can be activated only for specific function or specific block but put it at the beginning every time.
// * First "Strict Mode" forbids us to do certain things and Second it creates visible errors.

'use strict'

let hasDriversLicense = false
const passTest = true

if (passTest) hasDriverLicense = true // "Strict Mode" warn us "hasDriverLicense" did not defined.
if (hasDriversLicense) console.log('I can drive :D')

const interface = 'Audio' // "Strict Mode" warn us "interface" is a "reserved word"
