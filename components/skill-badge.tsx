interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="flex items-center justify-center p-4 bg-background rounded-lg shadow-sm border hover:border-primary transition-colors">
      <span className="font-medium">{name}</span>
    </div>
  )
}

