import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import "./kanban.css";

const KanbanPage = (props) => {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const [selectedEntityIndex, setSelectedEntityIndex] = useState();
    useEffect(() => {
        //on mount
        client
            .service("opportunity")
            .find({ query: { $limit: 100 } })
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Opportunity", type: "error", message: error.message || "Failed get opportunity" });
            });
    }, []);

    const onEditRow = (rowData, rowIndex) => {
        setSelectedEntityIndex(rowIndex);
        setShowEditDialog(true);
    };

    const onCreateResult = (newEntity) => {
        setData([...data, newEntity]);
    };

    const onEditResult = (newEntity) => {
        let _newData = _.cloneDeep(data);
        _newData[selectedEntityIndex] = newEntity;
        setData(_newData);
    };

    const onRowDelete = async (index) => {
        setSelectedEntityIndex(null);
        try {
            await client.service("opportunity").remove(data[index]?._id);
            let _newData = data.filter((_, i) => i !== index);
            setData(_newData);
        } catch (error) {
            console.log({ error });
            props.alert({ title: "Opportunity", type: "error", message: error.message || "Failed delete record" });
        }
    };

    const onRowClick = (e) => {
        console.log("e", e);
    };

    let earlyCard;
    if (`${data[0]?.status}` === "Early Stage") {
        earlyCard =
            <Card title={data[0]?.client} subTitle={data[0]?.personincharge}>
                <p>{data[0]?.description}</p>
            </Card>
    }

    let meetingCard;
    if (`${data[0]?.status}` === "Meeting Completed") {
        meetingCard =
            <Card title={data[0]?.client} subTitle={data[0]?.personincharge}>
                <p>{data[0]?.description}</p>
            </Card>
    }

    let potentialCard;
    if (`${data[0]?.status}` === "Potential Opportunity") {
        potentialCard =
            <Card title={data[0]?.client} subTitle={data[0]?.personincharge}>
                <p>{data[0]?.description}</p>
            </Card>
    }

    let proposalCard;
    if (`${data[0]?.status}` === "Proposal") {
        proposalCard =
            <Card title={data[0]?.client} subTitle={data[0]?.personincharge}>
                <p>{data[0]?.description}</p>
            </Card>
    }

    let completedCard;
    if (`${data[0]?.status}` === "Completed") {
        completedCard =
            <Card title={data[0]?.client} subTitle={data[0]?.personincharge}>
                <p>{data[0]?.description}</p>
            </Card>
    }


    console.log(data[0]?.status);
    return (
        <div>
            <div className="column_arrange">
                <div className="first_column">
                    <div className="text_header">
                        Early Stage
                    </div>
                    <div className="card_position">
                        {earlyCard}
                    </div>
                </div>
                <div className="first_column">
                    <div className="text_header2">
                        Meeting Completed
                    </div>
                    <div className="card_position">
                        {meetingCard}
                    </div>
                </div>
                <div className="first_column">
                    <div className="text_header3">
                        Potential Opportunity
                    </div>
                    <div className="card_position">
                        {potentialCard}
                    </div>
                </div>
            </div>
            <div className="column_arrange">
                <div className="first_column">
                    <div className="text_header">
                        Proposal
                    </div>
                    <div className="card_position">
                        {proposalCard}
                    </div>
                </div>
                <div className="first_column">
                    <div className="text_header2">
                        Completed
                    </div>
                    <div className="card_position">
                        {completedCard}
                    </div>
                </div>
            </div>

        </div>
    );
};
const mapState = (state) => ({
    //
});
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(KanbanPage);
