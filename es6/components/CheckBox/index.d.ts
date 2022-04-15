import * as React from 'react';
import { A11yTitleType, PadType } from '../../utils';

export interface CheckBoxProps {
  a11yTitle?: A11yTitleType;
  checked?: boolean;
  children?: Function;
  disabled?: boolean;
  fill?: boolean;
  id?: string;
  label?: React.ReactNode;
  name?: string;
  pad?: PadType;
  reverse?: boolean;
  toggle?: boolean;
  indeterminate?: boolean;
}

type inputType = Omit<JSX.IntrinsicElements['input'], 'children'>;

export interface CheckBoxExtendedProps extends CheckBoxProps, inputType {}

declare const CheckBox: React.FC<CheckBoxExtendedProps>;

export { CheckBox };
