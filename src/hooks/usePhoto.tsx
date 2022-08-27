import { useState } from "react"

export type photoT = {
    file: File,
    src: string,
}

const usePhoto = () => {
    const [photos, setPhotos] = useState<photoT[]>([]);

    const setPhotoInformation = (files: FileList) => {
        const newPhotos:photoT[] = []
        for(let i=0; i<files.length; i++){
            const file = files[i];

            const newPhoto = {
                file: file,
                src: URL.createObjectURL(file)
            };

            newPhotos.push(newPhoto);
        }

        setPhotos(photos => {
            return [...photos, ...newPhotos].slice(0, 4);
        })
    }

    return {photos, setPhotoInformation}
}

export default usePhoto