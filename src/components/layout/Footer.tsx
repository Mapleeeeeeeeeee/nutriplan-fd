import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../constants';
import { Modal } from '../ui';

export function Footer() {
    const currentYear = new Date().getFullYear();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Logo & Brand */}
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                                <i className="fas fa-leaf text-xl text-white"></i>
                            </div>
                            <span className="text-white font-bold text-lg">{SITE_CONFIG.name}</span>
                        </Link>

                        {/* Copyright */}
                        <p className="text-sm text-center">
                            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setShowModal(true)}
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram text-white"></i>
                            </button>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#06c755] transition-colors"
                                aria-label="Line"
                            >
                                <i className="fab fa-line text-white"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Instagram Modal */}
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Instagram"
            >
                <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <i className="fab fa-instagram text-3xl text-white"></i>
                    </div>
                    <p className="text-gray-600 mb-6">
                        感謝支持！建立中 🙏
                    </p>
                    <button
                        onClick={() => setShowModal(false)}
                        className="bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition font-medium"
                    >
                        好的
                    </button>
                </div>
            </Modal>
        </>
    );
}
