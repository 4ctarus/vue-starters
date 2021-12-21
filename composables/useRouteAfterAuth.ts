import { useState } from "#app";
import { RouteLocationRaw } from "vue-router";

export default function () {
  return useState<RouteLocationRaw>("routeAfterAuth", () => ({
    name: "home",
  }));
}
