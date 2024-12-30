import RouterNav from './Router';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import React from 'react';
import MessageDisplay from './components/MessageDisplay';


function App() {
  return (
    <>
    <Header/>
    <MessageDisplay/>
      <RouterNav/>
    <Footer/>
    </>
  );
}

export default App;
