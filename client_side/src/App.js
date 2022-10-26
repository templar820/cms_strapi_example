import './App.css';
import {useCallback, useEffect, useState} from "react";
import MarkdownEditor from "./components/MarkdownEditor/MarkdownEditor"

function App() {

  const [posts, setPosts] = useState([]);
  const [cards, setCard] = useState([]);

  const [locale, setLocale] = useState("ru-RU");


  const getPosts = useCallback(async () => {
    const res = await fetch("http://localhost:1337/api/posts?locale="+locale, {
      headers: {
        'Authorization': "Bearer fc3fe1b5a649e34717d1e1e5cf250b9460efa383cd1a2c0315a2c979e306c8c344efaa3d8218068a2daec46f61b62a32d294b402ee5e59efdac1e93286880ca98aa6654d90bf9505e71b04aeda484ae2a0dfb4225ca77ff65d36345bbdc2fd0fcc97a3b2e781ac33801def359b43bb3daca1ed5b84ab763a9d0a4d54d4cb423b",
        'Content-Type': 'application/json',
      },
    });
    const response = await res.json();
    const posts = response?.data || [];
    setPosts(posts);
  }, [locale])

  // const getCards = useCallback(async () => {
  //   const res = await fetch("http://localhost:1337/api/cards", {
  //     headers: {
  //       'Authorization': "Bearer fc3fe1b5a649e34717d1e1e5cf250b9460efa383cd1a2c0315a2c979e306c8c344efaa3d8218068a2daec46f61b62a32d294b402ee5e59efdac1e93286880ca98aa6654d90bf9505e71b04aeda484ae2a0dfb4225ca77ff65d36345bbdc2fd0fcc97a3b2e781ac33801def359b43bb3daca1ed5b84ab763a9d0a4d54d4cb423b",
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const response = await res.json();
  //   const posts = response?.data || [];
  //   setPosts(posts);
  // }, [locale])

  useEffect(() => {
    getPosts();
    // getCards();
  }, [locale])


  console.log(posts);
  return (
    <div>


      <button onClick={() => {
        setLocale(locale === "ru-RU" ? "en" : "ru-RU")
      }}>ChangeLocale
      </button>
      {posts &&
        posts.map((post) => (
          <MarkdownEditor
            value={post.attributes.page}
          />
        ))}
    </div>
  );
}

export default App;
