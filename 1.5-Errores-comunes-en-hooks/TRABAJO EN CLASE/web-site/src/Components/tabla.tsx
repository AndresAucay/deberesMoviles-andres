    import React from 'react';
    import { Table } from 'antd';
    

    interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    }

    const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    ];

    const data: DataType[] = [
    {
        key: '1',
        name: ' Andres Aucay',
        age: 19,
        address: 'Cuenca',
    },
    
    ];

    const TableComponent: React.FC = () => (
    <Table className='tabla1' columns={columns} dataSource={data} />
    );

    export default TableComponent;
