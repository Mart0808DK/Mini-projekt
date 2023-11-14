import {Route, Routes} from "react-router-dom";
import HomePage from "./containers/HomePage.jsx";
import UserDataPage from "./containers/UserDataPage.jsx";
import "./styles/globals.css"
import NavBar from "./components/NavBar.jsx";
import CreateNewUser from "./containers/CreateNewUser.jsx";
import {useUsers} from "./hooks/UseUsers.js";

function App() {
    const {users, create} = useUsers();

  return (
    <>
      <Routes>
          <Route path="/" element={<NavBar/>}>
              <Route index element={<HomePage/>}/>
              <Route path="/user" element={<UserDataPage users={users}/>}/>
              <Route path="/create" element={<CreateNewUser create={create}/>}/>
              <Route path="/*" element={<HomePage/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
