import { ReactNode } from 'react';

declare module '*.jpg';
declare module '*.png';
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module '*.webp';

interface IComponentProps {
    children?: ReactNode;
}
interface IElementProps {
    className?: string;
    onClick?: () => void;
}
