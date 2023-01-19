import React, { useEffect, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Menu } from "primereact/menu";
import logo from '../src/assets/codebridge.png';

import "./sidebar.css";
import { useLocation } from "react-router-dom";

const AppSideMenu = () => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    useEffect(() => {
        setActive(pathname.substring());
    }, [pathname]);
    const [visible, setVisible] = useState(true);
    let items = [
        {
            label: "Dashboard",
            icon: "pi pi-fw pi-home",
            command: (e) => {
                window.location = "/dashboard";
            },
        },
        {
            label: "Contact",
            icon: "pi pi-fw pi-id-card",
            command: (e) => {
                window.location = "/customers";
            },
        },
        {
            label: "Company",
            icon: "pi pi-fw pi-building",
            command: (e) => {
                window.location = "/company";
            },
        },
        {
            label: "Sales",
            icon: "pi pi-fw pi-money-bill",
            command: (e) => {
                window.location = "/chart";
            },
        },
        {
            label: "Kanban Board",
            icon: "pi pi-fw pi-check-square",
            command: (e) => {
                window.location = "/kanban";
            },
        },
        {
            label: "Opportunity",
            icon: "pi pi-fw pi-wallet",
            command: (e) => {
                window.location = "/opportunity";
            },
        },
    ];

    return (
        <div>
            <div>
                <Sidebar
                    visible={visible}
                    onHide={() => setVisible(false)}
                    modal={false}
                    dismissable={false}
                    showCloseIcon={false}
                    closeOnEscape={false}
                    style={{ width: "15em" }}
                >
                    <div><img src={logo} alt="codebridge logo" /></div>
                    <Menu model={items} onClick={active} />
                </Sidebar>
            </div>
        </div>
    );
};

export default AppSideMenu;
