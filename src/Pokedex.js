import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(){
        super()
        this.state = {
            contador: 0,
        }
    this.handleChange = this.handleChange.bind(this)
    }
handleChange(){
    const {contador} = this.state
    if(contador === 8){
        this.setState({
            contador: 0,
        })
    } else{
    this.setState(prevState => ({
        contador: prevState.contador + 1,
    }))
    }
}
    render() {
        const { 
            contador,
        } = this.state
        const { 
            pokemons,
        } = this.props
        return (
            <div className="pokedex">
                <Pokemon pokemon={pokemons[contador]} />
            <button onClick={this.handleChange}>--></button>
            </div>
        );
    }
}

export default Pokedex;