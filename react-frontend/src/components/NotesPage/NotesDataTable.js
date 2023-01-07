
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { InputText } from 'primereact/inputtext';


const NotesDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.notecontent}</p>
    const chipTemplate1 = (rowData, { rowIndex }) => <Chip label={rowData.notepriority}  />
    const inputTemplate2 = (rowData, { rowIndex }) => <InputText value={rowData.addnotecontent}  />
    const inputTemplate3 = (rowData, { rowIndex }) => <InputText value={rowData.addnotepriority}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="notecontent" header="Note Content" body={pTemplate0} />
            <Column field="notepriority" header="Note Priority" body={chipTemplate1} />
            <Column field="addnotecontent" header="Note Content" body={inputTemplate2} />
            <Column field="addnotepriority" header="Note Priority" body={inputTemplate3} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default NotesDataTable;