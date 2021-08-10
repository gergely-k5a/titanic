import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';

import transformPassengerData from '../utils/getPassengerData';

function PassengerTable() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios('/api/titanic')
      .then((res) => {
        const passengerData = transformPassengerData(res.data);

        setColumns(passengerData.columns);
        setRows(passengerData.rows);
      })
      .catch((err) => {
        // TODO: add error handling
        console.log(err.response.data);
      });
  }, []);

  return <Table dataSource={rows} columns={columns} />;
}

export default PassengerTable;
