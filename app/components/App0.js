import React from 'react';
//import ReactDOM from 'react-dom';
let current = '0';
export class App extends React.Component {
  calculate(value){
    //alert(event.currentTarget.value);
    //var value = event.currentTarget.value;
    if(value == 'C')
    {
      current = '0';
    }
    else if(value == '=')
    {
      current = eval(current);
    }
    else{
    if(current == '0')
    {
      current = value;
    }
    else{
      current = current + value;
    }
  }
  //alert("current "+current);
  document.getElementById('textfield').value = current;
  }
  render() {
    const values = [['7', '8', '9', '*'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['/', '0', 'C', '=']];
    const grid =  values.map(rows=>{
      const row = rows.map(cols=>{
        return (<td>
          <input type="button" value={cols} style={{width: '55px',height: '50px'}}  onClick={() => this.calculate(cols)}/>
          </td>)
      });
      return (<tr>{row}</tr>)
    });
    return (
      <div>
      <input type="text" style={{width: '230px',height: '50px'}} id="textfield"/>
      <table>{grid}</table>
      </div>
    );
  }
}
