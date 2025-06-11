
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Elegant Gold & Warm Palette
				gold: {
					400: '#FCD34D',
					500: '#F59E0B',
					600: '#D97706',
					700: '#B45309',
					800: '#92400E'
				},
				amber: {
					400: '#FCD34D',
					500: '#F59E0B',
					600: '#D97706',
					700: '#B45309',
					800: '#92400E'
				},
				bronze: {
					400: '#D4AF37',
					500: '#B8860B',
					600: '#9A7209',
					700: '#7D5F07',
					800: '#654B06'
				},
				champagne: {
					400: '#F7E98E',
					500: '#F1D302',
					600: '#E6C200',
					700: '#C4A000',
					800: '#9D8000'
				},
				slate: {
					900: '#0F0F13',
					800: '#1A1A22',
					700: '#252530',
					600: '#35353F',
					500: '#4A4A55'
				},
				warm: {
					100: '#FEF7E0',
					200: '#FDECC8',
					300: '#FCD980',
					400: '#F8D34D'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
						filter: 'blur(5px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
						filter: 'blur(0px)'
					}
				},
				'scale-reveal': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)',
						filter: 'blur(3px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
						filter: 'blur(0px)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(245, 158, 11, 0.3), 0 0 60px rgba(217, 119, 6, 0.2)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(245, 158, 11, 0.5), 0 0 80px rgba(217, 119, 6, 0.3)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'33%': {
						transform: 'translateY(-10px) translateX(5px)'
					},
					'66%': {
						transform: 'translateY(5px) translateX(-3px)'
					}
				},
				'grain': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'10%': { transform: 'translate(-5%, -5%)' },
					'30%': { transform: 'translate(3%, -7%)' },
					'50%': { transform: 'translate(-7%, 6%)' },
					'70%': { transform: 'translate(5%, 2%)' },
					'90%': { transform: 'translate(-3%, 5%)' }
				},
				'text-reveal': {
					'0%': {
						opacity: '0',
						filter: 'blur(10px)',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						filter: 'blur(0px)',
						transform: 'translateY(0)'
					}
				},
				'magnetic-hover': {
					'0%': {
						transform: 'scale(1) translateZ(0)'
					},
					'100%': {
						transform: 'scale(1.05) translateZ(10px)'
					}
				},
				'ripple': {
					'0%': {
						transform: 'scale(0.8)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(2.5)',
						opacity: '0'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1.2s cubic-bezier(0.2, 0.65, 0.3, 0.9)',
				'scale-reveal': 'scale-reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'grain': 'grain 6s steps(6) infinite',
				'text-reveal': 'text-reveal 1s cubic-bezier(0.2, 0.65, 0.3, 0.9)',
				'magnetic-hover': 'magnetic-hover 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				'ripple': 'ripple 0.6s ease-out',
				'shimmer': 'shimmer 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'golden-mesh': 'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(217, 119, 6, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
				'noise-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
				'shimmer-gold': 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.4), transparent)'
			},
			backdropBlur: {
				'xs': '2px',
			},
			boxShadow: {
				'glow-gold': '0 0 20px rgba(245, 158, 11, 0.3)',
				'glow-amber': '0 0 20px rgba(217, 119, 6, 0.3)',
				'glow-bronze': '0 0 15px rgba(212, 175, 55, 0.4)',
				'glass': '0 8px 32px rgba(245, 158, 11, 0.15)',
				'depth': '0 20px 40px rgba(15, 15, 19, 0.5), 0 0 0 1px rgba(245, 158, 11, 0.1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
