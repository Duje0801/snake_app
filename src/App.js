import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
import { AppContext } from "./context/Context";
import LogIn from "./pages/LogIn";
import MainMenu from "./pages/MainMenu";
import Game from "./pages/Game";
import Records from "./pages/Records";
import Settings from "./pages/Settings";
import Controls from "./pages/Controls";
import ChangeUsername from "./pages/ChangeUsername";
import "./styles/App.css";

function App() {
  const { userName } = useContext(AppContext);

  let router = null;

  // Redirect from another pages in game if username don't exist
  if (!userName) {
    router = createBrowserRouter([
      {
        path: routes.logIn,
        element: <LogIn />,
      },
      {
        path: routes.error,
        element: <LogIn />,
      },
    ]);
  } else {
    router = createBrowserRouter([
      {
        path: routes.logIn,
        element: <LogIn />,
      },
      {
        path: routes.mainMenu,
        element: <MainMenu />,
      },
      {
        path: routes.game,
        element: <Game />,
      },
      {
        path: routes.records,
        element: <Records />,
      },
      {
        path: routes.settings,
        element: <Settings />,
      },
      {
        path: routes.controls,
        element: <Controls />,
      },
      {
        path: routes.changeUserName,
        element: <ChangeUsername />,
      },
      {
        path: routes.error,
        element: <LogIn />,
      },
    ]);
  }

  return <RouterProvider router={router} />;
}

export default App;
