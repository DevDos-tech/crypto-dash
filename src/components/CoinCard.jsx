import { Link } from "react-router"

const CoinCard = ({ coin }) => {
    const isUp = coin.price_change_percentage_24h >= 0

    return (
        <Link to={`/coin/${coin.id}`}>
            <div className={`coin-card ${isUp ? 'trend-up' : 'trend-down'}`} key={coin.id}>
                <div className='coin-header'>
                    <img src={coin.image} alt={coin.name} className='coin-image' />
                    <div>
                        <h2>{coin.symbol.toUpperCase()}</h2>
                        <p className='symbol'>{coin.name}</p>
                    </div>
                </div>
                <p>Preço: R$ {coin.current_price.toLocaleString('pt-BR')}</p>
                <p className={isUp ? 'positive' : 'negative'}>
                    {coin.price_change_percentage_24h !== null
                        ? `24h Change: ${coin.price_change_percentage_24h.toFixed(2)}%`
                        : "N/A"}
                </p>
                <p>Market Cap: R$ {coin.market_cap.toLocaleString('pt-BR')}</p>
            </div>
        </Link>
    )
}

export default CoinCard