import React,{useState} from 'react';
import './App.css';
import {AiOutlineGithub,AiOutlineTwitter} from 'react-icons/ai'
function App() {
  const [initialprice, setInitialprice] = useState(0)
  const [stocknum, setStocknum] = useState(0)
  const [currentprice, setCurrentprice] = useState(0)
  const [perc,setPerc] = useState(0)
  const [outcome,setOutcome] = useState(0)
  const checkHandler = ()=>{
    let num = 0;
    let percentage = 0;
    let  fractionalpercentage = 0;
     if(initialprice !== 0 && stocknum !== 0 && currentprice !== 0){
       num =  (currentprice-initialprice)*stocknum
       fractionalpercentage = ((currentprice-initialprice)/initialprice)*100
       percentage = fractionalpercentage.toFixed(2)
       setOutcome(num)
       setPerc(percentage)
     }else{
       alert('Please enter a value')
     }
  }

  return (
    <div className="App">
     <div className="heading"><h3>Stock Profit or Loss calculator</h3></div>
     <div className="userinputarea">
       
       <input type="number" 
       onChange={(e)=>{setInitialprice(e.target.value)}}
       placeholder="Enter Initial stock price"/>
       <input type="number" 
       onChange={(e)=>{setStocknum(e.target.value)}}
       placeholder="Enter quantity of stocks you bought"/>
       <input type="number" 
       onChange={(e)=>{setCurrentprice(e.target.value)}}
       placeholder="Enter Current price"/>
       <button onClick={()=>{checkHandler()}}>Calculate</button>
     </div>
    <div className="result">
    {
       (outcome > 0)?<><h3>You made a Profit of {outcome} and that is {perc}% gain </h3></>:
       (outcome < 0)?<><h3>You made a Loss of {outcome * -1} and that is {perc * -1}% Loss </h3></>:
       <></>
     }
    </div>
    <div className="footer">
      <a href="https://github.com/devAmlan/stock-calculator-mark14" target="_blank" rel="noreferrer"><h3>Github Repo <AiOutlineGithub style={{fontSize:"30px"}}/></h3></a>
      <a href="https://twitter.com/AmlanjyotiSaho5" target="_blank" rel="noreferrer"><h3>Connect with me <AiOutlineTwitter style={{fontSize:"30px"}}/></h3></a>
    </div>
    </div>
  );
}

export default App;
