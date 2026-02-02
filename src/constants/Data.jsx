// Gallery Images Data
import gallery1 from "../assets/Images/gallery-1.jpg";
import gallery2 from "../assets/Images/gallery-2.jpg";
import gallery3 from "../assets/Images/gallery-3.jpg";
import gallery4 from "../assets/Images/gallery-4.jpg";
import gallery5 from "../assets/Images/gallery-5.jpg";
import gallery6 from "../assets/Images/gallery-6.jpg";

// Review Data
import author from "../assets/Images/google.jpg";

import pain1 from "../assets/Images/icon-need-attention-1.svg";
import pain2 from "../assets/Images/icon-need-attention-2.svg";
import pain3 from "../assets/Images/icon-need-attention-3.svg";
import pain4 from "../assets/Images/icon-need-attention-4.svg";
import pain5 from "../assets/Images/icon-need-attention-5.svg";
import pain6 from "../assets/Images/icon-need-attention-6.svg";
import pain7 from "../assets/Images/icon-need-attention-7.svg";
import pain8 from "../assets/Images/icon-need-attention-8.svg";
import pain9 from "../assets/Images/icon-need-attention-9.svg";

// Blog Images Data
import post1 from "../assets/Images/post-1.jpg";
import post2 from "../assets/Images/post-2.jpg";
import post3 from "../assets/Images/post-3.jpg";

// Hero Icons Data
import IconHero1 from "../assets/Images/icon-1.svg";
import IconHero2 from "../assets/Images/icon-2.svg";
import IconHero3 from "../assets/Images/icon-3.svg";

// Statistics Banner Data
import iconSolutionCounter1 from "../assets/Images/icon-solution-counter-1.svg";
import iconSolutionCounter2 from "../assets/Images/icon-solution-counter-2.svg";
import iconSolutionCounter3 from "../assets/Images/icon-solution-counter-3.svg";
import iconSolutionCounter4 from "../assets/Images/icon-solution-counter-4.svg";

// Services Images Data
import servicicon1 from "../assets/Images/icon-service-1.svg";
import servicicon2 from "../assets/Images/icon-service-2.svg";
import servicicon3 from "../assets/Images/icon-service-3.svg";
import servicicon4 from "../assets/Images/icon-service-4.svg";
import servicicon5 from "../assets/Images/icon-service-5.svg";
import servicicon6 from "../assets/Images/icon-service-6.svg";

export const galleryData = [
  {
    id: 1,
    image: gallery1,
    alt: "Gallery 1",
  },
  {
    id: 2,
    image: gallery2,
    alt: "Gallery 2",
  },
  {
    id: 3,
    image: gallery3,
    alt: "Gallery 3",
  },
  {
    id: 4,
    image: gallery4,
    alt: "Gallery 4",
  },
  {
    id: 5,
    image: gallery5,
    alt: "Gallery 5",
  },
  {
    id: 6,
    image: gallery6,
    alt: "Gallery 6",
  },
];

export const statisticsData = [
  {
    id: 1,
    icon: iconSolutionCounter1,
    targetValue: 20,
    suffix: "+",
    label: "Years of Clinical Experience",
  },
  {
    id: 2,
    icon: iconSolutionCounter2,
    targetValue: 98,
    suffix: "%",
    label: "Patient Satisfaction",
  },
  {
    id: 3,
    icon: iconSolutionCounter3,
    targetValue: 200,
    suffix: "+",
    label: "Patients Supported",
  },
];

// Data for statistics banner
export const statisticsBannerData = [
  {
    id: 1,
    number: "20+",
    label: "Years of Clinical Experience",
    icon: iconSolutionCounter1,
  },
  {
    id: 2,
    number: "200+",
    label: "Patients Supported",
    icon: iconSolutionCounter2,
  },
  {
    id: 3,
    number: "1:1",
    label: "Personalised Care Approach",
    icon: iconSolutionCounter3,
  },
  {
    id: 4,
    number: "Holistic",
    label: "Evidence-Based Treatment",
    icon: iconSolutionCounter4,
  },
];

