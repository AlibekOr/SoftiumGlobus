export interface IInputForm {
    phone: string,
    password: string,
}

export interface IPasswordChange {
    phone: string | string[] | undefined,
    password: string,
    password2: string
}

export interface IPasswordChangeVerify {
    phone: string,
    otp: string
}

export interface IRegistration {
    first_name: string,
    last_name: string,
    date_of_birth: string,
    password: string,
    phone: string,
    gender: string,
}