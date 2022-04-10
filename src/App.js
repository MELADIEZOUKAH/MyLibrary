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
import Camical from './Collage_department/Camical';
import Profial from './foother.js/Profial';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Component/GlobalStyled';
import { lightTheme, darkTheme  } from './Component/Themes';
import {useDarkMode} from './Component/useDarkMode'

function App() {
  const [theme, themeToggler] = useDarkMode();
 
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  return (
    
    <Router>
        <div className='App'>
        <Switch>
        <ThemeProvider theme={themeMode}>
            <GlobalStyles/>
          <Route exact path='/'>
            <Header/>
            <Search placeholder='أدخل اسم المادة أو مؤلف الكتاب' data={books_data}/>
            <Books/>
            <Profial/>
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
        
          <Route path='/camical_ingineering'>
            <Camical />
          </Route>
          
          </ThemeProvider>
        </Switch>
       
        <button onClick={themeToggler}  className="dark_mode">{theme ==='dark'  ? '☾' : '☀'} </button>
      </div>
    </Router>  
  );
}

export default App;
