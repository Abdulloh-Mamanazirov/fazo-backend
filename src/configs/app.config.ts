declare interface AppConfigOptions {
    name: string
    mode: string
    host: string
    port: number
}

export const appConfig:AppConfigOptions = {
    name: process.env.APP_NAME ?? 'crm-backend',
    mode: process.env.APP_MODE ?? 'development',
    host: process.env.APP_HOST ?? '0.0.0.0',
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 5055
}
