import { Icon } from '@iconify/react'

function Iconify({
  icon,
  size,
  color,
  className,
  onClick
}: {
  icon: string
  size: string
  color?: string
  className?: string
  onClick?: () => void
}) {
  return (
    <div className={`${size} text-[${color}]`}>
      <Icon icon={icon} color={color} className={className} />
    </div>
  )
}

export default Iconify