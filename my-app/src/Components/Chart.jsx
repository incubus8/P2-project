import React from 'react'
import { Bar } from 'react-chartjs-2'
function Chart(){
    return (
        <div>
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
                        xAxes: [
                            {
                             scalelabel:{
                               labelString: 'Sales', 
                               display:true,
                               fontColor: 'blue',
                               fontSize: 18
                             }   
                            }
                        ],
                        yAxes: [
                        {  scalelabel:{
                            labelString: 'reve',  
                            display:true,
                            fontColor: 'blue',
                            fontSize: 18
                        },  
                        ticks:{
                            beginAtZero: true
                            }
                        }  
                        ]
                    }
                }}
                height={400}
                width={600}
            >    
            </Bar>
        </div>
    )
}
export default Chart;