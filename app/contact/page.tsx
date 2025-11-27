import ContactMap from '@/components/contact/ContactMap'
import ContactOfficeInformation from '@/components/contact/ContactOfficeInformation'
import SentMessage from '@/components/contact/SentMessage'
import PageHeader from '@/components/shared/page-header'
import React from 'react'

const page = () => {
  return (
    <div className="bg-[url('/backgrounds/home-bg.jpg')]">
      <PageHeader 
       subtitle="Project Details"
        title='Get In Touch'
        description="A closer look at the work, materials, and craftsmanship behind this completed flooring project."
      />

        <SentMessage />
        <ContactMap />
        <ContactOfficeInformation />
    </div>
  )
}

export default page