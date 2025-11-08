{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ useState \} from "react";\
import QuestionCard from "./components/QuestionCard";\
import questions from "./data/questions.json";\
\
function App() \{\
  const [currentIndex, setCurrentIndex] = useState(0);\
\
  const nextQuestion = () => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));\
  const prevQuestion = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));\
\
  return (\
    <div className="min-h-screen bg-gray-100">\
      <header className="p-6 text-center bg-blue-600 text-white text-2xl font-bold">\
        Plastic Surgery QBank\
      </header>\
      <QuestionCard\
        questionData=\{questions[currentIndex]\}\
        onNext=\{nextQuestion\}\
        onPrev=\{prevQuestion\}\
        isFirst=\{currentIndex === 0\}\
        isLast=\{currentIndex === questions.length - 1\}\
      />\
      <footer className="text-center mt-10 mb-6 text-gray-500">\
        Demo Prototype - Free for Education\
      </footer>\
    </div>\
  );\
\}\
\
export default App;\
}
