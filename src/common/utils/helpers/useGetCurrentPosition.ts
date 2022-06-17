import { useState } from "react";

const useGetCurrentPosition = () => {
  const [pos, setPos] = useState<{ long: number; lat: number }>({
    long: 0,
    lat: 0,
  });
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: any) {
    const crd = pos.coords;
    setPos({
      long: crd.longitude,
      lat: crd.latitude,
    });
  }

  function error(err: any) {}

  navigator.geolocation.getCurrentPosition(success, error, options);

  return pos;
};

export default useGetCurrentPosition;
