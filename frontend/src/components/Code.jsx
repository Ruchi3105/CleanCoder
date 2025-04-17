import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import "prismjs/components/";
import Editor from "react-simple-code-editor";
import axios from "axios";
const languages = {
  javascript: "JavaScript",
  python: "Python",
  java: "Java",
  c: "C",
  cpp: "C++",
  go: "Go",
  rust: "Rust",
  sql: "SQL",
  json: "JSON",
  bash: "Bash",
  typescript: "TypeScript",
};
const Code = ({ FinalReview }) => {
  const [code, setCode] = useState(``);
  const [language, setLanguage] = useState("javascript");
  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, [language]);

  const reviewCode = async (code) => {
    setReview("Loading...");
    FinalReview("Loading...");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/ai/get-review`,
        { code, language }
      );
      setReview(res.data);
      FinalReview(res.data);
    } catch (err) {
      setReview("Error: " + err.message);
      FinalReview("Error: " + err.message);
      console.log(err);
    }
  };

  return (
    <div className="bg-[#1e1e2f] text-white w-full h-full lg:h-full min-h-[30vh] max-h-[60vh] lg:max-h-none rounded-xl shadow-xl relative flex flex-col overflow-hidden border border-slate-700">
      <div className="bg-[#2a2a3d] px-4 py-2 font-mono border-b border-slate-600 rounded-t-xl flex items-center justify-between">
        <span className="text-green-400">Code</span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#3b3b4f] text-white px-2 py-1 rounded-md text-sm border border-slate-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 cursor-pointer"
        >
          {Object.entries(languages).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Editor Scroll Wrapper */}
      <div className="flex-1 overflow-auto font-mono text-sm scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) =>
            prism.highlight(code, prism.languages[language] || prism.languages.javascript, language)
          }
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            minHeight: "100%",
            outline: "none",
            whiteSpace: "pre",
          }}
        />
      </div>

      <button
        className="absolute bottom-3 right-5 bg-slate-600 text-white px-4 py-1 rounded hover:bg-slate-500 transition-all duration-300 shadow-md cursor-pointer"
        onClick={() => reviewCode(code)}
      >
        Review
      </button>
    </div>
  );
};

export default Code;
