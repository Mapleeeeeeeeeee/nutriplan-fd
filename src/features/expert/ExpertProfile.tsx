import { getAllNutritionists } from '../../data';

export function ExpertProfile() {
    const nutritionists = getAllNutritionists();

    return (
        <section id="expert" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl mb-6">
                        專業團隊為你把關
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500">
                        不只是數據計算，而是由通過國家高考的專業營養師，為您量身打造科學與人性兼具的飲食計畫。
                    </p>
                </div>

                {/* Team Grid */}
                <div className="space-y-24">
                    {nutritionists.map((nutritionist, idx) => (
                        <div key={nutritionist.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-emerald-100 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                                    <div className="relative w-72 h-80 sm:w-96 sm:h-96 overflow-hidden rounded-3xl shadow-2xl">
                                        {nutritionist.image ? (
                                            <img
                                                src={nutritionist.image}
                                                alt={nutritionist.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                                <i className="fas fa-user text-6xl text-slate-300"></i>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                    <h3 className="text-3xl font-bold text-gray-900">{nutritionist.name}</h3>
                                    <span className="bg-emerald-100 text-emerald-800 text-sm font-bold px-3 py-1 rounded-full">
                                        {nutritionist.title.split('/')[0]}
                                    </span>
                                </div>
                                <p className="text-emerald-700 font-medium text-lg mb-6">
                                    {nutritionist.title}
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {nutritionist.fullBio.split('\n')[0]}...
                                </p>

                                {/* Tags/Specialties */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                                    {nutritionist.specialties.map((spec) => (
                                        <span key={spec} className="flex items-center gap-2 text-gray-600 bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg">
                                            <i className="fas fa-check text-emerald-500 text-sm"></i>
                                            {spec}
                                        </span>
                                    ))}
                                </div>

                                {/* Suitable For */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center justify-center md:justify-start gap-2">
                                        <i className="fas fa-bullseye text-emerald-500"></i>
                                        適合對象
                                    </h4>
                                    <ul className="space-y-2">
                                        {nutritionist.suitableFor?.map((item) => (
                                            <li key={item} className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Quote */}
                                <blockquote className="border-l-4 border-emerald-500 pl-4 py-1 italic text-gray-500 text-lg">
                                    "{nutritionist.quote}"
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
