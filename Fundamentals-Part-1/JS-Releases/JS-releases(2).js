// * JS language is "Backward Compatible" -> if you run code that written in 1997, it will work today.
// * This rule called "DON'T BREAK THE WEB":
//    ! Old features never removed.
//    ! Not really a new versions, just incremental updates.
//    ! Websites keep working forever.
// ? "DON'T BREAK THE WEB" principle also have some problems that there are too many "bugs" and "weird" things in language and these are also be today.
// * Besides that JS is not "Forward Compatible" basically because current browsers do not understand codes from future. So how can we use "Modern JS" today?? Because browsers that users are using might be old.
// ! Development -->Simply use the latest Google Chrome.
// ! During Production --> Use "Babel" to "transpile" and "polyfill" your code(Converting back to ES5 to ensure browser compatibility for all users.)
// * ES5 -->Fully supported in all browsers and safe to be used for now.
// * ES6+ --> named for ES6 and all other releases after ES6 (Modern JS)
// * ESNext --> Future versions of the language(new proposals that reach Stage 4) --> Can already use some feautures in production with transpilling and polyfilling
