import './Searchbar.css';

const Navbar = () => {
  const menu = [
    { id: 1, text: 'All' },
    { id: 2, text: 'Cook Studio' },
    { id: 3, text: 'Ux' },
    { id: 4, text: 'Case Study' },
    { id: 5, text: 'Music' },
    { id: 6, text: 'Bangla Lofi' },
    { id: 7, text: 'Tour' },
    { id: 8, text: 'Saintmartin' },
    { id: 9, text: 'Tech' },
    { id: 10, text: 'iPhone 13' },
    { id: 11, text: 'User Interface Design' },
  ];

  return (
    <>
      <div>
        <div className="navbar">
          {/* Search bar */}
          <div className="navbar-search">
            <input type="text" placeholder="Search" className="search-input" />
            <button
              className="search-btn"
              style={{
                height: '60px',
                width: '70px',
                marginRight: '10px',
              }}
            >
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                alt="Search"
              />
            </button>
            <button
              className="mic-btn"
              style={{
                height: '60px',
                width: '50px',
                marginLeft: '10px',
                marginRight: '350px',
              }}
            >
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
                alt="Mic"
              />
            </button>
          </div>

          {/* Right-side icons */}
          <div className="navbar-icons">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
              alt="Upload"
              className="navbar-icon"
            />
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
              alt="Menu"
              className="navbar-icon"
            />
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
              alt="Notifications"
              className="navbar-icon"
            />
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true"
              alt="Profile"
              className="navbar-icon profile"
            />
          </div>
        </div>

        <hr
          style={{
            marginTop: '-90vh',
          }}
        />
        <div className="trending">
          {menu.map((details) => (
            <div key={details.id} className="trending-item">
              <div>{details.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
