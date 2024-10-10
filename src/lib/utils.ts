import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })
  
  return formatter.format(price)
}

export function constructMetadata({
  title = "CellShield - Custom Protective Phone Cases",
  description = "Create personalized phone cases with custom designs, colors, and materials to express your unique style.",
  image = "/thumbnail_shield.png",
  icons = "/favicon.ico",
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{url: image}]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@artiomstarus"
    },
    icons,
    metadataBase: new URL("https://cellshield.vercel.app")
  }
}