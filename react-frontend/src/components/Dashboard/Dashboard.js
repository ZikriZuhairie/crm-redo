import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Card } from "primereact/card";
import TasksPage from "../TasksPage/TasksPage";
import NotesPage from "../NotesPage/NotesPage";
import MonthlysalesChart from "../MonthlysalesPage/MonthlysalesChart"
import "./dashboard.css";

const Dashboard = (props) => {
    const history = useHistory();
    useEffect(() => { }, []);

    return (
        <div className="box_dashboard">
            <div className="card_container">
                <Card title="1234" subTitle="Total Customer" />
                <Card title="5467" subTitle="Today Sales" />
                <Card title="8901" subTitle="Monthly Sales" />
                <Card title="2345" subTitle="Yearly Sales" />
            </div>
            <div className="secondrow_container">
                <MonthlysalesChart/>
            </div>
            <div className="thirdrow_container">
            <div className="tasknnotes_container">
                <TasksPage />
            </div>
            <div className="tasknnotes_container">
                <NotesPage/>
            </div>
            </div>
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(Dashboard);
