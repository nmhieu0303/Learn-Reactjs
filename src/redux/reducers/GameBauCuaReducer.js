import { danhSachXucXacBauCua } from "../../utils/constant/XucXacBauCua"
import { CHOI_LAI, DAT_CUOC, XOC_DIA } from "../types/GameBauCuaActions";

const initialState = {
    danhSachCuoc: [
        { ma: 'nai', name: 'nai', hinhAnh: './images/GameBauCua/nai.png', diemCuoc: 0 },
        { ma: 'bau', name: 'bau', hinhAnh: './images/GameBauCua/bau.png', diemCuoc: 0 },
        { ma: 'ga', name: 'ga', hinhAnh: './images/GameBauCua/ga.png', diemCuoc: 0 },
        { ma: 'ca', name: 'ca', hinhAnh: './images/GameBauCua/ca.png', diemCuoc: 0 },
        { ma: 'cua', name: 'cua', hinhAnh: './images/GameBauCua/cua.png', diemCuoc: 0 },
        { ma: 'tom', name: 'tom', hinhAnh: './images/GameBauCua/tom.png', diemCuoc: 0 }
    ],
    danhSachXucXac: [
        { ma: 'ga', name: 'ga', hinhAnh: './images/GameBauCua/ga.png' },
        { ma: 'nai', name: 'nai', hinhAnh: './images/GameBauCua/nai.png' },
        { ma: 'tom', name: 'tom', hinhAnh: './images/GameBauCua/tom.png' }
    ],
    tongDiem: 1000
}

const GameXucXacReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case XOC_DIA:
            //Random xúc xắc    
            const danhSachXucXac = [];
            for (let i = 0; i < 3; i++) {
                let r = Math.floor(Math.random() * 6);
                danhSachXucXac.push(danhSachXucXacBauCua[r]);
            }


            const dsCuoc = state.danhSachCuoc;
            dsCuoc.forEach(cuoc => {
                // Tăng điểm thưởng
                danhSachXucXac.forEach(xucxac => {
                    if (cuoc.ma === xucxac.ma && cuoc.diemCuoc !== 0) {
                        //Thưởng điểm và hoàn điểm đã cược
                        state.tongDiem += cuoc.diemCuoc * 2;
                    }
                    // Reset số điểm đã cược
                })
                cuoc.diemCuoc = 0;
            })


            state.danhSachCuoc = [...dsCuoc];
            state.danhSachXucXac = danhSachXucXac;
            return { ...state }
        case DAT_CUOC:
            const danhSachCuoc = state.danhSachCuoc;
            const index = danhSachCuoc.findIndex(item => item.ma === action.quanCuoc)
            if (index !== -1) {
                if (action.tangGiam) {
                    if (state.tongDiem < 100) alert('Bạn không đủ điểm để cược thêm!')
                    else {
                        danhSachCuoc[index].diemCuoc += 100;
                        state.tongDiem -= 100;
                    }
                }
                else if (!action.tangGiam && danhSachCuoc[index].diemCuoc > 0) {
                    danhSachCuoc[index].diemCuoc -= 100;
                    state.tongDiem += 100;
                }
            }
            state.danhSachCuoc = [...danhSachCuoc];
            return { ...state }
        case CHOI_LAI:
            return { ...initialState }
        default:
            return state
    }
}

export default GameXucXacReducer;