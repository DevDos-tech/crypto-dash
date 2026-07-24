import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale
} from 'chart.js'
import 'chartjs-adapter-date-fns'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'

ChartJS.register(
    CategoryScale,
    PointElement,
    LinearScale,
    LineElement,
    Tooltip,
    Legend,
    TimeScale
)


const CoinChart = ({ coinId }) => {
    const [chartData, SetChartData] = useState({ datasets: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharData = async () => {
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=brl&days=7`)
                if (!res.ok) throw new Error('Failed to fetch coin data');
                const data = await res.json();
                console.log(data.prices)

                const prices = data.prices.map((price) => ({
                    x: price[0],
                    y: price[1]
                }));

                SetChartData({
                    datasets: [
                    {
                    label: 'prce(BRL)',
                    data: prices,
                    fill: true,
                    borderColor: '#007bff',
                    backgroundColor: 'rgba(0,123,255,0.1)',
                    pointRadius: 0,
                    tension: 0.3
                }]});
            } catch (error) {
                console.log("passou aqui")
                console.log(error)
            } finally {
                setLoading(false);
            }

        }
        fetchCharData()

    }, [coinId])

    if (loading) return <Spinner />


    return (
        <div style={{ marginTop: '30px' }}>
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { display: false },
                        tooltip: { mode: 'index', intersect: false }
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day'
                            },
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 7,
                            }
                        },
                        y: {
                            ticks: {
                                callback: (value) => `$${value.toLocaleString()}`
                            }
                        }
                    }
                }}
            />
        </div>
    )

}

export default CoinChart
