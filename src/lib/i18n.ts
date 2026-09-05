// UI language translations.
// Content (lesson text) stays in Markdown — this only translates the site shell.

export type UiLang = 'en' | 'bn' | 'hi'

export interface Translations {
  // Nav
  nav: {
    home: string
    courses: string
    review: string
    settings: string
    about: string; profile: string; qualifications: string; experience: string; awards: string; memberships: string; publications: string; services: string; appointment: string; contact: string; more: string
  }
  // Home
  home: {
    welcome: string
    tagline: string
    startLearning: string
    chooseYourPath: string
    iSpeak: string
    iWantToLearn: string
    availableCourses: string
    moreComing: string
    whyRxProfile: string
    cefr: string
    cefrDesc: string
    focused: string
    focusedDesc: string
    srs: string
    srsDesc: string
    anyDevice: string
    anyDeviceDesc: string
    pairNotAvailable: string
  }
  // Courses
  courses: {
    title: string
    iSpeak: string
    iWantToLearn: string
    all: string
    found: string
    foundPlural: string
    clear: string
    noMatch: string
    noMatchHint: string
    moreComing: string
    learners: string
  }
  // Pair (level selector)
  pair: {
    chooseLevel: string
    available: string
    soon: string
  }
  // Level (stage list)
  level: {
    stages: string
    startAnytime: string
    startHere: string
    lessons: string
  }
  // Stage
  stage: {
    of: string
    words: string
    markComplete: string
    alreadyComplete: string
    flashcards: string
    previous: string
    next: string
    levelComplete: string
    backTo: string
  }
  // Review
  review: {
    title: string
    subtitle: string
    dueCards: string
    noDue: string
    startReview: string
    allCaughtUp: string
    allCaughtUpMsg: string
    hard: string
    good: string
    easy: string
  }
  // Search
  search: {
    title: string
    placeholder: string
    noResults: string
    startTyping: string
  }
  // Settings
  settings: {
    title: string
    appearance: string
    theme: string
    themeLight: string
    themeDark: string
    fontSize: string
    fontSmall: string
    fontMedium: string
    fontLarge: string
    language: string
    languageDesc: string
    contentLanguage: string
    contentLanguageDesc: string
    speciality: string
    specialityDesc: string
    specialityNone: string
    progress: string
    streak: string
    streakDays: string
    totalComplete: string
    stages: string
    resetProgress: string
    resetConfirm: string
    resetDone: string
  }
  // Common
  common: {
    back: string
    home: string
    loading: string
    streak: string
    unavailable: string
    changeLanguage: string
  }
  doctor: {
    profileEyebrow: string; profileBioLabel: string; profileBioHeading: string; profileFocusLabel: string; profileFocusHeading: string; viewServices: string; profileDetailsLabel: string; profileDetailsHeading: string; currentPosition: string; languagesSpoken: string; nextStep: string; bookAppointment: string
    servicesEyebrow: string; availableServices: string; consultationCtaHeading: string; consultationCtaText: string
    phoneBooking: string; phoneBookingHeading: string; phoneBookingText: string; visitDetails: string; address: string; consultationDays: string; hours: string; beforeVisit: string; readyToSchedule: string; readyToScheduleText: string; bookByPhone: string
  }
  vocabulary: {
    title: string
    allPairs: string
    allLevels: string
    words: string
    unseen: string
    learning: string
    mastered: string
  }
  progress: {
    title: string
    wordsLearned: string
    mastered: string
    learning: string
    newWords: string
  }
  notes: {
    title: string
    placeholder: string
    saved: string
  }
  quiz: {
    title: string
    correct: string
    wrong: string
    score: string
    retry: string
    next: string
  }
  wotd: {
    title: string
    viewStage: string
  }
}

