// jshint esversion:6
import { useState } from "react";
import defaultAvatar from "../../../assets/admin/defaultUserProfile.webp";
import { EditSVG } from "../../../assets/admin";


interface UploadImageProps {
    submitImage: (event: any) => void
}

function UploadImage({ submitImage }: UploadImageProps) {

    // Hold the Image preview
    const [previewImage, setPreviewImage] = useState<string>(defaultAvatar)

    // Submit Image
    function handleImageFileUpload(event: any) {
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
        submitImage(event);
    }

    return (
        <div className="relative w-full h-full">
            <img className="w-full h-full" src={previewImage} alt={defaultAvatar} />
            <div className="absolute inset-0">
                {/* Image  */}
                <div className="relative w-full h-full overflow-hidden">
                    <label className="absolute top-2 right-2" htmlFor="imageFileUpload"> <span className="text-[#ffffff]"><EditSVG size={20} /></span></label>
                    <input className="absolute inset-0 cursor-pointer opacity-0 " type="file" id="imageFileUpload" onChange={handleImageFileUpload} />
                </div>
            </div>
        </div>
    );
}

export { UploadImage }