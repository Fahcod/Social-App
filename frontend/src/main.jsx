
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider, useLocation} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import SocialContextProvider from './context/SocialContext';
import {Provider} from "react-redux";
import { store } from './store/store';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/ProfilePage/Pages/Home';
import Gallery from './pages/ProfilePage/Pages/Gallery';
import ChatPage from './pages/ChatPage/ChatPage';
import OtherPage from './pages/OtherPage/OtherPage';
import OtherHome from "./pages/OtherPage/pages/Home";
import LoaderCont from './components/LoaderCont/LoaderCont';
import WatchPage from './pages/WatchPage/WatchPage';
import Communities from './pages/Communities/Communities';


const router = createBrowserRouter([
  {
    path:"/",
    index:true,
    element:<LoaderCont/>
  },
  {
    path:"/home",
    element:<HomePage/>
  },{
    path:"/me",
    element:<ProfilePage/>,
    children:[
      {
        path:"/me/all",
        index:true,
        element:<Home/>
      },{
        path:"/me/gallery",
        element:<Gallery/>
      }
    ]
  },
  {
    path:"/signup",
    element:<Signup/>
  },{
    path:"/communities",
    element:<Communities/>
  },
  {
    path:"/login",
    element:<Login/>
  },{
   path:"/videos",
   element:<WatchPage/>
  },
  {
    path:"/messaging",
    element:<ChatPage/>
  },
  {
  path:"/user/:userId",
  element:<OtherPage/>,
  children:[
    {
      path:"/user/:userId/",
      element:<OtherHome/>
    }
  ]
}
]);

const App = ()=>{
  return(
    <>
  <Provider store={store}>
  <SocialContextProvider>
  <ToastContainer/>
  <RouterProvider router={router}/>
  </SocialContextProvider>
  </Provider>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <App/>
)
