

// o estadode uma aplicação representa as caracteristicas dela naquele momento.
// disabled={!ativo}
// !ativo quando eu aperto muda;

import React from "react";
const App = () => {

  // const ativo = true

  const [ativo, setAtivo] = React.useState(true)
  const [contador, setContador] = React.useState(1)
  const [item, setItem] = React.useState(['item 1',])

  function HandleClick (){
    setContador((contador)=>{
      setItem((item) => {
        return [...item, 'item' + contador]
      })
      return contador + 1
    })
  }
  // const [item, setItem] =  React.useState(['item 1', 'item 2'])
  // const [objeto, setObjeto] = React.useState({nome:'', idade:''})

  return(
    <>
        <button onClick={() => setAtivo()} >
        {ativo === true ? "ativo" : "inativo"}

    </button>
    <button onClick={ HandleClick}>
    {contador}
       
    </button>
    {item.map((item) => (
      <li key={item}> {item}</li>
    ))}
    </>
  
  )
}

export default App; 