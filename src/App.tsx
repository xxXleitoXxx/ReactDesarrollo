import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { AppProduct } from "./components/AppProduct/AppProduct"


export const App = () => {
    
  return (
    <div style={{display: 'flex', flexDirection:'column', gap:"2vh"}}>
         {/* <MiPrimerComponent 
            text="Texto desde propiedades"  
            color="red" 
            fontSize={5}
          />
        
        <ComponentCounter/>
        <ComponentUseEffect/>
        <FormComponent/> */}
        <AppProduct/>
         
    </div>
  )
}


//Esto es para montar y desmontar un componenete
//const [enableCounter, setEnableCounter]=useState(false)
// {enableCounter && <ComponentCounter/>}
// <button onClick={()=>{
//   setEnableCounter(!enableCounter)
// }
// }>Mostrar u ocultar Counter</button>