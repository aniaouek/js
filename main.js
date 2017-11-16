//ctrl +/ -komentarz liniowy
//ctrl + shift + / -komentarz blokowy
//to jest komentarz liniowy
//console.log('654');
//console.log('123');

//zmienne
var liczba = 10;
var Liczba = 15;

//dodawane number do stringa
var napis = 'Ala \n ma kota';

console.log(liczba + napis);

console.log('123');
console.log(liczba);
console.log(Liczba);
wypiszWKonsoli();

//funkcje - reuzywane bloki kodu, tworzymy za pomoca kodu function
function wypiszWKonsoli() {
	console.log('123');
}

var nowaFunkcja = function() {
	console.log('456');
}
 nowaFunkcja();

//funkcja, ktora ma 2 parametry i wypisuje w konsoli wynik dodawania tych dwoch argumentow
function dodawanie(liczba1, liczba2) {
	console.log(liczba1 + liczba2);
}

dodawanie(39,80);

//funkcja, ktora ma 2 parametry i zwraca w konsoli wynik dodawania tych dwoch argumentow- return

function odejmowanie(liczba3, liczba4) {
	var roznica = liczba4 - liczba3;
	return roznica;
}
//liczba zdefiniowana jest wew funkcji, tz jest znacznikiem lokalnym
console.log(odejmowanie(3, 10));

























