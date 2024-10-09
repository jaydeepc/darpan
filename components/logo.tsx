import Image from 'next/image'

export type LogoStyle = 'piramal'

export default function Logo({
  style = 'piramal',
  ...props
}: { style?: LogoStyle } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Image
        src="/images/svg/piramal_mudra.svg"
        alt="Piramal Logo"
        width={50}
        height={50}
      />
    </div>
  )
}
