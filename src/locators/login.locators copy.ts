import { LocatorDefination } from "../utils/types";

export const LoginLocators = {

    username: {
        description: 'Username input field',
        primary: '#user-name',
        fallbacks: ["input[data-test='data-test']", "input[name='user-name']", "input[placeholder='Username']"]
    },

    password: {
        description: 'password input field',
        primary: '#password',
        fallbacks: ["input[data-test='password']", "input[name='password']", "input[placeholder='Password']"]
    },

    loginButton: {
        description: 'Login button',
        primary: '#login-button',
        fallbacks: ["input[data-test='login-button']", "input[name='login-button']"]
    }

} satisfies Record<string, LocatorDefination>;