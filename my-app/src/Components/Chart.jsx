import React from 'react'
import { Bar } from 'react-chartjs-2'

function Chart({coins}){
    const coinName = coins.map(coin => coin.name)
    const coinChange= coins.map(coin => coin.price_change_percentage_24h)
    // const coinMarketCap = coins.map(coin => coin.market_cap_rank)
// console.log(coins);   
    return (
        <div className='Chart'>
            <Bar 
            data={{
                labels: coinName,
                datasets: [{
                    label: 'Price change in the last 24h',
                    data: coinChange,
                    backgroundColor: 'blue',
                    ticks:{ beginAtZero: true}
                }]
            }}
            >    
            </Bar>
        </div>
    )
}
export default Chart;