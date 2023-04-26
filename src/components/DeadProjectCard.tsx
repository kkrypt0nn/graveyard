import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeadProject } from "../graveyard";

export default function DeadProjectCard({
  title,
  description,
  icon,
  survival,
}: DeadProject) {
  return (
    <>
      <div className="mt-0 mb-0 ml-auto mr-auto min-w-full max-w-sm p-6 border rounded-lg shadow bg-ctp-base border-ctp-surface1 transition duration-300 hover:scale-105 hover:border-ctp-text hover:bg-ctp-surface0">
        <FontAwesomeIcon
          className="w-10 h-10 mb-2 text-ctp-subtext0"
          icon={icon}
        />
        <div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-ctp-text inline-block">
            {title}
          </h5>{" "}
          <small className="text-ctp-overlay1 italic">({survival})</small>
        </div>
        <p className="font-normal text-ctp-text mb-2">{description}</p>
      </div>
    </>
  );
}
