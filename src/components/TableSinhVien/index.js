import React from 'react'
import { connect } from 'react-redux'

function TableSinhVien(props) {
    const { dsSV } = props;
    const renderSinhVien = () => {
        return dsSV.map((item, index) => {
           return( <tr key={index}>
                {Object.keys(item).map((key) => {
                    return <td>{item[key]}</td>
                })}
            </tr>)
        })
    }
    return (
        <div>
            <table className="table">
                <thead className=" bg-dark text-light">
                    <tr>
                        <th>Mã sinh viên</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {renderSinhVien()}
                </tbody>
            </table>


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dsSV: state.SinhVienReducer.dsSV
    }
}

export default connect(mapStateToProps, null)(TableSinhVien);
