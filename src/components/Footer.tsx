export default function Footer() {
  return (
    <>
      <footer className="w-full max-w-screen-xl m-4 mx-auto p-4 text-center">
        <hr className="my-6 sm:mx-auto dark:border-ctp-surface1" />
        <span className="block text-sm sm:text-center text-ctp-subtext0">
          Copyright © 2023-Present - Made with 💜 by{" "}
          <a href="https://krypton.ninja">
            <b>Krypton</b>
          </a>{" "}
          -{" "}
          <a href="https://github.com/kkrypt0nn/graveyard">
            <b>Source</b>
          </a>
        </span>
      </footer>
    </>
  );
}
