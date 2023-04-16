import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const calsData = [
    {
      key1: '(',
      key2: ')',
      key3: '%',
      key4: 'CE',
    },
    {
      key1: 7,
      key2: 8,
      key3: 9,
      key4: '/',
    },
    {
      key1: 4,
      key2: 5,
      key3: 6,
      key4: '*',
    },
    {
      key1: 1,
      key2: 2,
      key3: 3,
      key4: '-',
    },
    {
      key1: 0,
      key2: '.',
      key3: '=',
      key4: '+',
    }
  ]

  const onClickHandler =(e)=>{
    try{
      const value = e.target.textContent;
      if(value === 'CE'){
        setResult('');
        setError('');
      }
      else if(value === '='){
        setResult(eval(result).toString());
      }
      else{
        setResult(result.concat(value));
        setError('');
      }
    }
    catch(error){
      setError('You cannot use this Expression');
      console.log(error);
    }
    
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className='error'>
        <p>{error}</p>
      </div>
      <header className="App-header">
        <input className='resultScreen' value={result} type='text' placeholder='0' />
      </header>
      <div className='btn-area'>
        <table>
          <tbody>
            {
              calsData.map(item=>{
                return(
                  <tr key={item.key1}>
                    <td onClick={(e)=>onClickHandler(e)} >{item.key1}</td>
                    <td onClick={(e)=>onClickHandler(e)} >{item.key2}</td>
                    <td onClick={(e)=>onClickHandler(e)} >{item.key3}</td>
                    <td onClick={(e)=>onClickHandler(e)} >{item.key4}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
