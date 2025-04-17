import React,{useState} from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";


const Output = ({ review }) => {
  
  return (
    <div className="bg-gray-900 text-white w-full lg:w-[50vw] h-full rounded-xl shadow-xl flex flex-col border border-slate-700">
      <div className="bg-[#2a2a3d] px-4 py-2 font-mono border-b border-slate-600 rounded-t-xl">
        <span className="text-yellow-400">Suggestion</span>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5 text-sm leading-relaxed font-mono scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
        <Markdown
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="text-lg font-bold text-blue-400 mt-6 mb-2" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-md font-semibold text-purple-400 mt-4 mb-2" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc ml-6 my-2 space-y-1" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="text-slate-300" {...props} />
            ),
            pre: ({ node, ...props }) => (
              <pre className="bg-[#1e1e2f] p-4 rounded-md overflow-x-auto my-4" {...props} />
            ),
            code: ({ node, inline, className, children, ...props }) => {
              return !inline ? (
                <code className={`${className} text-sm`} {...props}>
                  {children}
                </code>
              ) : (
                <code className="bg-slate-700 px-1 py-0.5 rounded text-slate-200">
                  {children}
                </code>
              );
            },
            p: ({ node, ...props }) => (
              <p className="mb-3 text-slate-300" {...props} />
            ),
          }}
        >
          {review}
        </Markdown>
      </div>
    </div>
  );
};

export default Output;
