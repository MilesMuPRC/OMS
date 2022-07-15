import React from 'react';
import PropTypes from 'prop-types';
import { detailsPhone, storePhones } from './data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
    state = {
        products: [],
        details: detailsPhone,
        cart: [],
        modalProduct: detailsPhone,
        itemsTotalCount: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storePhones.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { products: tempProducts };
        });
    };

    handleDetails = id => {
        const product = this.getItem(id);
        this.setState({
            details: product,
        });
    };

    handleAddToCart = id => {
        const { products } = this.state;
        const tempProducts = [...products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const { price } = product;
        product.total = price;

        this.setState(
            () => {
                const { cart } = this.state;
                return {
                    products: tempProducts,
                    cart: [...cart, product],
                };
            },
            () => {
                this.addTotals();
            }
        );
    };

    addTotals = () => {
        const { cart } = this.state;

        const itemsCount = cart.reduce((acc, item) => {
            return acc + item.inCart;
        }, 0);

        const subTotal = cart.reduce((acc, item) => {
            return acc + item.total;
        }, 0);

        const total = subTotal;

        this.setState({
            itemsTotalCount: itemsCount,
            cartSubTotal: subTotal,
            cartTotal: total,
        });
    };

    getItem = id => {
        const { products } = this.state;
        return products.find(item => item.id === id);
    };

    removeItem = id => {
        const { cart, products } = this.state;
        let tempCart = [...cart];
        const tempProducts = [...products];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        const removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(
            () => {
                return { cart: [...tempCart], products: [...tempProducts] };
            },
            () => {
                this.addTotals();
            }
        );
    };
    render() {
        const { children } = this.props;
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetails: this.handleDetails,
                    handleAddToCart: this.handleAddToCart
                }}
            >
                {children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ProductProvider, ProductConsumer };