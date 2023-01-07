
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
    const inputTemplate4 = (rowData, { rowIndex }) => <InputText value={rowData.addcustname}  />
    const inputTemplate5 = (rowData, { rowIndex }) => <InputText value={rowData.addcustphonenumber}  />
    const inputTemplate6 = (rowData, { rowIndex }) => <InputText value={rowData.addcustemail}  />
    const inputTemplate7 = (rowData, { rowIndex }) => <InputText value={rowData.addcustcompany}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="custname" header="Customer Name" body={pTemplate0} sortable />
            <Column field="custphonenumber" header="Customer Phone Number" body={pTemplate1} sortable />
            <Column field="custemail" header="Customer Email" body={pTemplate2} sortable />
            <Column field="custcompany" header="custcompany" body={pTemplate3} sortable />
            <Column field="addcustname" header="Customer Name" body={inputTemplate4} />
            <Column field="addcustphonenumber" header="Customer Phone Number" body={inputTemplate5} />
            <Column field="addcustemail" header="Customer Email" body={inputTemplate6} />
            <Column field="addcustcompany" header="Customer Company" body={inputTemplate7} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default CustomersDataTable;