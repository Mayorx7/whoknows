export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    points: { [key: string]: number };
  }[];
}

export interface QuizResult {
  id: string;
  title: string;
  emoji: string;
  description: string;
  image?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  questions: QuizQuestion[];
  results: QuizResult[];
}

import { additionalQuizzes } from "./moreQuizzes";

export const quizzes: Quiz[] = [
  {
    id: "marriage-quiz",
    title: "Who Will You Marry?",
    description: "Discover your perfect match based on your preferences!",
    emoji: "💕",
    color: "from-pink-400 to-rose-400",
    questions: [
      {
        id: 1,
        question: "When you have a free Saturday, what sounds most exciting?",
        options: [
          { id: "a", text: "Attending a lively owambe or wedding party", points: { fun: 3, romantic: 2, traditional: 2 } },
          { id: "b", text: "Visiting friends and family for a small gathering", points: { romantic: 3, traditional: 2 } },
          { id: "c", text: "Exploring a quiet scenic place within your city or town", points: { adventurous: 2, intellectual: 2, free_spirit: 2 } },
          { id: "d", text: "Staying in to cook a special meal and watch a film", points: { romantic: 3, sophisticated: 2 } }
        ]
      },
      {
        id: 2,
        question: "If your partner’s parents call unexpectedly, how do you feel?",
        options: [
          { id: "a", text: "Delighted—you value strong family ties", points: { traditional: 3, romantic: 2 } },
          { id: "b", text: "Slightly nervous but eager to connect", points: { romantic: 2, fun: 1 } },
          { id: "c", text: "Respectful but prefer to set boundaries", points: { intellectual: 2, free_spirit: 2 } },
          { id: "d", text: "Unbothered—you’d rather keep family involvement minimal", points: { free_spirit: 3 } }
        ]
      },
      {
        id: 3,
        question: "On a public holiday like Independence Day or Christmas, how do you celebrate?",
        options: [
          { id: "a", text: "Hosting or attending a big celebration with dancing and food", points: { fun: 3, traditional: 2 } },
          { id: "b", text: "Going for a church or mosque program before a shared meal", points: { traditional: 3, romantic: 2 } },
          { id: "c", text: "Traveling or visiting a local tourist spot", points: { adventurous: 3, free_spirit: 2 } },
          { id: "d", text: "Relaxing quietly at home with close ones", points: { romantic: 3, intellectual: 1 } }
        ]
      },
      {
        id: 4,
        question: "When you and your partner disagree, what’s your first instinct?",
        options: [
          { id: "a", text: "Sit down and discuss it calmly right away", points: { intellectual: 3, mature: 3 } },
          { id: "b", text: "Take time to cool off, then revisit the issue", points: { free_spirit: 2, mature: 2 } },
          { id: "c", text: "Crack a lighthearted joke to ease the tension", points: { fun: 3, romantic: 1 } },
          { id: "d", text: "Seek advice from a trusted elder or friend", points: { traditional: 2, romantic: 2 } }
        ]
      },
      {
        id: 5,
        question: "Which quality matters most in building a lasting home?",
        options: [
          { id: "a", text: "Respect for each other’s families", points: { traditional: 3, romantic: 2 } },
          { id: "b", text: "Financial responsibility and planning", points: { intellectual: 2, sophisticated: 2 } },
          { id: "c", text: "Shared spiritual or moral values", points: { traditional: 3, romantic: 2 } },
          { id: "d", text: "A spirit of fun and adaptability", points: { fun: 3, free_spirit: 2 } }
        ]
      },
      {
        id: 6,
        question: "Your partner surprises you after a long week. What excites you most?",
        options: [
          { id: "a", text: "A thoughtful handwritten note and your favorite local snack", points: { romantic: 3, traditional: 2 } },
          { id: "b", text: "Tickets to a popular Nigerian artist’s concert or comedy show", points: { fun: 3, adventurous: 2 } },
          { id: "c", text: "A road trip to a nearby tourist spot like Erin Ijesha Falls or Obudu", points: { adventurous: 3, free_spirit: 2 } },
          { id: "d", text: "A cozy dinner for two at a nice restaurant in town", points: { romantic: 3, sophisticated: 2 } }
        ]
      },
      {
        id: 7,
        question: "How do you and your partner engage with your community?",
        options: [
          { id: "a", text: "Volunteering for local charities or religious events", points: { traditional: 3, romantic: 2 } },
          { id: "b", text: "Supporting local businesses and creatives", points: { intellectual: 2, fun: 2 } },
          { id: "c", text: "Hosting friends and neighbors for meals or hangouts", points: { fun: 3, romantic: 2 } },
          { id: "d", text: "Keeping to yourselves and focusing on personal goals", points: { free_spirit: 3 } }
        ]
      },
      {
        id: 8,
        question: "Ten years from now, what picture makes you happiest?",
        options: [
          { id: "a", text: "A big family gathering during festive seasons", points: { traditional: 3, romantic: 2 } },
          { id: "b", text: "Building businesses or projects together that give back locally", points: { intellectual: 2, sophisticated: 2 } },
          { id: "c", text: "Traveling across Africa, experiencing diverse cultures", points: { adventurous: 3, free_spirit: 3 } },
          { id: "d", text: "A peaceful home where laughter fills the air every day", points: { romantic: 3, fun: 2 } }
        ]
      }
    ],
    
    results: [
      {
        id: "romantic",
        title: "The Hopeless Romantic",
        emoji: "🌹",
        description: "You'll marry someone who writes you love letters, remembers every anniversary, and believes in fairy tale endings. They'll sweep you off your feet with grand gestures and quiet moments of tenderness."
      },
      {
        id: "adventurous",
        title: "The Adventure Buddy",
        emoji: "🏔️",
        description: "Your future spouse will be your partner in crime for life's greatest adventures. From spontaneous road trips to hiking mountains, you'll explore the world together hand in hand."
      },
      {
        id: "intellectual",
        title: "The Deep Thinker",
        emoji: "📚",
        description: "You'll marry someone who challenges your mind and engages your soul. Late-night philosophical discussions and shared book recommendations will be the foundation of your love."
      },
      {
        id: "fun",
        title: "The Life of the Party",
        emoji: "🎉",
        description: "Your perfect match will keep you laughing every single day. They'll turn ordinary moments into extraordinary memories with their infectious energy and playful spirit."
      },
      {
        id: "sophisticated",
        title: "The Elegant Soul",
        emoji: "🥂",
        description: "You'll find love with someone who appreciates the finer things in life. Wine tastings, art galleries, and cultured conversations will define your beautiful relationship."
      },
      {
        id: "free_spirit",
        title: "The Free Spirit",
        emoji: "🦋",
        description: "Your soulmate will value freedom and authenticity above all. Together, you'll create your own rules and live life on your own terms, supporting each other's dreams unconditionally."
      }
    ]
  },




      // QUIZ: "Which Superhero Are You?"

{
  id: "superhero-quiz",
  title: "Which Superhero Are You?",
  description: "Discover your inner superhero based on your personality!",
  emoji: "⚡",
  color: "from-blue-400 to-indigo-500",
  questions: [
    {
      id: 1,
      question: "What's your greatest strength?",
      options: [
        { id: "a", text: "Physical power", points: { superman: 3, hulk: 3 } },
        { id: "b", text: "Intelligence and strategy", points: { batman: 3, ironman: 3 } },
        { id: "c", text: "Speed and agility", points: { flash: 3, spiderman: 2 } },
        { id: "d", text: "Compassion and fairness", points: { wonder_woman: 3, black_panther: 2 } }
      ]
    },
    {
      id: 2,
      question: "How do you prefer to solve problems?",
      options: [
        { id: "a", text: "With careful planning", points: { batman: 3, black_panther: 2 } },
        { id: "b", text: "Using advanced technology", points: { ironman: 3, batman: 2 } },
        { id: "c", text: "Direct confrontation", points: { superman: 3, hulk: 3 } },
        { id: "d", text: "Quick action and improvisation", points: { flash: 3, spiderman: 2 } }
      ]
    },
    {
      id: 3,
      question: "What motivates you most?",
      options: [
        { id: "a", text: "Protecting loved ones", points: { spiderman: 3, superman: 2 } },
        { id: "b", text: "Justice and equality", points: { captain_america: 3, wonder_woman: 3 } },
        { id: "c", text: "Legacy and responsibility", points: { black_panther: 3, batman: 2 } },
        { id: "d", text: "Thrill and adventure", points: { flash: 2, hulk: 2 } }
      ]
    },
    {
      id: 4,
      question: "What's your greatest weakness?",
      options: [
        { id: "a", text: "Being too trusting", points: { superman: 3, captain_america: 2 } },
        { id: "b", text: "Overthinking and isolation", points: { batman: 3, black_panther: 2 } },
        { id: "c", text: "Anger issues", points: { hulk: 3 } },
        { id: "d", text: "Impulsiveness", points: { flash: 3, ironman: 2, spiderman: 2 } }
      ]
    },
    {
      id: 5,
      question: "What's your ideal team role?",
      options: [
        { id: "a", text: "The leader", points: { captain_america: 3, wonder_woman: 3, superman: 2 } },
        { id: "b", text: "The strategist", points: { batman: 3, black_panther: 3 } },
        { id: "c", text: "The powerhouse", points: { hulk: 3, superman: 2 } },
        { id: "d", text: "The agile support", points: { spiderman: 3, flash: 2 } }
      ]
    },
    {
      id: 6,
      question: "Where would you prefer to live?",
      options: [
        { id: "a", text: "A bustling, modern city", points: { ironman: 3, spiderman: 2 } },
        { id: "b", text: "A hidden, advanced kingdom", points: { black_panther: 3 } },
        { id: "c", text: "A peaceful countryside", points: { superman: 3 } },
        { id: "d", text: "A place rich with history and culture", points: { wonder_woman: 3, captain_america: 2 } }
      ]
    },
    {
      id: 7,
      question: "How do you handle setbacks?",
      options: [
        { id: "a", text: "Rely on intellect and preparation", points: { batman: 3, ironman: 2 } },
        { id: "b", text: "Persevere with unwavering hope", points: { superman: 3, captain_america: 3 } },
        { id: "c", text: "Channel emotions into strength", points: { hulk: 3, wonder_woman: 2 } },
        { id: "d", text: "Adapt quickly and keep moving", points: { flash: 3, spiderman: 2 } }
      ]
    },
    {
      id: 8,
      question: "What kind of legacy do you want to leave?",
      options: [
        { id: "a", text: "Inspiring kindness and justice", points: { wonder_woman: 3, captain_america: 3 } },
        { id: "b", text: "Advancing technology and knowledge", points: { ironman: 3, black_panther: 3 } },
        { id: "c", text: "Showing that anyone can be a hero", points: { spiderman: 3, flash: 2 } },
        { id: "d", text: "Protecting the world at any cost", points: { superman: 3, batman: 2 } }
      ]
    }
  ],
  results: [
    {
      id: "superman",
      title: "Superman",
      emoji: "🦸‍♂️",
      description: "You're the ultimate hero—strong, kind, and an unwavering symbol of hope. Your heart is your greatest power."
    },
    {
      id: "batman",
      title: "Batman",
      emoji: "🦇",
      description: "Strategic and determined, you prove that heroes are forged through resilience and intellect, not superpowers."
    },
    {
      id: "spiderman",
      title: "Spider-Man",
      emoji: "🕷️",
      description: "Relatable, witty, and selfless, you balance humor with heroism and always look out for the underdog."
    },
    {
      id: "ironman",
      title: "Iron Man",
      emoji: "🤖",
      description: "A genius innovator with unmatched charisma, you show that technology and courage can change the world."
    },
    {
      id: "captain_america",
      title: "Captain America",
      emoji: "🛡️",
      description: "Noble and inspiring, you stand for justice and unity, rallying others to fight for what’s right."
    },
    {
      id: "hulk",
      title: "The Incredible Hulk",
      emoji: "💚",
      description: "Powerful and passionate, your strength emerges when you fight for what matters most."
    },
    {
      id: "flash",
      title: "The Flash",
      emoji: "⚡",
      description: "Optimistic and fast-thinking, you solve problems on the run and bring light wherever you go."
    },
    {
      id: "wonder_woman",
      title: "Wonder Woman",
      emoji: "🌟",
      description: "A warrior of compassion and justice, you embody balance, courage, and unwavering fairness."
    },
    {
      id: "black_panther",
      title: "Black Panther",
      emoji: "🐾",
      description: "Wise, noble, and innovative, you protect your people and honor your heritage while embracing progress."
    }
  ]
},


 // QUIZ: "Which Anime Character Are You?"
// Expanded to 8 questions and added two new characters (Luffy and Mikasa) for more variety.
// This quiz matches users to iconic anime heroes based on fighting style, motivation, and values.

{
  id: "anime-character-quiz",
  title: "Which Anime Character Are You?",
  description: "Find out which iconic anime character matches your personality!",
  emoji: "🎌",
  color: "from-purple-400 to-pink-400",
  questions: [
    {
      id: 1,
      question: "What's your fighting style?",
      options: [
        { id: "a", text: "Raw power and determination", points: { goku: 3, naruto: 2, luffy: 2 } },
        { id: "b", text: "Speed and precision", points: { levi: 3, zoro: 2, mikasa: 2 } },
        { id: "c", text: "Strategy and intelligence", points: { light: 3, senku: 3, edward: 2 } },
        { id: "d", text: "Magic or unique abilities", points: { natsu: 3, edward: 2 } }
      ]
    },
    {
      id: 2,
      question: "What drives you forward?",
      options: [
        { id: "a", text: "Protecting friends and loved ones", points: { naruto: 3, natsu: 3, mikasa: 3 } },
        { id: "b", text: "Becoming the strongest", points: { goku: 3, zoro: 2, luffy: 3 } },
        { id: "c", text: "Seeking knowledge or truth", points: { senku: 3, edward: 2 } },
        { id: "d", text: "Justice and order", points: { light: 3, levi: 2 } }
      ]
    },
    {
      id: 3,
      question: "How do you handle failure?",
      options: [
        { id: "a", text: "Train harder until I succeed", points: { goku: 3, zoro: 3, luffy: 2 } },
        { id: "b", text: "Learn from mistakes and adapt", points: { senku: 3, edward: 2 } },
        { id: "c", text: "Never give up on my friends", points: { naruto: 3, natsu: 2, mikasa: 2 } },
        { id: "d", text: "Reevaluate my strategy", points: { light: 3, levi: 2 } }
      ]
    },
    {
      id: 4,
      question: "What's your ideal team?",
      options: [
        { id: "a", text: "A close-knit group of friends", points: { naruto: 3, natsu: 3, luffy: 3 } },
        { id: "b", text: "I prefer working alone", points: { levi: 3, light: 2 } },
        { id: "c", text: "Fellow thinkers and strategists", points: { senku: 3, edward: 2 } },
        { id: "d", text: "Strong rivals who push me forward", points: { goku: 3, zoro: 2 } }
      ]
    },
    {
      id: 5,
      question: "What's your biggest flaw?",
      options: [
        { id: "a", text: "Too trusting or naive", points: { goku: 3, naruto: 2, luffy: 2 } },
        { id: "b", text: "Obsessed with goals", points: { light: 3, zoro: 2 } },
        { id: "c", text: "Reckless when friends are hurt", points: { natsu: 3, mikasa: 2 } },
        { id: "d", text: "Emotionally distant or stoic", points: { levi: 3, senku: 2 } }
      ]
    },
    {
      id: 6,
      question: "Which setting excites you most?",
      options: [
        { id: "a", text: "A grand adventure across the seas", points: { luffy: 3, zoro: 2 } },
        { id: "b", text: "A futuristic world of science", points: { senku: 3, edward: 2 } },
        { id: "c", text: "A magical realm full of guilds", points: { natsu: 3 } },
        { id: "d", text: "A battlefield where humanity fights to survive", points: { levi: 3, mikasa: 3 } }
      ]
    },
    {
      id: 7,
      question: "What's your approach to leadership?",
      options: [
        { id: "a", text: "Lead with my heart and inspire", points: { naruto: 3, luffy: 3 } },
        { id: "b", text: "Stay calm and plan carefully", points: { levi: 3, senku: 2 } },
        { id: "c", text: "Use intelligence and manipulation", points: { light: 3 } },
        { id: "d", text: "Lead by example through action", points: { goku: 3, mikasa: 2 } }
      ]
    },
    {
      id: 8,
      question: "What do you value most in life?",
      options: [
        { id: "a", text: "Friendship and loyalty", points: { naruto: 3, natsu: 3, luffy: 3 } },
        { id: "b", text: "Knowledge and discovery", points: { senku: 3, edward: 2 } },
        { id: "c", text: "Honor and duty", points: { levi: 3, mikasa: 3 } },
        { id: "d", text: "Changing the world", points: { light: 3, goku: 2 } }
      ]
    }
  ],
  results: [
    {
      id: "goku",
      title: "Goku",
      emoji: "🔥",
      description: "Pure-hearted and endlessly determined, you live for challenges and protect those you love with unstoppable strength."
    },
    {
      id: "naruto",
      title: "Naruto Uzumaki",
      emoji: "🍜",
      description: "You never give up on your friends and dreams. Your optimism and perseverance inspire everyone around you."
    },
    {
      id: "levi",
      title: "Levi Ackerman",
      emoji: "⚔️",
      description: "Disciplined and deadly efficient, your stoic exterior hides a fierce loyalty to those you protect."
    },
    {
      id: "light",
      title: "Light Yagami",
      emoji: "📓",
      description: "Brilliant and strategic, you seek justice but must beware of how ambition shapes your choices."
    },
    {
      id: "senku",
      title: "Senku Ishigami",
      emoji: "🧪",
      description: "Logical and innovative, you thrive on solving problems with science and intelligence."
    },
    {
      id: "natsu",
      title: "Natsu Dragneel",
      emoji: "🐉",
      description: "Passionate and fiercely loyal, you’ll burn bright for your friends and never back down from a challenge."
    },
    {
      id: "edward",
      title: "Edward Elric",
      emoji: "⚗️",
      description: "Determined and clever, you’re driven to make things right and protect those you care for."
    },
    {
      id: "zoro",
      title: "Roronoa Zoro",
      emoji: "🗾",
      description: "Loyal and strong-willed, you’re unshakable in your goals—even if your sense of direction could use work!"
    },
    {
      id: "luffy",
      title: "Monkey D. Luffy",
      emoji: "🏴‍☠️",
      description: "Adventurous and free-spirited, you chase your dreams fearlessly and inspire others with your boundless energy."
    },
    {
      id: "mikasa",
      title: "Mikasa Ackerman",
      emoji: "🌸",
      description: "Quiet yet fierce, you protect your loved ones with unmatched skill and unwavering loyalty."
    
} 
   ] 
      }, 
      ...additionalQuizzes 
                            ];