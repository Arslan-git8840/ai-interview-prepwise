interface SignUpParams {
    fullName: string;
    email: string;
    password: string;
    uid: string;
}

interface LoginParams {
    email: string;
    idToken?: string;
}