import './App.css';
import Search from './Components/Search';
import './Components/Css/ErrorPage.css';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import { store } from './reduxTools/store';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      {/* The <Provider> component provides the Redux store to its children */}
      <Search /> {/* Render the Search component */}
      <Outlet /> {/* Render the components related to React Router navigation */}
      <Footer /> {/* Render the Footer component */}
    </Provider>
  );
}

export default App;
