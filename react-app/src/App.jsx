import { BrowserRouter, Route, Router, Link, Routes } from "react-router-dom";
import "./App.css";
import ListUsers from "./components/ListUsers";
import CreateUsers from "./components/CreateUsers";
import EditUsers from "./components/EditUsers";

function App() {
  return (
    <>
      <div className="App">
        <h1>Welcome</h1>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">List Users</Link>
              </li>
              <li>
                <Link to="user/create">Create User</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index element={<ListUsers/>}/>
            <Route path="user/create" element={<CreateUsers/>}/>
            <Route path="user/:id/edit" element={<EditUsers/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
