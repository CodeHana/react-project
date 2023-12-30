import {Link} from "react-router-dom";
function GameCard(props){
    return (
        <div className="bg-light border p-4 m-2">
        <h4>{props.game.name} </h4>
        <p>{props.game.rating}</p>
        <p>{props.game.category}</p>
        <Link to={"/games/" + props.game.id}>Details</Link>
      </div>
    )
}

export default GameCard