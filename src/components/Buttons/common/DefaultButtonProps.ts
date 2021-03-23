import { ButtonSize, ButtonStyle, ButtonType } from '..';

export interface IDefaultButtonProps {
    onClick?: (event: React.MouseEvent) => void;
    text: string;
    size?: ButtonSize;
    type?: ButtonType;
    style?: ButtonStyle;
    icon?: any;
    additionalClass?: string;
}

export type DefaultButtonProps = IDefaultButtonProps;
