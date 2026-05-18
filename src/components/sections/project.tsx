import React from 'react'
import { SectionWrapper } from '@/components/common/section-wrapper'
import { Container } from '@/components/common/container'
import FeatureCard from '../cards/feature-card';
import { ProjectItem } from '@/data/sections';
interface ProjectSectionProps {
    projects: ProjectItem[]
}
export const ProjectSection = ({ projects }: ProjectSectionProps) => {
    return (
        <SectionWrapper>
            <Container>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                    {projects.map((project) => (
                        <FeatureCard key={project.slug} study={project} />
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    )
}
