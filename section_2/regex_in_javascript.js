

const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

const regexNine = RegExp('9');
console.log(regexNine.test(text));
console.log(regexNine.exec(text));

const regexLetters = /[a-f]/g;
console.log(text.match(regexLetters)); // 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(text.search(regexLetters)); // 20
console.log(text.replace(regexLetters, "Find")); //0,1,2,3,4,5,6,7,8,9,Find,Find,Find,Find,Find,Find
console.log(text.split(regexLetters)); //[ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]