// Pain Types Data for Need Attention Section
export const painTypesData = [
  {
    id: 1,
    icon: pain1,
    title: "Neck Pain",
    alt: "Neck Pain Physiotherapy",
    short: "Stiffness, posture issues, whiplash, and neck tension relief",
  },
  {
    id: 2,
    icon: pain2,
    title: "Shoulder Pain",
    alt: "Shoulder Pain Physiotherapy",
    short: "Rotator cuff, frozen shoulder, and lifting pain treatment",
  },
  {
    id: 3,
    icon: pain3,
    title: "Hip Pain",
    alt: "Hip Pain Physiotherapy",
    short: "Arthritis, tendinopathy, and mobility restoration",
  },
  {
    id: 4,
    icon: pain4,
    title: "Knee Pain",
    alt: "Knee Pain Physiotherapy",
    short: "Sports injuries, ACL rehab, and stability training",
  },
  {
    id: 5,
    icon: pain5,
    title: "Elbow Pain",
    alt: "Elbow Pain Physiotherapy",
    short: "Tennis elbow, golfer’s elbow, and repetitive strain",
  },
  {
    id: 6,
    icon: pain6,
    title: "Tricep Pain",
    alt: "Tricep Pain Physiotherapy",
    short: "Overuse, strain injuries, and arm strength recovery",
  },
  {
    id: 7,
    icon: pain7,
    title: "Hand Pain",
    alt: "Hand Pain Physiotherapy",
    short: "Wrist pain, tendon issues, and grip strength",
  },
  {
    id: 8,
    icon: pain8,
    title: "Foot Pain",
    alt: "Foot Pain Physiotherapy",
    short: "Plantar fasciitis, arch pain, and alignment correction",
  },
  {
    id: 9,
    icon: pain9,
    title: "Ankle Pain",
    alt: "Ankle Pain Physiotherapy",
    short: "Sprains, instability, and balance rehabilitation",
  },
];

// Scrolling Info Data
export const scrollingInfoData = [
  {
    id: 1,
    text: "Book Appointment: 0433 642 826",
  },
  {
    id: 2,
    text: "Working Hours: Mon to Fri 9:00 AM To 6:00 PM, Sat 9:00 AM to 1:00 PM",
  },
  {
    id: 3,
    text: "Emergency No: 0433 642 826",
  },
  {
    id: 4,
    text: "For Any Additional Inquiries: info@maxfitphysiotherapy.com.au",
  },
];
// Page Banner Data
export const pageBannerData = {
  home: {
    breadcrumb: {
      home: "Home",
      current: "Home",
    },
    pageTitle: "Welcome to MaxFit Physiotherapy",
    bannerSubtitle: "Your trusted partner in physical wellness and recovery",
    bannerDescription:
      "Experience world-class physiotherapy services with our expert team of therapists dedicated to your health and well-being.",
  },
  about: {
    breadcrumb: {
      home: "Home",
      current: "About Us",
    },
    pageTitle: "About Us",
  },
  contact: {
    breadcrumb: {
      home: "Home",
      current: "Contact Us",
    },
    pageTitle: "Contact Us",
  },
  blog: {
    breadcrumb: {
      home: "Home",
      current: "Blog",
    },
    pageTitle: "Blog",
  },
  therapist: {
    breadcrumb: {
      home: "Home",
      current: "Our Physiotherapist",
    },
    pageTitle: "Priyanka Verma",
  },
};

