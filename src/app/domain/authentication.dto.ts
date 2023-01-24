export interface AuthenticationInputDTO {
    mobile: string;
    role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
    referral: string;
}

export interface OtpVerifyInputDTO {
    mobile: string;
    verification: string;
}