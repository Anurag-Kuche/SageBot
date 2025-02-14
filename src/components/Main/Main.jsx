import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Main.css';
import { Context } from '../../context/context';

const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p className="logo">NeuraLink</p>
        <img className="user-icon" src={assets.user_icon} alt="User" />
      </div>
      

      <div className="main-container">
        {!showResult
        ?<>
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
        </>
        : <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ?<div className='loader'>
                <hr />
                <hr />
                <hr />
            </div>
            : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
           
          </div>
        </div>
        }
        <div className="greet">
          <p><span>Hello, Dev</span></p>
          <p>How can I assist you today?</p>
        </div>

        
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>onSent()} src= {assets.send_icon}alt="" />
            </div>
            <p className="bottom-info">
                Bot may display inaccurate info
            </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
