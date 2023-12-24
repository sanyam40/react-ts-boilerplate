import './App.css';
import Form from './components/Form';
import HookDemo from './components/HookDemo';
import Objects from './components/Objects';
import Props from './components/Props';
function App() {
  return (
    <>
    <Props text='hello' onClick={()=>alert('okay')}/>
    <Props text='world'/>
    <HookDemo/>
    <Objects/>
    <Form/>
    </>
  );
}

export default App;
