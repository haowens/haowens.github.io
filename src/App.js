// import { Header, Footer } from "./components";
import ReactMarkdown from "react-markdown";
import { lesson_one } from "./data/markdown";

// <div id="content">
//   <ReactMarkdown source={lesson_one} />
// </div>

const App = () => {
  return (
    <div className="home">
      {/* <Header /> */}
      
      <h2>pictures that make me happy:</h2>
      <img src="https://i.pinimg.com/originals/5c/9f/75/5c9f75c47fa0bfc23132858a175485b8.jpg" alt="Cudi bday" width="185" height="180"></img> 
      <img src="https://i.ytimg.com/vi/1u8rIx65QgA/maxresdefault.jpg" alt="Garden Song" width="320" height="180"></img>

      <h2>websites I think are cool:</h2>
      <ol>
        <li>
          <a href="https://www.ashten.studio/about">bestpholios 1</a>
        </li>
        <li>
          <a href="https://www.joshuacitarella.com">Joshua Citarella</a>
        </li>
      </ol>

      <a href="https://open.spotify.com/playlist/0Zas60ZMF5IlDkFVoUZdlF?si=ystcRI1vQ9qzTW4mELgf4A"></a>
    

      {/* <Footer /> */}
    </div>
  );
};

export default App;
