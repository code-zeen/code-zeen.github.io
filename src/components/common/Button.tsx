import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function Button({ className = '', children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`flex justify-center items-center gap-1 capitalize rounded-lg border border-transparent px-4 py-2 transition-colors hover:border-indigo-400 ${className}`}
    >
      {children}
    </button>
  )
}

export function TextButton({ className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`flex items-center text-sm text-indigo-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

