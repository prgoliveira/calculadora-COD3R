import React, { Component } from 'react'
import './Calculator.css'
import Display from '../components/Display'
import Button from '../components/Button'

export default class Calculator extends Component {
   
    constructor(props){
        super(props)

        this.addDigito = this.addDigito.bind(this)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
    }
   clearMemory(){
    console.log('limpar')
   }

   setOperation(operation) {
    console.log(operation)
   }

   addDigito(n){
       console.log(n)
   }
   
   
    render() {
        return ( 
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigito}/>
                <Button label="8" click={this.addDigito}/>
                <Button label="9" click={this.addDigito}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigito}/>
                <Button label="5" click={this.addDigito}/>
                <Button label="6" click={this.addDigito}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigito}/>
                <Button label="2" click={this.addDigito}/>
                <Button label="3" click={this.addDigito}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigito} double/>
                <Button label="." click={this.addDigito}/>
                <Button label="=" click={this.setOperation} operation/>

            </div>
        )
    }
}