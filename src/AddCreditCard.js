import React, { Component } from 'react';
import { FormGroup,Label,Input,Button,Alert } from 'reactstrap';
import axios from 'axios';

const config = {	headers: {'Content-Type': 'application/json','Cache-Control' : 'no-cache'}, crossdomain : true};

class AddCreditCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            cardNumber: '',
            limit: '',
            balance: ''
        }
    }

    handleSaveSubmit = (e) => {
        e.preventDefault()
        this.callSaveCreditCard(e)
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    callSaveCreditCard() {
        const {name,cardNumber,limit,balance} = this.state;
        let data = JSON.stringify( {
            name,
            cardNumber,
            limit,
            balance,
        });
        axios.post('http://localhost:8080/api/creditcards',data,config)
        .then(res => {
          this.setState({
            creditCards: res.data,
            displayMessage: '',
            typeMessage: ''
          });
          this.props.callbackUpdateList(this.state.creditCards);
        })
        .catch(err => {
          this.setState({
            displayMessage: err.response.data.message,
            typeMessage: 'danger'
          });
        })
    } 

    render () {
        const { name,
            cardNumber,
            limit,
            balance } = this.state;
        return (
            <div>
                {this.state.displayMessage ? 
                <Alert color={this.state.typeMessage}>
                    {this.state.displayMessage}
                </Alert> : "" }
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" name="name" id="name" placeholder="Type your name" onChange={this.onChange} value={name}/>
                    <Label for="cardNumber">Card number</Label>
                    <Input type="cardNumber" name="cardNumber" id="cardNumber" placeholder="Type your Creditcard number" onChange={this.onChange} value={cardNumber}/>
                    <Label for="limit">Limit</Label>
                    <Input type="limit" name="limit" id="limit" placeholder="Type your limit" onChange={this.onChange} value={limit}/>
                    <Label for="balance">Balance</Label>
                    <Input type="balance" name="balance" id="balance" placeholder="Type the balance" onChange={this.onChange} value={balance}/>
                    <Button onClick={this.handleSaveSubmit}>Add</Button>
                </FormGroup>
                </div>
        )
    }
}
export default AddCreditCard;
