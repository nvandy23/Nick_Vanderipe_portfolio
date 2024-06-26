import '../App.css';

function Contact(props) {
  return (
    <div className="flex justify-center space-x-2">
      <a
        href="https://github.com/nvandy23"
        rel="noopener noreferrer"
        target="_blank"
        className="mx-2"
      >
        <img className="w-8 h-8" src="../../assets/github-img.png" alt="GitHub Logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/richard-vanderipe/"
        rel="noopener noreferrer"
        target="_blank"
        className="mx-2"
      >
        <img className="w-8 h-8" src="../../assets/linkedin-logo.png" alt="LinkedIn Logo" />
      </a>
      <a href="mailto:nvandy2373@gmail.com" className="mx-2">
        <img className="w-8 h-8" src="../../assets/gmail-image.png" alt="Gmail Logo" />
      </a>
      <a
        href="../../assets/resume/Richard_Vanderipe-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Resume</button>
      </a>
    </div>
  );
}

export default Contact;

