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

class Button extends React.Component{
  render() {
    return(
      <div>
      <input type="button" value={this.props.value} style={{width: '55px',height: '50px'}} onClick={this.props.onClick}/>
      </div>
    );
  }
}

export class App extends React.Component {
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
  this.textfield.displayResult(current);
  //document.getElementById('textfield').value = current;
  }
render(){
  const values = [['7', '8', '9', '*'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['/', '0', 'C', '=']];
  const grid =  values.map(rows=>{
    const row = rows.map(cols=>{
      return (<td>
        <Button value={cols} onClick={() => {this.calculate(cols);}}/>
        </td>)
    });
    return (<tr>{row}</tr>)
  });
  return (
    <div>
    <TextField ref={instance => { this.textfield = instance; }}/>
    <table>{grid}</table>
    </div>
  );
}
}
