import { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function ColumnDiagram({ columnLabel }) {
  const [options, setOptions] = useState({});

  useEffect(() => {
    axios(`/api/label/${columnLabel}`)
      .then((res) => {
        const { data } = res;

        setOptions({
          chart: { type: 'bar' },
          title: data.attributeName,
          xAxis: {
            categories: data.topTenValuesAndCount.map((val) => val.value),
          },
          yAxis: {
            title: {
              text: 'count',
            },
          },
          series: [
            {
              name: 'count',
              data: data.topTenValuesAndCount.map((val) => val.count),
            },
          ],
        });

        console.log(options);
      })
      .catch((err) => {
        // TODO: add error handling
        console.log(err.response.data);
      });
  }, []);

  return options.title ? (
    <HighchartsReact highcharts={Highcharts} options={options} />
  ) : (
    'Loading...'
  );
}

export default ColumnDiagram;
