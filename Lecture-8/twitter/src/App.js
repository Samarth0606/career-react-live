import {Outlet , createBrowserRouter , RouterProvider} from 'react-router-dom';
import './App.css';
import Navbar from './elements/navbar/Navbar';
import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Signin from './pages/signin/Signin';



const Layout = () => {
  return (
    <div className='md:w-8/12 mx-auto'>
      <Navbar />
      <Outlet></Outlet>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/profile/:id',
        element: <Profile />
      },
      {
        path:'/explore',
        element: <Explore />
      },
      {
        path:'signin',
        element: <Signin />
      },
      {
        path:'signout',
        element: <Signin />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;