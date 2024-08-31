import VicisPage from "@/components/pages/projects/vicis-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SKRATCH - Design & Development for Shopify Merchants',
    description: 'SKRATCH is a digital design and branding agency focused on eCommerce development for Shopify merchants. Skratch is located in Los Angeles, CA',
  }
  
export default function Index() {
    return <VicisPage/>
}
