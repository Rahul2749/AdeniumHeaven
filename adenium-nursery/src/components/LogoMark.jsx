export default function LogoMark({ className = '' }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 2C12 2 14.5 6 17 9C19.5 12 22 12 22 12C22 12 19 14.5 16 17C13 19.5 12 22 12 22C12 22 11 19.5 8 17C5 14.5 2 12 2 12C2 12 4.5 12 7 9C9.5 6 12 2 12 2Z" 
        fill="currentColor" 
        opacity="0.9"
      />
      <circle cx="12" cy="12" r="2.5" fill="var(--alabaster, #fff)" />
    </svg>
  )
}
