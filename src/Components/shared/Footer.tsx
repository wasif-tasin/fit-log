
const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row md:justify-between items-center  md:p-0 md:py-4 border-t border-[#212224] mt-3">
            <div>
                <h2 className="font-bold font-(family-name:--font-oswald)">FITLOG</h2>
            </div>
            <nav className="text-[#9ca3af] pt-1 md:pt-0 ">
                <p className="text-[12px]">© {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.</p>
            </nav>
        </footer>
    );
};

export default Footer;
