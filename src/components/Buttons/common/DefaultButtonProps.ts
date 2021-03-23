import { ButtonSize, ButtonStyle, ButtonType } from '..';

export interface IDefaultButtonProps {
    onClick?: (event: React.MouseEvent) => void;
    text: any; //temporarily any, cuz string | Element not working
    size?: ButtonSize;
    type?: ButtonType;
    style?: ButtonStyle;
    icon?: any;
    additionalClass?: string;
}

export type DefaultButtonProps = IDefaultButtonProps;
