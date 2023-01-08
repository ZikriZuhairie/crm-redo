
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const MonthlysalesChart = () => {
    const [basicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [200,100,300,100,500,200,300],
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            }
        ]
    });
    return (
        <div>
            <div className="card">
                <h5>Sales</h5>
                <Chart type="line" data={basicData} />
            </div>
        </div>
    )
}

export default MonthlysalesChart;
