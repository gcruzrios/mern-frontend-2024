import React , { useEffect, useState }  from 'react'
import Welcome from "./Welcome";


const Content = () => {

   const [esObs, setEsObs] = useState(true);
   const TipoOBS = ()=>{
   const rolUsuario = localStorage.getItem('rolUsuario');
   console.log (rolUsuario);
     if (rolUsuario ==='Coordinador'){
         setEsObs(true)
     }else{
         setEsObs(false)
     }
     console.log(esObs);
   }

 useEffect(() => {
   TipoOBS();


 }, [])

  return (
    <div>

        <div class="crm mb-25">
            <div class="container-fluid">
               <div class="row ">

                                 

                
                  
                  
                 
               </div>
              
            </div>
         </div>

    </div>
  )
}

export default Content