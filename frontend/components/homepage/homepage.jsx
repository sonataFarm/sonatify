import React from 'react';
import LeftSidebar from './left-sidebar';
import MainContent from './main-content';
import RightSidebar from './right-sidebar';
import PlayerContainer from '../player/player-container';
import { Route } from 'react-router-dom';
import HomepageModals from '../modals/homepage-modals';

const Homepage = props => {
  return (
    <div className="container homepage">
      <div className="row content">
        <div className="content-area col-4 col-md-3 left-sidebar-container"><LeftSidebar /></div>
        <div className="content-area col-8 col-md-6 main-content"><MainContent logout={props.logout}/></div>
        <div className="content-area col"><RightSidebar /></div>
      </div>
      <PlayerContainer />
      <HomepageModals />
    </div>
  );
};

export default Homepage;
