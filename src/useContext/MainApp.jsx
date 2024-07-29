import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            {/* Asegurarse de importar Routes de react-router-dom */}
            <Routes>
                {/* Asegurarse de importar Route de react-router-dom */}
                {/* El componente Route tiene 2 propiedades: path y element */}
                <Route path='/' element={ <HomePage /> }/>
            </Routes>
        </>
    )
}