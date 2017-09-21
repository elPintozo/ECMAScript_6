//--- VARIABLES
console.log('1- Variables.-');
var variable_1 = 'variable var';
let variable_2 = 'variable let';
const variable_3 = 'variable const';
const Persona = {nombre:'Ricardo',edad:25};

if(true){
	//cambio el valor pero solo se ve reflejado dentro del if
	let variable_2 = 'variable let dentro de un if';

	//se puede pero no se deberia
	const variable_3 = 'variable const dentro de un if';
	//const Persona = {edad:14};// no se puede

	console.log(variable_2);
	console.log(variable_3);
	console.log(Persona); 
}

console.log(variable_1);
console.log(variable_2);
console.log(variable_3);
console.log(Persona);


//--- Ciclos
console.log('2- Ciclos.-');
for(var x=0;x<5;x++){
	console.log('for con variable var');
}
console.log('valor de x en en el for anterior: '+x)

for(let y=0 ; y<5 ; y++){
	console.log('for con variable let');
}
//esto es util para evitar colicion o nueva asignacipon de variables
//console.log('valor de x en en el for anterior: '+y)


//-- DECLARACION DE FUNCIONES DENTRO DE UN FOR
console.log('3- Declaracion de funciones dentro de un for.-');
var funciones = []
for(let x=0 ; x<10 ; x++){
	funciones.push(
		function(){
			console.log(x);
		}
	);
}
console.log(funciones);
funciones.forEach(function(func){
	func();
});

//--- segmento de caracteres en 
console.log('4- segmento de caracteres.-');
var frase = 'Hola mundo!'

//-antes
console.log('-- Antes --');
console.log('comienza con: ');
console.log(frase.substring(0,1)==='H');
console.log(frase.substr(0,1)==='H');
console.log(frase.substring(0,1)=='H');
console.log(frase.substr(0,1)=='H');
console.log('Buscar: ');
console.log(frase.indexOf('m'));
console.log(frase.indexOf('w'));

//ahora 
console.log('-- Ahora --');
console.log('comienza con: ');
console.log(frase.startsWith('H'));
console.log(frase.startsWith('Ho'));
console.log(frase.startsWith('Hola'));
console.log(frase.startsWith('o'));
console.log(frase.startsWith('mu',5));
console.log('termina con: ');
console.log(frase.endsWith('mundo!'));
console.log(frase.endsWith('do!'));
console.log(frase.endsWith('o'));
console.log(frase.endsWith('!'));
console.log('Buscar: ');
console.log(frase.includes('m'));
console.log(frase.includes('w'));
console.log(frase.includes('a',5));


//-- funciones con string
console.log('5- funciones con string.-');
let palabra_1 = 'Circulo';
const largo = 12;
let nombres = ['Ricardo','Senén','Eduardo'];
//antes
console.log('\n Funciones con string.-')
console.log(palabra_1.repeat(2));
console.log(palabra_1.repeat(2));
//ejemplo

for(n in nombres){
	let diferencia = largo - nombres[n].length;
	console.log(nombres[n]+ ' '.repeat(diferencia)+'|');
}

//---Literal templates
console.log('6- Literal templates ->``');
let nombre_1 = 'Ricardo';
let apellido_1 = 'Ramirez';

//antes
console.log('-- Antes --');
let nombre_completo = nombre_1 + " " + apellido_1;
let titulo = '<h1 class="titulo">Hola Planeta</h1>\n<p class="subtitulo">Cómo va todo?</p>'
console.log(nombre_completo);
console.log(titulo);

//ahora
console.log('-- Ahora --');
let nombre_completo_1 = `El nombre completo es: ${nombre_1} ${apellido_1}`;

function getName(){
	return 'Esteban Ramirez';
}
let nombre_3 = `EL nombre desde una funciona es: ${getName()} y su edad es de ${10 + 4}`;
let titulo_2 = `<h1 class="titulo">Hola Mundo!</h1>
<p class='subtitulo'>Cómo anda todo?</p>`

console.log(nombre_completo_1);
console.log(nombre_3);
console.log(titulo_2);

//---Literal templates con tags
console.log('7- Literal templates con tags');
let nota_1=5, nota_2=3, nota_3=7;

function etiqueta(literales, ...subtituciones){

	let resultado ='';

	console.log(literales);
	console.log(subtituciones);

	for(i in subtituciones){
		
		if(subtituciones[i]<4){
			resultado = 'Tienes una nota bajo 4, debes regularizar tus notas.'
			break;
		}else{
			resultado+=literales[i];
			resultado+=subtituciones[i];
		}
		
	}

	return resultado;
}

let frase_final = etiqueta`Las notas son ${nota_1}, ${nota_2}, ${nota_3} y el promedio es ${(nota_1+nota_2+nota_3)/3}`;

console.log(frase_final);

//--Valores raw crudos en template literal
console.log('8-Valores raw crudos en template literal');
console.log('-- Antes --');
let mensaje_1 = `Hola \nMundo\\`;
console.log(mensaje_1);
console.log('-- Ahora --');
let mensaje_2 = String.raw`Hola \nMundo\\`;
console.log(mensaje_2);

//--paramatros por defecto en funciones
console.log('9-paramatros por defecto en funciones');
console.log('-- Antes --');
function saludar_1(mensaje, tiempo){
	setTimeout(function(){
		console.log(mensaje);
	},tiempo);
}
saludar_1();
console.log('-- Ahora --');
function saludo(fn=function(){console.log('Buenos Días.');}){
	fn();
}
function saludar_2(mensaje='Este es un mensaje por defecto.', tiempo){
	setTimeout(function(){
		console.log(mensaje);
	},tiempo);
}
function mostrar_mensaje(fn = funcion_predeterminada, Personaje_1={nombre:'Ricardo',edad:25}){
	fn();
	console.log(Personaje_1);
}
function funcion_predeterminada(){
	console.log('Soy un mensaje salvaje');
}
saludo();
mostrar_mensaje();
saludar_2();
saludar_2('Hola M3n');

//--Valores del arguments
console.log('10-Valores del arguments');
//sin elementos por defecto
function sumar(a,b,c){
	console.log(arguments);//existe valores dentro de arguments
}
//con elementos por defecto
function restar(a=1,b=2,c=4){
	console.log(arguments);//No existen valores dentro de arguments
}

sumar(1,2,3,4,5,6,"Mensaje importante",{tipo:'Casa',dimension:'50MT2',material:'Hormigon'});
restar();

//--
console.log('11-Párametros Rest');
function add_empleado(arr_alumnos, ...alumnos){


	for( let x=0 ; x<alumnos.length ; x++){
		arr_alumnos.push(alumnos[x]);
	}
	return arr_alumnos;

}
let empleado_1 = ['Ricardo'];
let empleados = add_empleado(empleado_1, 'Esteban', 'Eduardo','Senén');
console.log(empleados);

//-- Operador Spread
console.log('12- Operador Spread');
console.log('-- Antes --');
let numeros_1 = [1,2,3,4,38,5,102,342];
let max_1 = Math.max.apply(Math, numeros_1);
console.log(max_1);
console.log('-- Ahora --');
let numeros_2 = [1,2,3,4,38,5,102,342];
var max_2 = Math.max(...numeros_2);
console.log(max_2);
/*
//--
console.log('13-');
console.log('-- Antes --');
console.log();
console.log('-- Ahora --');
console.log();
 */
