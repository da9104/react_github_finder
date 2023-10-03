import Card from './Card'

function CardList({ cards }) {
    const renderedCards = cards.map((card) => {
       return (<Card key={card.id} card={card} />)
    }) 
    return (
    <div> 
     {renderedCards}
    </div>
    )
}

export default CardList;