const en: Translations = {
  nav: { home: 'Home', courses: 'Courses', review: 'Review', settings: 'Settings', about:'About', profile:'Profile', qualifications:'Qualifications', experience:'Experience', awards:'Awards', memberships:'Memberships', publications:'Publications', services:'Services', appointment:'Appointment', contact:'Contact', more:'More' },
  home: {
    welcome: 'Welcome back 👋',
    tagline: 'Structured CEFR-based lessons. Go from A1 to C2 at your own pace.',
    startLearning: 'Start Learning',
    chooseYourPath: 'Choose Your Path',
    iSpeak: 'I speak',
    iWantToLearn: 'I want to learn',
    availableCourses: 'Available Courses',
    moreComing: 'More language pairs coming soon',
    whyRxProfile: 'About Dr. Aysharja',
    cefr: 'CEFR Structured',
    cefrDesc: 'A1 to C2 path',
    focused: 'Focused Lessons',
    focusedDesc: '15–20 min each',
    srs: 'Spaced Review',
    srsDesc: 'SRS flashcards',
    anyDevice: 'Any Device',
    anyDeviceDesc: 'Phone to desktop',
    pairNotAvailable: 'not yet available. Try Bengali → German!',
  },
  courses: {
    title: 'All Courses',
    iSpeak: 'I speak',
    iWantToLearn: 'I want to learn',
    all: 'All',
    found: '{{n}} course found',
    foundPlural: '{{n}} courses found',
    clear: 'Clear',
    noMatch: 'No courses match this filter',
    noMatchHint: 'Try selecting different languages',
    moreComing: 'More language pairs coming soon',
    learners: 'learners',
  },
  pair: { chooseLevel: 'Choose Your Level', available: 'Available', soon: 'Soon' },
  level: { stages: 'Stages', startAnytime: 'Start anytime', startHere: 'Start here', lessons: 'lessons' },
  stage: {
    of: 'of',
    words: 'words',
    markComplete: 'Mark as Complete',
    alreadyComplete: '✓ Completed',
    flashcards: 'Vocabulary Flashcards',
    previous: 'Previous',
    next: 'Next',
    levelComplete: 'Level complete!',
    backTo: 'Back to',
  },
  review: {
    title: 'Review',
    subtitle: 'Spaced repetition flashcards',
    dueCards: 'due',
    noDue: 'Nothing due',
    startReview: 'Start Review',
    allCaughtUp: 'All caught up! 🎉',
    allCaughtUpMsg: 'No cards due for review. Keep studying to add more!',
    hard: 'Hard 😓',
    good: 'Good 👍',
    easy: 'Easy 🎉',
  },
  search: {
    title: 'Search',
    placeholder: 'Search lessons...',
    noResults: "No lessons found for '{{q}}'",
    startTyping: 'Start typing to search all lessons',
  },
  settings: {
    title: 'Settings',
    appearance: 'Appearance',
    theme: 'Theme',
    themeLight: 'Light',
    themeDark: 'Dark',
    fontSize: 'Font Size',
    fontSmall: 'Small',
    fontMedium: 'Medium',
    fontLarge: 'Large',
    language: 'Site Language',
    languageDesc: 'Language used for menus and buttons',
    contentLanguage: 'Content Language',
    contentLanguageDesc: 'Language for profile content',
    speciality: 'Medical Speciality',
    specialityDesc: 'Customize appearance based on speciality',
    specialityNone: 'Not specified',
    progress: 'Your Progress',
    streak: 'Current streak',
    streakDays: 'days',
    totalComplete: 'Stages completed',
    stages: 'stages',
    resetProgress: 'Reset Progress',
    resetConfirm: 'Are you sure? This will delete all your progress and streak.',
    resetDone: 'Progress reset.',
  },
  common: { back: 'Back', home: 'Home', loading: 'Loading...', streak: 'day streak', unavailable: 'This section is not yet available.', changeLanguage: 'Change language' },
  doctor: { profileEyebrow: 'A closer introduction', profileBioLabel: 'In her own words', profileBioHeading: 'Care begins with listening.', profileFocusLabel: 'Areas of focus', profileFocusHeading: 'Focused support for every stage.', viewServices: 'View all services', profileDetailsLabel: 'At a glance', profileDetailsHeading: 'A few helpful details.', currentPosition: 'Current position', languagesSpoken: 'Languages spoken', nextStep: 'Your next step', bookAppointment: 'Book an appointment', servicesEyebrow: 'Services', availableServices: 'Available services', consultationCtaHeading: 'Ready to book a consultation?', consultationCtaText: 'Call the clinic to arrange your appointment.', phoneBooking: 'Phone booking', phoneBookingHeading: 'Appointments are booked by phone', phoneBookingText: 'Call the clinic directly to find a convenient consultation time.', visitDetails: 'Visit details', address: 'Address', consultationDays: 'Consultation days', hours: 'Hours', beforeVisit: 'Before your visit', readyToSchedule: 'Ready to schedule?', readyToScheduleText: 'Call to book your appointment.', bookByPhone: 'Book by phone' },
  vocabulary: {
    title: 'Vocabulary',
    allPairs: 'All Courses',
    allLevels: 'All Levels',
    words: 'words',
    unseen: 'New',
    learning: 'Learning',
    mastered: 'Mastered',
  },
  progress: {
    title: 'Progress',
    wordsLearned: 'Words Learned',
    mastered: 'Mastered',
    learning: 'Learning',
    newWords: 'New',
  },
  notes: {
    title: 'My Notes',
    placeholder: 'Add notes for this stage...',
    saved: 'Saved',
  },
  quiz: {
    title: 'Quiz',
    correct: 'Correct!',
    wrong: 'Wrong',
    score: 'Your score',
    retry: 'Try Again',
    next: 'Next',
  },
  wotd: {
    title: 'Word of the Day',
    viewStage: 'View Lesson',
  },
}

