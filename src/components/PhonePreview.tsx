"use client"

import { CaseColor } from "@prisma/client"
import { useEffect, useRef, useState } from "react"
import { AspectRatio } from "./ui/aspect-ratio"
import { cn } from "@/lib/utils"

const PhonePreview = ({ croppedImageUrl, color }: {
    croppedImageUrl: string,
    color: CaseColor
}) => {
    const ref = useRef<HTMLDivElement>(null)

    const [renderedDimensions, setRenderedDimensions] = useState({
        height: 0,
        width: 0,
    })

    const handleResize = () => {
        if (!ref.current) {
            return
        }
        const { width, height } = ref.current.getBoundingClientRect()
        setRenderedDimensions({ width, height })
    }

    useEffect(() => {
        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [ref.current])

    let caseBackgroundColor = "bg-zinc-900"
    if (color === "red") {
        caseBackgroundColor = "bg-red-900"
    }
    if (color === "rose") {
        caseBackgroundColor = "bg-rose-300"
    }
    if (color === "blue") {
        caseBackgroundColor = "bg-blue-900"
    }

    return (
        <AspectRatio
            ref={ref}
            ratio={3000 / 2001}
            className="relative">
            <div className="absolute z-20 scale-[1.0352]" style={{
                left: renderedDimensions.width / 2 - renderedDimensions.width / (1216 / 121),
                top: renderedDimensions.height / 6.22,
            }}>
                <img
                    src={croppedImageUrl}
                    width={renderedDimensions.width / (3000 / 637)}
                    className={cn("phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]", caseBackgroundColor)} />
            </div>
            <div className="relative w-full h-full z-40">
                <img src="/clearphone.png" alt="phone in hand" className="w-full h-full pointer-events-none antialiased rounded-md" />
            </div>
        </AspectRatio>
    )
}

export default PhonePreview