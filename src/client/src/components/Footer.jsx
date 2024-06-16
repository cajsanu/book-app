import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <div className="text-sm text-teal-700 flex flex-wrap justify-start p-16 gap-8">
      <p>
        <CopyrightIcon /> Cajsa Nummelin
      </p>
      <p className="">
        <EmailIcon />{" "}
        <a
          className="underline hover:text-white"
          href="mailto:cajsa.nummelin@gmail.com"
        >
          cajsa.nummelin@gmail.com
        </a>
      </p>
      <p className="">
        <GitHubIcon />{" "}
        <a
          className="hover:text-white underline"
          href="https://github.com/cajsanu/book-app"
        >
          Project code
        </a>
      </p>
    </div>
  );
};
