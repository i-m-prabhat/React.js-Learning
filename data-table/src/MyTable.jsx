import React from 'react';
import BootstrapTable from 'react-bootstrap/Table';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyDataTable = () =>
{
    const data = [
        { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        // Add more dummy data as needed
    ];

    const columns = [
        {
            name: 'ID',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Age',
            selector: 'age',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        // Add more columns as needed
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px',
            },
        },
    };

    const ExportButtons = () =>
    {
        // Implement export buttons logic here
        return <div>Export Buttons Placeholder</div>;
    };

    const [showAllColumns, setShowAllColumns] = React.useState(false);

    const handleColumnToggle = () =>
    {
        setShowAllColumns(!showAllColumns);
    };

    return (
        <>
            <button onClick={handleColumnToggle}>
                {showAllColumns ? 'Hide Columns' : 'Show All Columns'}
            </button>
            <DataTable
                title="User Data Table"
                columns={columns}
                data={data}
                customStyles={customStyles}
                pagination
                highlightOnHover
                selectableRows
                selectableRowsHighlight
                subHeader
                subHeaderComponent={<ExportButtons />}
                dense={!showAllColumns}
            />
        </>
    );
};

export default MyDataTable;
