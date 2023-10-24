const DownloadButton = () => {
  return (
    <a
      className="inline-block px-8 py-3 bg-[#dc6b24] font-mono text-white hover:animate-bounce rounded-xl cursor-pointer"
      download="*"
    >
      Download CV
    </a>
  );
};

export default DownloadButton;