// Review Data
export const reviewData = [
  {
    id: 1,
    reviewText:
      "My GP recommended Priyanka after I sustained a sports injury, and I’m so glad I followed that advice. From the first session, she was professional, attentive, and incredibly knowledgeable. She took time to understand my lifestyle and goals, making the treatment feel truly personalised. She explained everything clearly, gave practical home exercises, and ensured I progressed at a safe pace. My recovery was quicker and smoother than expected, and I feel confident returning to sport. Priyanka has set the bar high - I won’t be going anywhere else.",
    profileImg: author,
    name: "Pradeep Wickramanayaka",
    work: "Local Guide",
  },
  {
    id: 2,
    reviewText:
      "Went in with so much pain from tennis elbow and Priyanka was so knowledgeable and caring. Almost immediately I could feel the relief. So thankful for her and would definitely recommend anyone to her.",
    profileImg: author,
    name: "Lyle Behrens",
    work: "Local Guide",
  },
  {
    id: 3,
    reviewText:
      "I went to Priyanka for my sore knee only to find it was my back that was the problem. After treatment, the pain reduced and it was the best I’ve felt in years. The follow-up exercises were easy to fit into my routine and made such a difference. Priyanka was so caring. The clinic was easy to access, beautiful, welcoming, private, professional, and very clean. Calm and healing atmosphere - I will definitely be going back.",
    profileImg: author,
    name: "Fiona Koduah",
    work: "",
  },
  {
    id: 4,
    reviewText:
      "I would like to express my sincere gratitude to Priyanka for the exceptional physiotherapy she provided. From the moment I walked in, I felt welcomed and at ease. She listened carefully and tailored the treatment plan to my needs. Her gentle yet effective techniques relieved my pain and improved my mobility. Her warm and compassionate approach made it comfortable to ask questions. Truly a remarkable physiotherapist.",
    profileImg: author,
    name: "Logini Sundar",
    work: "",
  },
  {
    id: 5,
    reviewText:
      "I recommend MaxFit - Priyanka does a wonderful job. I improved a lot after my shoulder operation. So happy. She is professional, polite, and very understanding. I will be going there again and again.",
    profileImg: author,
    name: "Demi Koumpridis",
    work: "",
  },
  {
    id: 6,
    reviewText:
      "I went to Priyanka with frozen shoulder and then with back pain. She helped me a lot. I highly recommend MaxFit!",
    profileImg: author,
    name: "Elizabetta Sremko",
    work: "",
  },
  {
    id: 7,
    reviewText:
      "Priyanka is extremely friendly and knowledgeable. Highly recommend her and MaxFit Physiotherapy.",
    profileImg: author,
    name: "Jeremy Pucheta",
    work: "Local Guide",
  },
  {
    id: 8,
    reviewText:
      "Great experience - very satisfied with the service. Comfortable and nice environment. Thank you!",
    profileImg: author,
    name: "Que Boii",
    work: "",
  },
  {
    id: 9,
    reviewText:
      "Best service and helped me a lot",
    profileImg: author,
    name: "Rupak Raj",
    work: "",
  },
];

