interface PageHeaderProps {
  title: string
  subtitle: string
  description: string
}

const PageHeader = ({ title, subtitle, description }: PageHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold mb-2">{subtitle}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
