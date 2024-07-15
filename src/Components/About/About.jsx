import "./About.css";
import about_image from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

// eslint-disable-next-line react/prop-types
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_image} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Uplifting The Leaders of Tomorrow</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab animi
          quas quos autem voluptates cupiditate assumenda. Nisi ex laborum ab
          pariatur in debitis quia aperiam quisquam iure obcaecati. Cumque
          corrupti odit dignissimos autem porro blanditiis magni est minus,
          maxime nulla nesciunt adipisci officia debitis excepturi magnam saepe
          velit iure?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet
          veniam porro error, maiores aspernatur rerum consequuntur deserunt.
          Quia veniam consequuntur fuga tempora error commodi distinctio
          consequatur harum ipsa suscipit accusantium ab nostrum sequi autem
          iusto laborum nam rem molestias, officiis, dolores a perspiciatis
          provident. Veritatis eligendi impedit aperiam nemo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          blanditiis dolores fuga obcaecati hic, ipsam laudantium aliquid nobis
          quis nam eos ut iure nulla debitis nesciunt asperiores, odio
          consequatur provident sit. Doloremque quae delectus inventore id
          reiciendis dolorum earum, eum repudiandae exercitationem veritatis
          dicta illo. Quos distinctio tempore deserunt voluptate!
        </p>
      </div>
    </div>
  );
};

export default About;
