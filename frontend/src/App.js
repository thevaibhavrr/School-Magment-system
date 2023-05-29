import './App.css';
import FirstPage from './component/Login/FirstPage';
import Navbar from './component/SuperAdmin/Navbar/Navbar';
import {Route , Routes} from "react-router-dom"
import SchoolProfile from './component/SuperAdmin/Schools/schoolProfile/SchoolProfile';
import Schools from './component/SuperAdmin/Schools/Schools';
import Dashboard from './component/SuperAdmin/DeshBord/Deshboard';
import AddSchool from './component/SuperAdmin/AddSchool/AddSchool';
import SchoolDetails from './component/SuperAdmin/Schools/schoolProfile2/SchoolProfille2';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/p" element={<SchoolDetails />} />
        <Route path="/addschool" element={<AddSchool />} />
        <Route path="/login" element={<FirstPage />} />
        <Route path="/schoollist" element={<Schools />} />
        <Route path="/schoollprofile" element={<SchoolProfile />} />
      </Routes>
    </>
  );
}

export default App;
