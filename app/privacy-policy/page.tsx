import PrivacyTermsContent from "@/components/shared/privacy-terms-content";
import PrivacyTermsTop from "@/components/shared/privacy-terms-top";
import React from "react";
import policyData from "@/data/privacy-terms-data.json";

export default function page() {
    return (
        <div className="bg-[url('/backgrounds/home-bg.jpg')]">
            <PrivacyTermsTop title="Privacy Policy" description="Your privacy is important to us at Untitled. We respect your privacy regarding any information we may collect from you across our website." />
            <PrivacyTermsContent data={policyData.privacy_policy} />
        </div>
    );
}
