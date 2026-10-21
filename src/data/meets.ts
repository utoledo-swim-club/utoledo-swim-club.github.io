// Meets list. Newest first.
// When a meet is over, change its status from 'upcoming' to 'past' and add results in notes.
// The home page shows the first 'upcoming' meet as "Next meet".

export interface Meet {
  name: string;
  date: string; // how the date should read on the site, e.g. 'Nov 14, 2026'
  location: string;
  status: 'upcoming' | 'past';
  notes?: string;
}

export const meets: Meet[] = [
  {
    name: 'Spring Invitational',
    date: 'May 2026',
    location: 'TBD',
    status: 'upcoming',
    notes: 'Details coming soon.',
  },
];

export const upcomingMeets = meets.filter((m) => m.status === 'upcoming');
export const pastMeets = meets.filter((m) => m.status === 'past');
export const nextMeet = upcomingMeets[0];
