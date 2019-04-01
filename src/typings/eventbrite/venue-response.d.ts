interface VenueResponse {
    address: {
        address_1: string;
        address_2: string | null;
        city: string;
        region: string;
        postal_code: string;
        country: string;
        latitude: number;
        longitude: number;
        localized_address_display: string;
        localized_area_display: string;
        localized_multi_line_address_display: string[];
    };
    resource_uri: string;
    id: string;
    age_restriction: number | null;
    capacity: number | null;
    name: string;
    latitude: string;
    longitude: string;
}
