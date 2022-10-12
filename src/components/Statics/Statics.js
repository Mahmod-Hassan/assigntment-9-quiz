import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statics = () => {
    const topics = useLoaderData();
    const data = topics.data;
    console.log(data);
    return (
        <>
            <h3 className='text-center text-primary mt-5'>Rechart of Quizes</h3>
            <LineChart className='md:w-50' width={600} height={400} data={data} margin={{
                top: 50, left: 50
            }} >
                <Line type="monotone" dataKey='total' stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart >
        </>

    );
};

export default Statics;