const bn: Translations = {
  nav: { home: 'হোম', courses: 'কোর্স', review: 'রিভিউ', settings: 'সেটিংস', about:'পরিচিতি', profile:'প্রোফাইল', qualifications:'যোগ্যতা', experience:'অভিজ্ঞতা', awards:'পুরস্কার', memberships:'সদস্যপদ', publications:'প্রকাশনা', services:'সেবা', appointment:'অ্যাপয়েন্টমেন্ট', contact:'যোগাযোগ', more:'আরও' },
  home: {
    welcome: 'স্বাগতম 👋',
    tagline: 'কাঠামোবদ্ধ CEFR পাঠ। নিজের গতিতে A1 থেকে C2 পর্যন্ত শিখুন।',
    startLearning: 'শেখা শুরু করুন',
    chooseYourPath: 'আপনার পথ বেছে নিন',
    iSpeak: 'আমি বলি',
    iWantToLearn: 'আমি শিখতে চাই',
    availableCourses: 'উপলব্ধ কোর্স',
    moreComing: 'শীঘ্রই আরও ভাষা জুটি আসছে',
    whyRxProfile: 'ডা. ঐশর্য্য সম্পর্কে',
    cefr: 'CEFR কাঠামো',
    cefrDesc: 'A1 থেকে C2',
    focused: 'মনোযোগী পাঠ',
    focusedDesc: 'প্রতিটি ১৫–২০ মিনিট',
    srs: 'স্পেসড রিভিউ',
    srsDesc: 'SRS ফ্ল্যাশকার্ড',
    anyDevice: 'যেকোনো ডিভাইস',
    anyDeviceDesc: 'ফোন থেকে ডেস্কটপ',
    pairNotAvailable: 'এখনো পাওয়া যাচ্ছে না। বাংলা → জার্মান চেষ্টা করুন!',
  },
  courses: {
    title: 'সব কোর্স',
    iSpeak: 'আমি বলি',
    iWantToLearn: 'আমি শিখতে চাই',
    all: 'সব',
    found: '{{n}}টি কোর্স পাওয়া গেছে',
    foundPlural: '{{n}}টি কোর্স পাওয়া গেছে',
    clear: 'ফিল্টার মুছুন',
    noMatch: 'এই ফিল্টারে কোনো কোর্স নেই',
    noMatchHint: 'ভিন্ন ভাষা বেছে নিন',
    moreComing: 'শীঘ্রই আরও ভাষা জুটি আসছে',
    learners: 'শিক্ষার্থী',
  },
  pair: { chooseLevel: 'আপনার স্তর বেছে নিন', available: 'উপলব্ধ', soon: 'শীঘ্রই' },
  level: { stages: 'ধাপসমূহ', startAnytime: 'যেকোনো সময় শুরু করুন', startHere: 'এখান থেকে শুরু করুন', lessons: 'পাঠ' },
  stage: {
    of: 'এর মধ্যে',
    words: 'শব্দ',
    markComplete: 'সম্পন্ন হিসেবে চিহ্নিত করুন',
    alreadyComplete: '✓ সম্পন্ন হয়েছে',
    flashcards: 'শব্দভাণ্ডার ফ্ল্যাশকার্ড',
    previous: 'আগের',
    next: 'পরের',
    levelComplete: 'স্তর সম্পন্ন!',
    backTo: 'ফিরে যান',
  },
  review: {
    title: 'রিভিউ',
    subtitle: 'স্পেসড রিপিটিশন ফ্ল্যাশকার্ড',
    dueCards: 'বাকি',
    noDue: 'কিছু বাকি নেই',
    startReview: 'রিভিউ শুরু করুন',
    allCaughtUp: 'সব সম্পন্ন! 🎉',
    allCaughtUpMsg: 'এখন কোনো কার্ড রিভিউ বাকি নেই। আরও পড়াশোনা করুন!',
    hard: 'কঠিন 😓',
    good: 'ভালো 👍',
    easy: 'সহজ 🎉',
  },
  search: {
    title: 'অনুসন্ধান',
    placeholder: 'পাঠ খুঁজুন...',
    noResults: "'{{q}}' এর জন্য কোনো পাঠ পাওয়া যায়নি",
    startTyping: 'সব পাঠ খুঁজতে টাইপ করুন',
  },
  settings: {
    title: 'সেটিংস',
    appearance: 'চেহারা',
    theme: 'থিম',
    themeLight: 'হালকা',
    themeDark: 'গাঢ়',
    fontSize: 'ফন্ট আকার',
    fontSmall: 'ছোট',
    fontMedium: 'মাঝারি',
    fontLarge: 'বড়',
    language: 'সাইটের ভাষা',
    languageDesc: 'মেনু ও বোতামের ভাষা',
    contentLanguage: 'সামগ্রী ভাষা',
    contentLanguageDesc: 'প্রোফাইল সামগ্রীর ভাষা',
    speciality: 'চিকিৎসা বিশেষত্ব',
    specialityDesc: 'বিশেষত্ব অনুযায়ী চেহারা কাস্টমাইজ করুন',
    specialityNone: 'নির্দিষ্ট নয়',
    progress: 'আপনার অগ্রগতি',
    streak: 'বর্তমান স্ট্রিক',
    streakDays: 'দিন',
    totalComplete: 'সম্পন্ন ধাপ',
    stages: 'ধাপ',
    resetProgress: 'অগ্রগতি রিসেট করুন',
    resetConfirm: 'আপনি কি নিশ্চিত? এটি আপনার সব অগ্রগতি ও স্ট্রিক মুছে দেবে।',
    resetDone: 'অগ্রগতি রিসেট হয়েছে।',
  },
  common: { back: 'ফিরে যান', home: 'হোম', loading: 'লোড হচ্ছে...', streak: 'দিনের স্ট্রিক', unavailable: 'এই বিভাগটি এখনো উপলভ্য নয়।', changeLanguage: 'ভাষা পরিবর্তন করুন' },
  doctor: { profileEyebrow: 'পরিচিতি', profileBioLabel: 'ডাক্তারের কথায়', profileBioHeading: 'যত্ন শুরু হয় মনোযোগ দিয়ে শোনা থেকে।', profileFocusLabel: 'বিশেষ যত্নের ক্ষেত্র', profileFocusHeading: 'প্রতিটি ধাপে সহায়তা।', viewServices: 'সব সেবা দেখুন', profileDetailsLabel: 'এক নজরে', profileDetailsHeading: 'কিছু প্রয়োজনীয় তথ্য।', currentPosition: 'বর্তমান পদ', languagesSpoken: 'ভাষাসমূহ', nextStep: 'পরবর্তী ধাপ', bookAppointment: 'অ্যাপয়েন্টমেন্ট নিন', servicesEyebrow: 'সেবাসমূহ', availableServices: 'উপলভ্য সেবাসমূহ', consultationCtaHeading: 'অ্যাপয়েন্টমেন্ট নিতে চান?', consultationCtaText: 'অ্যাপয়েন্টমেন্টের জন্য ক্লিনিকে ফোন করুন।', phoneBooking: 'ফোনে বুকিং', phoneBookingHeading: 'ফোনে অ্যাপয়েন্টমেন্ট নেওয়া হয়', phoneBookingText: 'সুবিধাজনক সময় জানতে সরাসরি ক্লিনিকে ফোন করুন।', visitDetails: 'ভিজিটের তথ্য', address: 'ঠিকানা', consultationDays: 'পরামর্শের দিন', hours: 'সময়', beforeVisit: 'ভিজিটের আগে', readyToSchedule: 'সময় নির্ধারণ করতে চান?', readyToScheduleText: 'অ্যাপয়েন্টমেন্টের জন্য ফোন করুন।', bookByPhone: 'ফোনে বুক করুন' },
  vocabulary: {
    title: 'শব্দভাণ্ডার',
    allPairs: 'সব কোর্স',
    allLevels: 'সব স্তর',
    words: 'শব্দ',
    unseen: 'নতুন',
    learning: 'শেখা হচ্ছে',
    mastered: 'শেখা হয়েছে',
  },
  progress: {
    title: 'অগ্রগতি',
    wordsLearned: 'শেখা শব্দ',
    mastered: 'শেখা হয়েছে',
    learning: 'শেখা হচ্ছে',
    newWords: 'নতুন',
  },
  notes: {
    title: 'আমার নোট',
    placeholder: 'এই পাঠের জন্য নোট লিখুন...',
    saved: 'সংরক্ষিত',
  },
  quiz: {
    title: 'কুইজ',
    correct: 'সঠিক!',
    wrong: 'ভুল',
    score: 'আপনার স্কোর',
    retry: 'আবার চেষ্টা করুন',
    next: 'পরবর্তী',
  },
  wotd: {
    title: 'আজকের শব্দ',
    viewStage: 'পাঠ দেখুন',
  },
}

