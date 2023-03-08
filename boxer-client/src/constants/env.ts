import dotenv from 'dotenv'
dotenv.config({ path: `../../.env.${process.env.NODE_ENV}` })


export const PROD = 'production'
export const DEV = 'development'
export const TEST = 'test'

export const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000'


export const FirebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    appId: process.env.FIREBASE_APP_ID,
}