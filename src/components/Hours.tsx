const schedule = [
  { day: 'Senin', open: true },
  { day: 'Selasa', open: true },
  { day: 'Rabu', open: true },
  { day: 'Kamis', open: true },
  { day: 'Jumat', open: true },
  { day: 'Sabtu', open: true },
  { day: 'Minggu', open: false },
]

function getCurrentDay(): string {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  return days[new Date().getDay()]
}

export default function Hours() {
  const today = getCurrentDay()

  return (
    <section id="jam-buka" className="section hours-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Jam Operasional</span>
          <h2>Kapan Kami <span>Buka?</span></h2>
          <p className="section-desc">Kami siap melayani Anda pada jam-jam berikut</p>
        </div>

        <div className="hours-wrapper">
          <div className="hours-card">
            <div className="hours-time-display">
              <div className="hours-clock-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="hours-main-time">08:00 – 17:00</div>
                <div className="hours-timezone">WITA (Waktu Indonesia Tengah)</div>
              </div>
            </div>

            <div className="hours-days">
              <div className="hours-days-label">Hari Operasional</div>
              <div className="hours-open-range">Senin — Sabtu</div>
              <div className="hours-closed-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Tutup setiap hari Minggu & Hari Libur Nasional
              </div>
            </div>
          </div>

          <div className="hours-schedule-card">
            <h3>Jadwal Mingguan</h3>
            <ul className="schedule-list">
              {schedule.map((item) => {
                const isToday = item.day === today
                return (
                  <li key={item.day} className={`schedule-row${isToday ? ' today' : ''}${!item.open ? ' closed' : ''}`}>
                    <span className="schedule-day">
                      {item.day}
                      {isToday && <span className="today-badge">Hari ini</span>}
                    </span>
                    <span className="schedule-status">
                      {item.open ? (
                        <>
                          <span className="status-dot open" />
                          08:00 – 17:00 WITA
                        </>
                      ) : (
                        <>
                          <span className="status-dot closed" />
                          Tutup
                        </>
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="hours-note">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.28 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.16A16 16 0 0016.79 17.04l1.52-1.52a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          Untuk reservasi atau pertanyaan di luar jam operasional, silakan hubungi kami via{' '}
          <a href="https://wa.me/628114333331" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
