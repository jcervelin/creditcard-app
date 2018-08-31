// import React, { Component } from 'react';
// import { Form,FormGroup,Label,Input,Button,Table,Alert } from 'reactstrap';
// import axios from 'axios';

// class GetAllCreditCards extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             creditCards: []
//         }
//     }

//     callGetAllCreditCards() {
//         axios.get('http://localhost:8080/api/creditcards')
//         .then(res => {
//             this.setState({
//                 creditCards: res.data,
//             });
//         })
//         .catch(err => {
//           this.setState({
//             displayMessage: err.response.data.message,
//             typeMessage: 'danger'
//           });
//         })
//     }   



//                 <FormGroup>
//                 <Table striped>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Card Number</th>
//                             <th>Limit</th>
//                             <th>Balance</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {creditCards.map((creditCard,idx) =>
//                         <tr key={idx}>
//                             <th scope="row">{creditCard.name}</th>
//                             <td>{creditCard.cardNumber}</td>
//                             <td>{creditCard.limit}</td>
//                             <td>{creditCard.balance}</td>
//                         </tr>
//                         )}
//                     </tbody>
//                 </Table>                    
//             </FormGroup>
// }
// export default GetAllCreditCards;
