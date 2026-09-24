export const env = {
    baseUrl: process.env.BASE_URL ?? 'https://www.saucedemo.com/',
    users: {
        standard: process.env.STANDARD_USER ?? 'standard_user',
        lockedOut: process.env.LOCKED_OUT_USER ?? 'locked_out_user',
        problem: process.env.PROBLEM_USER ?? 'problem_user'
    },
    password: process.env.PASSWORD ?? 'secret_sauce'
}