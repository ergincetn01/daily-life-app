import { Layout } from "antd";
import { Provider } from "react-redux";
import "./App.css";
import ModalManager from "./Components/ModalController/ModalManager";
import NavBar from "./Components/Navigation/NavBar";
import configStore from "./Store/Reducers/configStore";

const { Header, Content } = Layout;
const store = configStore();
function App() {
  return (
    <Provider store={store}>
      <div>
        <Layout>
          <Header>
            <NavBar/>
          </Header>
          <Content>
            <ModalManager />
          </Content>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
