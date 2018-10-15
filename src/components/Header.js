import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>
          cath
          <span className="ofThe">
            <span class="of">of</span> <span class="the">the</span>
          </span>
          day
        </h1>
        <h3 className="tagline">
          <span>Fresh Daily</span>
        </h3>
      </header>
    );
  }
}

export default Header;
