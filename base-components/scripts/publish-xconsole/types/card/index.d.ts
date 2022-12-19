import React from 'react';
import { CardHeaderProps, CardContentProps, CardMediaProps, CardActionsProps, CardDividerProps, CardProps } from '@alifd/next/types/card';
declare const Card: React.FC<CardProps> & {
    Header: React.ComponentType<CardHeaderProps>;
    Content: React.ComponentType<CardContentProps>;
    Media: React.ComponentType<CardMediaProps>;
    Actions: React.ComponentType<CardActionsProps>;
    Divider: React.ComponentType<CardDividerProps>;
    DropDownActions: React.FC<{
        actions: {
            label: React.ReactNode;
            onClick: () => void;
        }[];
    }>;
    CollapsableTail: React.FC<ICollapsableProps>;
    CollapsableHead: React.FC<ICollapsableProps>;
};
interface ICollapsableProps {
    collapsed: boolean;
    onCollapsedChange: (newCollapsed: boolean) => void;
    children: React.ReactChild;
}
export default Card;

export * from '@alifd/next/types/card'
