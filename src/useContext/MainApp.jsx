import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage, LoginPage, Navbar } from './';

export const MainApp = () => {
    return (
        <>
            <Navbar />
            <hr />

            {/* Asegurarse de importar Routes de react-router-dom */}
            <Routes>
                {/* Asegurarse de importar Route de react-router-dom */}
                {/* El componente Route tiene 2 propiedades: path y element */}
                <Route path="/"     element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/* Cuando usamos el path * significa que atrapa cualquier path que no tengamos definidos en las rutas */}
                {/* El componente Navigate tiene la propiedad to */}
                {/* La diferencia es que con el Navigate redirecciona al path que le indiquemos y no queda la url con el error */}
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}