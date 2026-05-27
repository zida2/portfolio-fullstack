import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DESIRE ZIDA - Développeur Full Stack Web & Mobile",
  description: "Développeur Full Stack passionné spécialisé dans la conception d'applications web modernes, systèmes backend et automatisation de solutions numériques. PHP, JavaScript, MySQL, React.",
  keywords: ["Développeur Full Stack", "PHP", "JavaScript", "MySQL", "React", "HTML5", "CSS3", "Burkina Faso", "Ouagadougou", "Web Developer"],
  authors: [{ name: "DESIRE ASSOMPTION WENDLASIDA ZIDA" }],
  creator: "DESIRE ZIDA",
  openGraph: {
    title: "DESIRE ZIDA - Développeur Full Stack",
    description: "Développeur Full Stack Web & Mobile - PHP, JavaScript, MySQL, React",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DESIRE ZIDA - Développeur Full Stack",
    description: "Développeur Full Stack Web & Mobile - PHP, JavaScript, MySQL, React",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
