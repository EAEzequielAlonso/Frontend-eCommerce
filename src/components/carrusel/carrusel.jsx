"use client"

import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function Carrusel () {
    
    const images = [
        {original: "/image/banner1.png",
         originalHeight: "400px"
        },
        {original: "/image/banner2.png",
            originalHeight: "400px"
        },
        {original: "/image/banner3.png",
            originalHeight: "400px"
        },
    ]
    
    return (
        <div className = "-z-10 h-94 w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] mt-5 rounded-2xl shadow-xl">
            <ImageGallery 
            items={images}
            slideDuration={1000}
            showPlayButton={false}
            showFullscreenButton={false}
            showBullets={true}
            showPlay={true}

            />
        </div>
    )
}