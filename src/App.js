import { Layout } from "antd";
import { Provider } from "react-redux";
import { Route } from "react-router";
import "./App.css";
import AlarmList from "./Components/Alarms/AlarmList";
import ModalManager from "./Components/ModalController/ModalManager";
import NavBar from "./Components/Navigation/NavBar";
import NoteDashboard from "./Components/Notes/NoteDashboard";
import ToDoList from "./Components/ToDoList/ToDoList";
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
            <Route exact path="/notes" component={NoteDashboard} />
            <Route exact path="/tododashboard" component={ToDoList} />
            <Route exact path="/alarmdashboard" component={AlarmList} />
          </Content>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
