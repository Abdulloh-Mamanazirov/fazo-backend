import { registerAs } from "@nestjs/config"

declare interface DatabaseURL {
    url: string
}

export const dbConfig = registerAs<DatabaseURL>('db', ():DatabaseURL=>({
    url:process.env.DATABSE_URL ?? ''
}))
