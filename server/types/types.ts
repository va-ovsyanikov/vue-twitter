export { }
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            JWT_SECRET:string
            NODE_ENV: 'development' | 'production';
            PORT: Number;
            DB_URL: string;
            KEY_SECRET: string
            NODEMAILER_HOST: any
            NODEMAILER_PORT: number
            NODEMAILER_USER: string
            NODEMAILER_PASS: string
        }
    }
}


