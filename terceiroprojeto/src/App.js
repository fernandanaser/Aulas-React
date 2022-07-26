import './App.css';
// import { useState } from 'react'
// import Form from './componentes/Form';
// import Eventos from './componentes/Eventos';

// function App() {
//   return (
//     <div>
//       <Eventos numero={10}/>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }

// function App() {
//   const [name, setName] = useState('João');
//   //verificações no onchange
//   const[pasword, setSpassword] = useState();

//   function cadastrarUsuario(e) {
//     e.preventdefault();
//     console.log(name, password)
//   }
  
//   return (
//     <div>
//       {name}
//       <input type="text" placeholder='Digite deu nome' />
//     </div>
//     <div>
//       <input type="submit" value="Alterar" />
//     </div>
//   );

//   )
// }

// ARRAY MAP
// Array de valores
// function App() {
//   const array = ['value1', 'value2', 'value3'] //criou um array com 3 valores
//   return(
//     <>
//     {array.map((item, i) => ( //percorrer cada item, o segundo parametro de um array é o indice
//       <p key={i}>{item}</p> //html imprimindo valores de item, definindo indice por key
//     ))}
//     </>
//   )
// }

// Array de objetos
// function App() {
//   const arrayObject = [{id: 1, name: 'João'}, {id: 2, name: 'Lucas'}, {id: 3, name: 'Marcos'}]; //criou um array com 3 valores
//   return(
//     <>
//     {arrayObject.map(item => ( //percorrer cada item
//       <p key={item.id}>{item.name}</p> //html imprimindo valores de item
//     ))}
//     </>
//   )
// }

// USE EFFECT
import {useEffect, useState} from 'react';
import Form from './componentes/Form';
import axios from 'axios';

// function App() {
//   async function setup() {
//     await console.log('Aqui dentro')
//   }

//   useEffect(() => {
//     setup()
//   } , []);
//   return(
//     <>
    
//     </>
//   )
// }

// function App() {
//   const [name, setName] = useState()
//   useEffect(() => {
//     console.log('Aqui dentro')
//   } , []); //com useeffect só os dois primeiros renders da tela

//     console.log('fora')
//   return(
//     <>
//       <Form name={name} setName={setName}/>
//     </>
//   )
// }

function App() {
  const [name, setName] = useState()
  async function setup(){ //separar funções, pois useEffect pode ser vários, e ele não aceita async
    try {
      const {data} = await axios.get('https://swapi.dev/api/') //sanvando o axios no get
    console.log(data) //o axios sempre retorna data, desestruturação do objeto
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setup()
  } , []); //com useeffect só os dois primeiros renders da tela

  return(
    <>
      <Form name={name} setName={setName}/>
    </>
  )
}

export default App;
