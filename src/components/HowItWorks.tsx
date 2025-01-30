import React from "react";

const steps = [
    { number: "01", title: "Sign Up", description: "Create your account and verify your identity." },
    { number: "02", title: "Choose Properties", description: "Browse and select from curated real estate opportunities." },
    { number: "03", title: "Start Investing", description: "Purchase tokens and manage your portfolio." },
];

const HowItWorks = () => {
    return (
        <section className="mb-16 px-4 sm:px-8 lg:px-16">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-12">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map(({ number, title, description }) => (
                        <div key={number} className="p-6 rounded-xl bg-white shadow-md">
                            <div className="text-3xl font-bold text-blue-500 mb-4">{number}</div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
                            <p className="text-gray-600">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;