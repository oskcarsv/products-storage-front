import { useRoutes } from "react-router-dom/dist"
import { MainPage } from "./pages/main/mainPage"
import { AuthPage } from "./pages/auth/AuthPage";
import { TaskPage } from './pages/task/taskPage';

// eslint-disable-next-line react-hooks/rules-of-hooks
const routes = useRoutes([
    {path: '/*', element: <MainPage/>},
    {path: 'auth', element: <AuthPage/>},
    {path: 'task', element: <TaskPage/>},
]);

export default routes