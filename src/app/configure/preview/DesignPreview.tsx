import Phone from "@/components/Phone"
import { cn } from "@/lib/utils"
import { COLORS, MODELS } from "@/validators/option-validator"
import { Configuration } from "@prisma/client"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"
import Confetti from "react-dom-confetti"

const DesignPreview = ({configuration}: {configuration: Configuration}) => {

    const [showConfetti, setShowConfetti] = useState(false)
    useEffect(() => setShowConfetti(true))

    const {color, model} = configuration

    const tw = COLORS.find((supportedColor) => supportedColor.value === color)?.tw
    const {label: modellabel} = MODELS.options.find(({value}) => value === model)!

    return (
        <>
            <div className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center" aria-hidden="true">
                <Confetti active={showConfetti} config={{ elementCount: 300, spread: 100 }} />
            </div>

            <div className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
                    <Phone imgSrc={configuration.croppedImageUrl!} className={cn(`bg-${tw}`)} />
                </div>
                <div className="mt-6 sm:col-span-9 sm:mt-0 md:row-end-1">
                    <h3 className="font-bold text-3xl tracking-tight text-gray-900">Your {modellabel} Case</h3>
                    <div className="flex items-center mt-3 gap-1.5 text-base">
                        <Check className="w-4 h-4 text-blue-500" />
                        Available and ready for immediate shipment!
                    </div>
                </div>
                <div className="sm:col-span-12 md:col-span-9 text-base">
                    <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                        <div>
                            <p className="font-medium text-zinc-950">
                                Product Highlights
                            </p>
                            <ol className="mt-3 text-zinc-700 list-disc list-inside">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignPreview