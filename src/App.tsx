import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { BlogLayout } from "./layouts/BlogLayout";
import { BlogUserPostList } from "./components/BlogUserPostList";
import { BlogUserList } from "./components/BlogUserList";
import { BlogUserPostDetail } from "./components/BlogUserPostDetail";
import { RandomUsers } from "./components/RandomUsers";
import About from "./pages/About";

function App() {
  // const [show, setShow] = useState(false);
  // const [page, setPage] = useState("home");

  return (
    <>
      <h1>React App</h1>
      {/* <Test /> */}
      {/* <Count /> */}
      {/* <DataLoader /> */}
      {/* <SearchResults /> */}
      {/* <Timer /> */}
      {/* <button onClick={() => setShow((s) => !s)}>
        {show ? "Cacher" : "Afficher"}
      </button>
      {show && (
        <>
          <WindowSize />
        </>
      )} */}
      {/* <FormWithPersistence /> */}
      {/* <button onClick={() => setShow((s) => !s)}>
        {show ? "Cacher" : "Afficher"}
      </button>
      {show && (
        <>
          <UserList />
        </>
      )} */}
      {/* <UserList />
      <CreatePost /> */}
      {/* <PostList /> */}
      {/* <RandomUsers /> */}
      {/* Routing */}
      {/* <button onClick={() => setPage("home")}>Home</button>
      &nbsp;|&nbsp;
      <button onClick={() => setPage("about")}>About</button>
      {page === "home" && <Home />}
      {page === "about" && <About />} */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<RandomUsers />} />
      </Routes> */}
      {/* avec layout*/}
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<RandomUsers />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> */}
      {/* avec Bloglayout */}
      <Routes>
        <Route path="/" element={<BlogLayout />}>
        {/* <Route index element={<Home />} /> */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<RandomUsers />} />
          <Route index element={<BlogUserList />} />{" "}
          {/* AllPostList  Pattern : Fetch avec Search Params */}
          <Route path="/user/:userId" element={<BlogUserPostList />} />
          <Route
            path="/user/:userId/post/:postId"
            element={<BlogUserPostDetail />}
          />
          {/*Exemple Complet : Annuaire Utilisateurs
           */}
          {/* <Route path="/users" element={<AllUserList />} />
          <Route path="/users/:userId" element={<UserProfile />} />*/}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
