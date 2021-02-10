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
      <img src="https://i.pinimg.com/originals/5c/9f/75/5c9f75c47fa0bfc23132858a175485b8.jpg" alt="Cudi bday" width="185" height="180"></img> 
      <img src="https://i.ytimg.com/vi/1u8rIx65QgA/maxresdefault.jpg" alt="Garden Song" width="320" height="180"></img>
      <img src="https://attachments.office.net/owa/haowens%40email.unc.edu/service.svc/s/GetAttachmentThumbnail?id=AAMkADBjMWIxZmM2LTQ3ZGUtNDdiZi1hOGY4LWVlN2FmNWQyN2E3OABGAAAAAAAqE60N0smwSKLNpOyAN1M0BwAg8nPrzhusTY5fJLwg%2FWIPAAAAAAEMAAAg8nPrzhusTY5fJLwg%2FWIPAAC9P113AAABEgAQADPDQfNp4GBLqZH4CfJMF1A%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjMwODE3OUNFNUY0QjUyRTc4QjJEQjg5NjZCQUY0RUNDMzcyN0FFRUUiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJNSUY1emw5TFV1ZUxMYmlXYTY5T3pEY25ydTQifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiZWEyMmU0ZTI2Y2UzNGFmZmE3NzVmNWU3MDZmOTQzMWYiLCJzaWduaW5fc3RhdGUiOiJbXCJpbmtub3dubnR3a1wiLFwia21zaVwiXSIsInZlciI6IkV4Y2hhbmdlLkNhbGxiYWNrLlYxIiwiYXBwY3R4c2VuZGVyIjoiT3dhRG93bmxvYWRANThiM2Q1NGYtMTZjOS00MmQzLWFmMDgtMWZjYWJkMDk1NjY2IiwiaXNzcmluZyI6IldXIiwiYXBwY3R4Ijoie1wibXNleGNocHJvdFwiOlwib3dhXCIsXCJwdWlkXCI6XCIxMTUzODAxMTE2NDY1MTg3MTk1XCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIixcIm9pZFwiOlwiNGQ4ZDcxZDctOTgyZC00ZjRlLThjZDYtNmJmMTk2NmIwOWVjXCIsXCJwcmltYXJ5c2lkXCI6XCJTLTEtNS0yMS0zNTkwODQzODE4LTMwMDQ5NjAxNjMtNDIzMzM2NjMwOS0xMzExNDQ0MFwifSIsIm5iZiI6MTYxMjkyMDU5MCwiZXhwIjoxNjEyOTIxMTkwLCJpc3MiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDBANThiM2Q1NGYtMTZjOS00MmQzLWFmMDgtMWZjYWJkMDk1NjY2IiwiYXVkIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2F0dGFjaG1lbnRzLm9mZmljZS5uZXRANThiM2Q1NGYtMTZjOS00MmQzLWFmMDgtMWZjYWJkMDk1NjY2IiwiaGFwcCI6Im93YSJ9.P5UCyvHZtr2EZeDaIXN3R4y_LIyV2C3LuKPzCJ9UMvf1uwukFVkyJ89YC3kRxem7FiSl8ZX9BukHQ-n8KaScY-Qe2ByhnyqvRG4rMHfFOGkEQ3lqOV_SbMkuuDj4PiEnV07XQc6gl2hagmDeutQnNq1Z7u2EeYOZUtSNZbnRPuohR-k8XJhmsPv8kcfGhMZO56tPMs1vYC742LI-aiTUmgIhwGO8I1x2TFGwMnlXkPDXdCTf_loYh5HMaSAKJLURXA-8hC1PhvJ0c8uYQJHvOfvIXJAurI2PL9qYhpdCa_PyWynGG7MVcr3aEwuVrFEvjfkBIjIfadbEYaUWQBcCdw&X-OWA-CANARY=rpl5TGIqi0uG72LTXFLqi_AsfJ5jzdgYdO-T8otnI3zPGSeSobzSjU4A4Hy7Y5l8j1OtLnn8LGo.&owa=outlook.office365.com&scriptVer=20210201003.13&animation=true" height="180"></img>
      <img src="https://attachments.office.net/owa/haowens%40email.unc.edu/service.svc/s/GetAttachmentThumbnail?id=AAMkADBjMWIxZmM2LTQ3ZGUtNDdiZi1hOGY4LWVlN2FmNWQyN2E3OABGAAAAAAAqE60N0smwSKLNpOyAN1M0BwAg8nPrzhusTY5fJLwg%2FWIPAAAAAAEMAAAg8nPrzhusTY5fJLwg%2FWIPAAC9P112AAABEgAQAC%2F9mvjGytpOma2UyxotaIM%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjMwODE3OUNFNUY0QjUyRTc4QjJEQjg5NjZCQUY0RUNDMzcyN0FFRUUiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJNSUY1emw5TFV1ZUxMYmlXYTY5T3pEY25ydTQifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiZWEyMmU0ZTI2Y2UzNGFmZmE3NzVmNWU3MDZmOTQzMWYiLCJzaWduaW5fc3RhdGUiOiJbXCJpbmtub3dubnR3a1wiLFwia21zaVwiXSIsInZlciI6IkV4Y2hhbmdlLkNhbGxiYWNrLlYxIiwiYXBwY3R4c2VuZGVyIjoiT3dhRG93bmxvYWRANThiM2Q1NGYtMTZjOS00MmQzLWFmMDgtMWZjYWJkMDk1NjY2IiwiaXNzcmluZyI6IldXIiwiYXBwY3R4Ijoie1wibXNleGNocHJvdFwiOlwib3dhXCIsXCJwdWlkXCI6XCIxMTUzODAxMTE2NDY1MTg3MTk1XCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIixcIm9pZFwiOlwiNGQ4ZDcxZDctOTgyZC00ZjRlLThjZDYtNmJmMTk2NmIwOWVjXCIsXCJwcmltYXJ5c2lkXCI6XCJTLTEtNS0yMS0zNTkwODQzODE4LTMwMDQ5NjAxNjMtNDIzMzM2NjMwOS0xMzExNDQ0MFwifSIsIm5iZiI6MTYxMjkyMDU5MCwiZXhwIjoxNjEyOTIxMTkwLCJpc3MiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDBANThiM2Q1NGYtMTZjOS00MmQzLWFmMDgtMWZjYWJkMDk1NjY2IiwiYXVkIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2F0dGFjaG1lbnRzLm9mZmljZS5uZXRANThiM2Q1NGYtMTZjOS00MmQzLWFmMDgtMWZjYWJkMDk1NjY2IiwiaGFwcCI6Im93YSJ9.P5UCyvHZtr2EZeDaIXN3R4y_LIyV2C3LuKPzCJ9UMvf1uwukFVkyJ89YC3kRxem7FiSl8ZX9BukHQ-n8KaScY-Qe2ByhnyqvRG4rMHfFOGkEQ3lqOV_SbMkuuDj4PiEnV07XQc6gl2hagmDeutQnNq1Z7u2EeYOZUtSNZbnRPuohR-k8XJhmsPv8kcfGhMZO56tPMs1vYC742LI-aiTUmgIhwGO8I1x2TFGwMnlXkPDXdCTf_loYh5HMaSAKJLURXA-8hC1PhvJ0c8uYQJHvOfvIXJAurI2PL9qYhpdCa_PyWynGG7MVcr3aEwuVrFEvjfkBIjIfadbEYaUWQBcCdw&X-OWA-CANARY=83rXjeDFZ0CIZ66qdvjc5QBW6mRjzdgYZJuN_0mHQgaCEDvNeOXeI3AUL3_vqagli3gDIjVUcu0.&owa=outlook.office365.com&scriptVer=20210201003.13&animation=true" height="180"></img>

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
