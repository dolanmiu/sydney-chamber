interface InstagramPhotoSize {
    width: number;
    height: number;
    url: string;
}

interface InstagramPhotoData {
    id: string;
    images: {
        standard_resolution: InstagramPhotoSize;
        low_resolution: InstagramPhotoSize;
        thumbnail: InstagramPhotoSize;
    };
    link: string;
}

interface InstagramPhotoResponse {
    pagination: {
        next_max_id: string;
        next_url: string;
    };
    data: InstagramPhotoData[];
    meta: number;
}
