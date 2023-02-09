import { Icon, IconProps } from '@chakra-ui/react';

export const SuccessIcon = (props: IconProps) => {
  return <Icon width="6" height="6" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </Icon>;
};

export const ErrorIcon = (props: IconProps) => {
  return <Icon width="5" height="5" viewBox="0 0 20 20" {...props}>
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </Icon>;
};

export const CloseIcon = (props: IconProps) => {
  return <Icon width="6" height="6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </Icon>;
};

export const EyeIcon = (props: IconProps) => {
  return <Icon width="5" height="5" viewBox="0 0 24 24" fill='none' stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </Icon>;
};

export const CloseEyeIcon = (props: IconProps) => {
  return <Icon width="5" height="5" viewBox="0 0 24 24" fill='none' stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </Icon>;
};

export const SignOutIcon = (props: IconProps) => {
  return <Icon width="5" height="5" viewBox="0 0 20 20" fill='currentColor' {...props}>
    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
  </Icon>;
};

export const RightArrowIcon = (props: IconProps) => {
  return <Icon width="6" height="6" viewBox="0 0 24 24" fill='none' stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </Icon>;
};

export const ClockIcon = (props: IconProps) => {
  return <Icon width="6" height="6" viewBox="0 0 24 24" fill='none' stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </Icon>;
};

export const MenuIcon = (props: IconProps) => {
  return <Icon width="25" height="8" viewBox="0 0 25 8" {...props}>
    <line y1="0.5" x2="25" y2="0.5" stroke="#2A3F6B"/>
    <line x1="5" y1="7.5" x2="25" y2="7.5" stroke="#2A3F6B"/>
  </Icon>;
};

export const LeftArrowIcon = (props: IconProps) => {
  return <Icon width="16" height="14" viewBox="0 0 16 14" fill="none" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.70679 13.6947C7.51926 13.8822 7.26495 13.9875 6.99979 13.9875C6.73462 13.9875 6.48031 13.8822 6.29279 13.6947L0.292786 7.69471C0.105315 7.50718 0 7.25288 0 6.98771C0 6.72255 0.105315 6.46824 0.292786 6.28071L6.29279 0.280712C6.48139 0.0985537 6.73399 -0.00224062 6.99619 3.78026e-05C7.25838 0.00231622 7.5092 0.107485 7.6946 0.292893C7.88001 0.478301 7.98518 0.729114 7.98746 0.99131C7.98974 1.25351 7.88894 1.50611 7.70679 1.69471L3.41379 5.98771H14.9998C15.265 5.98771 15.5194 6.09307 15.7069 6.28061C15.8944 6.46814 15.9998 6.7225 15.9998 6.98771C15.9998 7.25293 15.8944 7.50728 15.7069 7.69482C15.5194 7.88235 15.265 7.98771 14.9998 7.98771H3.41379L7.70679 12.2807C7.89426 12.4682 7.99957 12.7225 7.99957 12.9877C7.99957 13.2529 7.89426 13.5072 7.70679 13.6947Z" fill="#888888"/>
  </Icon>;
};

export const LocationIcon = (props: IconProps) => {
  return <Icon width="6" height="6" viewBox="0 0 24 24" fill='none' stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </Icon>;
};

export const CurrencyIcon = (props: IconProps) => {
  return <Icon width="6" height="6" viewBox="0 0 24 24" fill='none' stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </Icon>;
};

export const BuildingIcon = (props: IconProps) => {
  return <Icon width="6" height="6" viewBox="0 0 24 24" fill='none' stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </Icon>;
};

export const BriefCaseIcon = (props: IconProps) => {
  return <Icon width="6" height="6" viewBox="0 0 24 24" fill='none' stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </Icon>;
};
