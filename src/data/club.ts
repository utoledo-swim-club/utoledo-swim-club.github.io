// Club info used across the whole site.
// Change something here (email, practice times, dues) and every page updates.

export const club = {
  name: 'UToledo Swim Club',
  tagline: 'A student-run swim club at the University of Toledo.',
  email: 'swimming@utoledo.edu',
  instagramHandle: '@swimclub_utoledo',
  instagramUrl: 'https://instagram.com/swimclub_utoledo',
  invonetUrl: 'https://invonet.utoledo.edu/organization/swim-club',
  location: 'Student Recreation Center Pool',
  dues: 'TBD per semester', // e.g. '$40 per semester'
};

// Weekly practices. Add, remove or edit rows here.
export const practices = [
  { day: 'Monday', time: '7:00 to 8:00 PM' },
  { day: 'Tuesday', time: '7:00 to 8:00 PM' },
  { day: 'Thursday', time: '7:00 to 8:00 PM' },
];

// Short version for small spaces, like the bar under the hero.
export const practiceSummary = 'Mon, Tue, Thu at 7 PM';
