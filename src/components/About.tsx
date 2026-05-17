const stats = [
  { number: '4+', label: 'Jenis Layanan' },
  { number: '6', label: 'Hari Operasional' },
  { number: '9', label: 'Jam Pelayanan' },
  { number: '100%', label: 'Kepuasan Pelanggan' },
]

const highlights = [
  'Teknisi Berpengalaman & Terlatih',
  'Spare Part Original & Berkualitas',
  'Peralatan Servis Modern',
  'Harga Jelas & Transparan',
  'Proses Cepat & Tepat Waktu',
  'Pelayanan Ramah & Profesional',
]

export default function About() {
  return (
    <section id="tentang" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Tentang Kami</span>
          <h2>Bengkel Kepercayaan <span>Anda</span></h2>
          <p className="section-desc">
            Melayani kebutuhan kendaraan Anda dengan sepenuh hati di Manado
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text-col">
            <p>
              <strong>MJM AUTOCARE</strong> adalah bengkel mobil profesional yang
              berlokasi di Jl. Pingkan Matindas, Paal Dua, Manado — Sulawesi Utara.
              Dengan pengalaman dan dedikasi tinggi, kami hadir memberikan solusi
              perawatan kendaraan terbaik bagi masyarakat Manado dan sekitarnya.
            </p>
            <p>
              Kami menyediakan layanan lengkap mulai dari servis rutin, penyediaan
              spare part berkualitas, cuci kendaraan, hingga salon mobil. Semua
              dikerjakan oleh teknisi terlatih menggunakan peralatan modern.
            </p>

            <ul className="about-highlights-list">
              {highlights.map((item, i) => (
                <li key={i}>
                  <span className="check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-right-col">
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div className="stat-card" key={i}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about-card-banner">
              <div className="banner-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div>
                <strong>Garansi Kepuasan</strong>
                <p>Setiap pekerjaan kami dijamin memuaskan atau kami perbaiki tanpa biaya tambahan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
