import { ButtonSize, ButtonType } from '..';

export interface IDefaultButtonProps {
    onClick?: (event: React.MouseEvent) => void;
    text: string;
    size?: ButtonSize;
    type?: ButtonType;
}

export type DefaultButtonProps = IDefaultButtonProps;
