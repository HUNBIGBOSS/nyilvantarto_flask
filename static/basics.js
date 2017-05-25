'use strict'

console.log("Helló bazmeg");

//globális változó lesz a szöveg, a kódban mindenhol elérhető lesz a szöveg változó
//szoveg = "ez itt a szoveg";
//console.log("a szöveg tartalma: "+szoveg;

//újra deklarálható szöveg lesz
var szover2 = "ez egy új szöveg";
szoveg2 = "új értéket kap a a szoveg2";
var szoveg2 = "ez egy új szöveg új értékkel, var kulcsszóval hoztuk létre";
console.log(szoveg2);

//nem lesz ójra deklarálható
let szoveg3 = "ez egy nem újra deklarálható szöveg, let kulcsszóval hoztuk létre";
//ez nem működik, mert már deklaráltuk a szoveg3-at
//let szoveg3 = "ez egy nem újra deklarál│ez egy új szöveg új értékkel, var kulcsszóval hoztuk létre

//új értéket adok a szoveg3 változóban
szoveg3 = " vnsdapiounadeéouve";
console.log(szoveg3);

// ezzel statikus szoveget és valtozo tartalmat is kiirunk:
console.log("a szoveg3 tartalma: " +szoveg3);
//a typeof függvény kiírja a bele rakott változó típusát
console.log("a szoveg3 típusa: " +typeof(szoveg3));
//string: karakterlánc (1 vagy több karakterből álló adat)

let szam = 1;
let szam2 = "1";
console.log("a szam változó tartalma: " +szam);
console.log("a szam változó típusa: "+typeof(szam));
console.log("a szam2 változó típusa: "+typeof(szam2));

szam = szam +1; //így is lehet, nem fontos a szóköz a plusz jel körül
console.log("a szam változó tartalma: "+szam);
szam2 = szam2 +1; //így is lehet
console.log("a szam2 változó tartalma: "+szam2);
// az utasítások végére ; jelet kell tenni, lefut ezek nélkül is a kód (semicolon insertion)
//de hibalehetőség!

console.log("a szam2 változó típusa: "+typeof(szam2));

//stringet számmá alakítani:
//parseInt függvény: számmá alakítja azt, amit beadunk neki
szam2 = parseInt(szam2);
console.log("a szam2 változó típusa: "+typeof(szam2));

let valami = "asdasdasd";
valami = parseInt(valami);
console.log(valami);
console.log(typeof(valami));

//a szám változó megkapja az egyenlőségjel jobb oldalán lévő eredményt
szam = 5+6+7 //szam <- 5+6+7

//két változó értékét így lehet kicserélni
let a = 3;
let b = 10;
let c;
console.log("csere előtt> a = "+a+" b = "+b);

c = a;
a = b;
b = c;

console.log("csere után> a = "+a+" b = "+b);

//változó típúsok: number, string, boolean

igazhamis = true;

if (a > 5 && a < 20) {
console.log("a 5 és 20 között van");
} else {
console.log("lofasz");
}
let nev = "Geza";
if (nev === "Geza") {
console.log("Géza itt van");
}

// változó típus: Tömb (array)

//a tömbben több elemet tudunk tárolni egyszerre, típustól függetlenül
let tomb = [12, 32, 54, 65, 33, 66]
let tomb2 = [12, "szoveg", true, 65, 33, 66]

console.log("a tömb: "+tomb);
console.log("a tömb típusa: "+typeof(tomb));
console.log("a tömb elemeinek száma: "+tomb.length);

//for ciklus for (ciklusváltozó; kezdő érték; lépték)...
//i++ = egyesével
for (let i = 0; i<tomb.length; i++) {
	console.log("a tömb "+i+"-edik eleme: "+tomb[i]);
	if (tomb[i] === 12) {
		vanbenne = true;
	}
}
if (vanbenne) {
	console.log("van a tömbben 12");
}

console.log("a gyümölcs: "+gyumolcs); //undefined, mert már létezik a változó, csak nem kap értéket
var gyumolcs = "alma"; //ha var-al deklarálunk, arra érvényes a hoisting még strict módban is
 // hoisting: bizonyos változók vagy függvények előbb jönnek létre, mint ahogy lefut a kód
// semicolon insertion (automatikus pontosvessző beillesztés)

console.log("ez egy sor\nez egy új sor\tez egy tabbal beljebb van"); // \n: új sor \t: tab
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\rValami"); // \r carrige return

szam++; //rövidítés: szam = szam + 1
console.log("szam: "+szam);
console.log("szamhoz hozzáadok 1-et, de előtte kiírom a számot:");
console.log(szam++);
console.log("szamhoz hozzáadok 1-et, majd kiírom az eredményt:");
console.log(++szam);

