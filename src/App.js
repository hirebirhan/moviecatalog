import './App.css';
import Movies from './shared/components/list/Movies';
import Search from './shared/components/searchForm/search';
import Header from './shared/components/toolbar/header';

function App() {

  return (
    <div >
      <div>
        <Header />
      </div>
      <div className='container'>

        <Movies />
      </div>


    </div >
  );
}

export default App;
