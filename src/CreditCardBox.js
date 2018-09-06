import React, { Component } from 'react';
import { Form } from 'reactstrap';
import AddCreditCard from './AddCreditCard';
import GetAllCreditCards from './GetAllCreditCards';
import axios from 'axios';

class AddCreditBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            typeMessage:'',
            displayMessage:'',
            creditCards:[]
        }
    }

    componentDidMount = () => {
        this.callGetAllCreditCards();
    }

    handleGetAllSubmit = (e) => {
        e.preventDefault()
        this.callGetAllCreditCards();
    }

    callGetAllCreditCards = () => {
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

    updateList = (newList) => {
        this.setState({
            creditCards: newList,
        });
    }
    
    render () {
        return(
            <Form>
                <AddCreditCard callbackUpdateList={this.updateList}/>
                <br/><br/>
                <h1 className="App-sub-title">Existing Cards</h1>
                <br/>
                <GetAllCreditCards  creditCards={this.state.creditCards}/>
            </Form>
        );
    }

}

export default AddCreditBox;