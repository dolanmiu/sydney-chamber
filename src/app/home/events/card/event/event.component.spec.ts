import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';

describe('EventComponent', () => {
    let component: EventComponent;
    let fixture: ComponentFixture<EventComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventComponent);
        component = fixture.componentInstance;

        component.event = {
            venue: {
                address: {
                    address_1: '70-72 Campbell Street',
                    address_2: null,
                    city: 'Surry Hills',
                    region: 'NSW',
                    postal_code: '2010',
                    country: 'AU',
                    latitude: '-33.8798623',
                    longitude: '151.2096914',
                    localized_address_display: '70-72 Campbell Street, Surry Hills, NSW 2010',
                    localized_area_display: 'Surry Hills, NSW',
                    localized_multi_line_address_display: ['70-72 Campbell Street', 'Surry Hills, NSW 2010'],
                },
                resource_uri: 'https://www.eventbriteapi.com/v3/venues/31201681/',
                id: '31201681',
                age_restriction: null,
                capacity: null,
                name: 'Soultrap bar',
                latitude: '-33.8798623',
                longitude: '151.2096914',
            },
            event: {
                name: {
                    text: 'The Chamber Project',
                    html: 'The Chamber Project',
                },
                description: {
                    text: '',
                    html: '',
                },
                id: '59564103838',
                url: 'https://www.eventbrite.com.au/e/the-chamber-project-tickets-59564103838',
                start: {
                    timezone: 'Australia/Sydney',
                    local: '2019-05-02T18:30:00',
                    utc: '2019-05-02T08:30:00Z',
                },
                end: {
                    timezone: 'Australia/Sydney',
                    local: '2019-05-02T20:30:00',
                    utc: '2019-05-02T10:30:00Z',
                },
                organization_id: '300153539490',
                created: '2019-03-29T02:15:49Z',
                changed: '2019-03-29T04:07:02Z',
                capacity: 72,
                capacity_is_custom: false,
                status: 'draft',
                currency: 'AUD',
                listed: true,
                shareable: true,
                invite_only: false,
                online_event: false,
                show_remaining: false,
                tx_time_limit: 480,
                hide_start_date: false,
                hide_end_date: false,
                locale: 'en_AU',
                is_locked: false,
                privacy_setting: 'unlocked',
                is_series: true,
                is_series_parent: false,
                inventory_type: 'limited',
                is_reserved_seating: false,
                show_pick_a_seat: false,
                show_seatmap_thumbnail: false,
                show_colors_in_seatmap_thumbnail: false,
                source: 'create_2.0',
                is_free: false,
                version: '3.0.0',
                summary: '',
                logo_id: null,
                organizer_id: '19898439833',
                venue_id: '31201681',
                category_id: '103',
                subcategory_id: null,
                format_id: '6',
                resource_uri: 'https://www.eventbriteapi.com/v3/events/59564103838/',
                is_externally_ticketed: false,
                series_id: '59564102835',
                logo: null,
            },
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
