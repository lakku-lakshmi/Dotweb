
import { GoogleLogin } from '@react-oauth/google';
import {Login2} from './Screens/Auth/Login2';
import {Login} from './Screens/Auth/Login';
import {TableDetails} from './Screens/Auth/TableDetails';
import { Route, Routes } from "react-router-dom";

function App() {
//   const responseMessage = (response) => {
//     console.log(response);

// };
// const errorMessage = (error) => {
//     console.log(error);
// };
  return (
    <Routes>
    <Route path="/screen1" element={<Login />} />
    <Route path="/screen2" element={<Login2 />} />
    <Route path="screen2/fetchDetails" element={<TableDetails />} />
    </Routes>
  );
}

export default App;
