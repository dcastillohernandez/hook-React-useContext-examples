import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            {/* Asegurarse de importar Routes de react-router-dom */}
            <Routes>
                {/* Asegurarse de importar Route de react-router-dom */}
                {/* El componente Route tiene 2 propiedades: path y element */}
                <Route path="/"     element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/* El componente Navigate tiene la propiedad to */}
                {/* La diferencia es que con el Navigate redirecciona al path que le indiquemos y no queda la url con el error */}
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}