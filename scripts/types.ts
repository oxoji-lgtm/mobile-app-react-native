import { Platform } from 'react-native';
import { Platform as NativePlatform } from 'react-native';
import { Platform as NativePlatformType } from 'react-native';

export interface IPlatform {
  [key: string]: any;
}

export interface IPlatformType {
  [key: string]: any;
}

export interface IPlatformProps {
  platform: string;
  nativePlatform: NativePlatformType;
  nativePlatformType: NativePlatform;
}

export interface IPlatformState {
  [key: string]: any;
}

export interface IPlatformStateType {
  [key: string]: any;
}