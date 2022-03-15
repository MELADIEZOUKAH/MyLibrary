import './App.css';
import Books from './Books';
import Header from './Header/Header';
import Search from './Search/Search';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import books_data from './books.json'
import Electrical from './Collage_department/Electrical';
import Mecanical from './Collage_department/Mecanical';
import Architecture from './Collage_department/Architecture';
import Civil from './Collage_department/Civil';
import Petroleum from './Collage_department/Petroleum';
import Camical from './Collage_department/Camical';
import Profial from './foother.js/Profial'

function App() {
    
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Header/>
            <Search placeholder='أدخل اسم المادة' data={books_data}/>
            <Books/>
          </Route>
        
          <Route path='/electrical_engineering'>
            <Electrical/>
          </Route>
        
          <Route path='/mecanical_engineering'>
            
            <Mecanical/>
          </Route>
        
          <Route path='/architecture'>
            
            <Architecture/>
          </Route>
        
          <Route path='/civil_ingineering'>
            
            <Civil/>
          </Route>
        
          <Route path='/petroleum_engineering'>
            
            <Petroleum/>
          </Route>
        
          <Route path='/camical_ingineering'>
            
            <Camical />
          </Route>
          
        </Switch>
         
      </div>
    </Router>
  );
}

export default App;
