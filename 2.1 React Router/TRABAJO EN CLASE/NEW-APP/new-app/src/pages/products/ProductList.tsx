import React, { useEffect, useState } from 'react';
import { List, Typography } from 'antd';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://api.fake-rest.refine.dev/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to fetch products');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <List
            header={<div>Products</div>}
            bordered
            dataSource={products}
            renderItem={item => (
                <List.Item>
                    <Typography.Text>{item.name}</Typography.Text>
                </List.Item>
            )}
        />
    );
};

export default ProductList;
