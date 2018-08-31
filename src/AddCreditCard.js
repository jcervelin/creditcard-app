import React, { Component } from 'react';
import { Form,FormGroup,Label,Input,Button,Table,Alert } from 'reactstrap';
import axios from 'axios';
//import InputMask from 'react-input-mask';

const config = {	headers: {'Content-Type': 'application/json','Cache-Control' : 'no-cache'}, crossdomain : true};

class AddCreditCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            cardNumber: '',
            limit: '',
            balance: '',
            typeMessage:'',
            displayMessage:'',
            creditCards: []
        }
    }

    componentDidMount = () => {
        this.callGetAllCreditCards();
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleSaveSubmit = (e) => {
        e.preventDefault()
        this.callSaveCreditCard(e)
    }

    handleGetAllSubmit = (e) => {
        e.preventDefault()
        this.callGetAllCreditCards(e)
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
        })
        .catch(err => {
          this.setState({
            displayMessage: err.response.data.message,
            typeMessage: 'danger'
          });
        })
    }

    callGetAllCreditCards() {
        axios.get('http://localhost:8080/api/creditcards')
        .then(res => {
            this.setState({
                creditCards: res.data,
            });
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
            balance,
            creditCards } = this.state;
        return (
            <div>
                <div>
                    {this.state.displayMessage ? 
                    <Alert color={this.state.typeMessage}>
                        {this.state.displayMessage}
                    </Alert> : "" }
                </div>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" name="name" id="name" placeholder="Type your name" onChange={this.onChange} value={name}/>                 
                    <Label for="cardNumber">Card number</Label>
                    <Input type="cardNumber" name="cardNumber" /*mask="9999 9999 9999 9999" maskChar=" " tag={InputMask}*/ id="cardNumber" placeholder="Type your Creditcard number" onChange={this.onChange} value={cardNumber}/>
                    <Label for="limit">Limit</Label>
                    <Input type="limit" name="limit" id="limit" placeholder="Type your limit" onChange={this.onChange} value={limit}/>
                    <Label for="balance">Balance</Label>
                    <Input type="balance" name="balance" id="balance" placeholder="Type the balance" onChange={this.onChange} value={balance}/>
                    <Button onClick={this.handleSaveSubmit}>Add</Button>
                </FormGroup>
                <FormGroup>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Card Number</th>
                                <th>Limit</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {creditCards.map((creditCard,idx) =>
                            <tr key={idx}>
                                <th scope="row">{creditCard.name}</th>
                                <td>{creditCard.cardNumber}</td>
                                <td>{creditCard.limit}</td>
                                <td>{creditCard.balance}</td>
                            </tr>
                            )}
                        </tbody>
                    </Table>                    
                </FormGroup>                
            </Form>
            </div>
        )
    }
}
export default AddCreditCard;
