import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import Main, { mainLoader } from "./layouts/Main";

// Actions
// import { logoutAction } from "./actions/logout"; // This import is not used in App component
// import { deleteBudget } from "./actions/deleteBudget";
// Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from "./pages/ExpensesPage";

const router = (
  <Routes>
    <Route
      path="/"
      element={<Main />}
      loader={mainLoader}
      index={true}
    >
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={dashboardLoader}
        action={dashboardAction}
      />
      <Route
        path="budget/:id"
        element={<BudgetPage />}
        loader={budgetLoader}
        action={budgetAction}
      >
        <Route path="delete" element={<DeleteBudget />} />
      </Route>
      <Route
        path="expenses"
        element={<ExpensesPage />}
        loader={expensesLoader}
        action={expensesAction}
      />
      <Route path="logout" element={<Logout />} />
    </Route>
    <Route path="*" element={<Error />} />
  </Routes>
);

function App() {
  return (
    <div className="App">
      <Router>{router}</Router>
      <ToastContainer />
    </div>
  );
}

export default App;
