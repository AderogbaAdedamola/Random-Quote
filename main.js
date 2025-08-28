const quoteNum = document.getElementById("quoteNumber");
const plural = document.getElementById("plural");
const container = document.querySelector(".quote-container");
const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear()
let currentNum = 1;
let quoteIndex = 0;
const usedIndex = [];
usedIndex.push(quoteIndex);

const quotes = [
   " 🌟 Your future is built by the bricks you lay today, not by the wishes you make tomorrow." ,
    "🌱 Growth begins at the edge of your comfort zone—step there, and you’ll find your strength.",
    "🔥 Discipline is the bridge between dreams and reality—cross it daily.",
   "⏳ Every second you doubt yourself, someone else is working on the same dream—choose action.",
   "💎 Pressure doesn’t break you; it reveals the diamond you’ve always been.",
   " 🚀 Small consistent steps can take you farther than giant leaps taken once.",
    " 🌊 When challenges rise like waves, remember—you are the ocean, not the ripple.",
   "🛠️ Don’t wait for motivation; build habits that keep you moving when motivation fades.",
   "🦅 An eagle does not fear the storm—it uses it to rise higher. Be the eagle.",
   "🌍 You don’t need to be extraordinary to start; you just need courage to begin.", 
   "🌈 Success is rented, and the rent is due every day.", 
   "⭐ Dream big, start small, act now",
   "🕝 Opportunities don’t wait for perfect timing—create it." , 
   "⚡ Consistency beats talent when talent gets lazy.",
   "☄ Failure is just the tuition you pay for greatness.", 
   "⭐ Chase progress, not perfection.",
   "💭 Your habits are voting for your future—cast wisely.", 
   "🚀 Start where you are, use what you have, do what you can.",
   "🤷 Excuses never built empires." , 
   "🗼 Greatness is forged in the quiet work no one sees.", 
   "🔥 Discipline is the art of choosing what you want most over what you want now.", 
   "🏄 A smooth sea never made a skilled sailor.", 
   "📌 Pain is temporary, but quitting makes it permanent.", 
   "💭 When you feel like stopping, remember why you started.", 
   "🌪 Strong roots survive the fiercest storms." , 
   "💥 Tough times don’t last, tough people do.",
   "🚶 Every setback is a setup for a stronger comeback.", 
   "🔥 Sacrifice today for the life you want tomorrow.",
   "🔥 Discipline is freedom disguised as effort.",
   "🌱 Courage is moving forward even when fear walks beside you.",
   "🍀 Your mindset is your steering wheel—point it where you want to go. ",
   "🙏 Gratitude turns little into enough.", 
   "🌱 Feed your mind with possibility, not doubt.", 
   "💥 Energy flows where focus goes.",
   "💦 You are stronger than your excuses.", 
   "🪴 Your thoughts plant the seeds of your future.",
   "😏 Comparison steals joy—focus on your lane.",
   "♾ The only limit is the one you believe in.",
   "✅ Optimism is a superpower—use it daily.",
   "⚛ What you focus on expands.",
   "🚼 Dreams die without action.",
   "👷 Work hard in silence, let success make the noise.",
   "🤔 Don’t count the hours, make the hours count." , 
   "🤵 Execution separates the dreamers from the achievers.", 
   "😓 Sweat is just your body investing in your future.",
   "👷 Hard work beats luck every time.",
   "💪 Effort today writes the story of tomorrow.",
    "👌 Greatness demands grind.",
   "🤔 If it was easy, everyone would do it.",  
   "🛠 Hard work compounds like interest—keep depositing.",
    "🥽 Walk in your vision, not in people’s opinions.",
   "🔪 Doubt kills more dreams than failure ever will.",
   "🗣 Be bold enough to try, strong enough to persist.",
   "⚓ Confidence is built by keeping promises to yourself.",
   "😱 Fear is just excitement without breath—breathe and go.",
   "☢ Act like the person you want to become.",
   "🤓 Your courage can inspire someone else’s strength.",
   "🗣 Speak possibility into your life daily.",
   "🦁 Lions don’t ask permission to roar.", 
   "▶️ You already have what it takes—start using it."

]


function updateNum() {
    quoteNum.textContent = currentNum;
}
function changeQuote() {
   container.textContent = quotes[quoteIndex];
}


function generateQuote() {
  currentNum ++;
  generateIndex();
  plural.textContent = "s";
  changeQuote();
  updateNum();
}

function generateIndex() {  
  quoteIndex = Math.floor(Math.random()*10);
  usedIndex.sort((a, b) => a - b);
if(usedIndex.length < 10){
    updateQuoteIndex();
} else if (usedIndex.length >= 10 && usedIndex.length < 20) {
  quoteIndex += 10;
    updateQuoteIndex();
} else if (usedIndex.length >= 20 && usedIndex.length < 30) {
  quoteIndex += 20;
    updateQuoteIndex()
} else if (usedIndex.length >= 30 && usedIndex.length < 40) {
    quoteIndex += 30;
    updateQuoteIndex()
} else if (usedIndex.length >= 40 && usedIndex.length < 50) {
  quoteIndex += 40;
  updateQuoteIndex()
} else if (usedIndex.length >= 50 && usedIndex.length < 60) {
  quoteIndex += 50;
  updateQuoteIndex();
} else{
  usedIndex.splice(1, usedIndex.length - 1)
}
}

function updateQuoteIndex() {
  if (usedIndex.includes(quoteIndex)) {
      generateIndex();
      return
    } 
  usedIndex.push(quoteIndex);
}

changeQuote();
updateNum();
