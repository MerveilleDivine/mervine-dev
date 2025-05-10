
import type { Config } from "tailwindcss";

// Fixed function to properly handle the parameters
function addVariablesForColors({ addBase, theme }: any) {
  // Check if theme and theme("colors") are defined before proceeding
  const colors = theme("colors");
  if (!colors) return;
  
  // Helper function to flatten color palette
  const flattenColorPalette = (colors: any) => {
    const result: Record<string, string> = {};
    
    const flattenColors = (obj: any, prefix = "") => {
      for (const key in obj) {
        const value = obj[key];
        if (typeof value === "string") {
          result[prefix + key] = value;
        } else if (typeof value === "object") {
          flattenColors(value, `${prefix}${key}-`);
        }
      }
    };
    
    flattenColors(colors);
    return result;
  };
  
  let allColors = flattenColorPalette(colors);
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  
  addBase({
    ":root": newVars,
  });
}

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
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#7E69AB',
					foreground: '#ffffff',
					light: '#9b87f5',
					dark: '#6E59A5',
				},
				secondary: {
					DEFAULT: '#FDE1D3',
					foreground: '#333333',
					light: '#FFDEE2',
					dark: '#FEC6A1',
				},
				muted: {
					DEFAULT: '#F1F1F1',
					foreground: '#666666',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
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
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'card-hover': {
					'0%': {
						transform: 'translateY(0)'
					},
					'100%': {
						transform: 'translateY(-8px)'
					}
				},
				aurora: {
					from: {
						backgroundPosition: "50% 50%, 50% 50%",
					},
					to: {
						backgroundPosition: "350% 50%, 350% 50%",
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'card-hover': 'card-hover 0.3s ease-out forwards',
				aurora: "aurora 60s linear infinite",
			}
		}
	},
	plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;
