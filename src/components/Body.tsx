import { DeadProject, theGraveyard } from "../graveyard";
import DeadProjectCard from "./DeadProjectCard";

export default function Body() {
  return (
    <div className="mt-8 justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-12 mr-auto ml-auto mb-0 mt-0 pl-12 pr-12">
        {theGraveyard.map((deadProject: DeadProject) => {
          return (
            <DeadProjectCard
              title={deadProject.title}
              description={deadProject.description}
              icon={deadProject.icon}
              survival={deadProject.survival}
              key={deadProject.title}
            />
          );
        })}
      </div>
    </div>
  );
}
