"use client";

import {YMap, YMapLocationRequest,} from "@yandex/ymaps3-types/imperative/YMap";
import React, {useDeferredValue, useMemo, useRef, useState} from "react";
import {useMap} from "@providers/map";
import type {Place} from "@/types/place";
import MarkerWithPopup from "./marker-with-popup";
import {getBboxByCoordinates} from "./helpers/get-bbox-by-coordinates";
import {usePageState} from "@providers/page";

interface MapProps {
	places: Place[];
}

export const Map = ({places}: MapProps) => {
	const mapRef = useRef<(YMap & { container: HTMLElement }) | null>(null);
	const {selectedPlaceId, setBounds, selectPlace} = usePageState();
	const startBounds = useMemo(
			() =>
					getBboxByCoordinates(
							places.map((place) => [place.longitude, place.latitude])
					),
			[places]
	);
	const [location] = useState<YMapLocationRequest>(
			startBounds ? {bounds: startBounds} : {zoom: 0}
	);
	const setBoundsDebounced = useDeferredValue(
			value => setBounds(value)
	);
	const {reactifyApi} = useMap();

	if (!reactifyApi) return <p>Загрузка</p>

	const {
		YMap,
		YMapListener,
		YMapDefaultSchemeLayer,
		YMapDefaultFeaturesLayer,
	} = reactifyApi;

	return (
			<YMap margin={[20, 20, 20, 20]} location={location} ref={mapRef}>
				<YMapDefaultSchemeLayer/>
				<YMapDefaultFeaturesLayer/>

				<YMapListener
						onUpdate={({location}) => {
							setBoundsDebounced(location.bounds);
						}}
				/>

				{places.map((place) => (
						<MarkerWithPopup
								key={place.id}
								place={place}
								mapRef={mapRef}
								reactifyApi={reactifyApi}
								selected={selectedPlaceId === place.id}
								selectPlace={selectPlace}
						/>
				))}
			</YMap>
	);
};
