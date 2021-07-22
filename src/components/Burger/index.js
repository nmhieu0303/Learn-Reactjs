import React from 'react'
import { connect } from 'react-redux';
import styles from './style.module.scss';

function Burger(props) {
    const { burger, prices,addProps } = props;

    const renderBurger = () => {
        let content = []
        for (let propBuger in burger) {
            let breadMid = [];
            for (let i = 0; i < burger[propBuger]; i++) {
                breadMid.push(<div key={i} className={styles[propBuger]}></div>)
            }
            content.push(breadMid);
        }
        return content;
    }

    const renderMenu = () => {
        console.log(`price`, prices)
        return Object.entries(prices)?.map(([propsPrice,price],index) => {
            return (
            <tr key={index}>
                <td><strong>{propsPrice}</strong></td>
                <td>
                    <button onClick={() => { addProps(propsPrice, 1) }} className="btn btn-success">+</button>
                    <span className="px-3">{burger[propsPrice]}</span>
                    <button onClick={() => { addProps(propsPrice, -1) }} className=" btn btn-danger">-</button>
                </td>
                <td>{`${price}$`}</td>
                <td>{`${burger[propsPrice] *prices[propsPrice]}$`}</td>
            </tr>)
        })
    }

    return (
        <div className="container">
            <h2 className="text-center text-success">Bài tập Burger Redux</h2>
            <div className="row">
                <div className="col-7">
                    <div className={styles.breadTop}></div>
                    {renderBurger()}
                    <div className={styles.breadBottom}></div>
                </div>
                <div className="col-5">
                    <h3 className="text-center text-success">Chọn thức ăn</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Thức ăn</th>
                                <th></th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                            {renderMenu()}
                        </thead>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Tổng cộng</td>
                                <td>{`${props.total}$`}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger,
        prices: state.BurgerReducer.prices,
        total: state.BurgerReducer.total
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addProps: (propsBurger, amount) => {
            dispatch({
                type: 'TANG_GIAM_SL',
                propsBurger,
                amount
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Burger)