export const blogData = [
  {
    id: 1,
    image: post1,
    alt: "Benefits of physiotherapy",
    title: "10 Essential Benefits of Regular Physiotherapy",
    readMoreText: "Read More",
    category: "Health & Wellness",

    para1:
      "In today’s fast-paced world, aches, pains, and injuries are increasingly common-whether from long hours at a desk, sports, repetitive tasks, or the natural effects of ageing. While many people wait until pain becomes unbearable, regular physiotherapy offers a proactive and powerful approach to long-term movement and wellbeing.",

    para2:
      "Physiotherapy provides natural, effective pain relief through hands-on therapy, soft tissue techniques, joint mobilisation, and tailored exercise programs. Rather than masking symptoms, treatment focuses on addressing the root cause of pain for longer-lasting results.",

    para3:
      "Regular physiotherapy improves strength, stability, mobility, and flexibility. By strengthening supporting muscles and correcting movement patterns, it reduces joint stress and lowers the risk of injury.",

    para4:
      "One of the greatest benefits of physiotherapy is injury prevention. Ongoing assessment identifies imbalances early, helping protect your body and improve long-term performance, posture, and movement efficiency.",

    subtitle: "Why make physiotherapy part of your routine?",

    list1: "Natural pain relief without relying on medication",
    list2: "Improved strength, balance, and joint stability",
    list3: "Faster recovery after injury or surgery",
    list4: "Reduced risk of future injuries",
    list5: "Better posture, mobility, and independence",

    para5:
      "Physiotherapy also plays a vital role in managing chronic conditions such as arthritis, persistent back pain, and tendinopathy. Consistent care helps reduce flare-ups, maintain mobility, and improve quality of life.",

    para6:
      "Physiotherapy is not just for injuries-it’s an investment in long-term health. Whether your goal is pain relief, improved mobility, or healthy ageing, physiotherapy helps you move better, feel stronger, and live well.",
  },
  {
    id: 2,
    image: post2,
    alt: "Correct posture importance",
    title: "The Importance of Correct Posture and How to Improve It",
    readMoreText: "Read More",
    category: "Posture & Ergonomics",

    para1:
      "Poor posture is one of the most common contributors to neck pain, back stiffness, headaches, shoulder tightness, and fatigue. Long hours sitting, screen use, and daily habits can place unnecessary strain on the spine and muscles.",

    para2:
      "Correct posture keeps joints aligned, muscles balanced, and movement efficient. When posture improves, breathing becomes easier, energy levels rise, and everyday movement feels more comfortable.",

    para3:
      "Posture is not permanent-it is a habit. With awareness, strengthening, and movement retraining, posture can improve at any age.",

    para4:
      "Physiotherapy helps identify the cause of poor posture and provides hands-on treatment, strengthening exercises, and ergonomic advice to restore healthy alignment.",

    subtitle: "Simple steps to improve posture",

    list1: "Adjust your sitting and workstation setup",
    list2: "Strengthen core and upper back muscles",
    list3: "Take frequent movement breaks",
    list4: "Practice mindful posture checks",
    list5: "Seek professional assessment if pain persists",

    para5:
      "Improving posture is not about holding tension-it’s about developing balanced habits that support your spine and reduce strain during daily activities.",

    para6:
      "Small, consistent changes can lead to significant improvements in comfort, confidence, and long-term spinal health.",
  },

  {
    id: 3,
    image: post3,
    alt: "Healthy posture for kids",
    title: "Healthy Posture for Kids During Study & Screen Time",
    readMoreText: "Read More",
    category: "Children’s Health",

    para1:
      "Children today spend more time studying, using devices, and sitting than ever before. Without proper posture, this can lead to neck pain, back strain, headaches, and reduced concentration.",

    para2:
      "Children’s bodies are still developing. Good posture supports spine alignment, muscle growth, breathing efficiency, and healthy movement patterns.",

    para3:
      "An ergonomic study setup, correct screen height, and back support help protect growing bodies during schoolwork and screen time.",

    para4:
      "Movement breaks are essential. Even perfect posture becomes stressful if held too long. Regular movement keeps muscles active and improves focus.",

    subtitle: "Signs your child may need help",

    list1: "Frequent headaches or neck pain",
    list2: "Rounded shoulders or slouching",
    list3: "Difficulty sitting comfortably",
    list4: "Recurring aches or stiffness",
    list5: "Fatigue during study time",

    para5:
      "Physiotherapy can assess posture, movement patterns, and muscle balance, providing child-friendly exercises and guidance.",

    para6:
      "Early intervention helps prevent long-term issues and builds healthy movement habits that last a lifetime.",
  },

  {
    id: 4,
    image: post1,
    alt: "Pain in kids not growing pains",
    title: "Pain in Kids Is Not Always ‘Growing Pains’",
    readMoreText: "Read More",
    category: "Paediatric Physiotherapy",

    para1:
      "Many parents assume recurring pain in children is simply ‘growing pains’. While growing pains exist, not all pain should be dismissed as normal development.",

    para2:
      "True growing pains usually affect both legs, occur at night, and do not interfere with daily activity. Pain that persists, returns frequently, or affects movement may indicate another issue.",

    para3:
      "Common causes include muscle tightness, posture issues, overuse from sports, flat feet, or excessive flexibility.",

    para4:
      "Physiotherapy identifies the root cause through assessment of posture, movement, strength, and flexibility.",

    subtitle: "When to seek professional advice",

    list1: "Pain on one side only",
    list2: "Limping or altered walking",
    list3: "Pain lasting more than two weeks",
    list4: "Pain affecting sleep or activity",
    list5: "Swelling or joint stiffness",

    para5:
      "Early treatment prevents long-term movement problems and helps children stay confident and active.",

    para6:
      "Children should not grow up believing pain is normal. Physiotherapy helps kids move comfortably and safely.",
  },

  {
    id: 5,
    image: post2,
    alt: "Choosing the right footwear",
    title: "Choosing the Right Shoes: Why Proper Footwear Matters",
    readMoreText: "Read More",
    category: "Foot & Gait Health",

    para1:
      "Footwear plays a major role in posture, joint health, and overall movement. Poor shoes can contribute to foot pain, knee discomfort, hip stiffness, and back pain.",

    para2:
      "Supportive footwear helps maintain natural foot alignment, absorb shock, and reduce unnecessary strain throughout the body.",

    para3:
      "Different activities require different footwear. Running, work, and daily walking all place unique demands on your feet.",

    para4:
      "Physiotherapy assessments help identify foot mechanics and recommend appropriate footwear or orthotics when needed.",

    subtitle: "Signs your shoes may be causing problems",

    list1: "Heel, arch, or forefoot pain",
    list2: "Knee, hip, or lower back discomfort",
    list3: "Uneven shoe wear",
    list4: "Feeling unstable while walking",
    list5: "Pain after prolonged standing",

    para5:
      "Shoes wear out gradually. Replacing footwear regularly prevents subtle biomechanical changes that lead to pain.",

    para6:
      "Proper footwear is preventative healthcare-supporting movement, posture, and long-term comfort.",
  },
];

