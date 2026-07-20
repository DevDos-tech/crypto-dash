

const CoinCard = ({ coin }) => {
    return (
        <div className='coin-card' key={coin.id}>
            <div className='coin-header'>
                <img src={coin.image} alt={coin.name} className='coin-image'/>
                <div className=''>
                    <h2>{coin.name}</h2>
                    <p className='symbol'>{coin.symbol.toUpperCase()}</p>
                </div>
                <p>Preço:R$ {coin.current_price.toLocaleString('pt-BR')}</p>

                <p className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                    {
                        coin.price_change_percentage_24h !== null ? `24h Change: ${coin.price_change_percentage_24h.toFixed(2)}%` : "N/A"
                    }
                </p>
                
                <p>Market Cap: R$ {coin.market_cap.toLocaleString('pt-BR')}</p>
            </div>
        </div>
    )
}

export default CoinCard
