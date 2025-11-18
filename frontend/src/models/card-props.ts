export interface CardProps {
    id?: string,
    title: string,
    description?: string,
    date?: string,
    onClick?: () => void;
}