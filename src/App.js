import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Blog from "./components/Blog/Blog";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import { useTheme } from "./hooks/useTheme";
import EditBlog from "./components/EditBlog/EditBlog";
function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <ThemeSelector />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/create" exact>
          <Create />
        </Route>
        <Route path="/blog/:id" exact>
          <Blog />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/edit/:id" exact>
          <EditBlog />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
