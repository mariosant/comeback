import { Logo } from "./logo";

export function App(props) {
  return (
    <>
      <Logo />
      <p className="text-2xl">Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  );
}
