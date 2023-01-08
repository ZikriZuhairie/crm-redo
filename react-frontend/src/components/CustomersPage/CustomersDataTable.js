
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const CustomersDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {

    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.custname}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.custphonenumber}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.custemail}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.custcompany}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={7}>
            <Column field="custname" header="Customer Name" body={pTemplate0} sortable />
            <Column field="custphonenumber" header="Customer Phone Number" body={pTemplate1} sortable />
            <Column field="custemail" header="Customer Email" body={pTemplate2} sortable />
            <Column field="custcompany" header="Customer Company" body={pTemplate3} sortable />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default CustomersDataTable;
