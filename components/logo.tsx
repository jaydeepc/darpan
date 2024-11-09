import Image from 'next/image'

export type LogoStyle = 'piramal' | 'e2b'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  logoStyle?: LogoStyle
  width?: number
  height?: number
}

export default function Logo({
  logoStyle = 'piramal',
  width = 50,
  height = 50,
  ...props
}: LogoProps) {
  const logoSrc = logoStyle === 'piramal' ? '/images/svg/piramal_mudra.svg' : '/thirdparty/logos/e2b.svg'
  
  return (
    <div {...props}>
      <Image
        src={logoSrc}
        alt={logoStyle === 'piramal' ? "Piramal Logo" : "E2B Logo"}
        width={width}
        height={height}
      />
    </div>
  )
}
