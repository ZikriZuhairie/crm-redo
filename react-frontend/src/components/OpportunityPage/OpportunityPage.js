import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Button } from "primereact/button";
import OpportunityDatatable from "./OpportunityDataTable";
import OpportunityEditDialogComponent from "./OpportunityEditDialogComponent";
import OpportunityCreateDialogComponent from "./OpportunityCreateDialogComponent";

const OpportunityPage = (props) => {
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

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <h3 className="mb-0 ml-2">Opportunity</h3>
                <div className="col flex justify-content-end">
                    <Button label="add" icon="pi pi-plus" onClick={() => setShowCreateDialog(true)} />
                </div>
            </div>
            <div className="grid col-10">
                <div className="col-12">
                    <OpportunityDatatable items={data} onRowDelete={onRowDelete} onEditRow={onEditRow} onRowClick={onRowClick}/>
                </div>
            </div>
            <OpportunityEditDialogComponent entity={data[selectedEntityIndex]} show={showEditDialog} onHide={() => setShowEditDialog(false)} onEditResult={onEditResult} />
            <OpportunityCreateDialogComponent show={showCreateDialog} onHide={() => setShowCreateDialog(false)} onCreateResult={onCreateResult} />
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

export default connect(mapState, mapDispatch)(OpportunityPage);
