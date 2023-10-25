import './App.css';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserPages from './pages/User/UserPages';
import VendorPages from './pages/Vendor/VendorPages';


const App = () => (
  <BrowserRouter>
    {/* <Header/> */}

    {/* <main> */}
    <Routes>
      <Route path='/' element={<LandingPage />} />


      <Route path='/user/*' element={<UserPages />} />
      <Route path='/vendor/*' element={<VendorPages />} />

      {/* <Route path='/login' element={<Login></Login>} />
  <Route path='/signup' element={<Signup></Signup>} /> */}
      {/* <Route path='/logged' element={<Logged></Logged>} />
  <Route path='/booking' element={<UserApplication></UserApplication>} /> */}

    </Routes>

    {/* <Routes>
  <Route path='/adminlogin' element={<AdminLogin/>}></Route>
  <Route path='/admin' element={<AdminSideBar/>}></Route>
  <Route path='/slot' element={<SlotPage/>}></Route>
  </Routes> */}

    {/* // </main> */}

  </BrowserRouter>
)


export default App;
