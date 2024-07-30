import React, { useState } from 'react';
import { UserContext } from './UserContext';

/* const user = {
    id: 123,
    name: 'Fernando',
    email: 'XNjvF@example.com'
} */

// Creamos el funcional component UserProvider que es el que recibe los hijos y provee los valores que quiero exportar a los hijos.
// En el value puede recibir cualquier cosa que queremos.

export const UserProvider = ({ children }) => {

    // Al ser un Funcional Component podemos usar todos los hook que react nos ofrece, por lo que cuando queremos por ejemplo establecer un estado usaremos el hook useState
    // Siempre enviando en el value lo que queremos que salga a los children
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}