import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { QueryPage } from '../pages/QueryPage';




const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<QueryPage/>} />
                <Route path="/" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter

