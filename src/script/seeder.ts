import { db } from "../db/drizzle.db"


const OPTIONS = [
    { label: 'Phishing', value: 'phishing' },
    { label: 'Social Media', value: 'social-media' },
    { label: 'Online Shopping', value: 'online-shopping' },
    { label: 'Financial', value: 'financial' },
    { label: 'Impersonation', value: 'impersonation' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'Whatsapp', value: 'whatsapp' },
    { label: 'APK', value: 'apk' },
    { label: 'Shitcoin', value: 'shitcoin' },
    { label: 'Investment', value: 'investment' },
    { label: 'Crypto', value: 'crypto' },
    { label: 'Saham', value: 'saham' },
    { label: 'Car', value: 'car' },
    { label: 'Catfish', value: 'catfish' },
  ]

const seedCategories = async () => {
    
}