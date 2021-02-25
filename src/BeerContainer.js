import React,{Component} from 'react'
import BeerCard from './BeerCard'

class BeerContainer extends Component{
    state = {beers: []}
    componentDidMount(){
        fetch('http://localhost:3000/beers')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                beers: json
            })
        })
    }

    increaseLikes = (id) => {
      this.setState((pState) => {
        let index = pState.beers.findIndex(b => {return  b.id === id})
          return {
              beers: [
                  ...pState.beers.slice(0,index),
                  {...pState.beers[index],likes: pState.beers[index].likes + 1},
                  ...pState.beers.slice(index + 1)
              ]
          }
      })
    }
    

    makeCard(){
      return this.state.beers.map(beer => 
        <BeerCard increaseLikes={this.increaseLikes} id={beer.id} name={beer.beer_name} image={beer.image} style={beer.beer_style} likes={beer.likes}/>)
    }

    render(){
        return(
            <div>
                <h1>Beers</h1>
                {this.makeCard()}
            </div>
        )
    }
}

export default BeerContainer