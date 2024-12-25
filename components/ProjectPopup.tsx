import Link from "next/link";

interface ProjectPopupProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    desc: string;
    href: string;
    languages: string[];
    thumbnail: string;
    inProgress: boolean;
  } | null;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#212121] rounded-2xl p-4 sm:p-6 w-11/12 max-w-xl">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="w-full h-1/5 sm:h-64 object-cover rounded-xl"
        />
        <h2 className="text-2xl font-bold mt-4">{project.name}</h2>
        <p className="mt-2 text-sm text-[#C1C2D3]">{project.desc}</p>

        <ul className="flex gap-2 mt-3 flex-wrap">
          {project.languages.map((lang, index) => (
            <span
              key={index}
              className="py-2 px-3 bg-[#313131] rounded-lg text-xs"
            >
              {lang}
            </span>
          ))}
        </ul>
        <div className="mt-4 flex justify-end gap-4 items-center">
          {project.inProgress && (
            <p className="text-red-500">*work in progress</p>
          )}
          <button
            className="border border-white/50 px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-lg"
          >
            {project.inProgress ? "View Code" : "Visit Site"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
