// jshint esversion:6
import { useState } from "react";

function useImageUpload() {

    const [currentImage, setCurrentImage] = useState<File>();
    const [previewImage, setPreviewImage] = useState<string>();

    return (
        null
    );
}

export { useImageUpload }