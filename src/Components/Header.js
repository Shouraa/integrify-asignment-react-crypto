import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div className="header">
            <h1>CryptoCurrency App</h1>
          


            </div>

        );
    }
 
};

export default Header;






// constructor(props) {
//     super(props);
//     this.state = {
//         itemCount: 0
//     };
//     this.addItem = this.addItem.bind(this);
    
// }
// addItem() {
//     this.setState({
//         itemCount: this.state.itemCount + 1
//     });
// }
// render() {
//     return (
//         <div>
//             <button onClick={this.addItem}>Click!</button>
//             <h1>Current Item count is : {this.state.itemCount}</h1>
//         </div>
//     );
// }