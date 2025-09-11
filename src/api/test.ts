import axios from '~/server/axois'
export const test = (data:{}) => {
    return axios({
        url: "/test/image/getTranslatedImagesByUrl",
        method: "get",
        params: data,
        timeout: 600000,
    });
}
