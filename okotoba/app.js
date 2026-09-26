import { ESSENCE, STILL_HINT, pickWord, questions } from "./words.js";

const card = document.getElementById("card");
const progress = document.getElementById("progress");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const state = {
  screen: "gate",
  step: 0,
  answers: {},
  lastId: null,
  word: null,
  brief: false,
  timer: 0,
  token: 0
};

function el(tag, props, children) {
  const node = document.createElement(tag);
  if (props) {
    for (const [key, value] of Object.entries(props)) {
      if (key === "class") node.className = value;
      else if (key.startsWith("on") && typeof value === "function") {
        node.addEventListener(key.slice(2).toLowerCase(), value);
      } else if (value === true) node.setAttribute(key, "");
      else if (value !== false && value != null) node.setAttribute(key, String(value));
    }
  }
  const list = children == null ? [] : Array.isArray(children) ? children : [children];
  for (const child of list) {
    if (child == null || child === false) continue;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return node;
}

function clearTimer() {
  if (state.timer) {
    window.clearTimeout(state.timer);
    state.timer = 0;
  }
}

function updateDots() {
  progress.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("on", index <= state.step);
  });
}

function render() {
  clearTimer();
  const token = ++state.token;
  progress.hidden = state.screen !== "ask";
  if (state.screen === "ask") updateDots();
  card.replaceChildren();
  if (state.screen === "gate") renderGate();
  else if (state.screen === "ask") renderAsk();
  else if (state.screen === "still") renderStill(token);
  else renderWord();
}

function renderGate() {
  card.append(
    el("div", { class: "gate" }, [
      el("p", { class: "kicker" }, "静かに、はじめる"),
      el(
        "p",
        { class: "note" },
        "三つの問いに、指で答えてください。短い静けさのあと、いまのあなたへ言葉が届きます。"
      ),
      el("div", { class: "actions" }, [
        el(
          "button",
          {
            class: "btn primary",
            type: "button",
            onclick: () => {
              state.step = 0;
              state.answers = {};
              state.lastId = null;
              state.word = null;
              state.screen = "ask";
              render();
            }
          },
          "静かに始める"
        )
      ])
    ])
  );
}

function renderAsk() {
  const q = questions[state.step];
  const choices = el("div", { class: "choices" });
  q.choices.forEach((choice) => {
    choices.append(
      el(
        "button",
        {
          class: "choice",
          type: "button",
          onclick: () => choose(q.id, choice.id)
        },
        choice.label
      )
    );
  });
  card.append(
    el("div", { class: "ask" }, [
      el("p", { class: "kicker" }, q.kicker),
      el("h2", { class: "q-title" }, q.title),
      choices,
      el(
        "button",
        { class: "textbtn", type: "button", onclick: back },
        state.step === 0 ? "戻る" : "ひとつ戻る"
      )
    ])
  );
}

function choose(key, value) {
  state.answers[key] = value;
  if (state.step < questions.length - 1) {
    state.step += 1;
    state.screen = "ask";
  } else {
    state.brief = false;
    state.screen = "still";
  }
  render();
}

function back() {
  if (state.step === 0) state.screen = "gate";
  else state.step -= 1;
  render();
}

function renderStill(token) {
  const hint = STILL_HINT[state.answers.state] || STILL_HINT.soft;
  const phaseEl = el("span", null, reduced || state.brief ? "静かに" : "吸って");
  const breath = el("div", { class: reduced || state.brief ? "breath hold" : "breath in" }, phaseEl);
  card.append(
    el("div", { class: "still" }, [
      el("p", { class: "kicker" }, "静けさ"),
      breath,
      el("p", { class: "hint" }, hint),
      el(
        "button",
        {
          class: "textbtn",
          type: "button",
          onclick: () => goWord(token)
        },
        "言葉を受け取る"
      )
    ])
  );

  const phases =
    reduced || state.brief
      ? [{ label: "静かに", cls: "hold", ms: state.brief ? 2200 : 1400 }]
      : [
          { label: "吸って", cls: "in", ms: 3200 },
          { label: "とどめて", cls: "hold", ms: 1800 },
          { label: "吐いて", cls: "out", ms: 3400 }
        ];

  let index = 0;
  const show = () => {
    if (state.token !== token) return;
    phaseEl.textContent = phases[index].label;
    breath.className = "breath " + phases[index].cls;
  };
  const next = () => {
    if (state.token !== token) return;
    index += 1;
    if (index >= phases.length) {
      goWord(token);
      return;
    }
    show();
    state.timer = window.setTimeout(next, phases[index].ms);
  };
  show();
  state.timer = window.setTimeout(next, phases[0].ms);
}

function goWord(token) {
  if (token != null && state.token !== token) return;
  clearTimer();
  state.word = pickWord(state.answers, state.lastId);
  state.lastId = state.word.id;
  state.screen = "word";
  render();
}

function renderWord() {
  const word = state.word;
  const essence = ESSENCE[state.answers.teaching] || "言葉";
  card.append(
    el("div", { class: reduced ? "result" : "result rise" }, [
      el("p", { class: "essence" }, essence),
      el("p", { class: "from" }, "ブッダの静けさから"),
      el("p", { class: "quote" }, word.text),
      el(
        "p",
        { class: "disclaimer" },
        "この言葉は、仏教の考えをかりて新たに書いたものです。経典の写しではありません。"
      ),
      el("div", { class: "actions" }, [
        el(
          "button",
          {
            class: "btn primary",
            type: "button",
            onclick: () => {
              state.brief = true;
              state.screen = "still";
              render();
            }
          },
          "同じ心で、もう一言"
        ),
        el(
          "button",
          {
            class: "btn ghost",
            type: "button",
            onclick: () => {
              state.screen = "gate";
              state.step = 0;
              state.answers = {};
              state.lastId = null;
              state.word = null;
              render();
            }
          },
          "はじめから"
        )
      ])
    ])
  );
}

render();
