"use strict";

// DOM elements
const Btn = document.querySelector(".button");
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".quotes");

// Array of advice
const adviceArray = [
  { id: 1, text: "Advice 1: Be alive life won't wait for you." },
  { id: 2, text: "Advice 2: Get up from your bed now." },
  { id: 3, text: "Advice 3: The world doesn't revolve around you." },
  { id: 4, text: "Advice 4: Make every moment count." },
  { id: 5, text: "Advice 5: Chase your dreams with determination." },
  { id: 6, text: "Advice 6: Stay focused on your goals." },
  { id: 7, text: "Advice 7: Practice gratitude daily." },
  { id: 8, text: "Advice 8: Embrace change with an open mind." },
  { id: 9, text: "Advice 9: Learn from your mistakes and grow." },
  { id: 10, text: "Advice 10: Believe in yourself and your abilities." },
  { id: 11, text: "Advice 11: Treat others with kindness and respect." },
  { id: 12, text: "Advice 12: Stay true to your values and principles." },
  { id: 13, text: "Advice 13: Take care of your physical and mental health." },
  { id: 14, text: "Advice 14: Surround yourself with positive influences." },
  { id: 15, text: "Advice 15: Be proactive in creating your own happiness." }
];

// Button click event
Btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * adviceArray.length);
  
  const randomAdvice = adviceArray[randomIndex];
  
  adviceNumber.textContent = `Advice #${randomAdvice.id}`;
  adviceText.textContent = randomAdvice.text;
});
