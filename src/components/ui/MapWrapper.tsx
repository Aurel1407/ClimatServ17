'use client'

import dynamic from 'next/dynamic'

const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] rounded-lg overflow-hidden bg-neutral-200 flex items-center justify-center">
      <p className="text-neutral-600">Chargement de la carte...</p>
    </div>
  )
})

export default function MapWrapper() {
  return <InteractiveMap />
}
