"use client";
import { generateOptions } from "@/lib/utils";
import { words } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import clsx from "clsx";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [word, setWord] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const pickNewWord = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
    setOptions(generateOptions(newWord));
    setSelected(null);
  };

  const handleOptionClick = (option: any) => {
    setSelected(option);
    if (option === word) {
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  };
  useEffect(() => {
    pickNewWord();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key >= "1" && e.key <= "4" && !selected) {
        const index = parseInt(e.key) - 1;
        if (options[index]) {
          handleOptionClick(options[index]);
        }
      }
      if ((e.key === " " || e.key === "Enter") && selected) {
        pickNewWord();
      }
      if (e.key === "t") {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [options, selected]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div
        className={clsx(
          "min-h-screen transition-colors duration-300",
          "dark:bg-gray-950 dark:text-white bg-gray-50 text-gray-900",
        )}
      >
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="flex justify-between items-start md:flex-row flex-col mb-8 ">
            <div>
              <h1 className="text-3xl font-bold">Spelling Practice</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Choose the correctly spelled word
              </p>
            </div>
            <div className="flex items-center md:flex-row flex-col gap-4">
              <div className="text-lg font-semibold">
                Streak:{" "}
                <span className="text-orange-600 dark:text-orange-400">
                  {streak}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {options.map((option, index) => (
              <button
                key={option}
                onClick={() => !selected && handleOptionClick(option)}
                className={clsx(
                  "p-6 rounded-xl font-mono text-xl border transition-all duration-200",
                  "relative flex justify-center items-center h-20",
                  "hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500",
                  selected
                    ? option === word
                      ? "bg-green-500 text-white border-green-600"
                      : selected === option
                        ? "bg-red-500 text-white border-red-600"
                        : "bg-gray-100 dark:bg-gray-800 opacity-60"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800",
                  "dark:border-gray-700",
                )}
                disabled={!!selected}
                aria-label={`Option ${index + 1}: ${option}`}
              >
                <span className="absolute left-3 top-2 text-xs opacity-60">
                  {index + 1}
                </span>
                {option}
              </button>
            ))}
          </div>

          {selected && (
            <div className="mt-8 flex justify-between items-center">
              <div className="text-lg font-medium">
                {selected === word ? (
                  <span className="text-green-600 dark:text-green-400">
                    ✓ Correct!
                  </span>
                ) : (
                  <div>
                    <span className="text-red-600 dark:text-red-400">
                      ✗ Incorrect!
                    </span>
                    <p className="text-sm mt-1">
                      The correct spelling is: <strong>{word}</strong>
                    </p>
                  </div>
                )}
              </div>
              <button
                onClick={pickNewWord}
                className={clsx(
                  "bg-orange-600 text-white px-5 py-2 rounded-md shadow",
                  "hover:bg-orange-700 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
                  "dark:focus:ring-offset-gray-900",
                )}
              >
                Next Word <span className="text-xs opacity-75">(Space)</span>
              </button>
            </div>
          )}

          <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
            <p>Keyboard shortcuts:</p>
            <ul className="list-disc pl-5 mt-1">
              <li>
                Press <kbd className="px-1 border rounded">1</kbd>-
                <kbd className="px-1 border rounded">4</kbd> to select an option
              </li>
              <li>
                Press <kbd className="px-1 border rounded">Space</kbd> or{" "}
                <kbd className="px-1 border rounded">Enter</kbd> for next word
              </li>
              <li>
                Press <kbd className="px-1 border rounded">T</kbd> to toggle
                theme
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
