import './Leftpanel.css';

function Leftpanel() {
  const sub=[
    {id:1,logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true",name:'Nadir on the go',activestatus:'.'},
    {id:2,logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",name:'Coke Studio Bangla',activestatus:'.'},
    {id:3,logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",name:'MKBHD',activestatus:''},
    {id:4,logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",name:'Figma',activestatus:'.'},
    {id:5,logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",name:'Atc',activestatus:''},
    {id:6,logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",name:'Alux.com',activestatus:'.'},
  ]
  return (
    <div className="leftmain">
      <div className="main">
        <div className="img">
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true"
            alt="Hamburger Menu"
          />
        </div>
        <div className="logo">
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
            alt="YouTube Logo"
            height={'25px'}
            width={'100px'}
            className="imglogo"
          />
        </div>
      </div>

      <div className="hess">
        <div className="home">
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true"
            alt="Home Icon"
            className="logoh"
          />
          <p className="home-txt">Home</p>
        </div>
        <div className="explore">
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true"
            alt="Explore Icon"
            className="logoh"
          />
          <p className="home-txt">Explore</p>
        </div>
        <div className="explore">
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true"
            alt="Shorts Icon"
            className="logoh"
          />
          <p className="home-txt">Shorts</p>
        </div>
      </div>

      <div className="explores">
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true"
          alt="Subscriptions Icon"
          className="logoh"
        />
        <p className="home-txt">Subscriptions</p>
      </div>
      <div className="line"></div>
      <div className="explores">
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true"
          alt="Library Icon"
          className="logoh"
        />
        <p className="home-txt">Library</p>
      </div>
      <div className="explores">
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true"
          alt="Library Icon"
          className="logoh"
        />
        <p className="home-txt">History</p>
      </div>
      <div className="explores">
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true  "
          alt="Library Icon"
          className="logoh"
        />
        <p className="home-txt">Your Videos</p>
      </div>
      <div className="explores">
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true  "
          alt="Library Icon"
          className="logoh"
        />
        <p className="home-txt">Watch Later</p>
      </div>
      <div className="explores">
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true   "
          alt="Library Icon"
          className="logoh"
        />
        <p className="home-txt">Liked Videos</p>
      </div>
      <div className="explores">
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true "
          alt="Library Icon"
          className="logoh"
        />
        <p className="home-txt">Liked Videos</p>
      </div>
      <div className="line"></div>
      <div className="subscriptions">   
        <div className="text">Subscriptions</div>
        {sub.map((detail) => (
          <div key={detail.id} className="sub">
            <img src={detail.logo} alt="Profile Pic" className="subpic" height={'40px'} width={'40px'} />
            <p className="subtxt">{detail.name}</p>
            <div className="activestatus">{detail.activestatus}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leftpanel;
