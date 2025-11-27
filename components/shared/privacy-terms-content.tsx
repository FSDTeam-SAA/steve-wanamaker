import React from "react";

interface Section {
    title: string;
    content?: string[];
}

interface PrivacyPolicyData {
    intro?: string;
    sections?: Section[];
}

interface PrivacyTermsContentProps {
    data?: PrivacyPolicyData;
}

export default function PrivacyTermsContent({ data }: PrivacyTermsContentProps) {
    if (!data) return null;

    return (
        <section className="lg:py-20 py-8">
            <div className="container mx-auto px-2 lg:px-0">

                {/* Intro */}
                {data.intro && (
                    <p className="text-[#6C757D] lg:text-base text-sm mb-6 lg:mb-12">
                        {data.intro}
                    </p>
                )}

                {/* Sections */}
                <div className="lg:space-y-12 space-y-6">
                    {data.sections?.map((section, index) => (
                        <div key={index}>
                            <h2 className="lg:text-2xl text-lg font-semibold text-gray-900 lg:mb-4 mb-2">
                                {section.title}
                            </h2>

                            {section.content?.map((paragraph, i) => (
                                <p key={i} className="text-[#6C757D] lg:text-lg text-sm whitespace-pre-line">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
