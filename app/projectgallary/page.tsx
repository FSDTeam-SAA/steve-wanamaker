import ProjectsGalleryPage from '@/components/gallary/Poject-Gallery'
import PageHeader from '@/components/shared/page-header'
import ReadyToStart from '@/components/shared/ReadyToStart'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageHeader
        subtitle="Our Work Showcase"
        title="Projects Gallery"
        description="Browse our completed flooring projects and see how we transform commercial spaces with quality and precision."
      />
        <ProjectsGalleryPage />
        <ReadyToStart />
    </div>
  )
}

export default page