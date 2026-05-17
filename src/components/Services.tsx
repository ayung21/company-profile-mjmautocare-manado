const services = [
  {
    id: 1,
    title: 'Service',
    subtitle: 'Servis & Perawatan',
    description:
      'Servis rutin, tune up, ganti oli, pemeriksaan mesin, rem, sistem pendingin, kelistrikan, dan perawatan berkala oleh teknisi profesional.',
    items: ['Tune Up & Ganti Oli', 'Servis Mesin', 'Perbaikan Rem', 'Kelistrikan', 'Sistem Pendingin'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="3" />
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="3" />
        <line x1="32" y1="10" x2="32" y2="18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="46" x2="32" y2="54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="10" y1="32" x2="18" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="46" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="17" y1="17" x2="23" y2="23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="41" y1="41" x2="47" y2="47" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="47" y1="17" x2="41" y2="23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="23" y1="41" x2="17" y2="47" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Sparepart',
    subtitle: 'Suku Cadang Lengkap',
    description:
      'Tersedia spare part berkualitas untuk berbagai merek dan tipe kendaraan. Produk original dan aftermarket pilihan dengan harga kompetitif.',
    items: ['Spare Part Original', 'Aksesori Kendaraan', 'Berbagai Merek Tersedia', 'Filter & Oli', 'Komponen Rem'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <path d="M14 28 L10 20 L18 16 L24 24" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M24 24 L40 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 40 L50 44 L46 54 L38 48" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M38 48 L24 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="3" />
        <path d="M20 14 L14 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 44 L56 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Cuci',
    subtitle: 'Cuci Kendaraan',
    description:
      'Layanan pencucian kendaraan bersih menyeluruh termasuk interior, eksterior, kaca, dan velg menggunakan produk pembersih berkualitas.',
    items: ['Cuci Eksterior', 'Cuci Interior', 'Pembersihan Kaca', 'Poles Velg', 'Semprot Kolong'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <path d="M12 38 C12 38 16 44 24 44 L40 44 C48 44 52 38 52 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 38 L20 28 C20 28 24 24 32 24 C40 24 44 28 44 28 L46 38" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="22" cy="46" r="4" stroke="currentColor" strokeWidth="3" />
        <circle cx="42" cy="46" r="4" stroke="currentColor" strokeWidth="3" />
        <path d="M26 46 L38 46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M28 16 Q32 10 36 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M22 18 Q26 12 30 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M34 18 Q38 12 42 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Salon',
    subtitle: 'Salon Mobil',
    description:
      'Poles bodi, coating, interior detailing, dan perawatan estetika kendaraan agar tampilan mobil Anda kembali kinclong seperti baru.',
    items: ['Poles & Coating', 'Interior Detailing', 'Perawatan Dashboard', 'Treatment Karet & Plastik', 'Anti Karat'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <path d="M20 44 L32 20 L44 44" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M24 36 L40 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="16" r="4" stroke="currentColor" strokeWidth="3" />
        <path d="M32 20 L32 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
        <circle cx="20" cy="46" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="44" cy="46" r="3" fill="currentColor" opacity="0.4" />
        <path d="M14 52 L50 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="layanan" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Layanan Kami</span>
          <h2>Apa yang Kami <span>Tawarkan</span></h2>
          <p className="section-desc">
            Semua kebutuhan kendaraan Anda tersedia dalam satu tempat
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <div className="service-card" key={svc.id}>
              <div className="service-card-header">
                <div className="service-icon">{svc.icon}</div>
                <div>
                  <h3>{svc.title}</h3>
                  <p className="service-subtitle">{svc.subtitle}</p>
                </div>
              </div>
              <p className="service-desc">{svc.description}</p>
              <ul className="service-items">
                {svc.items.map((item, i) => (
                  <li key={i}>
                    <span className="dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p>Tidak menemukan layanan yang Anda cari?</p>
          <a
            href="https://wa.me/628114333331"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
