import React, { Component } from 'react';

class CoinContainer extends Component {
    constructor(props) {
        const data = [];
        super(props);
        this.state = {
            fetchedData: []
        }

    }
    
componentDidMount() {
    let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=20'; 
    fetch(url)
    .then(results => {
        return results.json();
    }).then (data => {
        this.data = data
        this.setState({fetchedData: this.data})
        console.log(this.state.fetchedData);
    
    })
}

handleInputChange(e){
    this.setState({fetchedData:this.data.filter(coin => (coin.name).toUpperCase()
        .match((e.target.value.toUpperCase())) != null)})
   }

   sortByName(){
    this.setState({fetchedData:this.state.fetchedData.sort((a , b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if(nameA < nameB){
        return -1;
      }
      if (nameA > nameB){
      return 1;
      }
      return 0;
    })})
   }

   sortByPrice(){
    this.setState({fetchedData:this.state.fetchedData.sort((a , b) => {
    return a.price_usd - b.price_usd ;
    })})
 }

 sortByRank(){
    this.setState({fetchedData:this.state.fetchedData.sort(( a , b) => {
    return a.rank - b.rank ; 
   })})
   }


    render() {

        let coins = this.state.fetchedData.map((coin) => {
            return(
                <div className="coin" key={coin.id}>
                    <h2><span>{coin.rank}</span>: {coin.name}</h2>
                    <h3>Price: {coin.price_usd}</h3>
                    <h3>Price Change: {coin.percent_change_24h} %</h3>
                </div>
            );
        })
        return(
            <div>
                <div className="searchArea">

                    <div className="searchBar">
                        <input className="searchInput" type="text" placeholder="Search"
                        onInput = {this.handleInputChange.bind(this)} />
                    </div>
                    
                    
                    <button onClick = {this.sortByName.bind(this)} className="btn">Sort By Name</button>
                    <button onClick = {this.sortByPrice.bind(this)} className="btn">Sort By Price</button>
                    <button onClick = {this.sortByRank.bind(this)} className="btn">Sort By Rank</button>
                </div>
                <div className="coinsContainer">{coins}</div>
                
            </div>
        );
    }
};

export default CoinContainer;





