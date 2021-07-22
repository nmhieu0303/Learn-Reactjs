import React from 'react'
import Product from '../Product'


export default function ProductList(props) {

    const {data,XemChiTiet,themGioHang} = props;
    return (
        <div>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-3 g-4 align-self-stretch">
                    {data.map((item, index) => {
                        return (
                            <div className="col-md-3 col-sm-6" key={index}>
                                <Product data={item} XemChiTiet={XemChiTiet} themGioHang={themGioHang}/>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>

    )
}
