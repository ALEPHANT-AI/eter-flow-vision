
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
				// Framer-Style Blue & Purple Colors
				royal: {
					400: '#4783FF',
					500: '#2E51E8', 
					600: '#1E3799',
					700: '#1A2B7A'
				},
				cosmic: {
					400: '#9575FF',
					500: '#7F5AF0',
					600: '#5028C6',
					700: '#3D1F9F'
				},
				electric: {
					400: '#63E2B7',
					500: '#4CC9F0',
					600: '#2BADDF',
					700: '#1E8CB8'
				},
				deep: {
					900: '#0A0E1A',
					800: '#161B33',
					700: '#1F2544',
					600: '#2A3560'
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
						boxShadow: '0 0 20px rgba(46, 81, 232, 0.3), 0 0 60px rgba(127, 90, 240, 0.2)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(46, 81, 232, 0.5), 0 0 80px rgba(127, 90, 240, 0.3)'
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
				'ripple': 'ripple 0.6s ease-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'cosmic-mesh': 'radial-gradient(circle at 20% 50%, rgba(46, 81, 232, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(127, 90, 240, 0.25) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(76, 201, 240, 0.15) 0%, transparent 50%)',
				'noise-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
			},
			backdropBlur: {
				'xs': '2px',
			},
			boxShadow: {
				'glow-royal': '0 0 20px rgba(46, 81, 232, 0.3)',
				'glow-cosmic': '0 0 20px rgba(127, 90, 240, 0.3)',
				'glow-electric': '0 0 15px rgba(76, 201, 240, 0.4)',
				'glass': '0 8px 32px rgba(127, 90, 240, 0.15)',
				'depth': '0 20px 40px rgba(10, 14, 26, 0.5), 0 0 0 1px rgba(127, 90, 240, 0.1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
