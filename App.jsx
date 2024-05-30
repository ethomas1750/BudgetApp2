import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

//Library
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; Caculating

// Layouts
import Main from ".layouts/Main";

// Actions
import { logoutAction } from "actions./logout";

// Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from ".pages/Error";
import ExpensesPage,{expensesLoader} from "./pages/ExspensesPage";
const router = createBrowserRouter([
  {
      path: "/",
      element: <Main/>,
      loader: mainLoader,
      errorElement: <Error/>,
      children: [
         
          {
              index: true,
              element: <Dashboard/>,
              loader: dashboardLoader,
              action: dashboardAction,
               errorElement: <Error/>
          },
          {
              path: true,
              element: <ExpensePage/>,
              // loader: expensesLoader,
               
          },
          {
              path: "logout",
              action: logoutAction
          } 
      ]
  },
]);

function App() {
  return <div className="App"> 
  <RouterProvider router={router}/>
  <ToastContainer/>
 </div>;
}

export default App;


