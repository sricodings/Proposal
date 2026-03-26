import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Music, Pause, Play, Scroll, Shield, Heart, Award, Star, Info } from 'lucide-react'

const MotionSection = ({ children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
    className="mb-12"
  >
    {children}
  </motion.section>
)

const SanskritQuote = ({ text, sub, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay }}
    className="quote-wrapper"
  >
    <span className="sanskrit-text">"{text}"</span>
    <span className="translation-text">{sub}</span>
  </motion.div>
)

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div className="bg-fixed" />
      <div className="bg-overlay" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="glass-panel p-8 md:p-16 relative overflow-hidden"
        >
          {/* Header */}
          <header className="text-center mb-16 border-b-2 border-[#D4AF37] pb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hero-om"
            >
              ॐ
            </motion.div>
            <h1 className="text-4xl md:text-5xl mb-4 maroon-text">Divine Proposal</h1>
            <SanskritQuote
              text="रामो विग्रहवान् धर्मः"
              sub="RAMO VIGRAHAVAN DHARMAH - RAMA IS THE EMBODIMENT OF DHARMA"
            />
          </header>

          {/* Title Section */}
          <MotionSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl saffron-text mb-4 border-none p-0 inline-block">
                Proposal for Declaring <br />
                <span className="gold-text">“Shri Jatayu Remembrance Day”</span>
              </h2>
              <div className="section-divider" />
              <p className="maroon-text font-semibold italic">
                Submitted to: Respected Shri Narendra Modi Ji
              </p>
            </div>
          </MotionSection>

          {/* Intro */}
          <MotionSection delay={0.2}>
            <SanskritQuote
              text="परोपकाराय फलन्ति वृक्षाः परोपकाराय वहन्ति नद्यः"
              sub="TREES BEAR FRUIT FOR OTHERS; RIVERS FLOW FOR OTHERS - SERVICE IS DIVINE"
            />
            <h2 className="maroon-text mb-6">1. Introduction</h2>
            <div className="space-y-4 text-lg">
              <p>The Valmiki Ramayana presents numerous events aligned with specific tithis (lunar days) and nakshatras, which are traditionally observed as sacred remembrance days.</p>
              <p>Among the greatest yet under-recognized figures is <strong className="saffron-text">Shri Jatayu</strong>, who sacrificed his life while protecting Sita Devi from Ravana. His act is the pinnacle of selfless devotion and duty.</p>
            </div>
          </MotionSection>

          {/* Patterns */}
          <MotionSection delay={0.2}>
            <h2 className="maroon-text mb-6">2. Observed Patterns in Ramayana-Based Festivals</h2>
            <h3 className="text-xl mb-4 gold-text flex items-center gap-2">
              <Scroll className="w-6 h-6" /> 2.1 Tithi Patterns
            </h3>
            <div className="overflow-x-auto">
              <table className="table-custom mb-8">
                <thead>
                  <tr>
                    <th>Event Type</th>
                    <th>Tithi Used</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { event: "Birth", tithi: "Navami (9th)", example: "Rama Navami" },
                    { event: "Victory", tithi: "Dashami (10th)", example: "Vijayadashami" },
                    { event: "Devotion", tithi: "Purnima (15th)", example: "Hanuman Jayanti" },
                    { event: "Completion", tithi: "Amavasya (30th)", example: "Diwali" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td>{row.event}</td>
                      <td className="font-semibold text-[#FF9933]">{row.tithi}</td>
                      <td>{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl mb-4 gold-text flex items-center gap-2">
              <Star className="w-6 h-6" /> 2.2 Month / Seasonal Pattern
            </h3>
            <ul className="list-none space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-[#FF9933]">✧</span>
                <span><strong>Beginning (Chaitra):</strong> Birth & exile phase</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9933]">✧</span>
                <span><strong>Conflict (Ashwin):</strong> War & victory</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9933]">✧</span>
                <span><strong>Completion (Kartika):</strong> Return & restoration</span>
              </li>
            </ul>
          </MotionSection>

          {/* Nature of Sacrifice */}
          <MotionSection delay={0.2}>
            <SanskritQuote
              text="त्यागेनैके अमृतत्वमानशुः"
              sub="THROUGH SACRIFICE ALONE IS IMMORTALITY ATTAINED"
            />
            <h2 className="maroon-text mb-6">3. Nature of Jatayu’s Sacrifice</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Heart, title: "Ultimate Devotion", text: "Bhakti in its purest form" },
                { icon: Award, title: "Selfless Sacrifice", text: "The peak of surrender" },
                { icon: Shield, title: "Dharma Protection", text: "Defending righteousness" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/40 border border-[#D4AF37]/30 rounded-lg text-center">
                  <item.icon className="w-8 h-8 mx-auto mb-4 saffron-text" />
                  <h4 className="font-bold maroon-text mb-2 cinzel text-sm">{item.title}</h4>
                  <p className="text-xs italic">{item.text}</p>
                </div>
              ))}
            </div>
          </MotionSection>

          {/* Ekadashi Significance */}
          <MotionSection>
            <h2 className="maroon-text mb-6">4. Significance of Ekadashi</h2>
            <p className="text-lg italic border-l-4 border-[#D4AF37] pl-4 py-2">
              Ekadashi (11th lunar day) is traditionally dedicated to devotion and spiritual discipline. It is associated with self-sacrifice and control, observed across India as a day of fasting and devotion to the Divine. Thus, Ekadashi aligns perfectly with Jatayu’s conscious sacrifice for dharma.
            </p>
          </MotionSection>

          {/* Proposal Details */}
          <MotionSection>
            <h2 className="maroon-text mb-6">5. Logical Alignment with Ramayana Timeline</h2>
            <div className="bg-[#FF9933]/5 p-6 rounded-lg border border-[#FF9933]/20">
              <p className="text-lg">Rama Navami occurs on Chaitra Shukla Navami. It is proposed that <strong>Jatayu Remembrance</strong> be observed on <strong>Chaitra Shukla Ekadashi</strong>.</p>
              <div className="mt-4 p-4 bg-white/50 rounded flex gap-4 items-center">
                <div className="bg-[#D4AF37] text-white p-3 rounded-full cinzel text-xl font-bold">2</div>
                <p className="text-sm font-semibold">Days after Rama Navami - symbolizing the transition from birth to trials and representing the first major sacrifice in the journey.</p>
              </div>
            </div>
          </MotionSection>

          {/* Final Proposal */}
          <MotionSection>
            <div className="text-center p-8 bg-[#4a0404]/5 border-2 border-dashed border-[#D4AF37] rounded-xl my-12">
              <h2 className="maroon-text mb-4 border-none p-0 inline-block">6. Proposal</h2>
              <p className="text-2xl cinzel saffron-text">“Shri Jatayu Dharma Ekadashi”</p>
              <p className="text-sm uppercase tracking-widest mt-2">To be observed annually on Chaitra Shukla Ekadashi</p>
            </div>
          </MotionSection>

          {/* Cultural Significance */}
          <MotionSection>
            <h2 className="maroon-text mb-6">7. Cultural & National Significance</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Women protection values",
                "Dharma and courage",
                "Devotion and sacrifice",
              ].map((val, i) => (
                <li key={i} className="flex flex-col items-center p-4 bg-white/30 border border-[#D4AF37]/20 rounded text-center">
                  <span className="text-2xl mb-2">✦</span>
                  <span className="font-semibold">{val}</span>
                </li>
              ))}
            </ul>
            <p className="text-center mt-8 italic text-xl">“Stand for righteousness even at the cost of life.”</p>
          </MotionSection>

          {/* Conclusion */}
          <MotionSection>
            <SanskritQuote
              text="धर्मो रक्षति रक्षितः"
              sub="DHARMA PROTECTS THOSE WHO PROTECT IT"
            />
            <h2 className="maroon-text mb-6">8. Conclusion</h2>
            <p className="text-lg text-center">Recognizing Jatayu through Ekadashi aligns with scriptural patterns, matches spiritual significance, and strengthens our cultural identity.</p>
          </MotionSection>

          {/* Signature */}
          <footer className="mt-20 pt-10 border-t-2 border-[#D4AF37] text-center">
            <p className="sanskrit-text text-lg italic maroon-text mb-4">
              "श्रीरामचन्द्रपादपद्मेषु साञ्जलिप्रणामं समर्पितवान् भक्तः"
            </p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-3xl cinzel saffron-text tracking-[4px] font-bold"
            >
              SRIKANTH
            </motion.p>
            <p className="text-[10px] uppercase tracking-[2px] opacity-60 mt-2">
              THE DEVOTEE WHO BOWS AT THE LOTUS FEET OF LORD RAMA
            </p>
            <div className="section-divider" />
            <div className="maroon-text">
              <p className="cinzel text-xl font-bold">जय श्री राम</p>
              <p className="text-sm tracking-widest">JAI SHRI RAM</p>
            </div>
          </footer>
        </motion.div>
      </div>


      {/* Hidden YouTube Integration Placeholder (would need an iframe in a real production environment) */}
      {isPlaying && (
        <div className="fixed inset-0 pointer-events-none opacity-0">
          <iframe
            width="1" height="1"
            src="https://www.youtube.com/embed/S_0SGsArS-Y?autoplay=1&loop=1&playlist=S_0SGsArS-Y"
            title="Devotional Chants"
            allow="autoplay"
          />
        </div>
      )}
    </div>
  )
}

export default App
