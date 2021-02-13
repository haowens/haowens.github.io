// import { Header, Footer } from "./components";
import ReactMarkdown from "react-markdown";
import { lesson_one } from "./data/markdown";

// <div id="content">
//   <ReactMarkdown source={lesson_one} />
// </div>
// style={{padding: "3px"}}

const App = () => {
  return (
    <div className="home">
      {/* <Header /> */}
      
      <h2>pictures that make me happy:</h2>
      <img src="https://i.pinimg.com/originals/5c/9f/75/5c9f75c47fa0bfc23132858a175485b8.jpg" alt="Cudi bday" height="250"></img> 
      <img src="https://i.ytimg.com/vi/1u8rIx65QgA/maxresdefault.jpg" alt="Garden Song" height="250"></img>
    
      <h2>websites I think are cool:</h2>
      <ol>
        <li>
          <a href="https://www.ashten.studio/" target="_blank">bestpholios 1</a>
        </li>
        <li>
          <a href="https://winonanasser.myportfolio.com/work" target="_blank">bestpholios 2</a>
        </li>
        <li>
          <a href="http://joshuacitarella.com/" target="_blank">Joshua Citarella</a>
        </li>
      </ol>

      <p></p>
      
      <h2>about me:</h2>
      <p>I'm a freshman at UNC, I'm from Chicago, and I think I want to study Computer Science and Journalism but I'm not sure. I love listening to music, going for long bike rides, staying up late, and rewatching my favorite movies. I wish I was better at coding than I am but I had a terrible experience in a computer science class my sophomore year of high school that scared me away from comp sci until Kris Jordan showed me I actually loved it and it was the perfect way to combine my love of STEM with my love of pop culture. Also please don't follow either of my social media accounts that I put on here I don't really keep them up I just figured it was the kind of thing people put on their websites. In an ideal world where I self-actualize they won't be embarrassing.</p>

      <h2>articles I've written:</h2>
      <p>[when they get published in like a month lol]</p>

      <p style={{padding: "20px"}}></p>


      <img src="https://media.pitchfork.com/photos/5929c10fabf31b7dc7156571/1:1/w_600/a1b6e2d7.jpg" height="129" width="129"></img>
      <img src="https://media.pitchfork.com/photos/5929b5b7ea9e61561daa6e51/1:1/w_320/310698eb.jpg" height="129" width="129"></img>
      <img src="https://media.pitchfork.com/photos/59c1470d62f8b05385d543e1/1:1/w_600/aromanticism_mosessumney.jpg" height="129" width="129"></img>
      <img src="https://upload.wikimedia.org/wikipedia/en/9/96/The_Weeknd_-_Trilogy.png" height="129" width="129"></img>
      <img src="https://media.pitchfork.com/photos/5f0880d3100081be06438538/1:1/w_600/%20Is%20It%20Selfish%20If%20We%20Talk%20About%20Me%20Again_Kacy%20Hill.jpg" height="129" width="129"></img>
      <img src="https://media.pitchfork.com/photos/6011c74fdeb5d6849bf39c80/1:1/w_600/Arlo-Parks.jpg" height="129" width="129"></img>
      <img src="https://media.pitchfork.com/photos/5fd1137268b85efd391b5a45/1:1/w_320/Kid-Cudi.jpg" height="129" width="129"></img>
      <img src="https://img.discogs.com/1x_r1509n1p123si9byzck1GVn8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-7835074-1525143948-2800.jpeg.jpg" height="129" width="129"></img>
      <img src="https://media.pitchfork.com/photos/5f4e7232b28ee3b1b5f7be26/1:1/w_600/the%20baby_samia.jpg" height="129" width="129"></img>
      <img src="https://ourculturemag.com/wp-content/uploads/2020/08/333B7425-1-scaled.jpg" height="129" width="129"></img>

      <p></p>
      <a href="https://open.spotify.com/playlist/0Zas60ZMF5IlDkFVoUZdlF?si=FcUvQVQ0TEy0svzGWKJogw" target="_blank">my spotify playlist for this semester</a>
      

      {/* <Footer /> */}
    </div>
  );
};

export default App;