export const heroFeaturesData = [
  {
    id: 1,
    icon: IconHero1,
    alt: "20+ Years Experience",
    title: "20+ Years Experience",
    description: "Founder-led, evidence-based care tailored to your goals.",
    hasBorder: true,
    marginClass: "ms-0 ms-md-0 p-4",
  },
  {
    id: 2,
    icon: IconHero2,
    alt: "Personalised Treatment Plans",
    title: "Personalised Treatment Plans",
    description: "Manual therapy + exercise rehab for lasting results.",
    hasBorder: true,
    marginClass: "ms-0 ms-md-4 p-4",
  },
  {
    id: 3,
    icon: IconHero3,
    alt: "Easy Claims & Referrals",
    title: "Easy Claims & Referrals",
    description: "Medicare, private health, WorkCover, CTP, DVA & self-funded.",
    hasBorder: false,
    marginClass: "ms-0 ms-md-4 p-4",
  },
];

// Why Us Section Data
export const whyUsLeftData = [
  {
    id: 1,
    icon: IconHero1,
    title: "20+ Years Experience",
    description:
      "Founder-led care with deep clinical expertise across\nmusculoskeletal, women’s health, and elderly care.",
    hasBorder: true,
    delay: 0,
  },
  {
    id: 2,
    icon: IconHero2,
    title: "Evidence-Based Treatment",
    description:
      "We combine hands-on therapy, targeted exercise, and\neducation to deliver safe, proven results.",
    hasBorder: true,
    delay: 0.2,
  },
  {
    id: 3,
    icon: IconHero3,
    title: "Personalised Care Plans",
    description:
      "Your plan is tailored to your pain, goals, and\nlifestyle-focused on the root cause, not quick fixes.",
    hasBorder: false,
    delay: 0.4,
  },
];

export const whyUsRightData = [
  {
    id: 1,
    icon: IconHero1,
    title: "Goal-Oriented Rehabilitation",
    description:
      "Structured rehab to restore strength, mobility, balance, and\nconfidence-at a pace that suits you.",
    hasBorder: true,
    delay: 0,
  },
  {
    id: 2,
    icon: IconHero2,
    title: "Accessible Appointment Options",
    description:
      "We support Medicare CDM, private health, WorkCover,\nCTP, DVA, and self-funded patients.",
    hasBorder: true,
    delay: 0.2,
  },
  {
    id: 3,
    icon: IconHero3,
    title: "Prevention & Long-Term Support",
    description:
      "Posture retraining and injury prevention strategies so\nyou stay active, strong, and pain-free longer.",
    hasBorder: false,
    delay: 0.4,
  },
];

