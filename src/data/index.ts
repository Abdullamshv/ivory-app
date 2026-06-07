import type { Destination } from "@/types";

export const WHY_CHOOSE_ITEMS = [
  {
    id: 1,
    title: "Trusted Education Partnerships",
    description: "We work directly with leading universities worldwide to ensure your admission process is smooth and successful.",
    icon: "Handshake"
  },
  {
    id: 2,
    title: "End-to-End Support",
    description: "From selecting the right program to securing your visa and accommodation, we are with you every step of the way.",
    icon: "GraduationCap"
  },
  {
    id: 3,
    title: "Community-Driven Approach",
    description: "Join a network of successful international students. We foster a community that helps you thrive abroad.",
    icon: "Globe"
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "qatar",
    name: "Qatar",
    description: "Experience world-class education in a rapidly growing innovation hub.",
    image: "https://images.unsplash.com/photo-1549449079-c12e2c5e53ba?auto=format&fit=crop&w=800&q=80",
    tagline: "World-class education in the heart of the Gulf.",
    overviewParagraphs: [
      "Qatar has rapidly positioned itself as a regional education powerhouse. Through Qatar Foundation and its flagship Education City, the country hosts branch campuses of some of the world's most respected universities — letting students earn globally recognized degrees without leaving the Gulf.",
      "With heavy national investment in research, modern infrastructure, and generous scholarship schemes, Qatar offers a safe, multicultural, and highly connected environment. For students from the region, it combines proximity to home with truly international academics and strong career links to Gulf industries and government."
    ],
    highlights: [
      "Branch campuses of top US & European universities at Education City",
      "Generous scholarships and funded research opportunities",
      "Safe, modern, and highly multicultural environment",
      "Strong career links to Gulf industries and government"
    ],
    keyFacts: {
      language: "English (primary) & Arabic",
      currency: "Qatari Riyal (QAR)",
      tuitionRange: "QAR 35,000 – 120,000 / year",
      livingCost: "QAR 3,500 – 6,000 / month",
      intakes: ["September", "January"],
      popularCities: ["Doha", "Al Rayyan", "Al Wakrah"]
    },
    topUniversities: [
      "Qatar University",
      "Hamad Bin Khalifa University",
      "Carnegie Mellon University in Qatar",
      "Georgetown University in Qatar"
    ],
    popularPrograms: [
      "Business & Management",
      "Engineering",
      "Computer Science",
      "International Affairs",
      "Medicine"
    ]
  },
  {
    id: "georgia",
    name: "Georgia",
    description: "Affordable European education with rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1565010629737-062db2805971?auto=format&fit=crop&w=800&q=80",
    tagline: "Affordable European education with a rich cultural soul.",
    overviewParagraphs: [
      "Georgia has become a favourite destination for international students seeking quality European education at a fraction of Western costs. English-taught medical and business programs, combined with degrees recognized across Europe, make it especially popular for future doctors and entrepreneurs.",
      "Beyond the classroom, Georgia offers a safe and welcoming culture, low living costs, and a simple, student-friendly visa process. Its dramatic landscapes, ancient history, and famous hospitality make settling in remarkably easy."
    ],
    highlights: [
      "Low tuition and living costs compared to Western Europe",
      "English-taught medical and business degrees",
      "Simple, student-friendly visa process",
      "Rich history, cuisine, and a safe, friendly culture"
    ],
    keyFacts: {
      language: "English-taught programs available; Georgian official",
      currency: "Georgian Lari (GEL)",
      tuitionRange: "USD 3,000 – 8,000 / year",
      livingCost: "USD 400 – 700 / month",
      intakes: ["September", "February"],
      popularCities: ["Tbilisi", "Batumi", "Kutaisi"]
    },
    topUniversities: [
      "Tbilisi State University",
      "Ilia State University",
      "Georgian Technical University",
      "Caucasus University"
    ],
    popularPrograms: [
      "Medicine (MBBS)",
      "Dentistry",
      "Business Administration",
      "Tourism",
      "IT"
    ]
  },
  {
    id: "uae",
    name: "UAE",
    description: "Study in dynamic international campuses in Dubai and Abu Dhabi.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    tagline: "Global campuses in the Gulf's most dynamic cities.",
    overviewParagraphs: [
      "The UAE blends ambition and opportunity, hosting international branch campuses and home-grown universities across Dubai and Abu Dhabi. Students benefit from world-class facilities, a truly global student body, and direct access to one of the region's most vibrant job markets.",
      "With strong industries in business, technology, aviation, and tourism, the UAE offers excellent internship and career pathways alongside a cosmopolitan lifestyle and year-round connectivity to the rest of the world."
    ],
    highlights: [
      "International branch campuses in Dubai and Abu Dhabi",
      "Cosmopolitan, English-speaking environment",
      "Strong internship and career opportunities",
      "Excellent global connectivity and infrastructure"
    ],
    keyFacts: {
      language: "English & Arabic",
      currency: "UAE Dirham (AED)",
      tuitionRange: "AED 37,500 – 95,000 / year",
      livingCost: "AED 3,000 – 6,000 / month",
      intakes: ["September", "January"],
      popularCities: ["Dubai", "Abu Dhabi", "Sharjah"]
    },
    topUniversities: [
      "United Arab Emirates University",
      "Khalifa University",
      "American University of Sharjah",
      "University of Birmingham Dubai"
    ],
    popularPrograms: [
      "Business & Finance",
      "Engineering",
      "Aviation",
      "Hospitality & Tourism",
      "Computer Science"
    ]
  },
  {
    id: "malaysia",
    name: "Malaysia",
    description: "Top-ranked universities in a multicultural, vibrant environment.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    tagline: "Affordable, internationally ranked education in Southeast Asia.",
    overviewParagraphs: [
      "Malaysia offers a compelling mix of quality and affordability, with internationally ranked universities and branch campuses of UK and Australian institutions. Many programs allow students to earn a Western degree at a significantly lower cost.",
      "A multicultural society, widespread use of English, tropical climate, and low living expenses make Malaysia an easy and rewarding place to study, with Kuala Lumpur serving as a modern, well-connected hub."
    ],
    highlights: [
      "UK & Australian branch campuses with transferable degrees",
      "Affordable tuition and low cost of living",
      "Multicultural, English-friendly society",
      "Modern facilities in a well-connected regional hub"
    ],
    keyFacts: {
      language: "English (medium of instruction) & Malay",
      currency: "Malaysian Ringgit (MYR)",
      tuitionRange: "MYR 12,000 – 45,000 / year",
      livingCost: "MYR 1,500 – 3,000 / month",
      intakes: ["September", "February"],
      popularCities: ["Kuala Lumpur", "Penang", "Johor Bahru"]
    },
    topUniversities: [
      "University of Malaya",
      "Universiti Putra Malaysia",
      "Monash University Malaysia",
      "Taylor's University"
    ],
    popularPrograms: [
      "Engineering",
      "Business",
      "Computer Science",
      "Medicine",
      "Hospitality"
    ]
  },
  {
    id: "usa",
    name: "USA",
    description: "Access to prestigious institutions and limitless career opportunities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    tagline: "World-leading universities and limitless opportunity.",
    overviewParagraphs: [
      "The United States is home to many of the world's highest-ranked universities, offering unmatched academic breadth, cutting-edge research, and flexible degree structures. Students can explore diverse fields before specializing, supported by extensive campus resources.",
      "Beyond academics, the US provides powerful career pathways through internships, on-campus opportunities, and post-study work options like OPT — opening doors to global industries and professional networks."
    ],
    highlights: [
      "Many of the world's top-ranked universities",
      "Flexible degrees with a wide choice of majors",
      "Cutting-edge research and campus facilities",
      "Strong career pathways and post-study work options"
    ],
    keyFacts: {
      language: "English",
      currency: "US Dollar (USD)",
      tuitionRange: "USD 20,000 – 55,000 / year",
      livingCost: "USD 1,000 – 2,500 / month",
      intakes: ["August/September", "January"],
      popularCities: ["New York", "Boston", "Los Angeles"]
    },
    topUniversities: [
      "Massachusetts Institute of Technology",
      "Stanford University",
      "Harvard University",
      "University of California, Berkeley"
    ],
    popularPrograms: [
      "Computer Science",
      "Business & Management",
      "Engineering",
      "Data Science",
      "Health Sciences"
    ]
  },
  {
    id: "uk",
    name: "UK",
    description: "Centuries of academic excellence and global recognition.",
    image: "https://images.unsplash.com/photo-1513635269975-59693e2d09aa?auto=format&fit=crop&w=800&q=80",
    tagline: "Centuries of academic excellence, globally recognized.",
    overviewParagraphs: [
      "The United Kingdom offers a centuries-old tradition of academic excellence, with universities consistently ranked among the best in the world. Shorter, focused degree programs let students graduate sooner while earning globally respected qualifications.",
      "From historic institutions to modern research hubs, the UK combines rigorous teaching with a rich cultural experience. The Graduate Route also allows international students to stay and work after completing their studies."
    ],
    highlights: [
      "Globally ranked, historic universities",
      "Shorter degrees (3-year Bachelor's, 1-year Master's)",
      "Globally respected, employer-recognized qualifications",
      "Graduate Route for post-study work"
    ],
    keyFacts: {
      language: "English",
      currency: "Pound Sterling (GBP)",
      tuitionRange: "GBP 12,000 – 38,000 / year",
      livingCost: "GBP 900 – 1,600 / month",
      intakes: ["September", "January"],
      popularCities: ["London", "Manchester", "Edinburgh"]
    },
    topUniversities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University of Manchester"
    ],
    popularPrograms: [
      "Business & Finance",
      "Engineering",
      "Law",
      "Computer Science",
      "Medicine"
    ]
  }
];

export const SERVICES = [
  { id: 1, title: "University Admissions", description: "Expert guidance in finding and applying to the perfect university for your goals.", icon: "BookOpen" },
  { id: 2, title: "Visa Processing", description: "Comprehensive support for student visa applications with high success rates.", icon: "FileText" },
  { id: 3, title: "Scholarship Support", description: "Assistance in identifying and applying for financial aid and scholarships.", icon: "Award" }
];

export const IMPACT_STATS = [
  { id: 1, value: 65, suffix: "+", label: "Students Placed" },
  { id: 2, value: 20, suffix: "+", label: "University Partners" },
  { id: 3, value: 100, suffix: "%", label: "Acceptance Rate" },
  { id: 4, value: 100, suffix: "%", label: "Visa Success Rate" }
];

export const OFFICE_INFO = {
  timings: "Mon - Fri: 9:00 AM - 6:00 PM",
  phone: "+974 1234 5678",
  email: "contact@ivoryconsultancy.qa",
  address: "Doha, State of Qatar"
};
