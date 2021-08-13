import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import ProductList from '../../components/ProductList';
import Slider from '../../components/Slider';

export default function Cart() {
    const data = [
        { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 5700000, hinhAnh: "https://raw.githubusercontent.com/khaitruong1301/react_video/master/public/img/vsphone.jpg" },
        { maSP: 2, tenSP: "Meizu 16Xs", manHinh: "AMOLED, FHD+ 2232 x 1080 pixels", heDieuHanh: "Android 9.0 (Pie); Flyme", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 7600000, hinhAnh: "https://raw.githubusercontent.com/khaitruong1301/react_video/master/public/img/meizuphone.jpg" },
        { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraSau: "Chính 12 MP & Phụ 12 MP", cameraTruoc: "7 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "https://raw.githubusercontent.com/khaitruong1301/react_video/master/public/img/applephone.jpg" }
    ];
    const [cart, setCart] = useState([]);
    const XemChiTiet = (sanpham) => {
        // setState(sanpham);
    }

    const themGioHang = (sanpham) => {
        setCart(prevCart => {
            let data = prevCart;
            const index = data.findIndex(sp => sp.maSP === sanpham.maSP)
            if (index !== -1) {
                data[index].soLuong += 1;
            }
            else {
                data.push({ ...sanpham, soLuong: 1 });
            }
            return [...data];
        });
    }

    const xoaGioHang = (maSP) => {
        let data = cart.filter(item => item.maSP !== maSP)
        setCart([...data])
    }

    const tangGiamSL = (maSP, type) => {
        setCart(prevCart => {
            let data = prevCart;
            const index = data.findIndex(sp => sp.maSP === maSP)
            if (type === "Increase") {
                data[index].soLuong += 1;
            } else {
                if (data[index].soLuong > 1) {
                    data[index].soLuong -= 1;
                } else {
                    data.splice(index, 1);
                }
            }
            return [...data]
        });
    }

    const tsl = cart.reduce((tsl, sp, index) => {
        return tsl += sp.soLuong;
    }, 0)
    return (
        <div>
            <Header />
            <Slider />
            <h2 className="heading-2 mt-5">Product List</h2>
            <h3 className="text-end">{`Giỏ hàng(${tsl})`}</h3>
            <ProductList data={data} XemChiTiet={XemChiTiet} themGioHang={themGioHang} />
            <Footer />
            <Modal data={cart} xoaGioHang={xoaGioHang} tangGiamSL={tangGiamSL} />
        </div>
    )
}
