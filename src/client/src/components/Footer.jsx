import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <div className="text-sm text-teal-700 flex">
      <p>
        <CopyrightIcon /> Cajsa Nummelin
      </p>
      <p className="ps-10">
        <EmailIcon />{" "}
        <a
          className="underline hover:text-white"
          href="mailto:cajsa.nummelin@gmail.com"
        >
          cajsa.nummelin@gmail.com
        </a>
      </p>
      <p className="ps-10">
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
