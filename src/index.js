import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
//Youtube API Key
const API_KEY = "AIzaSyAQRxb_BC8Y9k_SklOI-naacRvYAKRfQVo";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App /> , document.querySelector('.container'));
