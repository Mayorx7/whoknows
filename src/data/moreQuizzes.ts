import { Quiz } from "./quizzes";

export const additionalQuizzes: Quiz[] = [

  // QUIZ: "What's Your Ideal Country?"
{
  id: "ideal-country-quiz",
  title: "What's Your Ideal Country?",
  description: "Discover which country matches your lifestyle and dreams!",
  emoji: "🌍",
  color: "from-green-400 to-blue-400",
  questions: [
    {
      id: 1,
      question: "What's your ideal climate?",
      options: [
        { id: "a", text: "Warm and sunny year-round", points: { tropical: 3, mediterranean: 2 } },
        { id: "b", text: "Four distinct seasons", points: { temperate: 3, continental: 2 } },
        { id: "c", text: "Cool and crisp", points: { nordic: 3, alpine: 2 } },
        { id: "d", text: "Mild with occasional rain", points: { temperate: 2, oceanic: 3 } }
      ]
    },
    {
      id: 2,
      question: "What's most important in your daily life?",
      options: [
        { id: "a", text: "Work-life balance", points: { nordic: 3, oceanic: 2 } },
        { id: "b", text: "Career opportunities", points: { continental: 3, metropolitan: 2 } },
        { id: "c", text: "Rich culture and history", points: { mediterranean: 3, continental: 2 } },
        { id: "d", text: "Natural beauty and outdoor activities", points: { alpine: 3, oceanic: 3 } }
      ]
    },
    {
      id: 3,
      question: "What type of food do you prefer?",
      options: [
        { id: "a", text: "Fresh, simple, local ingredients", points: { mediterranean: 3, oceanic: 2 } },
        { id: "b", text: "Hearty, comfort food", points: { nordic: 2, alpine: 3 } },
        { id: "c", text: "Diverse, international cuisine", points: { metropolitan: 3, continental: 2 } },
        { id: "d", text: "Spicy, exotic flavors", points: { tropical: 3, mediterranean: 1 } }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to spend weekends?",
      options: [
        { id: "a", text: "Hiking or skiing in nature", points: { alpine: 3, nordic: 2 } },
        { id: "b", text: "Exploring museums and cafes", points: { continental: 3, metropolitan: 2 } },
        { id: "c", text: "Beach activities and water sports", points: { tropical: 3, mediterranean: 2 } },
        { id: "d", text: "Cozy time at home with family", points: { nordic: 3, oceanic: 2 } }
      ]
    },
    {
      id: 5,
      question: "What's your ideal community like?",
      options: [
        { id: "a", text: "Small, tight-knit, everyone knows each other", points: { oceanic: 3, alpine: 2 } },
        { id: "b", text: "Diverse, bustling, lots of opportunities", points: { metropolitan: 3, continental: 2 } },
        { id: "c", text: "Relaxed, family-oriented, traditional", points: { mediterranean: 3, tropical: 2 } },
        { id: "d", text: "Progressive, equal, socially conscious", points: { nordic: 3, oceanic: 2 } }
      ]
    },
    {
      id: 6,
      question: "How do you handle work or school challenges?",
      options: [
        { id: "a", text: "Collaborate and share ideas openly", points: { nordic: 3, oceanic: 2 } },
        { id: "b", text: "Tackle problems head-on and efficiently", points: { continental: 3, metropolitan: 2 } },
        { id: "c", text: "Look for creative, unconventional solutions", points: { mediterranean: 3, tropical: 2 } },
        { id: "d", text: "Stay calm and adapt to changing situations", points: { alpine: 3, tropical: 2 } }
      ]
    },
    {
      id: 7,
      question: "What kind of entertainment excites you most?",
      options: [
        { id: "a", text: "Outdoor festivals or cultural events", points: { mediterranean: 3, tropical: 2 } },
        { id: "b", text: "Quiet evenings with books or films", points: { nordic: 3, alpine: 2 } },
        { id: "c", text: "Big-city nightlife and concerts", points: { metropolitan: 3, continental: 2 } },
        { id: "d", text: "Sports and adventure activities", points: { oceanic: 3, alpine: 2 } }
      ]
    },
    {
      id: 8,
      question: "What drives your long-term happiness?",
      options: [
        { id: "a", text: "Stability, security, and harmony", points: { nordic: 3, alpine: 2 } },
        { id: "b", text: "Endless opportunities for growth", points: { metropolitan: 3, continental: 2 } },
        { id: "c", text: "Living close to nature and beauty", points: { tropical: 3, oceanic: 2 } },
        { id: "d", text: "Rich traditions and a sense of belonging", points: { mediterranean: 3, continental: 2 } }
      ]
    }
  ],
  results: [
    {
      id: "nordic",
      title: "Scandinavian Paradise",
      emoji: "🇸🇪",
      description: "Norway, Sweden, or Denmark would be perfect for you! You value work-life balance, social equality, and cozy hygge lifestyle. Long summer days and northern lights await!"
    },
    {
      id: "mediterranean",
      title: "Mediterranean Dream",
      emoji: "🇮🇹",
      description: "Italy, Spain, or Greece is calling your name! You love la dolce vita - great food, rich culture, beautiful coastlines, and a relaxed approach to life."
    },
    {
      id: "tropical",
      title: "Tropical Paradise",
      emoji: "🏝️",
      description: "Thailand, Costa Rica, or the Philippines would suit you perfectly! You crave constant sunshine, exotic foods, and a laid-back island lifestyle."
    },
    {
      id: "oceanic",
      title: "Island Nation",
      emoji: "🇳🇿",
      description: "New Zealand or Australia is your ideal home! You appreciate stunning natural beauty, outdoor adventures, and friendly, down-to-earth communities."
    },
    {
      id: "alpine",
      title: "Mountain Paradise",
      emoji: "🏔️",
      description: "Switzerland, Austria, or Colorado would be perfect! You love crisp mountain air, outdoor activities, and the peaceful beauty of alpine landscapes."
    },
    {
      id: "continental",
      title: "European Heart",
      emoji: "🇩🇪",
      description: "Germany, France, or the Netherlands would suit you! You appreciate efficiency, rich history, excellent public transport, and a perfect blend of tradition and modernity."
    },
    {
      id: "metropolitan",
      title: "Global City",
      emoji: "🏙️",
      description: "New York, London, or Tokyo is your calling! You thrive in diverse, fast-paced environments with endless cultural opportunities and career possibilities."
    }
  ]
},

 // QUIZ: "Which Disney Princess Are You?"

{
  id: "disney-princess-quiz",
  title: "Which Disney Princess Are You?",
  description: "Discover which Disney princess reflects your personality, values, and dreams!",
  emoji: "👑",
  color: "from-pink-400 to-purple-400",
  questions: [
    {
      id: 1,
      question: "What's your ultimate life goal?",
      options: [
        { id: "a", text: "True love and a happy home", points: { cinderella: 3, tiana: 2 } },
        { id: "b", text: "Adventure and exploring new horizons", points: { moana: 3, rapunzel: 2 } },
        { id: "c", text: "Learning and growing through curiosity", points: { belle: 3, ariel: 2 } },
        { id: "d", text: "Using your strength to protect others", points: { mulan: 3, elsa: 2 } }
      ]
    },
    {
      id: 2,
      question: "How would your friends describe you?",
      options: [
        { id: "a", text: "Brave and selfless", points: { mulan: 3, moana: 2 } },
        { id: "b", text: "Optimistic and hardworking", points: { tiana: 3, cinderella: 2 } },
        { id: "c", text: "Curious and adventurous", points: { ariel: 3, rapunzel: 2 } },
        { id: "d", text: "Wise and independent", points: { belle: 2, elsa: 3 } }
      ]
    },
    {
      id: 3,
      question: "What inspires you most?",
      options: [
        { id: "a", text: "The beauty and mystery of nature", points: { moana: 3, rapunzel: 2 } },
        { id: "b", text: "Dreams of a better future", points: { tiana: 3, cinderella: 2 } },
        { id: "c", text: "Stories and knowledge", points: { belle: 3, ariel: 2 } },
        { id: "d", text: "Love and loyalty to your family", points: { mulan: 3, elsa: 2 } }
      ]
    },
    {
      id: 4,
      question: "Your ideal weekend activity is…",
      options: [
        { id: "a", text: "Exploring somewhere new", points: { moana: 3, ariel: 2 } },
        { id: "b", text: "Cooking or creating something special", points: { tiana: 3, rapunzel: 2 } },
        { id: "c", text: "Reading or quiet reflection", points: { belle: 3, elsa: 2 } },
        { id: "d", text: "Spending time with loved ones", points: { cinderella: 3, mulan: 2 } }
      ]
    },
    {
      id: 5,
      question: "How do you handle challenges?",
      options: [
        { id: "a", text: "Face them head-on with courage", points: { mulan: 3, moana: 2 } },
        { id: "b", text: "Work hard and stay persistent", points: { tiana: 3, cinderella: 2 } },
        { id: "c", text: "Use creativity and optimism", points: { rapunzel: 3, ariel: 2 } },
        { id: "d", text: "Stay calm and think logically", points: { belle: 3, elsa: 2 } }
      ]
    },
    {
      id: 6,
      question: "Which quality do you value most in others?",
      options: [
        { id: "a", text: "Kindness and empathy", points: { cinderella: 3, belle: 2 } },
        { id: "b", text: "Courage and determination", points: { mulan: 3, tiana: 2 } },
        { id: "c", text: "Adventurous spirit", points: { moana: 3, rapunzel: 2 } },
        { id: "d", text: "Honesty and loyalty", points: { elsa: 3, ariel: 2 } }
      ]
    },
    {
      id: 7,
      question: "What kind of place feels like home?",
      options: [
        { id: "a", text: "A cozy, welcoming village", points: { cinderella: 3, tiana: 2 } },
        { id: "b", text: "The vast, open ocean", points: { moana: 3 } },
        { id: "c", text: "A peaceful forest or tower hideaway", points: { rapunzel: 3, belle: 2 } },
        { id: "d", text: "A snowy mountain retreat", points: { elsa: 3 } }
      ]
    },
    {
      id: 8,
      question: "Your personal motto would be…",
      options: [
        { id: "a", text: "“Dreams do come true.”", points: { cinderella: 3, tiana: 2 } },
        { id: "b", text: "“Adventure is out there!”", points: { moana: 3, rapunzel: 2 } },
        { id: "c", text: "“Knowledge is power.”", points: { belle: 3 } },
        { id: "d", text: "“Stay strong, stay true.”", points: { mulan: 3, elsa: 2 } }
      ]
    }
  ],
  results: [
    {
      id: "ariel",
      title: "Ariel",
      emoji: "🧜‍♀️",
      description: "Curious and adventurous, you’re not afraid to chase your dreams and explore unknown worlds."
    },
    {
      id: "belle",
      title: "Belle",
      emoji: "📚",
      description: "Intelligent and kind, you see beauty where others might not and value learning and compassion."
    },
    {
      id: "cinderella",
      title: "Cinderella",
      emoji: "👗",
      description: "Graceful and hopeful, you believe in dreams and stay positive even in hard times."
    },
    {
      id: "moana",
      title: "Moana",
      emoji: "🌊",
      description: "Adventurous and determined, you feel called to explore and connect deeply with the world."
    },
    {
      id: "mulan",
      title: "Mulan",
      emoji: "⚔️",
      description: "Brave and loyal, you stand up for what’s right and will do anything to protect those you love."
    },
    {
      id: "rapunzel",
      title: "Rapunzel",
      emoji: "🌸",
      description: "Creative and free-spirited, you bring light and joy wherever you go, even in difficult situations."
    },
    {
      id: "elsa",
      title: "Elsa",
      emoji: "❄️",
      description: "Independent and powerful, you’re learning to embrace your true self and let your strength shine."
    },
    {
      id: "tiana",
      title: "Tiana",
      emoji: "🐸",
      description: "Hardworking and ambitious, you believe in turning dreams into reality through effort and heart."
    }
  ]
},


  // QUIZ: "What's Your Dream Career?"

{
  id: "career-quiz",
  title: "What's Your Dream Career?",
  description: "Discover the perfect career path that matches your personality!",
  emoji: "💼",
  color: "from-blue-400 to-green-400",
  questions: [
    {
      id: 1,
      question: "What energizes you most?",
      options: [
        { id: "a", text: "Working with people and helping them", points: { helper: 3, leader: 2 } },
        { id: "b", text: "Solving complex problems", points: { analyst: 3, creator: 2 } },
        { id: "c", text: "Creating something new", points: { creator: 3, entrepreneur: 2 } },
        { id: "d", text: "Leading and organizing teams", points: { leader: 3, entrepreneur: 2 } }
      ]
    },
    {
      id: 2,
      question: "What's your ideal work environment?",
      options: [
        { id: "a", text: "Collaborative team spaces", points: { helper: 2, leader: 3 } },
        { id: "b", text: "Quiet, focused individual work", points: { analyst: 3, creator: 2 } },
        { id: "c", text: "Dynamic, fast-paced startup", points: { entrepreneur: 3, leader: 2 } },
        { id: "d", text: "Creative studio or workshop", points: { creator: 3, entrepreneur: 1 } }
      ]
    },
    {
      id: 3,
      question: "What matters most to you in work?",
      options: [
        { id: "a", text: "Making a positive impact", points: { helper: 3, leader: 2 } },
        { id: "b", text: "Intellectual challenges", points: { analyst: 3, creator: 2 } },
        { id: "c", text: "Creative expression", points: { creator: 3, helper: 1 } },
        { id: "d", text: "Financial success and growth", points: { entrepreneur: 3, leader: 2 } }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to learn new skills?",
      options: [
        { id: "a", text: "Through mentoring others", points: { helper: 3, leader: 2 } },
        { id: "b", text: "Deep research and analysis", points: { analyst: 3, creator: 1 } },
        { id: "c", text: "Hands-on experimentation", points: { creator: 3, entrepreneur: 2 } },
        { id: "d", text: "Leading projects and initiatives", points: { leader: 3, entrepreneur: 2 } }
      ]
    },
    {
      id: 5,
      question: "What's your communication style?",
      options: [
        { id: "a", text: "Empathetic and supportive", points: { helper: 3, leader: 1 } },
        { id: "b", text: "Precise and data-driven", points: { analyst: 3, entrepreneur: 1 } },
        { id: "c", text: "Inspiring and visionary", points: { creator: 2, leader: 3 } },
        { id: "d", text: "Persuasive and results-focused", points: { entrepreneur: 3, leader: 2 } }
      ]
    },
    {
      id: 6,
      question: "How do you approach challenges?",
      options: [
        { id: "a", text: "By rallying others for support", points: { helper: 3, leader: 2 } },
        { id: "b", text: "By analyzing all the data first", points: { analyst: 3 } },
        { id: "c", text: "By thinking outside the box", points: { creator: 3, entrepreneur: 2 } },
        { id: "d", text: "By taking decisive action quickly", points: { leader: 3, entrepreneur: 3 } }
      ]
    },
    {
      id: 7,
      question: "What would you rather be known for?",
      options: [
        { id: "a", text: "Changing lives through kindness", points: { helper: 3 } },
        { id: "b", text: "Solving the unsolvable", points: { analyst: 3 } },
        { id: "c", text: "Creating iconic works", points: { creator: 3 } },
        { id: "d", text: "Building a business empire", points: { entrepreneur: 3, leader: 2 } }
      ]
    },
    {
      id: 8,
      question: "How do you define success?",
      options: [
        { id: "a", text: "Helping others grow", points: { helper: 3 } },
        { id: "b", text: "Mastering complex skills", points: { analyst: 3 } },
        { id: "c", text: "Making an impact through creativity", points: { creator: 3 } },
        { id: "d", text: "Achieving financial freedom and influence", points: { entrepreneur: 3, leader: 2 } }
      ]
    }
  ],
  results: [
    {
      id: "helper",
      title: "The Helper",
      emoji: "🤝",
      description: "Teaching, counseling, healthcare, or social work would be perfect for you! You're naturally empathetic and find fulfillment in making a difference in people's lives."
    },
    {
      id: "analyst",
      title: "The Analyst",
      emoji: "📊",
      description: "Data science, research, engineering, or finance suits you perfectly! You love diving deep into complex problems and finding logical solutions through careful analysis."
    },
    {
      id: "creator",
      title: "The Creator",
      emoji: "🎨",
      description: "Design, writing, music, or innovation roles are your calling! You thrive when you can express your creativity and bring new ideas to life through your unique vision."
    },
    {
      id: "leader",
      title: "The Leader",
      emoji: "👑",
      description: "Management, consulting, project leadership, or executive roles fit you perfectly! You excel at inspiring teams, making strategic decisions, and driving organizational success."
    },
    {
      id: "entrepreneur",
      title: "The Entrepreneur",
      emoji: "🚀",
      description: "Starting your own business, sales, or business development is your path! You're driven by growth, love taking calculated risks, and excel at turning ideas into profitable ventures."
    }
  ]
},



  // 💰 What's Your Wealth Mindset?
{
  id: "wealth-mindset-quiz",
  title: "What's Your Wealth Mindset?",
  description: "Discover the attitude that shapes how you build and manage your wealth!",
  emoji: "💰",
  color: "from-green-400 to-emerald-500",
  questions: [
    {
      id: 1,
      question: "When you think about money, what excites you most?",
      options: [
        { id: "a", text: "Using it to create opportunities and grow businesses", points: { builder: 3, networker: 1 } },
        { id: "b", text: "Saving steadily and avoiding unnecessary risks", points: { saver: 3, giver: 1 } },
        { id: "c", text: "Making bold moves that could change your future overnight", points: { risk_taker: 3, builder: 1 } },
        { id: "d", text: "Using wealth to uplift family and community", points: { giver: 3, saver: 1 } }
      ]
    },
    {
      id: 2,
      question: "How do you respond to a risky investment opportunity?",
      options: [
        { id: "a", text: "I evaluate quickly and jump in if the vision is strong", points: { risk_taker: 3, builder: 2 } },
        { id: "b", text: "I do thorough research and plan before deciding", points: { builder: 3, saver: 2 } },
        { id: "c", text: "I’d rather keep my money in safer options", points: { saver: 3 } },
        { id: "d", text: "I’d consider how it benefits others before acting", points: { giver: 3 } }
      ]
    },
    {
      id: 3,
      question: "What’s your first financial priority?",
      options: [
        { id: "a", text: "Building assets and long-term wealth", points: { builder: 3, saver: 1 } },
        { id: "b", text: "Ensuring my family and community are supported", points: { giver: 3, networker: 2 } },
        { id: "c", text: "Taking chances that could bring massive rewards", points: { risk_taker: 3 } },
        { id: "d", text: "Maintaining a stable and comfortable lifestyle", points: { saver: 3 } }
      ]
    },
    {
      id: 4,
      question: "When facing financial setbacks, how do you react?",
      options: [
        { id: "a", text: "Analyze, adapt, and look for new opportunities", points: { builder: 3, risk_taker: 2 } },
        { id: "b", text: "Lean on my network and collaborate for solutions", points: { networker: 3, giver: 2 } },
        { id: "c", text: "Pull back and secure what I have left", points: { saver: 3 } },
        { id: "d", text: "Focus on how I can still help others despite the loss", points: { giver: 3 } }
      ]
    },
    {
      id: 5,
      question: "How do you prefer to grow your money?",
      options: [
        { id: "a", text: "Starting or investing in businesses", points: { builder: 3, risk_taker: 2 } },
        { id: "b", text: "Networking and collaborating on joint ventures", points: { networker: 3 } },
        { id: "c", text: "Saving consistently and compounding over time", points: { saver: 3 } },
        { id: "d", text: "Supporting causes or projects that help others", points: { giver: 3 } }
      ]
    },
    {
      id: 6,
      question: "What motivates you most about wealth?",
      options: [
        { id: "a", text: "Creating a legacy that lasts generations", points: { builder: 3 } },
        { id: "b", text: "Having financial freedom and peace of mind", points: { saver: 3 } },
        { id: "c", text: "Proving bold ideas can change your life", points: { risk_taker: 3 } },
        { id: "d", text: "Making a positive difference for others", points: { giver: 3 } }
      ]
    },
    {
      id: 7,
      question: "How do you handle extra income or a financial windfall?",
      options: [
        { id: "a", text: "Reinvest it into projects or assets", points: { builder: 3, risk_taker: 2 } },
        { id: "b", text: "Share some with family, friends, or charity", points: { giver: 3 } },
        { id: "c", text: "Save or pay off existing obligations first", points: { saver: 3 } },
        { id: "d", text: "Use it to build partnerships or expand your network", points: { networker: 3 } }
      ]
    },
    {
      id: 8,
      question: "Which phrase best matches your money philosophy?",
      options: [
        { id: "a", text: "“Build slowly, but build strong.”", points: { builder: 3 } },
        { id: "b", text: "“No risk, no reward.”", points: { risk_taker: 3 } },
        { id: "c", text: "“Save today, secure tomorrow.”", points: { saver: 3 } },
        { id: "d", text: "“We rise by lifting others.”", points: { giver: 3 } },
        { id: "e", text: "“Your network is your net worth.”", points: { networker: 3 } }
      ]
    }
  ],
  results: [
  {
    id: "builder",
    title: "The Strategic Builder",
    emoji: "🏗️",
    description: "You focus on sustainable growth and creating lasting value. Your patience and planning help you build strong financial foundations over time."
  },
  {
    id: "risk_taker",
    title: "The Bold Risk-Taker",
    emoji: "⚡",
    description: "You thrive on big opportunities and daring moves. While not every gamble pays off, your courage can lead to extraordinary breakthroughs."
  },
  {
    id: "saver",
    title: "The Steady Saver",
    emoji: "💳",
    description: "You value security and stability. Your careful approach to money ensures you’re prepared for the future and rarely caught off guard."
  },
  {
    id: "giver",
    title: "The Generous Giver",
    emoji: "🤝",
    description: "You see wealth as a tool for impact. Your priority is uplifting family, friends, and community while leaving a meaningful legacy."
  },
  {
    id: "networker",
    title: "The Opportunity Connector",
    emoji: "🌐",
    description: "You believe wealth grows through people and partnerships. You’re skilled at bringing the right people together to create success stories."
  }
],
},

// QUIZ: "Which Billionaire Are You?"

{
  id: "billionaire-type-quiz",
  title: "Which Billionaire Are You?",
  description: "Discover which world-changing entrepreneur matches your mindset and approach to success!",
  emoji: "💰",
  color: "from-yellow-400 to-emerald-500",
  questions: [
    {
      id: 1,
      question: "How do you approach solving problems?",
      options: [
        { id: "a", text: "Innovate wildly and disrupt the status quo", points: { musk: 3, bezos: 2 } },
        { id: "b", text: "Plan meticulously and execute efficiently", points: { bezos: 3, gates: 2 } },
        { id: "c", text: "Create tools that empower people", points: { gates: 3, zuckerberg: 2 } },
        { id: "d", text: "Leverage your network and partnerships", points: { oprah: 3, buffett: 2 } }
      ]
    },
    {
      id: 2,
      question: "What drives your ambition?",
      options: [
        { id: "a", text: "Changing the world through big ideas", points: { musk: 3, gates: 2 } },
        { id: "b", text: "Building a powerful, scalable business", points: { bezos: 3, zuckerberg: 2 } },
        { id: "c", text: "Inspiring and uplifting others", points: { oprah: 3, buffett: 2 } },
        { id: "d", text: "Creating security for the future", points: { buffett: 3, bezos: 2 } }
      ]
    },
    {
      id: 3,
      question: "How would your friends describe you?",
      options: [
        { id: "a", text: "Fearless dreamer with bold visions", points: { musk: 3, oprah: 2 } },
        { id: "b", text: "Strategic thinker who plays the long game", points: { buffett: 3, bezos: 2 } },
        { id: "c", text: "Connector who values relationships", points: { oprah: 3, gates: 2 } },
        { id: "d", text: "Tech-savvy innovator", points: { zuckerberg: 3, musk: 2 } }
      ]
    },
    {
      id: 4,
      question: "What’s your attitude toward risk?",
      options: [
        { id: "a", text: "All in—big risks bring big rewards", points: { musk: 3, bezos: 2 } },
        { id: "b", text: "Calculated—only after thorough research", points: { buffett: 3, gates: 2 } },
        { id: "c", text: "Balanced—I take some risks but stay grounded", points: { zuckerberg: 3, oprah: 2 } },
        { id: "d", text: "Avoid unnecessary risks—slow and steady wins", points: { buffett: 3, bezos: 2 } }
      ]
    },
    {
      id: 5,
      question: "What’s your leadership style?",
      options: [
        { id: "a", text: "Inspire through bold vision and passion", points: { musk: 3, oprah: 2 } },
        { id: "b", text: "Delegate and scale operations", points: { bezos: 3, zuckerberg: 2 } },
        { id: "c", text: "Lead by example with integrity", points: { gates: 3, buffett: 2 } },
        { id: "d", text: "Empower others and celebrate their wins", points: { oprah: 3, buffett: 2 } }
      ]
    },
    {
      id: 6,
      question: "How do you handle setbacks?",
      options: [
        { id: "a", text: "Double down and push harder", points: { musk: 3, bezos: 2 } },
        { id: "b", text: "Analyze what went wrong and adapt", points: { gates: 3, buffett: 2 } },
        { id: "c", text: "Lean on your network for support", points: { oprah: 3, zuckerberg: 2 } },
        { id: "d", text: "Stay patient and wait for the right opportunity", points: { buffett: 3, bezos: 2 } }
      ]
    },
    {
      id: 7,
      question: "How do you view philanthropy?",
      options: [
        { id: "a", text: "Essential—wealth should solve global problems", points: { gates: 3, oprah: 2 } },
        { id: "b", text: "Important but balanced with growth", points: { bezos: 3, buffett: 2 } },
        { id: "c", text: "A way to inspire and empower communities", points: { oprah: 3, zuckerberg: 2 } },
        { id: "d", text: "Primarily a long-term legacy goal", points: { buffett: 3, musk: 2 } }
      ]
    },
    {
      id: 8,
      question: "Which business challenge excites you most?",
      options: [
        { id: "a", text: "Building technology that changes the future", points: { musk: 3, gates: 2 } },
        { id: "b", text: "Scaling a small idea into a global empire", points: { bezos: 3, zuckerberg: 2 } },
        { id: "c", text: "Creating meaningful connections and influence", points: { oprah: 3, zuckerberg: 2 } },
        { id: "d", text: "Making smart investments for steady growth", points: { buffett: 3, gates: 2 } }
      ]
    }
  ],
  results: [
    {
      id: "musk",
      title: "Elon Musk 🚀",
      emoji: "🚀",
      description: "You’re a daring innovator who loves pushing boundaries. Bold risks and groundbreaking ideas define your path to success."
    },
    {
      id: "bezos",
      title: "Jeff Bezos 📦",
      emoji: "📦",
      description: "You’re a master of execution and scaling big ideas into global empires. Persistence and strategy are your strongest assets."
    },
    {
      id: "gates",
      title: "Bill Gates 💻",
      emoji: "💻",
      description: "You use intelligence and strategy to create powerful tools that uplift humanity. Giving back and problem-solving are core to your mindset."
    },
    {
      id: "zuckerberg",
      title: "Mark Zuckerberg 🌐",
      emoji: "🌐",
      description: "You’re driven by connection and building platforms that bring people together. Your focus is on community and innovation."
    },
    {
      id: "oprah",
      title: "Oprah Winfrey 🎤",
      emoji: "🎤",
      description: "You inspire and empower others through empathy and leadership. Your wealth mindset is rooted in influence and generosity."
    },
    {
      id: "buffett",
      title: "Warren Buffett 📈",
      emoji: "📈",
      description: "You’re the patient strategist who believes in long-term growth and wise investments. Your steady approach creates enduring success."
    }
  ]
},


 // QUIZ: What Kind of Friend Are You?
{
  id: "friend-type-quiz",
  title: "What Kind of Friend Are You?",
  description: "Find out the unique role you play in your friendships!",
  emoji: "🤝",
  color: "from-green-400 to-emerald-400",
  questions: [
    {
      id: 1,
      question: "When a friend is going through a tough time, your first instinct is to…",
      options: [
        { id: "a", text: "Offer a listening ear and emotional support", points: { empathetic: 3, loyal: 2 } },
        { id: "b", text: "Cheer them up with humor or fun plans", points: { fun: 3, optimistic: 2 } },
        { id: "c", text: "Help them find a practical solution", points: { problem_solver: 3 } },
        { id: "d", text: "Rally others to support them", points: { leader: 3, loyal: 2 } }
      ]
    },
    {
      id: 2,
      question: "In your friend group, you’re often seen as…",
      options: [
        { id: "a", text: "The planner who organizes meetups and keeps everyone connected", points: { leader: 3 } },
        { id: "b", text: "The motivator who lifts everyone’s spirits", points: { optimistic: 3, fun: 2 } },
        { id: "c", text: "The confidant everyone trusts with their secrets", points: { empathetic: 3, loyal: 2 } },
        { id: "d", text: "The problem-fixer who gives solid advice", points: { problem_solver: 3 } }
      ]
    },
    {
      id: 3,
      question: "How do you handle conflict with a friend?",
      options: [
        { id: "a", text: "Talk it out calmly and honestly", points: { empathetic: 3, loyal: 2 } },
        { id: "b", text: "Use humor to break the tension before resolving it", points: { fun: 3 } },
        { id: "c", text: "Take some time to think, then suggest a fair solution", points: { problem_solver: 3 } },
        { id: "d", text: "Mediate between others to keep the group balanced", points: { leader: 3 } }
      ]
    },
    {
      id: 4,
      question: "When making plans with friends, you usually…",
      options: [
        { id: "a", text: "Organize everything and ensure everyone’s included", points: { leader: 3, loyal: 2 } },
        { id: "b", text: "Suggest exciting or unexpected activities", points: { fun: 3 } },
        { id: "c", text: "Go with the flow and support whatever others want", points: { empathetic: 3 } },
        { id: "d", text: "Offer practical suggestions to make things easier", points: { problem_solver: 3 } }
      ]
    },
    {
      id: 5,
      question: "Your favorite type of hangout with friends is…",
      options: [
        { id: "a", text: "Hosting a casual get-together at home", points: { loyal: 3, empathetic: 2 } },
        { id: "b", text: "Planning a fun outing like karaoke or a day trip", points: { fun: 3, leader: 2 } },
        { id: "c", text: "Doing something meaningful like volunteering together", points: { empathetic: 3, leader: 2 } },
        { id: "d", text: "Solving challenges together—game nights or escape rooms", points: { problem_solver: 3 } }
      ]
    },
    {
      id: 6,
      question: "A new person joins your group—how do you react?",
      options: [
        { id: "a", text: "Make them feel welcome and included", points: { empathetic: 3, loyal: 2 } },
        { id: "b", text: "Crack jokes and bring them into the fun", points: { fun: 3, optimistic: 2 } },
        { id: "c", text: "Help them understand the group dynamics", points: { leader: 3 } },
        { id: "d", text: "Offer support privately if they seem shy", points: { loyal: 3, empathetic: 2 } }
      ]
    },
    {
      id: 7,
      question: "What do you value most in your friendships?",
      options: [
        { id: "a", text: "Loyalty and long-term commitment", points: { loyal: 3 } },
        { id: "b", text: "Laughter and shared adventures", points: { fun: 3 } },
        { id: "c", text: "Honest advice and guidance", points: { problem_solver: 3 } },
        { id: "d", text: "Emotional understanding and kindness", points: { empathetic: 3 } }
      ]
    },
    {
      id: 8,
      question: "Your friends would most likely describe you as…",
      options: [
        { id: "a", text: "The dependable rock everyone can rely on", points: { loyal: 3 } },
        { id: "b", text: "The life of the party who brings energy", points: { fun: 3 } },
        { id: "c", text: "The wise counselor with sound advice", points: { problem_solver: 3 } },
        { id: "d", text: "The caring listener who always understands", points: { empathetic: 3 } }
      ]
    }
  ],
  results: [
    {
      id: "loyal",
      title: "The Loyal Friend",
      emoji: "🛡️",
      description: "You’re steadfast and reliable. Your friends know you’ll stand by them through thick and thin, making you the cornerstone of every friendship circle."
    },
    {
      id: "fun",
      title: "The Fun Friend",
      emoji: "🎉",
      description: "You bring energy, joy, and excitement wherever you go. You turn ordinary days into unforgettable memories and remind your friends to enjoy life."
    },
    {
      id: "empathetic",
      title: "The Empathetic Friend",
      emoji: "💖",
      description: "You have a gift for understanding and comforting others. Your compassion makes you the friend people turn to for emotional support and encouragement."
    },
    {
      id: "problem_solver",
      title: "The Problem-Solver Friend",
      emoji: "🧠",
      description: "You’re practical, thoughtful, and quick to help your friends navigate challenges. Your guidance often saves the day and strengthens your bonds."
    },
    {
      id: "leader",
      title: "The Leader Friend",
      emoji: "🌟",
      description: "You naturally bring people together, organize plans, and inspire others. Your initiative ensures your group stays connected and thriving."
    },
    {
      id: "optimistic",
      title: "The Optimistic Friend",
      emoji: "☀️",
      description: "Your positive outlook is contagious. You lift spirits, encourage others, and remind your friends to see the brighter side of life."
    }
  ]
},

// QUIZ: What's Your Tech Persona?
{
  id: "tech-persona-quiz",
  title: "What's Your Tech Persona?",
  description: "Find out which tech archetype matches your mindset and style!",
  emoji: "🧠",
  color: "from-blue-500 to-cyan-400",
  questions: [
    {
      id: 1,
      question: "How do you approach a new piece of technology?",
      options: [
        { id: "a", text: "Read the manual and understand every detail", points: { engineer: 3, analyst: 2 } },
        { id: "b", text: "Start using it and figure things out as you go", points: { hacker: 3, innovator: 2 } },
        { id: "c", text: "Think about how it could improve your workflow", points: { strategist: 3, analyst: 2 } },
        { id: "d", text: "Imagine how it could be redesigned to look cooler", points: { designer: 3, innovator: 2 } }
      ]
    },
    {
      id: 2,
      question: "Your ideal tech workspace includes…",
      options: [
        { id: "a", text: "Multiple monitors, clean layout, and powerful hardware", points: { engineer: 3 } },
        { id: "b", text: "Sketchpads, mood boards, and a sleek laptop", points: { designer: 3 } },
        { id: "c", text: "Sticky notes, flowcharts, and strategy decks", points: { strategist: 3 } },
        { id: "d", text: "Command line, open-source tools, and caffeine", points: { hacker: 3 } }
      ]
    },
    {
      id: 3,
      question: "What excites you most about tech?",
      options: [
        { id: "a", text: "Solving complex problems with smart systems", points: { engineer: 3 } },
        { id: "b", text: "Creating beautiful, intuitive user experiences", points: { designer: 3 } },
        { id: "c", text: "Disrupting norms and building something new", points: { hacker: 3 } },
        { id: "d", text: "Optimizing processes and scaling ideas", points: { strategist: 3 } }
      ]
    },
    {
      id: 4,
      question: "When working on a tech project, you’re the one who…",
      options: [
        { id: "a", text: "Writes clean, efficient code", points: { engineer: 3 } },
        { id: "b", text: "Designs the interface and user flow", points: { designer: 3 } },
        { id: "c", text: "Finds clever shortcuts and hacks", points: { hacker: 3 } },
        { id: "d", text: "Plans the roadmap and aligns the team", points: { strategist: 3 } }
      ]
    },
    {
      id: 5,
      question: "Your favorite kind of tech content is…",
      options: [
        { id: "a", text: "Deep-dive tutorials and engineering blogs", points: { engineer: 3 } },
        { id: "b", text: "Design inspiration and UX case studies", points: { designer: 3 } },
        { id: "c", text: "Reddit threads and underground forums", points: { hacker: 3 } },
        { id: "d", text: "Tech strategy podcasts and startup news", points: { strategist: 3 } }
      ]
    },
    {
      id: 6,
      question: "If you had to build an app, what would be your priority?",
      options: [
        { id: "a", text: "Making sure it runs fast and bug-free", points: { engineer: 3 } },
        { id: "b", text: "Crafting a beautiful and intuitive interface", points: { designer: 3 } },
        { id: "c", text: "Finding a clever way to build it quickly", points: { hacker: 3 } },
        { id: "d", text: "Ensuring it solves a real problem and scales well", points: { strategist: 3 } }
      ]
    },
    {
      id: 7,
      question: "Your dream tech job would be…",
      options: [
        { id: "a", text: "Software engineer at a cutting-edge company", points: { engineer: 3 } },
        { id: "b", text: "UX/UI designer for a global brand", points: { designer: 3 } },
        { id: "c", text: "Startup founder or ethical hacker", points: { hacker: 3 } },
        { id: "d", text: "Product manager or tech strategist", points: { strategist: 3 } }
      ]
    },
    {
      id: 8,
      question: "Which compliment would make you smile?",
      options: [
        { id: "a", text: "“Your code is flawless!”", points: { engineer: 3 } },
        { id: "b", text: "“Your designs are stunning!”", points: { designer: 3 } },
        { id: "c", text: "“You always find the smartest shortcuts!”", points: { hacker: 3 } },
        { id: "d", text: "“You see the big picture like no one else!”", points: { strategist: 3 } }
      ]
    }
  ],
  results: [
    {
      id: "engineer",
      title: "The Precision Engineer",
      emoji: "🛠️",
      description: "You’re all about clean code, smart systems, and technical excellence. You thrive on solving complex problems and building reliable solutions."
    },
    {
      id: "designer",
      title: "The Creative Designer",
      emoji: "🎨",
      description: "You bring beauty and clarity to tech. Your eye for detail and user empathy make every experience feel intuitive and delightful."
    },
    {
      id: "hacker",
      title: "The Clever Hacker",
      emoji: "🧠",
      description: "You love bending the rules and finding shortcuts. Whether it’s code, strategy, or systems, you’re always one step ahead with your ingenuity."
    },
    {
      id: "strategist",
      title: "The Visionary Strategist",
      emoji: "📈",
      description: "You see the big picture and know how to scale ideas. Your tech persona is all about impact, growth, and smart execution."
    }
  ]
},


  // QUIZ: What's Your Hidden Talent?
{
  id: "hidden-talent-quiz",
  title: "What's Your Hidden Talent?",
  description: "Uncover the unique strength that sets you apart!",
  emoji: "✨",
  color: "from-purple-400 to-indigo-400",
  questions: [
    {
      id: 1,
      question: "When working on a group project, what role do you naturally take?",
      options: [
        { id: "a", text: "Leading and keeping everyone organized", points: { leadership: 3, communication: 2 } },
        { id: "b", text: "Suggesting creative, out-of-the-box ideas", points: { creativity: 3, innovation: 2 } },
        { id: "c", text: "Finding solutions when challenges come up", points: { problem_solver: 3, resilience: 2 } },
        { id: "d", text: "Supporting quietly and making sure everyone feels included", points: { empathy: 3, communication: 2 } }
      ]
    },
    {
      id: 2,
      question: "Friends often come to you for…",
      options: [
        { id: "a", text: "Advice and guidance", points: { wisdom: 3, empathy: 2 } },
        { id: "b", text: "Creative help—designs, ideas, or inspiration", points: { creativity: 3 } },
        { id: "c", text: "Help fixing or figuring things out", points: { problem_solver: 3 } },
        { id: "d", text: "Motivation and encouragement", points: { leadership: 2, communication: 3 } }
      ]
    },
    {
      id: 3,
      question: "Which school subject did you secretly enjoy most?",
      options: [
        { id: "a", text: "Literature or languages", points: { communication: 3, empathy: 2 } },
        { id: "b", text: "Fine arts or music", points: { creativity: 3 } },
        { id: "c", text: "Mathematics or science", points: { problem_solver: 3 } },
        { id: "d", text: "Social studies or civic education", points: { leadership: 2, wisdom: 3 } }
      ]
    },
    {
      id: 4,
      question: "How do you spend your free time when you’re not working or studying?",
      options: [
        { id: "a", text: "Writing, singing, or doing something artistic", points: { creativity: 3 } },
        { id: "b", text: "Organizing events or planning for the future", points: { leadership: 3 } },
        { id: "c", text: "Helping out friends or volunteering locally", points: { empathy: 3 } },
        { id: "d", text: "Solving puzzles or tinkering with gadgets", points: { problem_solver: 3 } }
      ]
    },
    {
      id: 5,
      question: "When faced with a difficult challenge, you…",
      options: [
        { id: "a", text: "Think outside the box for an unexpected solution", points: { creativity: 3, innovation: 2 } },
        { id: "b", text: "Stay calm and find a practical way forward", points: { problem_solver: 3, resilience: 2 } },
        { id: "c", text: "Encourage others and keep the mood positive", points: { leadership: 2, communication: 3 } },
        { id: "d", text: "Listen to everyone’s feelings and bring peace", points: { empathy: 3 } }
      ]
    },
    {
      id: 6,
      question: "At a community event or family gathering, people notice you for…",
      options: [
        { id: "a", text: "Your ability to get everyone excited and involved", points: { leadership: 3, communication: 2 } },
        { id: "b", text: "Your creative touch—decor, photos, or performances", points: { creativity: 3 } },
        { id: "c", text: "Helping fix last-minute issues without stress", points: { problem_solver: 3 } },
        { id: "d", text: "Being supportive and making others feel valued", points: { empathy: 3 } }
      ]
    },
    {
      id: 7,
      question: "If you suddenly had to teach something to a group, you would choose…",
      options: [
        { id: "a", text: "A creative skill like drawing, music, or storytelling", points: { creativity: 3 } },
        { id: "b", text: "How to plan and organize effectively", points: { leadership: 3 } },
        { id: "c", text: "A life lesson or moral value you’ve learned", points: { wisdom: 3, empathy: 2 } },
        { id: "d", text: "A practical skill like fixing gadgets or budgeting", points: { problem_solver: 3 } }
      ]
    },
    {
      id: 8,
      question: "Which compliment would make you happiest?",
      options: [
        { id: "a", text: "“You’re so imaginative and original!”", points: { creativity: 3 } },
        { id: "b", text: "“You’re a natural leader!”", points: { leadership: 3 } },
        { id: "c", text: "“You always know how to solve problems!”", points: { problem_solver: 3 } },
        { id: "d", text: "“You’re so understanding and kind!”", points: { empathy: 3 } }
      ]
    }
  ],
  results: [
    {
      id: "creativity",
      title: "The Creative Visionary",
      emoji: "🎨",
      description: "Your hidden talent is your boundless imagination. You bring fresh ideas to life, inspiring others with your originality and artistry."
    },
    {
      id: "leadership",
      title: "The Natural Leader",
      emoji: "🦁",
      description: "You have a gift for guiding and motivating others. Your confidence and planning skills help you turn visions into reality."
    },
    {
      id: "problem_solver",
      title: "The Master Problem-Solver",
      emoji: "🧩",
      description: "You thrive under pressure and excel at finding solutions. Your resourcefulness and logic make you the go-to person in tough times."
    },
    {
      id: "empathy",
      title: "The Compassionate Soul",
      emoji: "💖",
      description: "Your ability to understand and connect with people is your superpower. You bring comfort, harmony, and strength to those around you."
    },
    {
      id: "wisdom",
      title: "The Wise Guide",
      emoji: "📚",
      description: "Your insight and life perspective make you a source of wisdom for others. People trust you to provide thoughtful, grounded advice."
    },
    {
      id: "innovation",
      title: "The Innovator",
      emoji: "💡",
      description: "You’re not afraid to break the mold and try new approaches. Your forward-thinking mindset sparks change and progress wherever you go."
    }
  ]
},



   // QUIZ: What Kind of Dad Will You Be?
{
  id: "dad-type-quiz",
  title: "What Kind of Dad Will You Be?",
  description: "Get a glimpse into your future dad vibes—funny, wise, chill, or heroic?",
  emoji: "🧔‍♂️",
  color: "from-yellow-400 to-orange-500",
  questions: [
    {
      id: 1,
      question: "Your ideal weekend with the kids looks like…",
      options: [
        { id: "a", text: "Camping, hiking, and outdoor adventures", points: { adventurous: 3, protective: 2 } },
        { id: "b", text: "Movie night and homemade pizza", points: { fun: 3, nurturing: 2 } },
        { id: "c", text: "Helping with homework and life lessons", points: { wise: 3, supportive: 2 } },
        { id: "d", text: "Building something cool together—robots, forts, or crafts", points: { creative: 3, hands_on: 2 } }
      ]
    },
    {
      id: 2,
      question: "Your parenting motto would be…",
      options: [
        { id: "a", text: "Let’s learn and grow together", points: { wise: 3 } },
        { id: "b", text: "Every day should be an adventure", points: { adventurous: 3 } },
        { id: "c", text: "Laughter is the best medicine", points: { fun: 3 } },
        { id: "d", text: "Let’s build something awesome", points: { creative: 3 } }
      ]
    },
    {
      id: 3,
      question: "What’s your go-to dad skill?",
      options: [
        { id: "a", text: "Fixing things around the house", points: { hands_on: 3 } },
        { id: "b", text: "Telling epic bedtime stories", points: { creative: 3 } },
        { id: "c", text: "Giving solid advice", points: { wise: 3 } },
        { id: "d", text: "Planning fun outings", points: { fun: 3 } }
      ]
    },
    {
      id: 4,
      question: "How would you handle a kid’s meltdown?",
      options: [
        { id: "a", text: "Stay calm and talk it through", points: { supportive: 3 } },
        { id: "b", text: "Distract them with something fun", points: { fun: 3 } },
        { id: "c", text: "Teach them how to manage emotions", points: { wise: 3 } },
        { id: "d", text: "Take them outside to reset", points: { adventurous: 3 } }
      ]
    },
    {
      id: 5,
      question: "Your dream Father’s Day gift would be…",
      options: [
        { id: "a", text: "A handmade card and breakfast in bed", points: { nurturing: 3 } },
        { id: "b", text: "A new toolset or gadget", points: { hands_on: 3 } },
        { id: "c", text: "Tickets to a game or concert", points: { fun: 3 } },
        { id: "d", text: "A quiet day with a good book", points: { wise: 3 } }
      ]
    },
    {
      id: 6,
      question: "What kind of dad jokes would you tell?",
      options: [
        { id: "a", text: "Classic puns that make everyone groan", points: { fun: 3 } },
        { id: "b", text: "Stories with surprise endings", points: { creative: 3 } },
        { id: "c", text: "Jokes with a life lesson tucked in", points: { wise: 3 } },
        { id: "d", text: "Physical comedy—funny faces and silly dances", points: { nurturing: 3 } }
      ]
    },
    {
      id: 7,
      question: "Your parenting style would be closest to…",
      options: [
        { id: "a", text: "The wise mentor", points: { wise: 3 } },
        { id: "b", text: "The fun-loving buddy", points: { fun: 3 } },
        { id: "c", text: "The hands-on builder", points: { hands_on: 3 } },
        { id: "d", text: "The adventurous explorer", points: { adventurous: 3 } }
      ]
    },
    {
      id: 8,
      question: "What would your kids say about you?",
      options: [
        { id: "a", text: "“Dad always knows what to say.”", points: { supportive: 3 } },
        { id: "b", text: "“Dad makes everything fun!”", points: { fun: 3 } },
        { id: "c", text: "“Dad builds the coolest stuff.”", points: { hands_on: 3 } },
        { id: "d", text: "“Dad takes us on the best adventures.”", points: { adventurous: 3 } }
      ]
    }
  ],
  results: [
    {
      id: "fun",
      title: "The Fun Dad",
      emoji: "🎉",
      description: "You’re the life of the party and the king of dad jokes. Your kids will always remember the laughter, games, and spontaneous dance-offs."
    },
    {
      id: "wise",
      title: "The Wise Dad",
      emoji: "🧘‍♂️",
      description: "You’re thoughtful, calm, and full of insight. Your kids will turn to you for advice, comfort, and meaningful conversations."
    },
    {
      id: "hands_on",
      title: "The Hands-On Dad",
      emoji: "🔧",
      description: "You love building, fixing, and creating. Whether it’s a treehouse or a science project, you’re always in the mix with sleeves rolled up."
    },
    {
      id: "adventurous",
      title: "The Adventurous Dad",
      emoji: "🏕️",
      description: "You’re all about exploring the world together. From camping trips to spontaneous road adventures, your kids will grow up with stories worth telling."
    },
    {
      id: "supportive",
      title: "The Supportive Dad",
      emoji: "🤝",
      description: "You’re the emotional anchor—always there with a hug, a pep talk, or a listening ear. Your kids will feel safe, seen, and loved."
    },
    {
      id: "creative",
      title: "The Creative Dad",
      emoji: "🎭",
      description: "You bring imagination to everything. Whether it’s storytelling, crafts, or quirky ideas, your kids will grow up inspired by your originality."
    },
    {
      id: "nurturing",
      title: "The Nurturing Dad",
      emoji: "🫶",
      description: "You’re warm, gentle, and deeply caring. Your kids will always know they’re loved and supported, no matter what."
    }
  ]
}
];