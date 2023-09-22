import Header from './components/Header/Header.js';
import Trustees from './components/Trustees/Trustees.js';
import HeroFolder from './components/HeroFolder/HeroFolder.js';
import Product from './components/Product/Product.js';
import Quote from './components/Quote/Quote.js';
import Newsletter from './components/Newsletter/Newsletter.js';
import Footer from './components/Footer/Footer.js';
function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <br />
      <HeroFolder />
      <Trustees />
      <Product />
      <Quote />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
