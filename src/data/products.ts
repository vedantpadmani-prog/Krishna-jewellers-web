import necklace from "@/assets/p-necklace.jpg";
import bangles from "@/assets/p-bangles.jpg";
import ring from "@/assets/p-ring.jpg";
import earrings from "@/assets/p-earrings.jpg";
import mangalsutra from "@/assets/p-mangalsutra.jpg";
import chain from "@/assets/p-chain.jpg";
import bracelet from "@/assets/p-bracelet.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  rate: string;
  description: string;
  image: string;
};

// Easy to update — add/edit products here
export const products: Product[] = [
  { id: "1", name: "Royal Bridal Necklace Set", category: "Necklace", price: "₹ 2,45,000", rate: "22K Gold • 38g", description: "Hand-crafted kundan bridal set with intricate temple work.", image: necklace },
  { id: "2", name: "Heritage Gold Bangles", category: "Bangles", price: "₹ 88,500", rate: "22K Gold • 22g", description: "Traditional textured bangles, set of four — timeless heirloom piece.", image: bangles },
  { id: "3", name: "Solitaire Diamond Ring", category: "Rings", price: "₹ 65,000", rate: "18K Gold • VVS Diamond", description: "Brilliant-cut solitaire in a classic four-prong gold setting.", image: ring },
  { id: "4", name: "Antique Jhumka Earrings", category: "Earrings", price: "₹ 42,000", rate: "22K Gold • 12g", description: "Temple-style jhumkas with pearls and ruby accents.", image: earrings },
  { id: "5", name: "Sacred Mangalsutra", category: "Mangalsutra", price: "₹ 38,500", rate: "22K Gold • 14g", description: "Traditional black-bead mangalsutra with gold pendant.", image: mangalsutra },
  { id: "6", name: "Men's Signature Chain", category: "Chains", price: "₹ 1,15,000", rate: "22K Gold • 28g", description: "Bold curb-link chain with engraved medallion pendant.", image: chain },
  { id: "7", name: "Diamond Tennis Bracelet", category: "Bracelets", price: "₹ 1,28,000", rate: "18K Gold • 1.2ct", description: "Continuous line of brilliant diamonds in fine gold setting.", image: bracelet },
  { id: "8", name: "Classic Polki Necklace", category: "Necklace", price: "₹ 3,10,000", rate: "22K Gold • 45g", description: "Uncut polki diamonds in traditional jadau craftsmanship.", image: necklace },
];

export const categories = ["All", "Necklace", "Bangles", "Rings", "Earrings", "Mangalsutra", "Chains", "Bracelets"];
