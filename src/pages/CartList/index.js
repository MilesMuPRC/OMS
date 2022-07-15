import { Table, Button } from 'antd';
import React from 'react';
import { ProductConsumer } from '../../context';
import EmptyCart from '../EmptyCart';

// const data = [
//   {
//     key: '1',
//     device: 'John Brown',
//     model: 32,
//     quantity: '0571-22098909',
//     price: 18889898989,
//     option: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     device: 'John Brown',
//     model: 32,
//     quantity: '0571-22098909',
//     price: 18889898989,
//     option: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     device: 'John Brown',
//     model: 32,
//     quantity: '0571-22098909',
//     price: 18889898989,
//     option: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     device: 'John Brown',
//     model: 32,
//     quantity: '0571-22098909',
//     price: 18889898989,
//     option: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '5',
//     device: 'John Brown',
//     model: 32,
//     quantity: '0571-22098909',
//     price: 18889898989,
//     option: 'New York No. 1 Lake Park',
//   },
// ];

const CartList = () => (
  <div>
    <div>
      <h2>Cart Details</h2>
    </div>
    <br />
    <ProductConsumer>
      {
        value => {
          const columns = [
            {
              title: 'Device',
              dataIndex: 'title',
              key: 'device',
            },
            {
              title: 'Model',
              dataIndex: 'title',
              key: 'title',
            },
            {
              title: 'Quantity',
              dataIndex: 'count',
              key: 'count',
            },
            {
              title: 'Price',
              dataIndex: 'price',
              key: 'price',
            },
            {
              title: '',
              dataIndex: '',
              key: 'x',
              render: () => <a href onClick={()=>{
                console.log(1)
              }}>Delete</a>,
            }
          ];
          return (
            value.cart.length > 0 ?
              <div>
                <Table columns={columns} dataSource={value.cart} pagination={false} bordered />
                <br />
                <div>Total:   $ {value.cartTotal}</div>
                <br />
                <div><Button type='primary'>Place order</Button></div>
              </div>
              : <EmptyCart />
          )
        }
      }
    </ProductConsumer>
  </div>
);

export default CartList;