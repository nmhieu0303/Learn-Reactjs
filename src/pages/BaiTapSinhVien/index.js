import React from 'react'
import FromSinhVien from '../../components/FormSinhVien'
import TableSinhVien from '../../components/TableSinhVien'

export default function BaiTapSinhVien() {
    return (
        <div className="container">
            <h2 className="text-center text-success my-4">Bài tập quản lý sinh viên</h2>
            <FromSinhVien/>
            <TableSinhVien/>
        </div>
    )
}