// ciklusok
let j = 0;
while (j < tomb.length) {
	console.log("szia");
	j++;
}

let osztalyzatok = [3, 3, 4, 5, 5, 5, "2"];
let kettesek = 0;
let harmasok = 0;
let negyesek = 0;
let otosok = 0;
for (let i = 0; i < osztalyzatok.length; i++) { //for-on belüli ciklus áltozónak lehet let i = 0 több helyen is
	if (osztalyzatok[i] === 2) {
		kettesek++; //kettesek = kettesek + 1;
	}
	if (osztalyzatok[i] === 3) {
                harmasok++; //kettesek = harmasok + 1;
        }
	if (osztalyzatok[i] === 4) {
                negyesek++; //kettesek = negyesek + 1;
        }
	if (osztalyzatok[i] === 5) {
                otosok++; //kettesek = otosok + 1;
        }
} //for

console.log("a kettesek száma: "+kettesek);
console.log("a hármasok száma: "+harmasok);
console.log("a négyesek száma: "+negyesek);
console.log("az ötösök száma: "+otosok);

var koszones = function(szoveg) { //function expression
	console.log("hello "+szoveg+"!");
}

keresztnev = "Pista";
koszones(keresztnev); //ez nem használható, csak miután deklaráltuk a függvényt (not hoisted)
koszones("Laci");
osszegzes(4, 5) //ez már itt használható, pedig csak később deklaráltuk a függvényt (hoisted)
function osszegzes(szam1, szam2) { //function statement
	if ((typeof(szam1) === 'number') && (typeof(szam2) === 'number')) {
		let eredmeny = szam1 + szam2;
		console.log("a két szám összege: "+eredmeny);
	} else {
		console.log("error: nem számokat kaptam");
	}
}

//camelCasing: minden második szót nagybetűvel kezedek
function convertToNumber(szam1, szam2) { //szam1, szam2 > a convertToNumber függvény bemeneti értékei
	szam1 = parseInt(szam1);
	szam2 = parseInt(szam2);
	if (isNaN(szam1)) {
		szam1 = 0;
	}
	if (isNaN(szam2)) {
		szam2 = 0;
	}
return [szam1, szam2]; //a függvény visszatérési értéke
}

let eredmenyek = convertToNumber(2, "34");
console.log(eredmenyek);

//function statementet használunk
function pontosIdo1() {
	let ido = 5; //lokális változó, csak a függvényen belül van értelme
	let honap = "januar";
	// return ido; //a függvény visszatérési értéke
	function pontosDatum1() {
		let datum = "hetfo";
		console.log("a pontos idő: "+honap+", "+datum+", "+ido+" óra");
	}
	pontosDatum1();
}
pontosIdo1()
// console.log(ido); //az ido változó itt nem létezik
//pontosDatum(); //a pontosDatum függvény itt nem létezik!

//function expression-t használunk
let pontosIdo2 = function() {
        let ido = 5; //lokális változó, csak a függvényen belül van értelme
        let honap = "januar";
        let pontosDatum2 = function() {
                let datum = "hetfo";
                console.log("a pontos idő: "+honap+", "+datum+", "+ido+" óra");
        }
        pontosDatum2();
}
//CLOSURE: a function can also access variables defined outside the function
//CLOSURE: egy függvény, ha egy másik függvényben van benne, akkor a külső függvény változóihoz hozzá fér a belső függvény

pontosIdo2();

let szamHozzaadas = function() {
	let szam1 = 5;
	return function(n) {
		return szam1 + 5;
	}
}(); //létrehozok egy függvényt, és azonnal meghívom
     //"immediately invodek function expression": IIFE

console.log("Szám hozzáadása: " + szamHozzaadas(5));


// --------------------------------- Objektumok ---------------------------------

// adattípúsok: number, string, array, bool, NaN

let myObject = {}
console.log(typeof(myObject)); // a typeof függvény, az array típusú elemek esetén is, object-et ad vissza

let player = {
	"name": "John", // kulcs, érték párok (key: name, value: John)
	"health": 100,
	"alive": true
}
console.log("Az új játékos neve: "+player.name);
let shot = Math.floor((Math.random() * 200) +1); //egy véletlenszerű szám 1 és 200 között
if (player.alive) {
	console.log(shot+"a- meglőttük "+player.name+"-t");
	player.health = player.health-shot;
	if (player.health < 0) {
		player.alive = false;
	}
}
if (!player.alive) { //ez ugyanaz, mintha azt mondamnám, hogy > (player.alive === false // a ! jel negálást jelent
	console.log(player.name+" is dead!");
} else {
	console.log(player.name+" is alive!");
}

for (let key in player) { // this is how you loop trough an object by key
	console.log("checking: "+key+" ...");
	console.log(key+" értéke: "+player[key]);
}

