import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';

function App() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios('/api/titanic').then((res) => {
      const { result } = res.data;

      const cols = result.attributes.map((attr) => ({
        title: attr.name,
        dataIndex: attr.name,
        key: attr.name.toLowerCase(),
      }));

      const dataSource = result.rows.map((row, key) => ({ key, ...row }));

      setColumns(cols);
      setRows(dataSource);
    });
  }, []);

  return (
    <Layout>
      <Header>
        <h1>
          <a href="\">Titanic</a>
        </h1>
      </Header>
      <Content>
        <Table dataSource={rows} columns={columns} />
      </Content>
      <Footer>
        <h5>Created by Gergely K5a</h5>
      </Footer>
    </Layout>
  );
}

export default App;
