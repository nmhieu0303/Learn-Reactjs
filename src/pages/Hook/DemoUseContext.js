import React, { useContext } from 'react'
import { context } from './Context/ContextProvider'

const arrProducts = [{ id: 1, name: 'Iphone', price: 15000 },
{ id: 2, name: 'Samsung', price: 10000 },
{ id: 3, name: 'Xiaomi', price: 11000 }]

export default function DemoUseContext(props) {
    const { cartReducer } = useContext(context);
    const [cart, dispatch] = cartReducer;
    return (
        <div className="container">
            <div className="row my-5">
                {arrProducts.map((item, index) => {
                    return <div className="col-4" key={index}>
                        <div className="card text-center">
                            <img className="card-img-top" src="https://picsum.photos/200/200" alt={item.name} />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.price}</p>
                                <button type="button" className="btn btn-primary"
                                    onClick={()=>dispatch({type: 'addToCart',item})}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <h3 className="text-center">Cart</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.price}</td>
                        </tr>;
                    })}

                </tbody>
            </table>

        </div >
    )
}
