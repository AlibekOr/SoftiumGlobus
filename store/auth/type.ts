export interface IInputForm {
    phone: string,
    password: string,
}

export interface IPasswordChange {
    phone: string,
    password: string,
    password2: string
}

export interface IPasswordChangeVerify {
    phone: string,
    otp: string
}