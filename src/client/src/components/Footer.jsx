import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <div className="font-semibold text-sm text-teal-700 flex">
      <p>
        <CopyrightIcon /> Code and design by Cajsa.
      </p>
      <p className="ps-10">
        <EmailIcon /> Contact me at {" "} 
        <a
          className="underline hover:text-teal-900"
          href="mailto:cajsa.nummelin@gmail.com"
        >
          cajsa.nummelin@gmail.com
        </a>
      </p>
    </div>
  );
};
