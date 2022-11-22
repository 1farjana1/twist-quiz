import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';


const Statistics = () => {
    const total = useLoaderData().data;
    return (
        <div>
            {
                total.map(tt => <Chart
                    key={tt.id}
                    tt={tt}
                ></Chart>)
            }
        </div>
    );
};

export default Statistics;