import * as LucideIcons from 'lucide-react';
import { ElementType } from 'react';

export const getIconComponent = (iconName: string): ElementType => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as ElementType;
    return IconComponent || LucideIcons.HelpCircle;
};
