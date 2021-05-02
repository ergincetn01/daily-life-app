import React from "react";
import { Menu, Layout } from "antd";
import { useDispatch } from "react-redux";
import { openModal } from "../../Store/Actions/ModalActions";
import DLLogo from "../../Utils/Images-Photos/DL-letters.jpg";
import { Link } from "react-router-dom";

const { Header } = Layout;
const MenuItem = Menu.Item;

function NavBar(props) {
  const dispatch = useDispatch();
  return (
    <Layout>
      <Header style={{ height: "64.px" }}>
        <Menu style={{ height: "64px" }} theme="dark" mode="horizontal">
          <MenuItem
            style={{ color: "white", fontWeight: "bold", height: "64px" }}
          >
            <p style={{ fontSize: "25px" }}>DAILY LIFE</p>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ color: "white", fontWeight: "bold", height: "64px" }}
              to="/notes"
            >
              Notes
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/alarmdashboard"
              style={{ color: "white", fontWeight: "bold", height: "64px" }}
            >
              Alarms
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ color: "white", fontWeight: "bold", height: "64px" }}
              to="/tododashboard"
            >
              ToDoList
            </Link>
          </MenuItem>

          <MenuItem
            style={{ color: "white", fontWeight: "bold", height: "64px" }}
            onClick={() => dispatch(openModal({ modalType: "LoginModal" }))}
          >
            Log in
          </MenuItem>
          <MenuItem
            style={{ color: "white", fontWeight: "bold", height: "64px" }}
            onClick={() => dispatch(openModal({ modalType: "RegisterModal" }))}
          >
            Sign Up
          </MenuItem>
        </Menu>
      </Header>
    </Layout>
  );
}

export default NavBar;
