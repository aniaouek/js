//ctrl +/ -komentarz liniowy
//ctrl + shift + / -komentarz blokowy
//to jest komentarz liniowy
//console.log('654');
//console.log('123');

//zmienne
var liczba = 10;
var Liczba = 15;

//dodawane number do stringa
var napis = 'Ala ma kota';

console.log(liczba + napis);

console.log('123');
console.log(liczba);
console.log(Liczba);
wypiszWKonsoli();

//funkcje - reuzywane bloki kodu, tworzymy za pomoca kodu function
function wypiszWKonsoli() {
	console.log('123');
}

var nowaFunkcja = function () {
	console.log('456');
}
nowaFunkcja();

//funkcja, ktora ma 2 parametry i wypisuje w konsoli wynik dodawania tych dwoch argumentow
function dodawanie(liczba1, liczba2) {
	console.log(liczba1 + liczba2);
}

dodawanie(39, 80);

//funkcja, ktora ma 2 parametry i zwraca w konsoli wynik dodawania tych dwoch argumentow- return

function odejmowanie(liczba3, liczba4) {
	var roznica = liczba4 - liczba3;
	return roznica;
}
//liczba zdefiniowana jest wew funkcji, tz jest znacznikiem lokalnym
console.log(odejmowanie(3, 10));

//null i underfined
var zmienna = null;
console.log(zmienna);

//true false
var zmienna2 = true;
console.log(zmienna2);

//definicja tablicy, uzywamy nawias kwadratowy
var tablica = ['Marcin', 'Ania', 'Agnieszka'];

//dodawanie wartosci do tablicy
//przez dodanie nazwy do numeru indexu, nastepnie przypisanie wartosci
tablica[3] = 'Jan'
console.log(tablica[3]);

//push (wartosc) dodaje element na koniec tablicy
tablica.push('Michał');
console.log(tablica);

//pop() - zawsze usuwa ostatni element tablicy na koniec
tablica.pop();
console.log(tablica);

//unshift(wartosc, wartosc,...) - wstawia element/ty na poczatek tablicy
tablica.unshift('Wojtek', 'Kajetan');
console.log(tablica);

//shift() - usuwa pierwszy element tablicy
tablica.shift();
console.log(tablica);

//length - zwraca dlugosc tablicy
console.log(tablica.length);

//join wypisuje elementy tablicy jako string - po znaku
console.log(tablica.join(''));

//reverse() - odwraca kolejnoosc elementow tablicy
console.log(tablica.reverse());

//sort() - sluzy do sortowania najpierw znaki specjalne, cyfry, duze litery na koncu male
console.log(tablica.sort());
var string = "Ala ma kota";

//split( ) - dzieli string po podanym parametrze i wyrzuca je do tablicy

var res = string.split('');
console.log(res);
console.log(res.join(''));
console.log(res.sort().join());

var osoba = {
	name: 'Marcin',
	height: '180',
	print: function () {
		console.log(this.name);
	}
}
console.log(osoba.name + ' ' + osoba.height);
osoba.print();

console.log(osoba);

osoba.weight = 70;
console.log(osoba);

osoba.printDetail = function () {
	console.log(this.name + ' ' + this.height + ' ' + this.weight);
}
console.log(osoba);

osoba.printDetail();

//klasy obiektu - szablon dla obiektu

class Osoba {
	constructor(imie, nazwisko) {
		this.imie = imie;
		this.nazwisko = nazwisko;
	}

	wyswietlInfo() {
		console.log('Imie: ' + this.imie + ' ' + 'Nazwisko: ' + this.nazwisko);
	}
}

var krystian = new Osoba('Krystian', 'Dziopa');

var marcin = new Osoba('Marcin', 'G');

krystian.wyswietlInfo();
marcin.wyswietlInfo();

//obiekt wbudowany math
console.log('PI= ' + Math.PI);

//losowanie liczb 0 - 1
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

//pow (liczba podnoszona, potega)
console.log(Math.pow(10, 2));

//dzelenie modulo
console.log(3 % 2);

//pre najpierw zwieksz potem uzyj
//post najpierw uzyj potem zwieksz

var a = 10;
//a = a + 10;
a += 10;
console.log(a);

