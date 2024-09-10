import { asResolved } from "@deco/deco";
import type { FlagObj } from "@deco/deco/blocks";
import MatchAlways from "../matchers/always.ts";
import Audience, { type Route, type Routes } from "./audience.ts";

export interface EveryoneConfig {
  routes?: Routes;
}

/**
 * @title Audience Everyone
 * @description Always match regardless of the current user
 */
export default function Everyone(
  { routes }: EveryoneConfig,
): FlagObj<Route[]> {
  return Audience({
    matcher: MatchAlways,
    routes: routes ?? [],
    name: "Everyone",
  });
}

export const onBeforeResolveProps = <T extends { routes?: Routes }>(
  props: T,
): T => {
  if (Array.isArray(props?.routes)) {
    const newRoutes: T = { ...props, routes: [] };
    for (const route of (props?.routes ?? [])) {
      newRoutes.routes!.push({
        ...route,
        handler: {
          value: asResolved(route.handler.value, true),
        },
      });
    }
    return newRoutes;
  }
  return props;
};
