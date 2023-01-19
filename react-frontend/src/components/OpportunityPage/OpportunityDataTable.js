
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Tag } from 'primereact/tag';


const OpportunityDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {

    const calendarTemplate0 = (rowData, { rowIndex }) => <Calendar className="w-20rem" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(rowData.date)} showTime ></Calendar>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.personincharge}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.client}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.revenue}</p>
    const tagTemplate4 = (rowData, { rowIndex }) => <Tag value={rowData.status}  ></Tag>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.description}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="date" header="Date" body={calendarTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="personincharge" header="Person in Charge" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="client" header="Client" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="revenue" header="Revenue" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="status" header="Status" body={tagTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="description" header="description" body={pTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default OpportunityDataTable;
