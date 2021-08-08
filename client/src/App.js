import 'antd/dist/antd.css';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import PassengerTable from './components/PassengerTable';

function App() {
  return (
    <Layout>
      <Header>
        <h1>
          <a href="\">Titanic</a>
        </h1>
      </Header>
      <Content>
        <PassengerTable />
      </Content>
      <Footer>
        <h5>Created by Gergely K5a</h5>
      </Footer>
    </Layout>
  );
}

export default App;
