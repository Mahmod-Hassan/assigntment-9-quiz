import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Main from "./components/Main/Main";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Statics from "./components/Statics/Statics";
import Topics from "./components/Topics/Topics";

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Topics></Topics>
      },
      {
        path: '/statictis',
        element: <Statics></Statics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <PageNotFound></PageNotFound>
      }
    ]
  }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
