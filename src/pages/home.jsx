import FilterInput from "../components/FilterInput";
import LimitSelector from "../components/LimitSelector";
import SortSelector from "../components/SortSelector";
import CoinCard from "../components/CoinCard"


const HomePage = ({
    limit, 
    filter, 
    sortBy,
    coins, 
    setFilter,
    setLimit,
    setSortBy,
    loading,
    error,


}) => {
    const filteredCoins = coins.filter(
        (coin) =>
            coin.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
            coin.symbol.toLowerCase().includes(filter.toLocaleLowerCase())
    ).slice()
        .sort((a, b) => {
            switch (sortBy) {
                case 'market_cap_desc':
                    return a.market_cap - a.market_desc;
                case 'price_desc':
                    return b.current_price - a.current_price;
                case 'price_asc':
                    return a.current_price - b.current_price;
                case 'change_desc':
                    return b.price_change_percentage_24h - a.price_change_percentage_24h;
                case 'change_asc':
                    return a.price_change_percentage_24h - b.price_change_percentage_24h;
                default:
                    return 0;


            }
        })

    return (

        <div>
            <div className='top-controls'>
                <FilterInput filter={filter} onFilterChange={setFilter} />
                <LimitSelector Limit={limit} onLimitChange={setLimit} />
                <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
            </div>
            {loading && <p>Loading...</p>}
            {error && (
                <div className='error'>
                    <p>X {error}</p>
                </div>
            )}

            {!loading && !error && (
                <main className='grid'>
                    {filteredCoins.length > 0 ?
                        filteredCoins.map((coin) => (
                            <CoinCard coin={coin} key={coin.id} />
                        )) : (<p>No coins match your filter</p>)}
                </main>
            )}
        </div>
    )
}

export default HomePage
