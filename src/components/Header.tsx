import { faBookSkull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <>
      <header className="text-center p-12">
        <div className="flex justify-center text-5xl text-ctp-text gap-7">
          <FontAwesomeIcon icon={faBookSkull} />
          <h1>Krypton's Graveyard</h1>
          <FontAwesomeIcon icon={faBookSkull} />
        </div>
        <div className="mt-7 text-ctp-overlay0 text-lg">
          <p>
            For the people that know me well enough, I've started and abandoned
            lots of projects with the time. So this is a list of project that I
            have created and then abandoned.
          </p>
        </div>
      </header>
    </>
  );
}
