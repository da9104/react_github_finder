const Card = ({ card }) => {
    return (
        <div>
          <ul style={{ listStyle: 'none' }}>
            <li><a href={card.html_url}>{card.name}</a></li>
            <li><img src={card.avatar_url} alt={card.login} /></li>
            <li>{card.bio? card.bio : '' }</li>
          </ul>
        </div>
    )
}

export default Card;