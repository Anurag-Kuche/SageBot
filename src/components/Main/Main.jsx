import { assets } from '../../assets/assets';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p className="logo">Gemini</p>
        <img className="user-icon" src={assets.user_icon} alt="User" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Botter</span></p>
          <p>How can I assist you today?</p>
        </div>

        <div className="cards">
          {[
            { text: "Suggest places to visit in Pune", icon: assets.compass_icon },
            { text: "Creative ideas for a project", icon: assets.bulb_icon },
            { text: "Write a short story", icon: assets.message_icon },
            { text: "Generate useful code snippets", icon: assets.code_icon }
          ].map((item, index) => (
            <div key={index} className="card">
              <p>{item.text}</p>
              <img src={item.icon} alt="Icon" />
            </div>
          ))}
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
