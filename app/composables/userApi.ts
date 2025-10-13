export const userapiCore = (url: string, options: any) => {
    const config = useRuntimeConfig()
    return useFetch(url, {
        baseURL: config.public.userBaseURL,
        onRequest({ options }) {
            let userToken: any = '';
            if (import.meta.client) {
                // const userStr = localStorage.getItem("user");
                // if (userStr !== null) {
                //     user = JSON.parse(userStr);
                // }
                userToken = useCookie('user_token', {
                    path: '/', // 确保 Cookie 对整个域有效
                    domain: '.swimsuitcustom.com', // 适用于所有子域名
                });
            }
            options.headers = {
                Authorization: `Bearer ${userToken.value}`,
                "X-LANG": useState('language').value || 'en',
                "X-SITE-ID": useState('siteID').value,
                ...options.headers
            }

        },
        onResponse({ response }) {
            if (response.status >= 200 && response.status < 300) {
                if (response._data.code !== 200) {
                    const noticeObj = useNoticeObj()
                    noticeObj.value.isShow = true
                    noticeObj.value.msg = response._data.msg
                    console.log(noticeObj.value.msg, 'noticeObj.value.msg');
                    noticeObj.value.type = 'error'
                    let timer = null
                    timer = setTimeout(() => {
                        noticeObj.value.isShow = false
                    }, 3000);
                    if (response._data.code === 401) {
                        const userStore = useUserStore()
                        userStore.getUserName('')
                        userStore.getToken('')
                        const nameCookie = useCookie('user_email', {
                            path: '/', // 确保 Cookie 对整个域有效
                            domain: '.swimsuitcustom.com', // 适用于所有子域名
                            maxAge: 60 * 60 * 24 * 7, // 7 天有效期
                        })
                        nameCookie.value = ''
                        return navigateTo('/signIn')

                    }
                    // console.log(response._data, 'response._data.code');

                }
            }
        },
        ...options
    })
}

export const GetUserApi = (url: string, options: any) => {
    return new Promise((resolve, reject) => {
        userapiCore(url, {
            method: "GET",
            ...options
        }).then((res) => {
            resolve(res.data.value)
        }).catch((err) => {
            reject(err)
        })
    })
}