import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import UserDataPage from "./pages/UserDataPage.jsx";
import "./styles/globals.css"
import Layout from "./components/Layout.jsx";
import CreateNewUser from "./pages/CreateNewUser.jsx";
import {useUser} from "./hooks/UseUser.js";

function App() {
    const {users, create} = useUser();

  return (
    <>
      <Routes>
          <Route path="/" element={<Layout/>}>
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
