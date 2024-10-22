import Homepage from "@/components/pages/homepage";
import { Metadata } from "next";
import defaultMetadata from "./seo";

export const metadata: Metadata = {
    title: 'Skratch - Design & Development',
    description: 'SKRATCH is a digital design and branding agency focused on eCommerce development for Shopify merchants. Skratch is located in Los Angeles, CA',
    ...defaultMetadata,
  }
  
export default function Index() {
    return <Homepage/>
}
