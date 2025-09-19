import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuizProgress } from "@/components/QuizProgress";
import { quizzes, Quiz as QuizType, QuizResult } from "@/data/quizzes";
import { ArrowLeft } from "lucide-react";

export default function Quiz() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const foundQuiz = quizzes.find(q => q.id === id);
    if (foundQuiz) {
      setQuiz(foundQuiz);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleAnswer = (optionId: string) => {
    if (!quiz) return;

    const question = quiz.questions[currentQuestion];
    const option = question.options.find(opt => opt.id === optionId);

    if (option) {
      const newAnswers = { ...answers };
      Object.entries(option.points).forEach(([key, points]) => {
        newAnswers[key] = (newAnswers[key] || 0) + points;
      });
      setAnswers(newAnswers);

      if (currentQuestion + 1 < quiz.questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const maxScore = Math.max(...Object.values(newAnswers));
        const winningType = Object.entries(newAnswers).find(([, score]) => score === maxScore)?.[0];
        const quizResult = quiz.results.find(r => r.id === winningType) || quiz.results[0];
        setResult(quizResult);
        setShowResult(true);
      }
    }
  };

  const shareResult = async (platform: 'whatsapp' | 'twitter' | 'copy') => {
    if (!result || !quiz) return;

    const text = `I just took the "${quiz.title}" quiz and got: ${result.title} ${result.emoji}! ${result.description}`;
    const url = window.location.origin;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${text}\n\nTry it yourself: ${url}`)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${text}\n\nTry it yourself: ${url}`)}`);
        break;
      case 'copy':
        await navigator.clipboard.writeText(`${text}\n\nTry it yourself: ${url}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden px-4 py-10">
      {/* Animated pastel blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-300/30 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Quizzes
        </Button>

        {quiz && (
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">{quiz.emoji}</div>
            <h1 className="text-3xl font-extrabold text-gray-800">{quiz.title}</h1>
            <p className="text-gray-600 mt-2">{quiz.description}</p>
          </div>
        )}

        {showResult && result ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Card className="rounded-3xl shadow-2xl border-0 bg-white/90 backdrop-blur-md text-center">
              <CardHeader className="pb-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-6xl mb-4 drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]"
                >
                  {result.emoji}
                </motion.div>
                <h1 className="text-3xl font-extrabold text-gray-800 mb-2">{result.title}</h1>
                <p className="text-gray-600 leading-relaxed">{result.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={() => shareResult('whatsapp')} variant="outline" className="flex-1">
                    Share on WhatsApp
                  </Button>
                  <Button onClick={() => shareResult('twitter')} variant="outline" className="flex-1">
                    Share on Twitter
                  </Button>
                </div>
                <Button onClick={() => shareResult('copy')} variant="outline" className="w-full">
                  Copy Link
                </Button>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setAnswers({});
                      setShowResult(false);
                      setResult(null);
                    }}
                    variant="secondary"
                    className="flex-1"
                  >
                    Retake Quiz
                  </Button>
                  <Button onClick={() => navigate('/')} className="flex-1 bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
                    More Quizzes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <>
            <QuizProgress currentQuestion={currentQuestion + 1} totalQuestions={quiz?.questions.length || 0} />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="rounded-3xl shadow-xl border border-white/30 bg-white/10 backdrop-blur-lg text-white">

                  <CardHeader>
                    <h2 className="text-2xl font-bold text-gray-800">{quiz?.questions[currentQuestion].question}</h2>
                  </CardHeader>
                  
                 <CardContent>
  <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
    {quiz?.questions[currentQuestion].options.map((option, index) => (
      <motion.div
        key={option.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="w-full"
      >
        <Button
          onClick={() => handleAnswer(option.id)}
          className="w-full text-left justify-start px-4 py-3 h-auto rounded-2xl border border-white/30 bg-white/30 backdrop-blur-lg text-black whitespace-normal break-words shadow-md hover:bg-white/40 transition-all duration-200"
        >
          <span className="leading-relaxed text-gray-800 break-words">{option.text}</span>

        </Button>
      </motion.div>
    ))}
  </div>
</CardContent>



                </Card>
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
}
