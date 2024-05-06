import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import { MainPage } from "./pages/main/mainPage"
import { TaskPage } from './pages/task/taskPage';


function AppRoutes() {
  const routes = useRoutes(
    [
      { path: '/', element: <MainPage /> },
      { path: '/task', element: <TaskPage /> },
    ]
  )
  return routes;
}
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App