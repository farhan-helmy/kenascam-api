import { db } from "../db/drizzle.db"
import { tagRepository } from "../repository/tag.repository";
import { createId } from "@paralleldrive/cuid2";
import { comments, images, scamToTags, scams, tags } from "../db/drizzle.schema";


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
  { label: 'Religion', value: 'religion' },
  { label: 'Catfish', value: 'catfish' },
  { label: 'Love', value: 'love' },
  { label: 'Royalty', value: 'royalty' },
  { label: 'Porn', value: 'porn' },
  { label: 'Parcel Delivery', value: 'parcel-delivery' },
  { label: 'Renovation', value: 'renovation' },
  { label: 'Spam', value: 'spam' },
  { label: 'Deepfake', value: 'deepfake' },
  { label: 'Pharming', value: 'pharming' },
  { label: 'Job Offer', value: 'job-offer' },
  { label: 'Mule Account', value: 'mule-account' },
  { label: 'Casino', value: 'casino' },
  { label: 'Gamble', value: 'gamble' },
  { label: 'Online Auction', value: 'online-action' },
  { label: 'Advance Fee', value: 'advance-fee' },
  { label: 'Smartphone', value: 'smartphone' }, 
  { label: 'False  Tech Support', value :'false-tech-support'}, 
  { label: 'Property Rental', value :'property-rental'},
  { label: 'Smartphone', value: 'smartphone' },
  { label: 'Local Authorities', value: 'local-authorities' },
  { label: 'Parcel', value: 'parcel' },
  { label: 'Charity Fraud', value: 'charity-fraud' },
  { label: 'Lottery', value: 'lottery' },
  { label: 'Tech Support', value: 'tech-support' },
  { label: 'Ransomware', value: 'ransomware' },
  { label: 'Email Spoofing', value: 'email-spoofing' },
  { label: 'Identity Theft', value: 'identity-theft' },
  { label: 'Fake Antivirus', value: 'fake-antivirus' },
  { label: 'Ponzi Scheme', value: 'ponzi-scheme' },
  { label: 'Pyramid Scheme', value: 'pyramid-scheme' },
  { label: 'Healthcare Fraud', value: 'healthcare-fraud' },
  { label: 'Insurance Fraud', value: 'insurance-fraud' },
  { label: 'Tax', value: 'tax' },
  { label: 'Real Estate', value: 'real-estate' },
  { label: 'Fake Scholarships', value: 'fake-scholarships' },
  { label: 'Crowdfunding Fraud', value: 'crowdfunding-fraud' },
  { label: 'Data Breach', value: 'data-breach' },
  { label: 'Subscription', value: 'subscription' },
  { label: 'Romance', value: 'romance' },
  { label: 'Fake Shopping Websites', value: 'fake-shopping-websites' },
  { label: 'Counterfeit Products', value: 'counterfeit-products' },
  { label: 'Malware', value: 'malware' },
  { label: 'Gift Card', value: 'gift-card' },
  { label: 'Travel', value: 'travel' },
  { label: 'NFT', value: 'nft' },
  { label: 'Bank Loan', value: 'bank-loan' },
  { label: 'Quantum Metal', value: 'quantum-metal' },
  { label: 'Fake Event Tickets', value: 'fake-event-tickets' },
  { label: 'Health', value: 'health' },
  { label: 'Fake News', value: 'fake-news' },
  { label: 'Online Dating', value: 'online-dating' },
  { label: 'Credit Card Fraud', value: 'credit-card-fraud' },
  { label: 'Tech Gadget', value: 'tech-gadget' },
  { label: 'Fake Software', value: 'fake-software' },
  { label: 'Online Auctions', value: 'online-auctions' },
  { label: 'Job Opportunities', value: 'job-opportunities' },
  { label: 'Home Repair', value: 'home-repair' },
  { label: 'Pet', value: 'pet' },
  { label: 'Elderly Exploitation', value: 'elderly-exploitation' },
  { label: 'Home Rentals', value: 'home-rentals' },
  { label: 'Fake Degrees', value: 'fake-degrees' },
  { label: 'Online Extortion', value: 'online-extortion' },
  { label: 'Quid Pro Quo', value: 'quid-pro-quo' },
  { label: 'Charity', value: 'charity' },
  { label: 'Gold', value: 'gold' },
  { label: 'Vehicle', value: 'vehicle' },
  { label: 'Employment', value: 'employment'},
  { label: 'Forex', value: 'forex' },
  { label: 'Trading', value: 'trading' },
];


const seedCategories = async () => {

  console.time('Seeding')

  const manipulatedData = OPTIONS.map((option) => {
    return {
      id: option.value,
      name: option.label,
      value: option.value
    }
  })

  const res = await tagRepository.createMany(manipulatedData)

  console.timeEnd('Seeding')
}

const clearAll = async () => {
  console.time('Delete')

  await db.delete(scams)
  await db.delete(scamToTags)
  await db.delete(tags)
  await db.delete(images)
  await db.delete(comments)

  console.timeEnd('Delete')
}

 //clearAll()
seedCategories()