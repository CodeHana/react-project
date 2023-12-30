export default function RandomPage({gamesList}) {
    const randomGame = gamesList[Math.floor(Math.random() * gamesList.length)];
    return (
        <div>
            <h5>You should play...</h5>
            <h2 className="">{randomGame.name}</h2>
        </div>
    )
}