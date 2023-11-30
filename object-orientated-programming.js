/*
    Objektum-orientált programozás
        Az objektum orientált programozásnál 
        a valós élet objektumait próbáljuk másolni

        - tulajdonságok/property 
        -viselkedési formák 

        Autó -> tulajdonságok: márka, típus, szín, súly 
        viselkedési formák: előre megy, hátra megy, fékez

        Állat-> tuéajdonságok: faj, alfaj, lábak száma, szárnyak száma 
        viselkedési formák: eszik, iszik 

    Az objektum-orientált programozás alapját az osztályok képzik: class
*/ 

class Vehicle {
    vehicleType;
    brand;
    type;
    color;
    weight;
    doorNumbers;
    wheelNumbers;
    wingNumbers;

    /*
        Fontos! A konstruktor egy speciális metódus.
        Nincs visszatérési értéke, de lehetnek paraméterei.
        Mindig lefut a példányosításkor.

        Ha elkezdeni neki megadni paramétereket, amik ugyanazok, mint felül a propertieink, de akár lehetnének més nevűek is.
    */

    
    constructor (vehicleType, brand, type, color, weight, doorNumbers, wheelNumbers, wingNumbers) {
        this.vehicleType = vehicleType; // Az első this.-es a property-hez köthető a második pedig a paraméterhez.
        this.brand = brand;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.doorNumbers = doorNumbers;
        this.wheelNumbers = wheelNumbers;
        this.wingNumbers = wingNumbers;
    }

    get getVehicleType() { // visszakapjuk a vehicleType-ot
        return this.vehicleType;
    }

    set setVehicleType(vt) {
        this.vehicleType = vt;
    }

    //metódusok létrehozása
    moveForward(speed) {
        console.log(`A(z) ${this.brand} márkájú és ${this.type} típusú ${this.vehicleType}
        ${speed} km/h-val megy előre`)
    }
    moveBackward(speed) {
        console.log(`A(z) ${this.brand} márkájú és ${this.type} típusú ${this.vehicleType}
        ${speed} km/h-val megy hátra`)
    }
}

/*
    Hasonlít az objektumokra, azzal a különbséggel, hogy itt nem határozunk meg értékeket(value) a property-knek
    Létre tudunk hozni az osztályokból példányokat, ahol ugy állítom be ezeket az értékeket, ahogy akarom
*/

// példányosítás -> ezt is úgy hívják, hogy objektum és sokkal jobban hasonlít egy megszokott objektumra pl. const Vehicle = {brand: Opel,}
const opel = new Vehicle();
opel.vehicleType = "auto";
opel.brand = "Opel";
opel.type = "Astra";
opel.color = "blue";
opel.weight = 1000;
opel.doorNumbers = 5;
opel.wheelNumbers = 4;
opel.wingNumbers = 0;
opel.moveForward(50); // console.log -> A(z) Opel márkájú és Astra típusú auto 50 km/h-val megy előre
opel.moveBackward(20); // console.log -> A(z) Opel márkájú és Astra típusú auto 20 km/h-val megy hátra
opel.setVehicleType = "vizibicikli" // innentől kezdve vizibicikli lesz 

console.log(opel.getVehicleType); // auto

// létre tudunk hozni egy másik típusú járművet

const boeing = new Vehicle();
boeing.vehicleType = "repülő";
boeing.brand = "Boeing";
boeing.type = "747";
boeing.color = "white"
boeing.weight = 25000;
boeing.doorNumbers = 1;
boeing.wheelNumbers = 3;
boeing.wingNumbers = 5;
boeing.moveForward(); // console.log -> A(z) Boeing márkájú és 747 típusú repülő undefined km/h-val megy előre
boeing.moveBackward(100); // console.log -> A(z) Boeing márkájú és 747 típusú repülő 100 km/h-val megy hátra

//constructor-os megoldás
const opel1 = new Vehicle(
    "auto", "Opel", "Astra", 
    "blue", 1000, 5, 4, 0   // ez a rész jelképezi a constructorunknak ezt a részét 
                            //(vehicleType, brand, type, color, weight, doorNumbers, wheelNumbers, wingNumbers)
)
// ez azért jobb mint az előbbi variáció, mert nem szükséges soronként megadni, hogy opel.brand, opel.type.... 
// és ha sok Opel, Boeing stb. van még akkor sokkal egyszerübb, a constructoron keresztül át tudjuk adni az értékeket, kevesebbet kell írni