import { Routes, Route } from 'react-router-dom';
import SignUp from '../Pages/Signup';
import SignIn from '../Pages/SignIn';
import Dashboard from '../Pages/Dashboard';
import Details from '../Pages/Details';
import CartScreen from '../Pages/CartScreen';
import { ToastContainer ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AppRouter() {
  return (
    <>
    <Routes>


      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/cart' element={<CartScreen />} />


    </Routes>

  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
    />
    </>
  )
}



export default AppRouter;