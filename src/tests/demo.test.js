

// test( 'debe ser true ', ()=>{
//      const isActive = true;

//      if(isActive){
//           throw new Error('no esta activo')
//      }
// }
// )



describe('Pruebas en el archivo demo.test.js', ()=>

     test('deben de ser iguales los string', ()=>{
          const mensaje = 'holamundo'
          const mensaje2 = 'holamundo'

          expect( mensaje).toBe( mensaje2)
     }    
     )
)