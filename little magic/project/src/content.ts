// =================================================================
//  EDIT EVERYTHING HERE  —  this is the only file you need to touch
//  to personalize the whole website. 💗
// =================================================================

export const content = {
  // The name shown throughout the site
  name: '(Name Here)',

  // Background music — replace with your own audio file in /public
  // e.g. put a file at public/our-song.mp3 and set src: '/our-song.mp3'
  music: {
    src: '', // <-- add an audio file path like '/song.mp3'
    title: 'Our Song',
    artist: 'Just For You',
  },

  // Page 5 — the song that reminds you of them
  song: {
    cover:
      'photo.jpg', // <-- add a cover image path like '/cover.jpg'
    title: 'A Song That Reminds Me of You',
    artist: 'Replace with your artist',
    // Audio file for the dedicated song player. Same as music.src if you like.
    src: '',
  },

  // Page 7 — special memory video. Replace with your own file in /public
  // e.g. put a file at public/memory.mp4 and set src: '/memory.mp4'
  video: {
    src: '',
    poster:
      'video.webp', // <-- add a poster image path like '/poster.jpg'
    caption: 'A little video I kept just for you.',
  },

  // Page 2 — the handwritten letter
  letter: [
    " Write a birthday message or heartfelt letter to make their day extra special.🎂💖",
  ],

  // Page 3 — photo memories. Replace url with your own photos.
  photos: [
    {
      url: 'photo.jpg',
      caption: 'short message about the photo',
      rotate: -4,
    },
    {
      url: 'photo.jpg',
      caption: 'short message about the photo',
      rotate: 3,
    },
    {
      url: 'photo.jpg',
      caption: 'short message about the photo',
      rotate: -3,
    },
    {
      url: 'photo.jpg',
      caption: 'short message about the photo',
      rotate: 4,
    },
    {
      url: 'photo.jpg',
      caption: 'short message about the photo',
      rotate: -5,
    },
      {
        url: 'photo.jpg',
      caption: 'short message about the photo',
      rotate: 2,
    },
  ],

  // Page 4 — memory timeline
  timeline: [
    {
      date: 'Date of special memory',
      title: 'The title of the memory',
      story: 'A short description of the memory. You can add as many memories as you like.',
      photo:
        'photo.jpg',
    },
    {
      date: 'Date of special memory',
      title: 'The title of the memory',
      story: 'A short description of the memory. You can add as many memories as you like.',
      photo:
        'photo.jpg',
    },
    {
      date: 'Date of special memory',
      title: 'The title of the memory',
      story: 'A short description of the memory. You can add as many memories as you like.',
      photo:
        'photo.jpg',
    },
    {
      date: 'Date of special memory',
      title: 'The title of the memory',
      story: 'A short description of the memory. You can add as many memories as you like.',
      photo:
        'photo.jpg',
    },
  ],

  // Page 6 — little things I love about you
  littleThings: [
    { emoji: 'Emoji', text: 'Thing 1' },
    { emoji: 'Emoji', text: 'Thing 2' },
    { emoji: 'Emoji', text: 'Thing 3' },
    { emoji: 'Emoji', text: 'Thing 4' },
    { emoji: 'Emoji', text: 'Thing 5' },
    { emoji: 'Emoji', text: 'Thing 6' },
  ],

  // Page 8 — the hidden surprise message
  surpriseMessage: [
    'Suprise message goes here. You can add as many lines as you like. 💖',
  ],
};

export type SiteContent = typeof content;
