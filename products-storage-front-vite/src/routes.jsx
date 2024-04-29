import { useRoutes } from "react-router-dom/dist"
import { MainPage } from "./pages/main/mainPage"
const routes = useRoutes([
    {path: '/', element: <MainPage/>}
]);

export default routes