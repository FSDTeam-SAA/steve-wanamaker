import React from 'react'

const ContactMap = () => {
  return (
    <section className='my-16 md:my-20'>
  <div className='container mx-auto px-4'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402590.5158697168!2d144.72350937951575!3d-37.971565248246804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1764277687082!5m2!1sen!2sbd" 
     width={1900}
      height={450}
       style={{border:0}} 
       allowFullScreen
        loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade"  
        className='w-full apsect-5/4'
        ></iframe>

  </div>
    </section>
  )
}

export default ContactMap