import Text from './components/custom-text/text.js'
import Button from './components/button/button.js'
import './App.css'

function App() {
  return (
    <>
    <div className='card'>
      <Text title='ESSE É UM PARÁGRAFO COLORIDO ESCRITO EM MAIÚSCULO' />

      <Button label="Baixar CV" />
    </div>
    </>
  );
}

export default App;
