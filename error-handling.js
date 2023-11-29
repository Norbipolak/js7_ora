function evenNumbers(num) {
    if(num%2 !==0)
        throw "A következő szám nem páros: " + num; 
    return true;
}

try {
    // megpróbálja lefutatni a kódot 
    evenNumbers(1);
} catch(error) {
    // elkapja a hibát ha van
    console.log(error); // azt fogjuk itt errorként kapni amit beirtunk mi a throw-ba (A következő szám nem páros: 1)
} finally {
    console.log("Mindig lefut, ha volt hiba, ha nem.")
}

function atLeast18(age) {
    if(age < 18) 
        throw {
                errorMessage:"Nem vehet alkoholt a felhasználó",
                line:9,
                func:"atLeast18"
            };
    return true;
}

try {
    atLeast18(16);
} catch(err) {
    console.log(err);
}

// ha páros számot adunk meg akkor egyszerűen visszaad egy true-t
/*
    A throw-val egy hibát tudunk dobni
    megáll a kód futása, és azt kapjuk html-ben hogy uncaught error
    az a lényege, hogy ne okozzon nagyobb kárt, ha éeszrevesszük akkor mi magunk fogunk hibát dobni és
    onnantól kezdve nem fut tovább a kód, kivéve akkor ha belerakjuk egy try-catch blockba

    a try-catch az olyasmi mint az if-else csak hibákkal

    a catch után tudunk írni meg egy finally-t is, nem nagyon használatos, mindig lefut az a lényege

    az atLeast18-as példánál a throw-val tudunk egy objektumot vagy egy tömböt is hibaként nem egy stringet, 
    ez azért jó mert azt tudjuk mondani hogy error message, line, func -> nem csak azt tudjuk megmondani vele, hogy 
    mi volt a hiba, hanem azt is, hogy melyik sorban volt és, hogy melyik függvényben
*/

// a regex önmagától is tud hibát dobni 
try {
    new RegExp("éélfdglkg-.-,-,----___***--")
} catch(err) {
    console.log(err);
}

// ha maga a rendszer dob hibát azt is el lehet kapni és így nem ál meg a program futása

const a = 0;
const b = 5/a;
console.log(b); // infinity lesz az értéke, nem hiba a JavaScriptben

const c = 5;

try {
    c = 10;
} catch(err) {
    console.log(err);
}

console.log("Tovább ment a kód!") // elkapta a hibát az elözőnél de tovább ment és ki tudtuk íratni vele ezt a console.log-ot is



