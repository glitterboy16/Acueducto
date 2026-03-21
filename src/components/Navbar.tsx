const links = [
  {
    href: 'https://es.wikipedia.org/wiki/Acueducto_de_los_Milagros',
    label: 'Saber mas del acueducto',
  },
  {
    href: 'https://sites.google.com/iesalbarregas.es/portada/inicio?authuser=0',
    label: 'Saber mas del instituto Albarregas',
  },
]

type NavbarProps = {
  showHeroTitle: boolean
  onToggleHeroTitle: () => void
}

function Navbar({ showHeroTitle, onToggleHeroTitle }: NavbarProps) {
  return (
    <header className="mx-auto w-full max-w-6xl px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
      <div className="glass-panel flex flex-col gap-4 px-4 py-4 sm:px-5 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/70 sm:text-xs sm:tracking-[0.35em]">
            Ies Albarregas
          </p>
          <p className="mt-1 text-base font-semibold text-white/90 sm:text-lg">
            Acueducto de los Milagros
          </p>
        </div>

        <nav className="grid w-full gap-3 md:w-auto md:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="glass-button min-h-11 w-full text-center"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            className="glass-button min-h-11 w-full text-center"
            onClick={onToggleHeroTitle}
          >
            {showHeroTitle ? 'Ocultar titulo' : 'Mostrar titulo'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
