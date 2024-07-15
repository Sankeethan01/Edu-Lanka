import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className="hero container">
         <div className="hero-text">
            <h1>We Ensure better Studies</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque facilis praesentium in reiciendis recusandae ea necessitatibus error repellendus, voluptatum pariatur saepe quasi, cumque nam eligendi laborum fugiat, dolor sed dolore.</p>
            <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
         </div>
    </div>
  )
}

export default Hero