const hi: Translations = {
  nav: { home: 'होम', courses: 'कोर्स', review: 'समीक्षा', settings: 'सेटिंग्स', about:'परिचय', profile:'प्रोफ़ाइल', qualifications:'योग्यताएँ', experience:'अनुभव', awards:'पुरस्कार', memberships:'सदस्यताएँ', publications:'प्रकाशन', services:'सेवाएँ', appointment:'अपॉइंटमेंट', contact:'संपर्क', more:'अधिक' },
  home: {
    welcome: 'वापस स्वागत है 👋',
    tagline: 'संरचित CEFR पाठ। अपनी गति से A1 से C2 तक जाएं।',
    startLearning: 'सीखना शुरू करें',
    chooseYourPath: 'अपना रास्ता चुनें',
    iSpeak: 'मैं बोलता/बोलती हूँ',
    iWantToLearn: 'मैं सीखना चाहता/चाहती हूँ',
    availableCourses: 'उपलब्ध कोर्स',
    moreComing: 'जल्द ही और भाषा जोड़े आएंगे',
    whyRxProfile: 'डॉ. आयशर्जा के बारे में',
    cefr: 'CEFR संरचित',
    cefrDesc: 'A1 से C2 तक',
    focused: 'केंद्रित पाठ',
    focusedDesc: 'हर 15–20 मिनट',
    srs: 'स्पेस्ड रिव्यू',
    srsDesc: 'SRS फ्लैशकार्ड',
    anyDevice: 'कोई भी डिवाइस',
    anyDeviceDesc: 'फोन से डेस्कटॉप',
    pairNotAvailable: 'अभी उपलब्ध नहीं है। बंगाली → जर्मन आजमाएं!',
  },
  courses: {
    title: 'सभी कोर्स',
    iSpeak: 'मैं बोलता/बोलती हूँ',
    iWantToLearn: 'मैं सीखना चाहता/चाहती हूँ',
    all: 'सभी',
    found: '{{n}} कोर्स मिला',
    foundPlural: '{{n}} कोर्स मिले',
    clear: 'साफ़ करें',
    noMatch: 'इस फ़िल्टर में कोई कोर्स नहीं',
    noMatchHint: 'अलग भाषाएँ चुनें',
    moreComing: 'जल्द ही और भाषा जोड़े आएंगे',
    learners: 'छात्र',
  },
  pair: { chooseLevel: 'अपना स्तर चुनें', available: 'उपलब्ध', soon: 'जल्द ही' },
  level: { stages: 'चरण', startAnytime: 'कभी भी शुरू करें', startHere: 'यहाँ से शुरू करें', lessons: 'पाठ' },
  stage: {
    of: 'का',
    words: 'शब्द',
    markComplete: 'पूर्ण के रूप में चिह्नित करें',
    alreadyComplete: '✓ पूर्ण हो गया',
    flashcards: 'शब्दावली फ्लैशकार्ड',
    previous: 'पिछला',
    next: 'अगला',
    levelComplete: 'स्तर पूर्ण!',
    backTo: 'वापस',
  },
  review: {
    title: 'समीक्षा',
    subtitle: 'स्पेस्ड रिपीटिशन फ्लैशकार्ड',
    dueCards: 'बाकी',
    noDue: 'कुछ बाकी नहीं',
    startReview: 'समीक्षा शुरू करें',
    allCaughtUp: 'सब पूरा हो गया! 🎉',
    allCaughtUpMsg: 'अभी कोई कार्ड समीक्षा के लिए नहीं है। और पढ़ते रहें!',
    hard: 'कठिन 😓',
    good: 'अच्छा 👍',
    easy: 'आसान 🎉',
  },
  search: {
    title: 'खोज',
    placeholder: 'पाठ खोजें...',
    noResults: "'{{q}}' के लिए कोई पाठ नहीं मिला",
    startTyping: 'सभी पाठ खोजने के लिए टाइप करें',
  },
  settings: {
    title: 'सेटिंग्स',
    appearance: 'दिखावट',
    theme: 'थीम',
    themeLight: 'हल्का',
    themeDark: 'गहरा',
    fontSize: 'फ़ॉन्ट आकार',
    fontSmall: 'छोटा',
    fontMedium: 'मध्यम',
    fontLarge: 'बड़ा',
    language: 'साइट की भाषा',
    languageDesc: 'मेनू और बटन की भाषा',
    contentLanguage: 'सामग्री भाषा',
    contentLanguageDesc: 'प्रोफाइल सामग्री की भाषा',
    speciality: 'चिकित्सा विशेषता',
    specialityDesc: 'विशेषता के अनुसार उपस्थिति को अनुकूलित करें',
    specialityNone: 'निर्दिष्ट नहीं',
    progress: 'आपकी प्रगति',
    streak: 'वर्तमान स्ट्रीक',
    streakDays: 'दिन',
    totalComplete: 'पूर्ण चरण',
    stages: 'चरण',
    resetProgress: 'प्रगति रीसेट करें',
    resetConfirm: 'क्या आप सुनिश्चित हैं? यह आपकी सारी प्रगति और स्ट्रीक हटा देगा।',
    resetDone: 'प्रगति रीसेट हो गई।',
  },
  common: { back: 'वापस', home: 'होम', loading: 'लोड हो रहा है...', streak: 'दिन की स्ट्रीक', unavailable: 'यह अनुभाग अभी उपलब्ध नहीं है।', changeLanguage: 'भाषा बदलें' },
  doctor: { profileEyebrow: 'परिचय', profileBioLabel: 'डॉक्टर के शब्दों में', profileBioHeading: 'देखभाल सुनने से शुरू होती है।', profileFocusLabel: 'विशेष ध्यान के क्षेत्र', profileFocusHeading: 'हर चरण में सहयोग।', viewServices: 'सभी सेवाएँ देखें', profileDetailsLabel: 'एक नज़र में', profileDetailsHeading: 'कुछ उपयोगी जानकारी।', currentPosition: 'वर्तमान पद', languagesSpoken: 'बोली जाने वाली भाषाएँ', nextStep: 'अगला कदम', bookAppointment: 'अपॉइंटमेंट लें', servicesEyebrow: 'सेवाएँ', availableServices: 'उपलब्ध सेवाएँ', consultationCtaHeading: 'परामर्श बुक करना चाहते हैं?', consultationCtaText: 'अपॉइंटमेंट के लिए क्लिनिक को कॉल करें।', phoneBooking: 'फोन बुकिंग', phoneBookingHeading: 'अपॉइंटमेंट फोन से बुक होते हैं', phoneBookingText: 'सुविधाजनक समय के लिए क्लिनिक को कॉल करें।', visitDetails: 'विज़िट विवरण', address: 'पता', consultationDays: 'परामर्श के दिन', hours: 'समय', beforeVisit: 'विज़िट से पहले', readyToSchedule: 'समय तय करना चाहते हैं?', readyToScheduleText: 'अपॉइंटमेंट के लिए कॉल करें।', bookByPhone: 'फोन से बुक करें' },
  vocabulary: {
    title: 'शब्दावली',
    allPairs: 'सभी कोर्स',
    allLevels: 'सभी स्तर',
    words: 'शब्द',
    unseen: 'नया',
    learning: 'सीख रहे हैं',
    mastered: 'सीख लिया',
  },
  progress: {
    title: 'प्रगति',
    wordsLearned: 'सीखे शब्द',
    mastered: 'सीख लिया',
    learning: 'सीख रहे हैं',
    newWords: 'नया',
  },
  notes: {
    title: 'मेरे नोट्स',
    placeholder: 'इस पाठ के लिए नोट्स लिखें...',
    saved: 'सहेजा',
  },
  quiz: {
    title: 'क्विज़',
    correct: 'सही!',
    wrong: 'गलत',
    score: 'आपका स्कोर',
    retry: 'फिर से कोशिश करें',
    next: 'अगला',
  },
  wotd: {
    title: 'आज का शब्द',
    viewStage: 'पाठ देखें',
  },
}

export const translations: Record<UiLang, Translations> = { en, bn, hi }

export const UI_LANGUAGES: { code: UiLang; name: string; nativeName: string; flag: string }[] = [
  { code: 'en', name: 'English',  nativeName: 'English', flag: '🇬🇧' },
  { code: 'bn', name: 'Bengali',  nativeName: 'বাংলা',  flag: '🇧🇩' },
  { code: 'hi', name: 'Hindi',    nativeName: 'हिन्दी',  flag: '🇮🇳' },
]

/** Detect a sensible default from the browser's language setting */
export function detectUiLang(): UiLang {
  if (typeof navigator === 'undefined') return 'en'
  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('bn')) return 'bn'
  if (lang.startsWith('hi')) return 'hi'
  return 'en'
}
