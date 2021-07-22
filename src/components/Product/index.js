import React from 'react'
import {connect} from 'react-redux'
// import {GioHangReducer} from '../../redux/reducers/GioHangReducer'

 function Product(props) {
    const {data,themGioHang} = props;
    return (
        data ? (
            <div className="card w-100 h-100">
                <img src={data.hinhAnh} className="card-img-top" alt={data.tenSP} />
                <div className="card-body">
                    <h5 className="card-title">{data.tenSP}</h5>
                    <p className="card-text">{data.giaBan}</p>
                    {/* <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{XemChiTiet(data)}}>Chi tiết</button> */}
                    <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{themGioHang(data)}}>Thêm vào giỏ hàng</button>
                </div>
            </div >
        ) : ''
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        themGioHang : (sanpham=>{
            const spGH = {
                maSP:sanpham.maSP,
                tenSP:sanpham.tenSP,
                hinhAnh:sanpham.hinhAnh,
                soLuong:1,
                giaBan:sanpham.giaBan,
            }
            const action ={
                type: 'THEM_GIO_HANG',
                spGH:spGH,
            }
            dispatch(action);
        })
    }
}

export default connect(null,mapDispatchToProps)(Product);