let animals = [
	{neve: "Buffy", fajtaja: "macska"},
	{neve: "Fluffy", fajtaja: "kutya"},
	{neve: "Jago", fajtaja: "madar"},
	{neve: "Lori", fajtaja: "madar"},
	{neve: "Barni", fajtaja: "macska"},
	{neve: "Cirmi", fajtaja: "macska"}
]
console.log("============all animals============\n");
console.log(animals);

let kutyak = []
// az animals tömbön végig megyünk, és a tömb aktuális eleme az animal változó lesz. Nincs index.
// requires EcmaScript 2015+
for(let animal in animals) { // egy animal változó fogja tartalmazni az animals tömb aktuális elemét
// lehetne let animal in animals, de az object-re van, nem tömbre!
	if(animals.fajtaja === "kutya") {
		kutyak.push(animal) //a tömb végére hozzáfűzök egy elemet
	}
}

console.log("==============all dogs===============\n");
console.log(kutyak);

player.level = 1; //kibővítettük a player object-et egy új property-vel
console.log(player.name+" játékos szintje: "+player.level);
player.levelup = function() {
	player.level = player.level +1;
}

player.levelup()
console.log(player.name+" játékos szintje: "+player.level);

for (let key in player) { // this is how you loop trough an object by key
        console.log("checking: "+key+" ...");
        console.log(key+" értéke: "+player[key]);
}

// functional programming
kutyak = []
kutyak = animals.filter(function(animal) {
	return animal.fajtaja === "kutya" //csak akkor adom vissza a tömb elemét, ha a fajtája kutya
	})

console.log("================all dogs=================\n");
console.log(kutyak);

// https://www.youtube.com/watch?v=BMUiFMZr7vk

let kutyaE = function(animal) {
	return animal.fajtaja === "kutya";
}
kutyak = animals.filter(kutyaE);

// javcascript object ES5 (réi)
let Cat = function(name) {
this.name = name;
this.color = "black";
this.walk = function () {
return console.log(this.name+" is walking...");
}
this.meow = function () {
return console.log(this.name+" say: MEOOOWWW");
}
Object.defineProperty(this, 'legscount', {
value: 4,
writable: false,
enumerable: false,
configurable: true
});
};
//ha a protoypehoz adjuk hozza fuggvenyt akkor ne fogja minden peldanyra ezt lemasolni
//ez hatekonyabb
Cat.prototype.purr = function() {
return console.log(this.name+" says: BRRRRRRR!!");
}



let cat1=new Cat("Cirmi");
console.log(cat1.name+" szine: "+cat1.color);
cat1.color = "white";
console.log(cat1.name+" szine: "+cat1.color);

console.log(cat1.name+" lábainak száma: "+cat1.legscount);
cat1.meow();
cat1.meow = "hi"; //ez elbassza a meow fugvenyt; //ez elbassza a meow fuggvenyt


let cat2 = new Cat("Orbán Viktor");
cat2.meow();
cat2.purr();
cat2.purr = "hi";
cat1.purr();
console.log(Object.keys(cat1));

// object inheritance: objektum öröklődés

let mutantCat = function(name) {
Cat.call(this, name);
Object.defineProperty(this, 'legscount', {
value: 4,
writable: true,
enumerable: true,
configurable: true
});
};

mutantCat.prototype = Object.create(Cat.prototype);
mutantCat.prototype.constructor = mutantCat;

let mutantCat1 = new mutantCat("Simicska Lajos");
mutantCat1.legscount = 6;
console.log(mutantCat1.name+" lábainak száma: "+mutantCat1.legscount);


//------------object creation ES6, EcmaScript2015---------//

class Dog {
	constructor(name) {
		this.name = name;
		Object.defineProperty(this, 'legscount', {
			value: 4,
			writable: false,
			enumerable: true,
			configurable: true
			});
	}; // constructor vege
bark () { //es6-ban ez automatikusan prototype!!!!!!
	console.log(this.name+" ugat: VAU VAU!!!");
	};
};

let dog1 = new Dog("Max");
dog1.bark();
//dog1.legscount=4;
console.log(dog1.name+" lábainak száma: "+dog1.legscount);
class MutantDog extends Dog {
	constructor(name) {
		super(name)
		Object.defineProperty(this, 'legscount', {
			value: 4,
			writable: true,
			enumerable: true,
			configurable: true
	});
}
	speak() {
	console.log(this.name+" beszélni is tud");
	}
};

let mutantDog1 = new MutantDog("Mutáns Kutya");
mutantDog1.bark();
mutantDog1.legscount = 67;
console.log(mutantDog1.name+" lábainak száma: "+mutantDog1.legscount)
mutantDog1.speak();

// https://en.wikipedia.org/wiki/Object-oriented_programming