
    import {
      BrowserRouter as Router,
      Routes,
      Route,
      useRoutes,
    } from 'react-router-dom';
    import { MainPage } from "./pages/main/mainPage"
    
    function AppRoutes() {
      const routes = useRoutes(
        [
          {path: '/', element: <MainPage/>}
        ]
      )
      return routes;
    }
    function App(){
      return (
        <Router>
          <AppRoutes />
        </Router>
      )
    }
    
    export default App