import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const CoinDetailsPage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fecthCoin = async () => {
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
                if (!res.ok) throw new Error('Failed to fetch coin data');
                const data = await res.json();
                setCoin(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }
        fecthCoin();

    }, [id])

    return (
        <div className='coin-details-container'>
            <Link to={'/'}>🡐 voltar para a Home</Link>

            <h1 className='coin-details-title'>
                {coin ? `${coin.name} (${coin.symbol.toUpperCase()})` : 'Detalhes da Moeda'}
            </h1>

            {loading && <p>Carregando...</p>}
            {error && <p className='error'>{error}</p>}

            {!loading && !error && coin && (
                <>
                    <img src={coin.image.large} alt={coin.name} />
                    <p>{coin.description.en.split('. ')[0] + '.'}</p>
                    <div className='coin-details-info'>
                        <h3>RANK#{coin.market_cap_rank}</h3>
                        <h3>Preço Atual:R${coin.market_data.current_price.usd.toLocaleString()}</h3>
                        <h4>Captalizalização de Mercado: R${coin.market_data.market_cap.usd.toLocaleString()}</h4>
                        <h4>Máxima em 24h: R${coin.market_data.high_24h.brl.toLocaleString()}</h4>
                        <h4>Mínma em 24h: R${coin.market_data.low_24h.brl.toLocaleString()}</h4>
                        <h4>Variação de Preço(24h): R${coin.market_data.price_change_24h.toFixed(2)}
                            ({coin.market_data.price_change_percentage_24h.toFixed(2)}%)

                        </h4>
                        <h4>
                            Suprimento Circulante: {coin.market_data.circulating_supply.toLocaleString() || 'N/A'}
                        </h4>
                        <h4>
                            Suprimento Total: {coin.market_data.total_supply?.toLocaleString() || 'N/A'}
                        </h4>
                        <h4>
                            Suprimento Máximo: {coin.market_data.max_supply?.toLocaleString() || 'N/A'}
                        </h4>
                        <h4>
                            Máxima Histórica(ATH): ${coin.market_data.ath.brl.toLocaleString()} em{' '}
                            {new Date(coin.market_data.ath_date.usd).toLocaleString()}
                        </h4>
                        <h4>
                            Mínima Histórica(ATL): ${coin.market_data.atl.brl.toLocaleString()} em{' '}
                            {new Date(coin.market_data.atl_date.usd).toLocaleString()}
                        </h4>

                    </div>
                    <div className='coin-deteils-links'>
                        {coin.links.homepage[0] && (
                            <p>
                                🌐 {' '}
                                <a href={coin.links.homepage[0]} target="_blank" rel="noopener noreferrer">Website</a>
                            </p>
                        )}
                    </div>

                    {coin.links.blockchain_site[0] && (
                        <p>
                            🔗{' '}
                            <a href={coin.links.blockchain_site[0]}
                                target='_blank'
                                rel='noopener noreferrer'>
                                Blockchain Explorer
                            </a>
                        </p>
                    )}

                    {coin.categories.length >0 && (
                        <p>Categories: {coin.categories.join(', ')}</p>
                    )}

                </>
            )}

             {!loading && !error && coin && <p>Nenhum dado encontrado</p>}

        </div>



    )
}

export default CoinDetailsPage
