import React from 'react';
let current = '0';
class TextField extends React.Component{
  displayResult(result){
    document.getElementById('textfield').value = result;
  }
  render(){
    return (<input type="text" style={{width: '230px',height: '50px'}} id="textfield"/>);
  }
}

class Calculation extends React.Component{
  calculate(value){
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
  document.getElementById('textfield').value = current;
  //this.props.value.displayResult(current);
  }
  render(){
    return null;
  }
}

class Buttons extends React.Component{
  render() {
    const values = [['7', '8', '9', '*'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['/', '0', 'C', '=']];
    const grid =  values.map(rows=>{
      const row = rows.map(cols=>{
      //debugger;
        return (<td>
          <input type="button" value={cols} style={{width: '55px',height: '50px'}} onClick={() => {this.props.msg.calculate(cols);}}/>
          </td>)
      });
      return (<tr>{row}</tr>)
    });
    return (
      <table>{grid}</table>
    );
  }
}

export class App extends React.Component {
render(){
    return (
      <div>
      <TextField ref={instance => { this.textfield = instance; }}/>
      <Calculation ref={instance1 => { this.calculation = instance1; }} msg={this.textfield}/>
      <Buttons msg={this.calculation}/>
      </div>
    );
}
}
