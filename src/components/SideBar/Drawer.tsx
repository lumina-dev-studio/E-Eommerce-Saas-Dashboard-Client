'use client';

import {RootState} from '@/Redux/store';
import React from 'react';
import {useSelector} from 'react-redux';


import DashboardDropdown from './DashboardDropdown';
import AttributesDropdown from './AttributesDropdown';
import OrderDropDown from './OrderDropDown';
import UserDropDown from './UserDropDown';
import RolesDropdown from './RolesDropdown';
import GalleryDropdown from './GalleryDropdown';
import ReportDropdown from './ReportDropdown';
import LocationDropdown from './LocationDropdown';
import SettingDropdown from './SettingDropdown';
import PagesDropdown from './PagesDropdown';
import ComponentsDropdown from './ComponentsDropdown';
import HelpCenterDropdown from './HelpCenterDropdown';
import FAQSDropdown from './FAQSDropdown';
import PrivacyPolicy from './PrivacyPolicy';
import SocialMediaDropdown from './SocialMediaDropdown';
import ProductDropdown from './ProductDropdown';
import ThemeDropDown from './ThemeDropdown';

const Sidebar: React.FC = () => {
    const isOpen = useSelector((state: RootState) => state.navBar.sidebarToggle);

    return (
        <div className="flex  ">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-0 w-64 h-full overflow-y-auto no-scrollbar transition-all duration-500 transform pt-20 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } bg-gray-50 dark:bg-gray-800 shadow-lg`}
                aria-label="Sidebar"
            >
                <div className="px-3 py-4 rounded h-full  ">
                    <ul className="space-y-2">
                        <DashboardDropdown/>
                        <ProductDropdown/>
                        <AttributesDropdown/>
                        <OrderDropDown/>
                        <UserDropDown/>
                        <RolesDropdown/>
                        <GalleryDropdown/>
                        <ReportDropdown/>
                        <LocationDropdown/>
                        <SettingDropdown/>
                        <ThemeDropDown/>
                        <PagesDropdown/>
                        <ComponentsDropdown/>
                        <HelpCenterDropdown/>
                        <FAQSDropdown/>
                        <PrivacyPolicy/>
                        <SocialMediaDropdown/>
                        
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
