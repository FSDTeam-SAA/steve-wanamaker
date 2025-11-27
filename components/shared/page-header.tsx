interface PageHeaderProps {
  title: string
  subtitle: string
  description: string
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <section className="  my-20 py-12 md:py-16 ">
      <div className="container mx-auto  bg-[url('/pageheader.jpg')] bg-cover bg-center py-20 px-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#5B9833] mb-2">{title}</h1>
          <p className="text-[#6C757D] text-sm md:text-base">{description}</p>
          {/* <p className="text-primary font-semibold mb-2">{subtitle}</p> */}
        </div>
      </div>
    </section>
  )
}

export default PageHeader
