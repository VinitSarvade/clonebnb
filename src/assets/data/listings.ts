import list from './listings.json';

export const LISTINGS = (list as Listing[]).filter(
  (item) =>
    (item.xl_picture_url || item.medium_url || item.thumbnail_url || '')
      .length > 0
);

export interface Listing {
  id: string;
  listing_url: string;
  scrape_id: string;
  last_scraped: string;
  name: string;
  summary: string;
  space: string;
  description: string;
  experiences_offered: string;
  neighborhood_overview: string;
  notes: string;
  transit: string;
  access: string;
  interaction: string;
  house_rules?: any;
  thumbnail_url?: any;
  medium_url?: any;
  picture_url: PictureUrl;
  xl_picture_url?: any;
  host_id: string;
  host_url: string;
  host_name: string;
  host_since: string;
  host_location: string;
  host_about?: any;
  host_response_time: string;
  host_response_rate: number;
  host_acceptance_rate: string;
  host_thumbnail_url: string;
  host_picture_url: string;
  host_neighbourhood?: any;
  host_listings_count: number;
  host_total_listings_count: number;
  host_verifications: string[];
  street: string;
  neighbourhood?: any;
  neighbourhood_cleansed: string;
  neighbourhood_group_cleansed?: any;
  city: string;
  state: string;
  zipcode: string;
  market: string;
  smart_location: string;
  country_code: string;
  country: string;
  latitude: string;
  longitude: string;
  property_type: string;
  room_type: string;
  accommodates: number;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  bed_type: string;
  amenities: string[];
  square_feet?: any;
  price: number;
  weekly_price?: any;
  monthly_price?: any;
  security_deposit?: any;
  cleaning_fee?: any;
  guests_included: number;
  extra_people: number;
  minimum_nights: number;
  maximum_nights: number;
  calendar_updated: string;
  has_availability?: any;
  availability_30: number;
  availability_60: number;
  availability_90: number;
  availability_365: number;
  calendar_last_scraped: string;
  number_of_reviews: number;
  first_review?: any;
  last_review?: any;
  review_scores_rating?: any;
  review_scores_accuracy?: any;
  review_scores_cleanliness?: any;
  review_scores_checkin?: any;
  review_scores_communication?: any;
  review_scores_location?: any;
  review_scores_value?: any;
  license?: any;
  jurisdiction_names?: any;
  cancellation_policy: string;
  calculated_host_listings_count: number;
  reviews_per_month?: any;
  geolocation: Geolocation;
  features: string[];
}

interface Geolocation {
  lon: number;
  lat: number;
}

interface PictureUrl {
  thumbnail: boolean;
  filename: string;
  format: string;
  width: number;
  mimetype: string;
  etag: string;
  id: string;
  last_synchronized: string;
  color_summary: string[];
  height: number;
  url: string;
}
