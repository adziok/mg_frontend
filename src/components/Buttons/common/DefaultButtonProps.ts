import { ButtonSizeEnum, ButtonTypeEnum } from '..';

// type DefaultButtonProps2 = {
//     onClick: (event: React.MouseEvent) => void;
//     text: string;
//     size?: ButtonSizeEnum;
//     type?: ButtonTypeEnum;
// };

export interface IDefaultButtonProps {
    onClick?: (event: React.MouseEvent) => void;
    text: string;
    size?: ButtonSizeEnum;
    type?: ButtonTypeEnum;
}

export type DefaultButtonProps = IDefaultButtonProps;
