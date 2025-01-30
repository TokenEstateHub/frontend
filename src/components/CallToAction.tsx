const CallToAction = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-8 lg:px-16 mb-16">
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-white shadow-lg text-center">
                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                    Join the future of real estate investment today
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cum labore voluptatibus, voluptatem quasi cupiditate nostrum repellat dicta sunt neque temporibus maiores deserunt maxime quibusdam consequuntur eos perspiciatis sequi facilis?
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="border bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 border-blue-600">
                        Get Started
                    </button>
                    <button className="border border-blue-600 px-6 py-3 rounded-lg hover:text-white transition duration-300 bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-800 transition text-white">
                        Request a Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
