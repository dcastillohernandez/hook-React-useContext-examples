import React, { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  // Para poder acceder al contexto de UserContext usamos useContext el hook y le damos como parámetro el UseContext que creamos nosotros con nuestros valores
  // Desestructuramos los valores que trae el contexto 
  const { user, setUser } = useContext(UserContext); // El UserContext es el que creamos dentro de la carpeta context

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        {/* Recordar siempre que cuando usamos el método stringify tengo que dar después el null del replacer y el 3 del espaciado (Es solamente estética visual pero se ve mejor) */}
        {
          JSON.stringify(user, null, 3)
        }
      </pre>


      <button 
      onClick={() => setUser({ id: 123, name: 'Fernando', email: 'XNjvF@example.com' })}
      className="btn btn-primary">
        Establecer Usuario
      </button>
    </>
  )
}
