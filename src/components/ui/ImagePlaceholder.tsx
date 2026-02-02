// Composant pour placeholder d'image
export function ImagePlaceholder({ 
  width = 800, 
  height = 600, 
  text = "Photo à venir",
  icon = "📷",
  className = ""
}: { 
  width?: number
  height?: number
  text?: string
  icon?: string
  className?: string
}) {
  return (
    <div 
      className={`relative bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <div className="text-center text-neutral-500">
        <div className="text-6xl mb-3">{icon}</div>
        <p className="text-sm font-medium">{text}</p>
        <p className="text-xs mt-1">{width}x{height}px</p>
      </div>
    </div>
  )
}

// Composant pour Hero avec placeholder
export function HeroImagePlaceholder() {
  return (
    <div className="absolute inset-0 opacity-20">
      <div className="relative w-full h-full bg-gradient-to-r from-transparent to-primary-600">
        <ImagePlaceholder 
          width={1920}
          height={1080}
          text="Image Hero"
          icon="❄️"
          className="h-full"
        />
      </div>
    </div>
  )
}

// Composant pour galerie de réalisations
export function GalleryPlaceholder({ 
  items 
}: { 
  items: Array<{ icon: string; title: string }> 
}) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div 
          key={index}
          className="relative aspect-video bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
        >
          <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
            <div className="text-center">
              <div className="text-6xl mb-2">{item.icon}</div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs">800x600px</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
      ))}
    </div>
  )
}
