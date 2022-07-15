import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

const EmptyCart = () => (
    <div>
        <Col span={12}>
            <Row>
                <h3>Empty Cart</h3>
                <Link to='/'>
                    <Button htmlType='Back to store'></Button>
                </Link>
            </Row>
        </Col>
    </div>
);


export default EmptyCart;