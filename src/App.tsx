import './App.css';
import Button from './components/button/button';

function App() {
  return (
    <div>
      <Button type='primary' onClick={() => { console.log('点击'); }}>内 容</Button>
    </div>
  );
}

export default App;
