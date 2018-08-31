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

    componentDidMount = () => {
        console.log(`props did mouth ${JSON.stringify(this.props)}`)
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
                            <td>{creditCard.cardNumber}</td>
                            <td><Currency
                                quantity={creditCard.limit}
                                currency="GBP"
                                decimal="."
                                group=","
                                />
                            </td>
                            <td><Currency
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
