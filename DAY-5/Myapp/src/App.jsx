import Login from './component/Login'
import Heading from './heading';
import AfterLogin from './component/AfterLogin';
function App() {
  let login = false;
  return (
    login ? <AfterLogin /> : <Login />
  )
};
export default App;
