import { Col, Row } from 'antd';
import { Button, Input } from 'antd';
import './MobilesList.css';
import { ProductConsumer } from '../../context.js';
import { Link } from 'react-router-dom';

const MobilesList = () => {
    return (
        <div>
            <div>
                <p className='subTitle'>Mobiles</p>
                <Input className='search' placeholder="Search" />
            </div>
            <br />
            <Row>
                <ProductConsumer>
                    {
                        context => {
                            return context.products.map(phone => {
                                return (<Col span={4} key={phone.id}>
                                    <div className="ant-card ant-card-bordered">
                                        <img className='mobPic' src={phone.img} alt='' />
                                        <div>{phone.title}</div>
                                        <div>Price: {phone.price}</div>
                                        <div>
                                            <Button htmlType="button" onClick={() => {
                                                context.handleDetails(phone.id)
                                            }}>
                                                <Link to='/MobileInfo'>View</Link>
                                            </Button>
                                        </div>
                                        <div>
                                            <Button htmlType="button" onClick={()=>{
                                                context.handleAddToCart(phone.id)
                                            }}>Add to Cart</Button>
                                        </div>
                                    </div>
                                </Col>)
                            })
                        }
                    }
                </ProductConsumer>
            </Row>
            <br />
            <Button type='primary'><Link to='/CartList'>Go to Cart</Link></Button>
        </div>
    )
}

export default MobilesList;