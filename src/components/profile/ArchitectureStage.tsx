import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiReact,
  SiSupabase,
  SiNetlify
} from '@icons-pack/react-simple-icons';

interface ArchitectureStageProps {
  isFlooded: boolean;
}

// Custom CapCut Brand Vector Logo
const CapCutLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 25 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z"
    />
  </svg>
);

// Custom Alight Motion Brand Vector Logo
const AlightMotionLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="am-swirl-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="50%" stopColor="#05FAA8" />
        <stop offset="100%" stopColor="#00C896" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="22" fill="#0f172a" />
    <path
      d="M38 24C38 31.732 31.732 38 24 38C17.5 38 12.05 33.56 10.5 27.5"
      stroke="url(#am-swirl-grad)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M14 20C15.2 15.35 19.2 12 24 12C29.5 12 34 16.5 34 22C34 26 31 29 27.5 29.5"
      stroke="url(#am-swirl-grad)"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <circle cx="21" cy="22" r="3" fill="url(#am-swirl-grad)" />
  </svg>
);

export const ArchitectureStage: React.FC<ArchitectureStageProps> = ({ isFlooded }) => {
  const webPillar = {
    id: 'web',
    icon: <Code2 className="w-5 h-5 text-[#0284c7]" />,
    title: 'Frontend Web Development',
    subtitle: 'Modern Web, Cloud Services & Motion Design',
    desc: 'Fokus merancang dan mengembangkan antarmuka web modern yang responsif, interaktif, dan kreatif. Terbiasa membangun aplikasi web interaktif, integrasi database & otentikasi cloud, automasi deployment web, serta kreasi visual motion dan video editing untuk antarmuka digital yang memukau.'
  };

  const techLogos = [
    {
      name: 'HTML5',
      category: 'Markup Language',
      icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" />,
      accent: '#E34F26'
    },
    {
      name: 'CSS3',
      category: 'Styling & Layouts',
      icon: <SiCss className="w-6 h-6 text-[#1572B6]" />,
      accent: '#1572B6'
    },
    {
      name: 'JavaScript',
      category: 'Scripting Core',
      icon: (
        <div className="w-6 h-6 rounded-md overflow-hidden bg-[#0f172a] flex items-center justify-center">
          <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />
        </div>
      ),
      accent: '#F7DF1E'
    },
    {
      name: 'PHP',
      category: 'Server Scripting',
      icon: <SiPhp className="w-7 h-7 text-[#777BB4]" />,
      accent: '#777BB4'
    },
    {
      name: 'React JS',
      category: 'Frontend Library',
      icon: <SiReact className="w-6 h-6 text-[#0284c7]" />,
      accent: '#0284c7'
    },
    {
      name: 'Supabase',
      category: 'Cloud Backend & Auth',
      icon: <SiSupabase className="w-6 h-6 text-[#3ECF8E]" />,
      accent: '#3ECF8E'
    },
    {
      name: 'Netlify',
      category: 'Edge Hosting & CI/CD',
      icon: <SiNetlify className="w-6 h-6 text-[#00C7B7]" />,
      accent: '#00C7B7'
    },
    {
      name: 'CapCut',
      category: 'Video Production',
      icon: <CapCutLogo className="w-6 h-6 text-[#0f172a]" />,
      accent: '#0f172a'
    },
    {
      name: 'Alight Motion',
      category: 'Motion Graphics',
      icon: <AlightMotionLogo className="w-6 h-6" />,
      accent: '#05FAA8'
    }
  ];

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;

  return (
    <motion.div
      animate={
        isFlooded
          ? {
            rotate: isMobile ? 3 : 15,
            x: isMobile ? 0 : 28,
            y: isMobile ? 16 : 50,
            scale: 0.98,
            transition: { type: 'spring', stiffness: 150, damping: 16 }
          }
          : {
            rotate: 0,
            x: 0,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 260, damping: 18 }
          }
      }
      className="w-full flex flex-col gap-6"
    >
      {/* Track Indicator (Only Web) */}
      <div className="p-1.5 rounded-2xl bg-[#fffdf5] border border-[#e8dbc0] shadow-sm">
        <motion.div
          animate={
            isFlooded
              ? { rotate: -2, y: 8, x: -4 }
              : { rotate: 0, y: 0, x: 0 }
          }
          className="flex items-center justify-between p-3 px-4 rounded-xl bg-[#0284c7] text-white shadow-md"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-white/20 text-white shadow-xs">
              01 WEB
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              FRONTEND WEB DEVELOPMENT
            </span>
          </div>
          <span className="text-[11px] sm:text-xs font-mono font-semibold text-white/90">
            CORE SPECIALIZATION
          </span>
        </motion.div>
      </div>

      {/* Active Pillar Card */}
      <div className="relative min-h-[305px] sm:min-h-[315px] rounded-[32px] bg-[#fffdf5] border border-[#e8dbc0] shadow-xl shadow-[#8c6239]/6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="p-7 sm:p-9 h-full flex flex-col justify-between space-y-5"
        >
          <div>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-[#fff9d4] border border-[#e2d3b3] shadow-sm shrink-0">
                  {webPillar.icon}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#8c6239]">
                    01 // {webPillar.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] mt-0.5">
                    {webPillar.title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              {webPillar.desc}
            </p>
          </div>

          <div className="pt-4 border-t border-[#e8dbc0]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#8c6239] block">
                TECH STACK LOGOS:
              </span>
              <span className="text-[11px] font-mono text-[#94a3b8] hidden sm:inline">
                Arahkan kursor untuk melihat nama
              </span>
            </div>
            
            {/* Tech Stack Icons Grid */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center">
              {techLogos.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#fff9d4] border border-[#e2d3b3] shadow-xs hover:shadow-md hover:border-[#0284c7] hover:bg-[#ffffff] hover:scale-110 transition-all duration-200 cursor-pointer"
                >
                  <div className="transition-transform duration-200 group-hover:scale-110">
                    {tech.icon}
                  </div>

                  {/* Floating tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 absolute -top-11 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#0f172a] text-white shadow-xl z-30 flex flex-col items-center whitespace-nowrap">
                    <span className="text-[11px] font-bold font-mono text-white leading-tight">
                      {tech.name}
                    </span>
                    <span className="text-[9px] text-[#94a3b8] font-sans">
                      {tech.category}
                    </span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-[#0f172a]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <motion.div
          animate={
            isFlooded
              ? { rotate: -24, x: -38, y: 70, scale: 0.94 }
              : { rotate: 0, x: 0, y: 0, scale: 1 }
          }
          transition={{ type: 'spring', stiffness: 160, damping: 15 }}
          className="p-4 rounded-2xl bg-[#fffdf5] border border-[#e8dbc0] shadow-sm"
        >
          <span className="text-xs font-bold text-[#0f172a] block">
            Clean Architecture
          </span>
          <p className="text-[11px] text-[#64748b] mt-1 leading-relaxed">
            Struktur komponen terorganisir dengan pemisahan dependensi, custom hooks, dan modularitas UI tinggi.
          </p>
        </motion.div>

        <motion.div
          animate={
            isFlooded
              ? { rotate: 32, x: 18, y: 80, scale: 0.93 }
              : { rotate: 0, x: 0, y: 0, scale: 1 }
          }
          transition={{ type: 'spring', stiffness: 160, damping: 15 }}
          className="p-4 rounded-2xl bg-[#fffdf5] border border-[#e8dbc0] shadow-sm"
        >
          <span className="text-xs font-bold text-[#0f172a] block">
            Type-Safe Contracts
          </span>
          <p className="text-[11px] text-[#64748b] mt-1 leading-relaxed">
            Keamanan tipe penuh dengan TypeScript untuk props komponen, antarmuka data, dan integrasi API.
          </p>
        </motion.div>

        <motion.div
          animate={
            isFlooded
              ? { rotate: -18, x: 48, y: -20, scale: 0.95 }
              : { rotate: 0, x: 0, y: 0, scale: 1 }
          }
          transition={{ type: 'spring', stiffness: 160, damping: 15 }}
          className="p-4 rounded-2xl bg-[#fffdf5] border border-[#e8dbc0] shadow-sm"
        >
          <span className="text-xs font-bold text-[#0f172a] block">
            Responsive &amp; Fluid UI
          </span>
          <p className="text-[11px] text-[#64748b] mt-1 leading-relaxed">
            Pengalaman antarmuka adaptif di berbagai layar, interaksi mikro halus, dan performa rendering web.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
