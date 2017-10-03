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
//saludo();
//mostrar_mensaje();
//saludar_2();
//saludar_2('Hola M3n');

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

//--Diferencias entre rest y spreac
console.log('13-Diferencias entre rest y spread');

console.log('-- REST --');

function saludarRest(saludo, ...personas){
	for(p in personas){
		console.log(`${saludo} ${personas[p]}`);
	}
}

saludarRest('Hi!', 'Pedro','Juan', 'Diego');
console.log('-- SPREAD --');

function saludarSpread(saludo, ...personas){
	console.log(`${saludo} ${personas}.`)
}
let publico_2 = ['Ricardo','Esteban','Eduardo'];
saludarSpread('Qué pasa m3n!',publico_2);

let partes_1 = ['pieza 1','pieza 2','pieza 3'];
let partes_2 = ['pieza 0',...partes_1, 'pieza 4', 'pieza 5'];
console.log(partes_2);

//--Funciones con flecha =>
console.log('14-Funciones con flecha =>');

console.log('-- Antes --');
let arreglo_1 = [1,45,2,6,12,22,4,5];
//-- función 1
var miFuncion1 = function(valor){
	return valor;
};
var miFuncion1_1 = function(num1,num2){
	return num1+num2;
}
var miFuncion1_2 = function(){
	return 'Saludos!';
}
var miFuncion1_3 = function(nombre){
	let saludo = 'Hola!, '+nombre;
	return saludo;
}
var miFuncion1_4 = function(id){
	return {
		id:id,
		nombre:'Libro 1'
	}
}
let ordenado_1 = arreglo_1.sort(function(a,b){return a-b});
let prueba1 = miFuncion1('PALABRA 1');
let prueba1_1 = miFuncion1_1(2,2);
let prueba1_2 = miFuncion1_2();
let prueba1_3 = miFuncion1_3('Esteban');
let prueba1_4 = miFuncion1_4(3);

console.log(prueba1);
console.log(prueba1_1);
console.log(prueba1_2);
console.log(prueba1_3);
console.log(prueba1_4);
console.log(ordenado_1);

console.log('-- Ahora --');
var miFuncion2 = valor => valor;
var miFuncion2_1 = (num1,num2) => num1+num2;
var miFuncion2_2 = () => '¡Saludos!';
var miFuncion2_3 = nombre => {
	var saludo = `Hola!! ${nombre}`;
	return saludo;
}
var miFuncion2_4 = id =>({id:id, nombre:'Libro 2'});
let ordenado_2 = arreglo_1.sort((a,b)=>a-b);
let prueba2 = miFuncion2('PALABRA 2');
let prueba2_1 = miFuncion2_1(4,3);
let prueba2_2 = miFuncion2_2();
let prueba2_3 = miFuncion2_3('Eduardo');
let prueba2_4 = miFuncion2_4(5);

console.log(prueba2);
console.log(prueba2_1);
console.log(prueba2_2);
console.log(prueba2_3);
console.log(prueba2_4);
console.log(ordenado_2);

//--Uso del comparador Object.is
console.log('15-Uso del comparador Object.is');
console.log('-- Antes --');

console.log(5==5);
console.log(5=='5');
console.log(5===5);
console.log(5==='5');
console.log('-- Ahora --');
console.log(Object.is(5,5));
console.log(Object.is(5,'5'));

//--Heredar funciones de otro objeto
console.log('16-Heredar funciones de otro objeto');
console.log('-- Antes --');
let objeto_1 = {};
let objeto_2 = {
	nombre :'Ricardo'
};
function mezclar(objectReceptor, objDonador){
	Object.keys(objDonador).forEach(function(key){
		objectReceptor[key] = objDonador[key];
	});
}
console.log(objeto_1);
console.log(objeto_2);
mezclar(objeto_1,objeto_2);
console.log(objeto_1);

console.log('-- Ahora --');
let objeto_3 = {};
let objeto_4 = {
	get nombre(){
		return 'Ricardo';
	}
}

console.log(objeto_3);
console.log(objeto_4);
Object.assign(objeto_3,objeto_4);
console.log(objeto_3);

//--Programación Orientadas a objetos
console.log('17-Programación Orientadas a objetos');
let gato = {
	sonido(){
		console.log('Miau!!');
	},
	chillido(){
		console.log('MIAU!!!');
	}

}
let perro = {
	sonido(){
		console.log('Guau!!');
	},
	ladrido(){
		console.log('GUAU!!!');
	}
}
console.log('-- Object Gato');

let angora = Object.create(gato);

console.log( Object.getPrototypeOf(angora)=== gato );
console.log( Object.is(Object.getPrototypeOf(angora),gato) );
angora.sonido();
angora.chillido();

Object.setPrototypeOf(angora,perro);
console.log('-- Object Perro');
console.log( Object.getPrototypeOf(angora)===gato );
console.log( Object.is(Object.getPrototypeOf(angora),gato) );
angora.sonido();
angora.ladrido();
//angora.chillido();

console.log('17.1 - Llamar a funciones de otros objetos');

let objPadre ={
	saludar(){
		return 'Hola dice tu padre';
	}
}
let objHijo ={
	saludar(){
		//return Object.getPrototypeOf(this).saludar()+', gracias papá'; //antes
		return super.saludar()+', gracias papá'; 
	}
}
Object.setPrototypeOf(objHijo, objPadre);
console.log(objHijo.saludar());

console.log('17.2 - Destructuración de objetos');
let ajustes = {
	nombre:'Ricardo',
	email:'correo@hotmail.com',
	direccion:'Santiago centro',
	permiso:true
};
let {nombre, email, permiso:otroNombre, permiso_2=false, permiso_3:acceso=true} = ajustes;

console.log(nombre, email, otroNombre, permiso_2, acceso);

console.log('17.3 - Destructuración de objetos anidados');
/*
//--
console.log('18-');
console.log('-- Antes --');
console.log();
console.log('-- Ahora --');
console.log();
 */
