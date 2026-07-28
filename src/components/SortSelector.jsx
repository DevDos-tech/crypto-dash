const SortSelector = ({sortBy, onSortChange}) => {
  return (
    <div className="limit-controls">
        <label htmlFor="sort">Sort by:</label>
        <select id="limit" value={sortBy} onChange={(e) => onSortChange(e.target.value)} >
                <option value="market_cap_desc">Market Cap</option>
                <option value="price_desc">Price(Hight to Low)</option>
                <option value="price_asc">Price(Low to Hight)</option>
                <option value="change_desc">24h Change Cap (High to Low)</option>
                <option value="change_asc">24h Change Cap (Low to High)</option>
        </select>     
    </div>
  )
}

export default SortSelector
