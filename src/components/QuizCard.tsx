import { motion } from "framer-motion";
import { Quiz } from "@/data/quizzes";
import { useNavigate } from "react-router-dom";

interface QuizCardProps {
  quiz: Quiz;
  index: number;
  illustration: string; // pass illustration from Index.tsx
}

export const QuizCard = ({ quiz, index, illustration }: QuizCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="h-full"
    >
      <div
        className={`flex items-center justify-between rounded-3xl p-6 text-white shadow-lg cursor-pointer transition-all duration-300`}
        
        onClick={() => navigate(`/quiz/${quiz.id}`)}
      >
        {/* Left text */}
        <div className="flex flex-col text-left">
          <span className="text-sm opacity-80 mb-1">Level {index + 1}</span>
          <h3 className="text-2xl font-bold leading-tight">{quiz.title}</h3>
        </div>

        {/* Right illustration */}
      
      </div>
    </motion.div>
  );
};
