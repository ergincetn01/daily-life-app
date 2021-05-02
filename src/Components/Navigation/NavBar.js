import React from "react";
import {Menu, Layout} from "antd"
import { useDispatch } from "react-redux";
import { openModal } from "../../Store/Actions/ModalActions";
import DLLogo from "../../Utils/Images-Photos/DL-letters.jpg";

const { Header } = Layout;
const MenuItem = Menu.Item;

function NavBar(props){
    const dispatch = useDispatch();
    return(
        <Layout>
            <Header style={{height: "64.px"}}>
                <Menu style={{height: "64px"}} theme="dark" mode="horizontal" 
                defaultActiveFirst={[""]} defaultSelectedKeys={[""]}
                >
                  <MenuItem >
                  <img src={DLLogo} alt="DLLogo"/>
                  </MenuItem>
                  <MenuItem style={{color: "white", fontWeight: "bold", height: "64px"}} >
                    <p style={{fontSize: "25px"}}>DAILY LIFE</p>
                  </MenuItem>
                    <MenuItem 
                    style={{color: "white", fontWeight: "bold", height: "64px"}}
                    onClick={()=>
                      dispatch(
                        openModal({ modalType: "LoginModal" })
                      )  
                    }
                    >
                   Log in
                    </MenuItem>
                    <MenuItem style={{color: "white", fontWeight: "bold", height: "64px"}}
                    onClick={()=>
                        dispatch(
                          openModal({ modalType: "SignupModal" })
                        )  
                      }
                    >
                    Sign Up
                    </MenuItem>
                </Menu>
            </Header>
        </Layout>
    )
}


export default NavBar;