// services data
export const services = [
  {
    img: servicicon1,
    title: "Manual Therapy",
    description:
      "Hands-on treatment to relieve pain, reduce stiffness, and restore movement for faster, long-lasting recovery.",
  },
  {
    img: servicicon2,
    title: "Chronic Pain Management",
    description:
      "Gentle, evidence-based care to reduce flare-ups, improve mobility, and help you regain confidence in daily life.",
  },
  {
    img: servicicon3,
    title: "Acute Pain & Injury Care",
    description:
      "Fast, effective support for recent injuries to reduce pain, manage inflammation, and prevent long-term issues.",
  },
  {
    img: servicicon4,
    title: "Exercise Therapy & Rehabilitation",
    description:
      "Personalised exercise programs to build strength, restore function, and support safe, lasting recovery.",
  },
  {
    img: servicicon5,
    title: "Posture & Movement Retraining",
    description:
      "Improve alignment and movement habits to reduce strain, prevent recurring pain, and move more efficiently.",
  },
  {
    img: servicicon6,
    title: "Post-Surgical Rehabilitation",
    description:
      "Structured rehab to rebuild strength, mobility, and confidence after surgery-at a pace that suits you.",
  },
];

// faq data
export const faqData = [
  {
    question: "Do I need a doctor’s referral to see a physiotherapist?",
    answer:
      "No referral is needed. You can book directly with us anytime.\n\nReferrals are only required for Workers’ Compensation, CTP claims, and Medicare EPC plans.",
  },
  {
    question: "What should I expect during my first session?",
    answer:
      "Your first appointment includes:\n• A detailed discussion about your pain, health history, and goals\n• Physical assessment of movement, strength, posture, and function\n• Explanation of your condition\n• Hands-on treatment\n• A personalised rehabilitation plan and home exercises\n\nExpect a thorough, supportive, and personalised experience.",
  },
  {
    question: "How long are physiotherapy sessions?",
    answer:
      "• Initial consultation: 40-60 minutes\n• Follow-up sessions: 30-45 minutes\n\nThis allows enough time for assessment, treatment, and education.",
  },
  {
    question: "What should I wear?",
    answer:
      "Comfortable, loose clothing that allows you to move freely.\n\nFor lower-body issues, shorts are ideal.\nFor upper-body issues, a singlet or top that allows shoulder access is helpful.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This depends on:\n• The type and severity of your condition\n• Your goals\n• Your general health\n• Treatment response\n\nMost clients notice improvement within 2-4 sessions, but your therapist will provide a personalised plan.",
  },
  {
    question: "Does physiotherapy hurt?",
    answer:
      "Treatment is generally comfortable.\n\nSome manual techniques or exercises may cause mild soreness as your body adapts, but it should never feel alarming or severe. We always work within your comfort level.",
  },
  {
    question: "Do you accept private health insurance?",
    answer:
      "Yes. Physiotherapy is claimable under most private health funds with Extras Cover.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "We commonly treat:\n• Back, neck, shoulder, knee & hip pain\n• Sports injuries\n• Chronic pain\n• Acute injuries\n• Post-surgical rehabilitation\n• Women’s health concerns\n• Pelvic floor dysfunction\n• Balance & mobility issues\n• Arthritis and age-related conditions\n\nIf you’re unsure, contact us-we’re happy to guide you.",
  },
  {
    question: "Do you offer pelvic floor or women’s health physiotherapy?",
    answer:
      "Yes. Priyanka is trained in pelvic floor assessment and treatment and offers support for:\n• Pelvic pain\n• Incontinence\n• Pregnancy & postpartum recovery\n• Diastasis recti\n• Pelvic floor dysfunction",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We appreciate at least 24 hours’ notice for cancellations or rescheduling.\n\nThis helps us offer the appointment to another patient in need.",
  },
  {
    question: "Can physiotherapy help with chronic pain?",
    answer:
      "Absolutely. Physiotherapy combines hands-on treatment, movement retraining, pain education, and gradual strengthening to help manage long-term conditions safely and effectively.",
  },
  {
    question: "Do you treat older adults and mobility concerns?",
    answer:
      "Yes. Priyanka has extensive experience in aged care, falls prevention, balance training, and mobility rehabilitation.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "• Referral (if you have one)\n• Imaging reports (X-ray, MRI, ultrasound)\n• List of medications\n• Private health card (if claiming)\n• Comfortable clothing",
  },
  {
    question: "Is home exercise included in the treatment?",
    answer:
      "Yes! A personalised home exercise program is part of every treatment plan. It accelerates recovery and helps maintain results between sessions.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can call us directly, or send an email through our contact page.\n\nWe encourage early booking to secure your preferred time.",
  },
];
