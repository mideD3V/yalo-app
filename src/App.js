import './App.css';


import Header from './components/nav/Header'
import Hero from './components/hero/Hero'
import Popular from './components/popular/Popular'
import Featured from './components/featured/Featured'
import List from './components/list/list'
import Category from './components/category/Category'
import Security from './components/security/Security'
import Equipment from './components/equipment/Equipment'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Popular />
      <Featured />
      <List /> 
      <Category />
      <Security />
      <Equipment/>
      <Footer />
      
    </div>
  );
}

export default App;
