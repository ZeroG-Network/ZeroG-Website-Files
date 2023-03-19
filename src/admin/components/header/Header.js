import React from 'react';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Landing Page</a></li>
          <li><a href="/">Forum Landing</a></li>
          <li><a href="/games">Games</a></li>
          <li><a href="/forum">Forum</a></li>
          <li><LoginButton /></li>
          <li><RegisterButton /></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
