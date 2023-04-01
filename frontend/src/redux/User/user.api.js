import axios from "axios";


export const getnutriData = async () => {
    let res = await axios.get(
      `https://panicky-crow-cardigan.cyclic.app/nutrient/list`
    );
    return res.data;
};

export const getuserData = async() => {
    let res = await axios.get(
        `https://panicky-crow-cardigan.cyclic.app/userdata`,
        {
            headers: {
                Authorization: `${localStorage.getItem("userToken")}`,
            }
        }
    );

    return res.data;
};

export const addDatadiary = async(data) => {
    let res = await axios.post(
        `https://panicky-crow-cardigan.cyclic.app/userdata/add`,
        data,
        {
            headers: {
                Authorization: `${localStorage.getItem("userToken")}`,
            }
        }
    );

    return res;
}

export const deleteDataDiary = async(userId) => {
    let res = await axios.delete(
        `https://panicky-crow-cardigan.cyclic.app/userdata/delete/${userId}`,
        {
            headers: {
                Authorization: `${localStorage.getItem("userToken")}`,
            }
        }
    );

    return res;
}