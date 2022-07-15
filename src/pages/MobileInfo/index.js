import { Col, Row } from 'antd';
import { Button } from 'antd';
import oppo from '../../assets/Images/oppo.png';
import './mobileInfo.css';
import { ProductConsumer } from '../../context';

const MobileInfo = () => {
    return (
        <ProductConsumer>
            {
                value => {
                    const { id, title, price, color, screenSize, operationSystem, ram, storage } = value.details;
                    return (
                        <div>
                            <Row>
                                <Col span={4}>
                                    <div>
                                        <img className='mobPic' src={oppo} alt='oppo' />
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div>{title}</div>
                                    <div>Price: {price}</div>
                                    <div>Color: {color}</div>
                                    <div>Screen Size: {screenSize}</div>
                                    <div>Operating System: {operationSystem}</div>
                                    <div>RAM: {ram}</div>
                                    <div>Storage: {storage}</div>
                                </Col>
                                <Col span={10}>
                                </Col>
                                <Col span={4}>
                                    <div>
                                        <Button htmlType="button" onClick={()=>{
                                            value.handleAddToCart(id)
                                        }}>Add to Cart</Button>
                                        </div>
                                </Col>
                            </Row>
                        </div>
                    )
                }}
        </ProductConsumer>
    )
}

export default MobileInfo;