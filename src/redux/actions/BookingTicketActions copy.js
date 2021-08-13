import { CHOI_LAI, DAT_CUOC, XOC_DIA } from "../types/GameBauCuaActions"

export const xocDiaAction = () =>{
    return{
        type: XOC_DIA,
    }
}

export const choiLaiAction = () =>{
    return{
        type: CHOI_LAI,
    }
}

export const datCuocAction = (quanCuoc,tangGiam) =>{
    return{
        type: DAT_CUOC,
        quanCuoc,
        tangGiam,
    }
}
