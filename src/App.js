import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { wores } from './words'


function App() {
  return (
    <div className="layout">
      <Header/>
      <main>
        {wores.content}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
