/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#05070A',
          soft: '#0A0D12',
          deep: '#020304'
        },
        navy: {
          DEFAULT: '#0B1322',
          light: '#101D33',
          border: '#1A2740'
        },
        crystal: {
          DEFAULT: '#3B7DFA',
          dim: '#1C3B73',
          bright: '#6FA1FF'
        },
        cyan: {
          glow: '#4DD9EC',
          soft: '#8FEAF4'
        },
        ink: {
          DEFAULT: '#F5F7FA',
          dim: '#93A1B8',
          faint: '#5C6A82'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'lattice-grid': "linear-gradient(rgba(59,125,250,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,125,250,0.06) 1px, transparent 1px)",
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(77,217,236,0.14), transparent 60%)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(77,217,236,0.25)',
        'glow-sm': '0 0 18px rgba(59,125,250,0.35)',
        'inner-glass': 'inset 0 1px 0 0 rgba(255,255,255,0.06)'
      },
      animation: {
        'float-slow': 'float 9s ease-in-out infinite',
        'float-med': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.2s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.45, filter: 'brightness(1)' },
          '50%': { opacity: 1, filter: 'brightness(1.3)' }
        }
      }
    }
  },
  plugins: []
}
