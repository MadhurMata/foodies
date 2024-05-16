import Svg, { Props } from 'react-inlinesvg';

export interface IconProps extends Omit<Props, 'src'> {
  path: string;
  size?: number;
  strokeColor?: string;
  strokeWidth?: string;
  styles?: string;
}

const Icon = ({
  path,
  size,
  strokeColor,
  strokeWidth,
  styles,
  ...rest
}: IconProps) => (
  <Svg
    {...rest}
    focusable="false"
    role="img"
    src={path}
    width={size}
    height={size}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    className={styles}
  />
);
export default Icon;
