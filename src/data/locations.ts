export interface Location {
  id: string;
  name: string;
  address: string;
  suburb: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const locations: Location[] = [
  {
    id: "diep-river",
    name: "Diep River Clinic",
    address: "123 Main Road, Diep River",
    suburb: "Diep River, Cape Town, 7800",
    phone: "+27 21 712 0001",
    email: "diepriver@royalvet.co.za",
    hours: {
      weekdays: "Mon–Fri: 08:00 – 18:00",
      saturday: "Sat: 08:00 – 13:00",
      sunday: "Sun: Closed (Emergency only)",
    },
    coordinates: {
      lat: -34.0509,
      lng: 18.4589,
    },
  },
  {
    id: "n1-city",
    name: "N1 City Clinic",
    address: "45 Frans Conradie Drive, N1 City",
    suburb: "Goodwood, Cape Town, 7460",
    phone: "+27 21 595 0002",
    email: "n1city@royalvet.co.za",
    hours: {
      weekdays: "Mon–Fri: 07:30 – 18:30",
      saturday: "Sat: 08:00 – 14:00",
      sunday: "Sun: 09:00 – 12:00",
    },
    coordinates: {
      lat: -33.9145,
      lng: 18.5648,
    },
  },
];
