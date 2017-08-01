import React from 'react';
class Buttons extends React.Component{

    render() {
      const values = [['7', '8', '9', '*'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['/', '0', 'C', '=']];

        return(
            <table>
                <tbody>
                {
                    values.map((rows, rowIndex) =>
                        <tr key={"row" + rowIndex}>
                            {
                                rows.map((cols, colIndex) =>
                                    <td key={"col" + rowIndex + colIndex}>
                                        <input type="button" value={cols} style={{width: '55px',height: '50px'}} onClick={() => {this.props.handleUpdate(cols);}}/>
                                    </td>
                                )
                            }
                        </tr>
                    )
                }
                </tbody>
            </table>
        )
    }
}

class TextField extends React.Component {

    render(){
        return (
            <div>
                <input  type="text" style={{width: '230px',height: '50px'}} value={this.props.value} onChange={(event) => this.props.handleUpdate(event.target.value)}/>
            </div>
        );
    }
}

class Computation extends React.Component {

    compute(value) {
        let current = this.props.value;
        switch (true){
            case value === 'C': return '';
            case value === '=': return eval(current);
            case current === '': return value;
            default: return current + value;
        }
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.enteredKey !== '') {
            this.props.handleUpdate(this.compute(nextProps.enteredKey));
        }
    }

    render(){
        return null;
    }
}

class Calculator extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
            enteredKey: ''
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleUpdatedValue = this.handleUpdatedValue.bind(this);
    }

    handleUpdate(value){
        this.setState({enteredKey: value});
    }

    handleUpdatedValue(value){
        this.setState({value: value, enteredKey: ''});
    }

    render(){
        const { value, enteredKey, isKeyEntered } = this.state;
        return (
            <div>
                <TextField value={value} handleUpdate={this.handleUpdatedValue}/>
                <Buttons handleUpdate={this.handleUpdate}/>
                <Computation value={value} enteredKey={enteredKey} handleUpdate={this.handleUpdatedValue}/>
            </div>
        );
    }
}

export class App extends React.Component {
    render(){
        return (
            <div>
                <Calculator />
                <Calculator />
            </div>
        );
    }
}

//ReactDOM.render(<App />, document.getElementById("root"));
