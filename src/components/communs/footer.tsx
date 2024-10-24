import facebookLogo from '../../assets/facebook.svg';
import twitterLogo from '../../assets/x.svg';
import discordLogo from '../../assets/discord.svg';

const socialMediaProfiles  = [
    { title: 'Facebook', href: 'https://facebook.com', icon: facebookLogo, bgColor: '#316FF6', hoverColor: '#2558b1' },
    { title: 'X', href: 'https://x.com', icon: twitterLogo, bgColor: '#1DA1F2', hoverColor: '#1A91DA' },
    { title: 'Discord', href: 'https://discord.com', icon: discordLogo, bgColor: '#7289da', hoverColor: '#5A73B5' },
];


const Footer = () => {


    return (

        <footer className={"w-full text-black bottom-0 relative p-8 shadow-angelic-white"}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                <div className="flex justify-center items-center">
                </div>
            </div>
            <div
                className="mb-20 mt-24 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
                <p className="mb-4 md:mb-0 flex-1 text-center">© {new Date().getFullYear()} Grégoire IVARS</p>
                <div className="flex justify-center md:justify-end">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                            {socialMediaProfiles.map((profile) => (
                                <button
                                    key={profile.title}
                                    onClick={() => {
                                        window.location.href = profile.href;
                                    }}
                                    style={{ backgroundColor: profile.bgColor }}
                                    className="group flex justify-center p-2 rounded-full drop-shadow-xl transition-all duration-300 relative"
                                >
                                    <img src={profile.icon} alt={profile.title} />
                                    <span
                                        style={{ backgroundColor: profile.bgColor }}
                                        className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:translate-y-[-24px] group-hover:scale-110 duration-500 text-secondary rounded px-1 py-0.5"
                                    >
                                        {profile.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;