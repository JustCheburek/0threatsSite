"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import Script from "next/script";
import { ReactifiedModule } from "@yandex/ymaps3-types/reactify";

export type ReactifyApi = ReactifiedModule<
  typeof import("@yandex/ymaps3-types")
>;

type MountedMapsContextValue = {
  reactifyApi: ReactifyApi | null;
};

export const MountedMapsContext = createContext<MountedMapsContextValue>({
  reactifyApi: null,
});

export const MapProvider: React.FC<{
  children?: React.ReactNode;
  apiUrl: string;
}> = (props) => {
  const [reactifyApi, setReactifyApi] = useState<ReactifyApi | null>(null);

  const contextValue = useMemo(() => ({ reactifyApi }), [reactifyApi]);

  return (
    <MountedMapsContext.Provider value={contextValue}>
      <Script
        src={props.apiUrl}
        onLoad={async () => {
          const [ymaps3React] = await Promise.all([
            ymaps3.import("@yandex/ymaps3-reactify"),
            ymaps3.ready,
          ]);
          const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
          setReactifyApi(reactify.module(ymaps3));
        }}
      />
      {props.children}
    </MountedMapsContext.Provider>
  );
};

export const useMap = () => useContext(MountedMapsContext);
