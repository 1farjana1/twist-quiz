import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import ReactQuiz from './components/ReactQuiz/ReactQuiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <ReactQuiz></ReactQuiz>
        },
        {
          path: '/*',
          element: <div>
            <h1 className='text-danger mt-5 pt-5'>404</h1>
            <h1>OPPS!PAGE NOT FOUND</h1>
            <p>Sorry, the page you're looking for doesn't exist.if you <br />
              think something is broken,report a problem.</p>
            <Link to='/home'> <button className='btn btn-success rounded p-3'>RETURN HOME</button></Link>
          </div>,
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
