"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import Dropzone, {FileRejection} from "react-dropzone"

const Page = () => {

    const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const onDropAccepted = () => {

    }
    const onDropRejected = () => {

    }

    return (
        <div className={cn("relative w-full h-full flex-1 my-16 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center", {
            "ring-blue-900/25 bg-blue-900/10" : isDragOver})}>
            <div className="relative flex flex-1 flex-col items-center justify-center w-full">
                <Dropzone accept={{
                    "image/png": [".png"],
                    "image/jpg": [".jpg"],
                    "image/jpeg": [".jpeg"],
                }} 
                onDropAccepted={onDropAccepted} 
                onDropRejected={onDropRejected}
                onDragEnter={() => setIsDragOver(true)}
                onDragLeave={() => setIsDragOver(false)}
                >
                    {({getRootProps, getInputProps}) => (
                        <div className="w-full h-full flex flex-1 flex-col items-center justify-center" {...getRootProps()}>
                            <input {...getInputProps()}/>
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    )
}

export default Page