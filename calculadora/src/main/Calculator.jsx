import React, { Component } from 'react'
import './Calculator.css'
import Display from '../components/Display'
import Button from '../components/Button'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.addDigito = this.addDigito.bind(this)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
    }
    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
 
            switch (operation) {
                case '+':
                    values[0] = values[0] + values[1]
                    values[1] = 0
                    break
                case '-':
                    values[0] = values[0] - values[1]
                    values[1] = 0
                    break
                case '*':
                    values[0] = values[0] * values[1]
                    values[1] = 0
                    break
                case '/':
                    values[0] = values[0] / values[1]
                    values[1] = 0
                    break
                case '=':
                    try{
                        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                        values[1] = 0
                    } catch(e) {
                        values[0] = this.state.values[0]
                    }
                    break
                default:
                    console.log('Operação invalida')
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigito(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const indice = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[indice] = newValue
            this.setState({ values })
        }
    }


    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigito} />
                <Button label="8" click={this.addDigito} />
                <Button label="9" click={this.addDigito} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigito} />
                <Button label="5" click={this.addDigito} />
                <Button label="6" click={this.addDigito} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigito} />
                <Button label="2" click={this.addDigito} />
                <Button label="3" click={this.addDigito} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigito} double />
                <Button label="." click={this.addDigito} />
                <Button label="=" click={this.setOperation} operation />

            </div>
        )
    }
}