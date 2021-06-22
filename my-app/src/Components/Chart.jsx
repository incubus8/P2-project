import React from 'react'
import {Bar} from 'react-chartjs-2'

function Chart(){
    return (
        <div className='chart'>
            <Bar 
            data={{
                labels: ['jan', 'feb', 'march'],
                datasets: [{
                    label: 'store1',
                    data: [100, 200, 300],
                    backgroundColor: 'blue'
                }]
            }}
                options={{
                    scales:{
                        yAxes: [
                        {
                        ticks:{
                            beginAtZero: true
                        }
                        }  
                        ]
                    }
                }}
            >    
            </Bar>
        </div>
    )
}


export default Chart