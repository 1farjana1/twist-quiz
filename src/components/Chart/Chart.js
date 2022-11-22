import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ tt }) => {
    const { total } = tt;
    console.log(tt, "jih")
    return (
        <div>
            <LineChart
                width={500}
                height={300}
                chart={total.tt}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={total.tt} stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey={total.tt} stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Chart;