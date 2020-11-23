import React from 'react'
import BannerSection from './BannerSection'
import StepsSection from './StepsSection'
import ActionSection from './ActionSection'
import TopAgents from './TopAgents'
import BannedAgents from './BannedAgents'

export default function Home() {
    return (
        <div>
            <BannerSection />
            <TopAgents />
            <BannedAgents />
            <StepsSection />
            <ActionSection />
        </div>
    )
}
