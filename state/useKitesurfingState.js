import { useKitesurfingInfoContext } from './kitesurfingInfoContext';

export const useKitesurfingInfoState = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();

  return {
    ...kitesurfingInfo,
    ...setKitesurfingInfo
  };
};
