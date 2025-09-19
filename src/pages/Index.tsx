import { motion } from "framer-motion";
import { QuizCard } from "@/components/QuizCard";
import { quizzes } from "@/data/quizzes";
import heroBg from "@/assets/hero-bg.png";
import { Sparkles } from "lucide-react";

const Index = () => {
  // Online 3D illustrations
  const illustrations = [
  "https://img.icons8.com/3d-fluency/94/love-circled.png",
  "https://img.icons8.com/3d-fluency/94/star.png",
  "https://img.icons8.com/3d-fluency/94/approval.png",
  "https://img.icons8.com/3d-fluency/94/globe.png",
  "https://img.icons8.com/3d-fluency/94/crown.png",
  "https://img.icons8.com/3d-fluency/94/briefcase.png",
  "https://img.icons8.com/3d-fluency/94/coins.png",
  "https://img.icons8.com/3d-fluency/94/money-box.png",
  "https://img.icons8.com/3d-fluency/94/star-struck.png",
  "https://img.icons8.com/3d-fluency/94/touch-id.png",
  "https://img.icons8.com/3d-fluency/94/tools.png",
];

  // Gradient color palette for cards
  const gradients = [
    "from-pink-400 to-rose-500",
    "from-purple-400 to-indigo-500",
    "from-orange-400 to-pink-500",
    "from-cyan-400 to-blue-500",
    "from-violet-400 to-purple-600",
    "from-green-400 to-emerald-500",
    "from-rose-400 to-fuchsia-500",
    "from-indigo-400 to-blue-600",
    "from-teal-400 to-cyan-500",
    "from-fuchsia-400 to-pink-500",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              WhoKnows?
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Fun quizzes with a fresh new vibe ✨
              Find out who you really are in just a few minutes.
            </p>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <Sparkles
                size={52}
                className="text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quizzes Grid */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
        {/* Animated pastel blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-300/30 rounded-full blur-[120px] animate-pulse delay-700" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 drop-shadow-sm">
              Choose Your Adventure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From soulmates to superpowers, find out what makes you unique with our collection of fun personality quizzes.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizzes.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${gradients[index % gradients.length]} text-white rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
              >
                <div className="flex flex-col items-center p-6">
  <img
    src={illustrations[index % illustrations.length]}
    alt="quiz illustration"
    className="w-24 h-24 mb-4 drop-shadow-lg"
  />
  <QuizCard
    quiz={quiz}
    index={index}
    illustration={illustrations[index % illustrations.length]} // ✅ Pass it here
  />
</div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-gray-600 mb-3">
              Made with ❤️ for Gen-Z quiz lovers
            </p>
            <p className="text-sm text-gray-500">
              Share your results. Challenge your friends. More vibes coming soon 🚀
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
