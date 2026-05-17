import { useState } from 'react'

const categories = ['Semua', 'Service', 'Sparepart', 'Cuci', 'Salon']

// Dummy gallery items - replace src with actual photos
const galleryItems = [
  { id: 1, category: 'Service', label: 'Servis Mesin', color: '#1e3a5f' },
  { id: 2, category: 'Cuci', label: 'Cuci Eksterior', color: '#1a4a2e' },
  { id: 3, category: 'Salon', label: 'Poles & Coating', color: '#3a1a1a' },
  { id: 4, category: 'Sparepart', label: 'Spare Part', color: '#2a1a4a' },
  { id: 5, category: 'Service', label: 'Tune Up', color: '#1e3a5f' },
  { id: 6, category: 'Cuci', label: 'Interior Detailing', color: '#1a4a2e' },
  { id: 7, category: 'Salon', label: 'Anti Karat', color: '#3a1a1a' },
  { id: 8, category: 'Service', label: 'Servis Rem', color: '#1e3a5f' },
  { id: 9, category: 'Sparepart', label: 'Aksesori', color: '#2a1a4a' },
  { id: 10, category: 'Cuci', label: 'Poles Velg', color: '#1a4a2e' },
  { id: 11, category: 'Salon', label: 'Dashboard Care', color: '#3a1a1a' },
  { id: 12, category: 'Service', label: 'Sistem Pendingin', color: '#1e3a5f' },
]

function CameraPlaceholder({ label, color }: { label: string; color: string }) {
  return (
    <div className="gallery-placeholder" style={{ background: color }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <span>{label}</span>
      <small>Foto segera hadir</small>
    </div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState('Semua')

  const filtered =
    active === 'Semua'
      ? galleryItems
      : galleryItems.filter((item) => item.category === active)

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Gallery</span>
          <h2>Hasil <span>Pekerjaan Kami</span></h2>
          <p className="section-desc">
            Dokumentasi pekerjaan dan aktivitas bengkel MJM AUTOCARE
          </p>
        </div>

        <div className="gallery-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item) => (
            <div className="gallery-item" key={item.id}>
              <CameraPlaceholder label={item.label} color={item.color} />
              <div className="gallery-item-overlay">
                <span className="gallery-category-badge">{item.category}</span>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
