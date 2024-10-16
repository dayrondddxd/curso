// const nombre = 'Antonio';
// const apellido = 'Perez';
// let valor =9;
// valor =5;
// console.log(nombre, apellido, valor)
// if (true){
//   let valor=2002;
//   console.log(valor)
// }
// const name = 'pedro';
// const nombre = `${name} hola mundo`;
// console.log(nombre);

// operador espred
// const persona ={
//   nombre : 'Tony',
//   edad :45,
//   direccion: {
//     ciudad : 'New York',
//     zip : '2345',
//   }
// }

// const persona2 = { ...persona };
// persona2.nombre = 'Pepe';
// persona2.edad = 20;

// console.log(persona);
// console.log(persona2);

// arreglo
// const arreglo = new Array(100);
// const arreglo =[1,2,3,4];
// let arreglo2 = [...arreglo,5];
// let arreglo3= arreglo2.map(function(numero) {
//   return numero*2;
// });

// console.log(arreglo)
// console.log(arreglo2)
// console.log(arreglo3)


// FUNCIONES
// const saludar = function(nombre){
//      return `Hola, ${nombre}`;
// }

// const saludar2 = (nombre) => `Hola me llamo , ${nombre}`;

// const getUser = () => ({
//      id:'ABC123',
//      username:'PEPE', 
// });

// console.log(saludar('goku'))
// console.log(saludar2('vegeta'))
// const user = getUser();
// console.log(user);

//  const getUsuarioActivo = (nombre)=>
//      ({
//           id:'123',
//           username: nombre,
//      })

// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log(usuarioActivo);


// DESECTRUCTURACION 
// const persona = {
//      nombre:'Tony',
//      edad: 45,
//      clave:'Start'
// };

// // const {edad, clave, nombre, } = persona;

// // console.log(nombre);
// // console.log(edad);
// // console.log(clave);

// const use = ({clave, nombre, edad, rango = 'capitan'}) => {
//      // console.log(nombre,edad,rango)
//      return{
//           nombreClave:clave,
//           anios:edad,
//           latlng:{
//                lat:1234,
//                lng:3424,
//           }
//      }
// }

     
// const { nombreClave, anios ,latlng} = use( persona );
// const {lat,lng} = latlng
// console.log(nombreClave,anios);
// console.log(lat,lng);


// DESECTRUCTURACION DE ARRREGLOS
// const personajes = ['Goku','Vegeta','Trunks'];
// const [,p1] = personajes;
// console.log(p1);

// const retornaArreglo = ()=>{
//      return['ABC',123];
// }
// const [letras,numeros]= retornaArreglo();
// console.log(letras,numeros);

// const State = (valor) => {
//      return [ valor, ()=>{console.log('Hola mundo');}
// ]
// }
// const [nombre,setNombre] = State('Goku');
// console.log(nombre);
// setNombre()


// IMPORT EXPORT
// import  heroes , {owners} from "./data/heroes";
// console.log(heroes);

// const getHeroeById = (id)=>{
//      return heroes.find((heroe)=>{
//           if(heroe.id === id){
//                return true;
//           }else{
//                return false;
//           }
//      })
// }
// import { heroes } from "./data/heroes";
// const getHeroeById = (id)=>{
//      return heroes.find((heroe)=> heroe.id === id)          
// }

// console.log(getHeroeById(2));

// const getHeroeByOwner = (owner)=>{
//      return heroes.filter((heroe)=> heroe.owner === owner)
// }
// console.log(getHeroeByOwner('DC'));



// PROMESAS

// const promesa = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//           ;
//           const h1 = getHeroeById(2);
//           resolve(h1);
//           reject('No se pudo encontrar el heroe')
//      }, 2000)
// });

// promesa.then((heroe)=>{
//      console.log('heroe',heroe);
// })

// .catch(error => console.log(error))


 
// const getHeroeByIdAsync=(id) =>{
//      return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//                ;
//                const h1 = getHeroeById(id);
//                if (h1) {
//                     resolve(h1);     
//                } else {
//                     reject('No se pudo encontrar el heroe')
//                }
//           }, 2000)
//      });

// }

// // getHeroeByIdAsync(8)
// // .then(heroe => console.log('Heroe',heroe))
// // .catch(error => console.log(error))

// // O

// getHeroeByIdAsync(8)
// .then(console.log)
// .catch(console.warn)



// FETCH
// const apiKey = 'EguzbpJJ8JIvu6cG79RbbRqDgsnkcSo9';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion.then(resp=>{
//      resp.json().then(data=>{
//           console.log(data)
//      })
// })

// peticion
//      .then(resp=> resp.json())
//      .then(({data})=>{
//           // console.log(data.images.original.url)

//           const {url} = data.images.original;
//           const img = document.createElement('img');
//           img.src = url;
//           document.body.append(img);
//  // https://media0.giphy.com/media/8tPQFoHSUt53VY6aAZ/giphy.gif?cid=5fc73bc2w3hxngt2fonh7jsmksyloeunnmf954fsmyyle6km&ep=v1_gifs_random&rid=giphy.gif&ct=g
//      })
// .catch(console.warn);


// Async Await
// const getImmagenPromesa = ()=>
//      new Promise( resolve => resolve('https://rwvwnñkvndpwkvw.com'))     
 // getImmagenPromesa().then(console.log);


// const getImmagen = async()=>{
//      try {
//           const apiKey = 'EguzbpJJ8JIvu6cG79RbbRqDgsnkcSo9';
//           const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//           const {data} = await resp.json()
     
//           const {url} = data.images.original;
//           const img = document.createElement('img');
//           img.src = url;
//           document.body.append(img);
//      }catch (error) {
//           console.log(error)
//      }
// }
// getImmagen() 


// OPERADOR CONDICIONAL TERNARIO
// const activo =true
// let mensaje =''
// if (activo){
//      mensaje = 'Activo'
// } else {
//      mensaje = 'Inactivo'
// }
// console.log(mensaje);

// const mensaje = (!activo) ? 'Activo' : 'Inactivo'
// const mensaje = (!activo) ? 'Activo' : 'null'
// const mensaje = (activo === true) && 'Activo' 
// const mensaje = !activo && 'Activo' 

// console.log(mensaje);



// HOLA MUNDO
// import React from 'react';
// import ReactDom from 'react-dom';
// const saludo = <h1>Hola Mundo</h1>;
// const divRoot = document.querySelector('#app');
// ReactDom.render( saludo, divRoot);



// PRIMER COMPONENTE
import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from "./CounterApp";

import './index.css';

const divRoot = document.querySelector('#app');

ReactDOM.render( <CounterApp value = {10} /> , divRoot ) 




