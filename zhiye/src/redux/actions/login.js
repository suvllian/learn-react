import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA } from './../type.js'  

// 这里的方法返回一个action对象
export const increase = n => {
    return {
        type: INCREASE,
        number: n
    }
}

export const decrease = n => {
    return {
        type: DECREASE,
        number: n
    }
}

export const refreshData = () => {
    return {
        type: REFRESHDATA
    }
}

export const getSuccess = (json) => {
    return {
        type: GETSUCCESS,
        json
    }
}
