
import './App.css';
import PostsList from './components/PostsList';

// redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <PostsList />
    </Provider>
  );
}

export default App;
