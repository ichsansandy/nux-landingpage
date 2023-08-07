import PropTypes from 'prop-types';

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full max-h-[673px] gap-[32px]">
      <img
        alt="project-portfolio"
        className="overflow-hidden"
        src={project.image}
      />
      <div className="flex justify-between items-start">
        <div>
          <h3 className="uppercase text-[18px] max-w-[75%] sm:max-w-none sm:text-h3">
            {project.name}
          </h3>
          <p>{project.client}</p>
        </div>
        <div>
          <h3 className="uppercase text-[18px] max-w-[75%] sm:max-w-none sm:text-h3">
            {project.year}
          </h3>
          <p>{project.duration}</p>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};
