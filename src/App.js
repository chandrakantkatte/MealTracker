
import './App.css';
  import BasicExample from './Tifinnavbar/navbar';
// import LoginSignUp from './component/LoginSingUp';
// import LoginSingUp from './component/LoginSingUp';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Ojuju:wght@200..800&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);


function App() {
  return (
    <>
    <BasicExample/>
    {/* <LoginSignUp/> */}
   
    
    </>
  );
}

export default App;
