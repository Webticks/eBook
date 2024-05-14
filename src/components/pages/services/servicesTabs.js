import React, { useState } from 'react';
import './services.css';
import AboutUs from '../aboutUs/aboutus';
import GhostBook from './ghostBook';

const Tab = ({ label, isActive, onClick }) => (
    <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
        {`${label}`}
    </div>
);

const HorizontalTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="horizontal-tabs">
            <div className="tab-list">
                {tabs.map((tab) => (
                    <Tab
                        key={tab.id}
                        label={tab.label}
                        isActive={activeTab === tab.id}
                        onClick={() => handleTabClick(tab.id)}
                    />
                ))}
            </div>
            <div>
                {tabs.map((tab) => (
                    activeTab === tab.id && tab.content
                ))}
            </div>
        </div>
    );
};

const ServicesTabs = ({ isBg }) => {
    const tabs = [
        { id: 1, label: 'Ghost Book Writing', content: <GhostBook /> },
        { id: 2, label: 'Services', content: <AboutUs /> },
    ];

    return (
        <section
            id="services"
            className={`section-padding services ${isBg === "yes" ? "bg-one" : ""}`}
            style={{ marginTop: '50px' }}
        >
            <div className="container">
                <div className="section-title-center text-center">
                    <h2 className="display-6">Our Services</h2>
                    <div className="section-divider divider-traingle"></div>
                </div>
                <HorizontalTabs tabs={tabs} />
            </div>
        </section>
    );
};

export default ServicesTabs;
