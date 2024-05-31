import React, { useEffect, useState } from 'react';
import { Table, Typography, notification } from 'antd';

const { Text } = Typography;

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://api.fake-rest.refine.dev/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                notification.error({ message: 'Failed to fetch products', description: error.message });
                setLoading(false);
            });
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Material',
            dataIndex: 'material',
            key: 'material',
        },
        {
            title: 'Category ID',
            dataIndex: ['category', 'id'],
            key: 'category.id',
        },
    ];

    return (
        <Table
            dataSource={products}
            columns={columns}
            loading={loading}
            rowKey="id"
            bordered
            title={() => <Text strong>Products</Text>}
        />
    );
};

export default ProductList;
