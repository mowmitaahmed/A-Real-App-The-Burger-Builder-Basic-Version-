import logo from './logo.svg';
import './App.css';
import Layout from './components/Layouts/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";


function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
