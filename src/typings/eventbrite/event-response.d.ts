interface EventResponse {
    pagination: {
        object_count: number;
        page_number: number;
        page_size: number;
        page_count: number;
        has_more_items: boolean;
    };
    events: EventPackage[];
}

interface EventPackage {
    event: EventBriteEvent,
    venue: VenueResponse,
}

interface EventBriteEvent {
    name: {
        text: string;
        html: string;
    };
    description: {
        text: string;
        html: string;
    };
    id: string;
    url: string;
    start: {
        timezone: string;
        local: string;
        utc: string;
    };
    end: {
        timezone: string;
        local: string;
        utc: string;
    };
    organization_id: string;
    created: string;
    changed: string;
    capacity: number;
    capacity_is_custom: boolean;
    status: string;
    currency: string;
    listed: boolean;
    shareable: boolean;
    invite_only: boolean;
    online_event: boolean;
    show_remaining: boolean;
    tx_time_limit: number;
    hide_start_date: boolean;
    hide_end_date: boolean;
    locale: string;
    is_locked: boolean;
    privacy_setting: string;
    is_series: boolean;
    is_series_parent: boolean;
    inventory_type: string;
    is_reserved_seating: boolean;
    show_pick_a_seat: boolean;
    show_seatmap_thumbnail: boolean;
    show_colors_in_seatmap_thumbnail: boolean;
    source: string;
    is_free: boolean;
    version: string;
    summary: string;
    logo_id: string;
    organizer_id: string;
    venue_id: string;
    category_id: string;
    subcategory_id: string;
    format_id: string;
    resource_uri: string;
    is_externally_ticketed: boolean;
    series_id: string;
    logo: string;
}
