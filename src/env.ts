// request Wrapper 사용 간 주요 환경 설정
export const request = {
  PREFIX_URL: '/api/',
  TIMEOUT: 30 * 1000 // 60 sec
}

export let isSampleApi = false;

export const reverseIsSampleApi = () => {
  isSampleApi = !isSampleApi
}
