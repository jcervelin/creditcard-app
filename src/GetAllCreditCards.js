import React, { Component } from 'react';
import { FormGroup,Table } from 'reactstrap';
import Currency from 'react-currency-formatter';

class GetAllCreditCards extends Component {

    constructor(props) {
        super(props)
        this.state = {
            creditCards: []
        }
    }
    
    currencyClass = (event) => {
        if (event < 0) {
            return "negative";
        }
        return ""
    }

    creditCardClass = (event) => {
        return event.toString().replace(/([0-9]{4})/g," $1 ");
    }

    render () {
            const {creditCards} = this.props;
            return(
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
                            <td>{creditCard.name}</td>
                            <td>
                                {this.creditCardClass(creditCard.cardNumber)}
                            </td>
                            <td className={this.currencyClass(creditCard.limit)}><Currency
                                quantity={creditCard.limit}
                                currency="GBP"
                                decimal="."
                                group=","
                                />
                            </td>
                            <td className={this.currencyClass(creditCard.balance)}><Currency
                                quantity={creditCard.balance}
                                currency="GBP"
                                decimal="."
                                group=","
                                /></td>
                        </tr>
                        )}
                    </tbody>
                </Table>                    
            </FormGroup>)
    }
}
export default GetAllCreditCards;
