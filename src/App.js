import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Main from "./components/Main/Main";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Statics from "./components/Statics/Statics";
import TopicDetails from "./components/TopicDetails/TopicDetails";
import Topics from "./components/Topics/Topics";

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics></Topics>
      },
      {
        path: '/topics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics></Topics>
      },
      {
        path: '/topics/:Id',
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
        },
        element: <TopicDetails></TopicDetails>
      },
      {
        path: '/statictis',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
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
