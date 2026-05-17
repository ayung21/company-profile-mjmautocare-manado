const navLinks = [
  { href: '#tentang', label: 'Tentang Kami' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#jam-buka', label: 'Jam Buka' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-mjm">MJM</span>
              <span className="logo-autocare">AUTOCARE</span>
            </a>
            <p>
              Bengkel mobil profesional di Manado yang menyediakan layanan
              service, sparepart, cuci, dan salon kendaraan Anda.
            </p>
            <div className="footer-contact-quick">
              <a href="tel:+628114333331">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.28 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.16A16 16 0 0016.79 17.04l1.52-1.52a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                0811 433 3331
              </a>
              <a href="tel:+628884333311">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.28 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.16A16 16 0 0016.79 17.04l1.52-1.52a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                0888 433 3311
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h5>Navigasi</h5>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-services-list">
            <h5>Layanan</h5>
            <ul>
              <li>Service & Perawatan</li>
              <li>Spare Part Kendaraan</li>
              <li>Cuci Kendaraan</li>
              <li>Salon Mobil</li>
            </ul>
          </div>

          <div className="footer-address">
            <h5>Lokasi</h5>
            <address>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Jl. Pingkan Matindas No. 23<br />
              Dendengan Dalam, Paal Dua<br />
              Manado, Sulawesi Utara
            </address>
            <div className="footer-hours-brief">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Senin – Sabtu · 08:00 – 17:00 WITA
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} MJM AUTOCARE. All rights reserved.</p>
          <p>Manado, Sulawesi Utara</p>
        </div>
      </div>
    </footer>
  )
}
