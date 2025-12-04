import React from 'react'

const ContactMap = () => {
  return (
    <section className='my-16 md:my-20'>
  <div className='container mx-auto px-4'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.007417352515!2d-77.4737427!3d39.015144299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63f2a427cf7d9%3A0x65e35d7054dbc6ae!2s44200%20Waxpool%20Rd%2C%20Ashburn%2C%20VA%2020147%2C%20USA!5e0!3m2!1sen!2sbd!4v1764878437936!5m2!1sen!2sbd" 
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