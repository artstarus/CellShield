"use client"

import { useQuery } from "@tanstack/react-query"
import { getPaymentStatus } from "./actions"
import { useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"
import PhonePreview from "@/components/PhonePreview"
import { formatPrice } from "@/lib/utils"

const ThankYou = () => {
    const searchParams = useSearchParams()
    const orderId = searchParams.get("orderId") || ""

    const { data } = useQuery({
        queryKey: ["get-payment-status"],
        queryFn: async () => await getPaymentStatus({ orderId }),
        retry: true,
        retryDelay: 500
    })

    if (data === undefined) {
        return (
            <div className="flex justify-center w-full mt-24">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="w-8 h-8 animate-spin text-zinc-500" />
                    <h3 className="font-semibold text-xl">Loading your order...</h3>
                    <p>This won't take long.</p>
                </div>
            </div>
        )
    }

    if (data === false) {
        return (
            <div className="flex justify-center w-full mt-24">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="w-8 h-8 animate-spin text-zinc-500" />
                    <h3 className="font-semibold text-xl">Verifying your payment...</h3>
                    <p>This may take a moment.</p>
                </div>
            </div>
        )
    }

    const { configuration, billingAddress, shippingAddress, amount } = data
    const { color } = configuration

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-xl">
                    <p className="text-base font-medium text-primary">Thank you for your order!</p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">A new custom iPhone case is heading your way!</h1>
                    <p className="mt-2 text-base text-zinc-500">We've received your order and have begun processing it.</p>
                    <div className="mt-12 text-sm font-medium">
                        <p className="text-zinc-900">Order Number</p>
                        <p className="mt-2 text-zinc-500">{orderId}</p>
                    </div>
                </div>
                <div className="mt-10 border-t border-zinc-200">
                    <div className="flex flex-col flex-auto mt-10">
                        <h4 className="font-semibold text-zinc-900">You've made a fantastic decision!</h4>
                        <p className="mt-2 text-sm text-zinc-600">
                            We at CellShield are thrilled to create a custom iPhone case just for you. Our cases are designed with exceptional durability to protect your device from everyday wear and tear, ensuring it stays looking brand new. Plus, with our exclusive 3-year print warranty, you can enjoy peace of mind knowing that if anything happens to your case, we offer a free replacement. We can't wait for you to experience the quality and protection that CellShield provides!
                        </p>
                    </div>
                </div>
                <div className="flex space-x-6 overflow-hidden mt-4 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
                    <PhonePreview croppedImageUrl={configuration.croppedImageUrl!} color={color!} />
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-x-6 py-10 text-sm">
                        <div>
                            <p className="font-medium text-gray-900">Shipping Address</p>
                            <div className="mt-2 text-zinc-700">
                                <address className="not-italic">
                                    <span className="block">{shippingAddress?.name}</span>
                                    <span className="block">{shippingAddress?.street}</span>
                                    <span className="block">{shippingAddress?.postalCode} {shippingAddress?.city}</span>
                                </address>
                            </div>
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">Billing Address</p>
                            <div className="mt-2 text-zinc-700">
                                <address className="not-italic">
                                    <span className="block">{billingAddress?.name}</span>
                                    <span className="block">{billingAddress?.street}</span>
                                    <span className="block">{billingAddress?.postalCode} {billingAddress?.city}</span>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 border-t border-zinc-200 py-10 text-sm">
                        <div>
                            <p className="font-medium text-zinc-900">Payment Status</p>
                            <p className="mt-2 text-zinc-700">Paid</p>
                        </div>
                        <div>
                            <p className="font-medium text-zinc-900">Shipping Method</p>
                            <p className="mt-2 text-zinc-700">DHL, typically received within 3 to 7 business days</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 border-t border-zinc-200 pt-10 text-sm">
                    <div className="flex justify-between">
                        <p className="font-medium text-zinc-900">Subtotal</p>
                        <p className="text-zinc-700">{formatPrice(amount)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-medium text-zinc-900">Shipping</p>
                        <p className="text-zinc-700">{formatPrice(0)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-medium text-zinc-900">Total</p>
                        <p className="text-zinc-700">{formatPrice(amount)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYou