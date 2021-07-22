import React from 'react'
import { connect } from 'react-redux';

function Modal(props) {
    const { gioHang, xoaGioHang, tangGiamSL } = props;
    return (
        <div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{`Giỏ hàng`}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gioHang?.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td scope="row">{item.maSP}</td>
                                                <td><img src={item.hinhAnh} alt="{item.maSP}" style={{ width: "100px", height: "100px" }} /></td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => { tangGiamSL(item.maSP, "Decrease") }}>-</button>
                                                    <span className="mx-4">{item.soLuong}</span>
                                                    <button className="btn btn-primary" onClick={() => { tangGiamSL(item.maSP, "Increase") }}>+</button>
                                                </td>
                                                <td>{item.giaBan}</td>
                                                <td>{item.giaBan * item.soLuong}</td>
                                                <td><button className="btn btn-danger" onClick={() => xoaGioHang(item.maSP)}>Xóa</button></td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                                <tfoot>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Tổng tiền:</td>
                                    <td>{gioHang.reduce((tongTien, item) => {
                                        return tongTien += item.soLuong * item.giaBan
                                    }, 0)}</td>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP => {
            const action = {
                type: 'XOA_GIO_HANG',
                maSP
            }
            dispatch(action);
        }),

        tangGiamSL: ((maSP, tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SL',
                maSP,
                tangGiam
            }
            dispatch(action);
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)