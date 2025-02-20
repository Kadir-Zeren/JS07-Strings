
/* -------------------------------------------------------------------------- */
/*                                   STRINGS                                  */
/* -------------------------------------------------------------------------- */
// Bir string, metin veya karakter dizisi olarak adlandırılan verileri temsil eder. JavaScript'te stringler çift tırnak ("), tek tırnak ('), veya backtick (`) içinde tanımlanabilir. 

//? String oluşuturma yöntemleri
const str1="new string"
const str2='new string'
const deger="merhaba"
const str3=`new string ${deger}`   // backtickler ile template literal
const str4=new String("new string")
console.log(str1)
console.log(str2)
console.log(str3)
console.log(str4)
console.log("🎈🎆🎇🧨✨")
console.log("©")
/* -------------------------------------------------------------------------- */
//! ---------------------------- ESCAPE CHARACTERS -------------------------- */

// "Escape characters" (kaçış karakterleri), özel bir anlamı olan karakterlerin belirtilmiş bir amaç için kullanılmasını sağlayan karakterlerdir

//  \ Escape karakterler \işareti ile kullanılır

// \ hemen yanındaki karkateri göz ardı edilmesini sağlar

let metin='Ömer\'in kalemi'
let path="c:\\Users\\Kullanıcılar"
console.log(path)   // users\kullanıcılar

// \n  new line => bir alt satıra geçmesini sağlar
// \t tab boşluğu verir ( 8 karakterlik boşluk)
const parag="\tMerhaba Cohort 16 sakinleri\nGününüz güzel geçsin"
console.log(parag)

// Unicode karakterleri için 
console.log("\u2615")
console.log("\uD83C\uDF39")
console.log("\uD83D\uDCB2")
console.log("\u00A9") 

console.log(`       Merhaba Cohort 16 sakinleri   🌹  

Gününüz güzel geçsin`)
// console.clear()
/* -------------------------------------------------------------------------- */