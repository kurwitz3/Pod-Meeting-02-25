import React from 'react' 

function BeerCard(props){
    const handleClick = (e) =>{
      props.increaseLikes(props.id)
    }
    return (
        <div>
            <h1>{props.name}</h1>
            <img className="img" src={props.image}/>
            <h3>style: {props.style}</h3>
            <h3>Likes:{props.likes}</h3>
            <button onClick={handleClick}>Like</button>
        </div>
    )
}
export default BeerCard