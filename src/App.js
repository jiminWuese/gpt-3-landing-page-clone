import './App.scss';

import { Blog, Features, Footer, Header, MoreUiUx, Possibility } from './containers';
import { Navbar, Cta, Brand } from './components';

//Assembling all components to render in index.js.
function App() {
  return ( 
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <MoreUiUx />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