var string1 = '10';
var number1 = 10;

console.log(string1 !== number1);

//operator warunkowy
//(warunek) ? jezeli_prawda : jezeli_nieprawda;
//wartosc globalna
var ujemna = -10;
var wynik = (ujemna > 0) ? 'jest wieksza od 0' : 'nie jest wieksza od 0';
console.log(wynik);

//if najprostrzej postaci wykonuje sie wtedy i tylko wtedy, gdy podany warunek jest spelniony (tz ma watrosc true)
//wartosc lokalna
if (ujemna < 0) {
	console.log('ujemna jest mniejsza od 0');
}

//w bloku else instrukcje do wykonania, gdy warunek niespelniony (tz ma wartosc false)
if (ujemna < 0) {
	console.log('ujemna jest mniejsza od 0');
} else {
	console.log('warunek nie zostal spelniony');
}

var dodatnia = 100;
//else-if sprawdza czy kolejny podany warunek jest prawdziwy
if (dodatnia < 0) {
	console.log('dodatnia jest mniejsa od 0');
} else if (dodatnia == 100) {
	console.log('podales liczbe 100');
} else {
	console.log('warunek nie zostal spelniony');
}

//instrukcja switch
var kolor = 'zielony';

switch (kolor) {
	case 'bialy':
		console.log('podales kolor zielony');
		break;
	case 'czerwony':
		break;
		console.log('podales kolor czerwony');
	case 'czarny':
		console.log('podales kolor czarny');
		break;
	default:
		console.log('jestes daltonista');
}

//wypisanie wszystkich elementow tablicy za pomoca for
for (var i = 0; i < tablica.length; i++) {
	//console.log(tablica[i]);
	//index: numer indexu, wartosc: wartosc
	console.log('Numer elementu: ' + (i + 1) + ' ' + 'Index: ' + i + ' ' + 'wartosc: ' + tablica[i]);

	//	if(i == 2) {
	//		break;
	//	}

	//	continue powoduje przesskok do kolejnej iteracji petli
	//	if(i == 2);
	//
}

//wypisanie elementow tablicy za pomoca forEach
tablica.forEach(function (element, index) {
	console.log('Elemet: ' + element + ' ' + 'o indeksie: ' + index);
})

//var it = 0;
//while ( it < 10) {
//	console.log(it);
//	it++;
//}

//do...while
var iter = 20;
do {
	console.log(iter);
	iter++;
} while (iter < 10);

for (var b = 0; b < 10; ++b) {
	if (b == 5) {
		continue;
	} else {
		console.log(b);
	}

	console.log('--');
}

//JSON
var jsonOsoby = {
	"osoby": [
		{
			imie: 'krystian',
			nazwisko: 'dziopa',
			zainteresowania: [
				{
					nazwa: 'podroze'
				},
				{
					nazwa: 'gotowanie'
				}
			]
		},
		{
			imie: 'dominik',
			nazwisko: 'gaudyn',
			zainteresowania: [
				{
					nazwa: 'akrobatyka'
				},
				{
					nazwa: 'koszykowka'
				}

			]
		},
		{
			imie: 'anna',
			nazwisko: 'nowak',
			zainteresowania: [
				{
					nazwa: 'jezyk'
				},
				{
					nazwa: 'ksiazki'
				}
			]

		}
	]
}
//console.log(jsonOsoby.osoby.length);
//for(var i = 0; i < jsonOsoby.osoby.length; i++)	{
//console.log(jsonOsoby.osoby[i].imie + ' ' + jsonOsoby.osoby[i].nazwisko);	
//}
//
//jsonOsoby.osoby.forEach(function (element, index) {
//	console.log(element.imie + ' ' + element.nazwisko);
//})
//
//
//jsonOsoby.osoby.forEach(function (element, index) {
//	console.log(element.imie + ' ' + eleent.nazwisko + ' ' + element.zainteresowania.nazwa);
//})

//petla w petli
for (var i = 0; i < jsonOsoby.osoby.length; i++) {
	for (var j = 0; j < jsonOsoby.osoby[i].zainteresowania.length; j++) {
		console.log(jsonOsoby.osoby[i].zainteresowania[j].nazwa);
	}

}















