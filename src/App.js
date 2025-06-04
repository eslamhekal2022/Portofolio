import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout/layout.jsx"; // تأكد أن هذا غير معلق
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {path:"/",element:<Home/>},
      {path:"/Portofolio",element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/projects",element:<Projects/>},
      {path:"/contact",element:<Contact/>},
    ],
  },
]);

export default function App() {
  return (
         <>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              toastClassName="custom-toast"
              bodyClassName="custom-toast-body"
            />
            <RouterProvider router={routers} />
         
         </>
  );
}
