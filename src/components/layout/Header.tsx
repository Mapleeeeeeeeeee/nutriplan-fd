import { Link, useLocation } from 'react-router-dom';
import { SITE_CONFIG, NAV_ITEMS } from '../../constants';
import { useGamification } from '../../hooks/useGamification';

export function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const { progress, notification } = useGamification();

    return (
        <>
            {/* Gamification Notification Toast */}
            {notification && notification.visible && (
                <div className="fixed top-20 right-4 z-[60] bg-emerald-600 text-white px-6 py-3 rounded-full shadow-xl animate-fade-in-up flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <i className="fas fa-star text-yellow-300"></i>
                    </div>
                    <span className="font-bold">{notification.message}</span>
                </div>
            )}

            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                                <i className="fas fa-leaf text-xl text-white"></i>
                            </div>
                            <span className="text-xl font-bold text-gray-800 hidden sm:block">
                                {SITE_CONFIG.name}
                            </span>
                        </Link>

                        {/* Gamification Status (Mobile/Desktop) */}
                        <div className="hidden md:flex items-center gap-4 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
                            <div className="flex items-center gap-2">
                                <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                    Lv.{progress.level}
                                </span>
                                <span className="text-xs font-bold text-emerald-800">
                                    {progress.currentXP} / {progress.nextLevelXP} XP
                                </span>
                            </div>
                            <div className="w-24 h-2 bg-emerald-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                                    style={{ width: `${(progress.currentXP / progress.nextLevelXP) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="flex items-center gap-4 sm:gap-6">
                            {NAV_ITEMS.map((item) => {
                                const isHashLink = item.href.startsWith('/#');
                                const isActive = location.pathname === item.href ||
                                    (isHashLink && isHomePage);

                                if (isHashLink && isHomePage) {
                                    // On home page, use anchor links
                                    return (
                                        <a
                                            key={item.href}
                                            href={item.href.replace('/', '')}
                                            className={`text-sm font-medium transition-colors ${isActive
                                                ? 'text-emerald-600'
                                                : 'text-gray-600 hover:text-emerald-600'
                                                }`}
                                        >
                                            {item.label}
                                        </a>
                                    );
                                }

                                if (isHashLink && !isHomePage) {
                                    // On other pages, link to home with hash
                                    return (
                                        <Link
                                            key={item.href}
                                            to={item.href}
                                            className="text-gray-600 hover:text-emerald-600 font-medium transition-colors text-sm"
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                }

                                return (
                                    <Link
                                        key={item.href}
                                        to={item.href}
                                        className={`text-sm font-medium transition-colors ${location.pathname === item.href
                                            ? 'text-emerald-600'
                                            : 'text-gray-600 hover:text-emerald-600'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                            <Link
                                to="/#pricing"
                                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors hidden sm:block"
                            >
                                立即預約
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
