import Header from './components/Header/Header';
import Title from './components/Title/Title';
import ServiceCards from './components/ServiceCards/ServiceCards';

import './App.css';

const App = () => {
  return (
    <div className="main">
      <Header />
      <Title />
      <ServiceCards />
    </div>
  )
}

export default App;
