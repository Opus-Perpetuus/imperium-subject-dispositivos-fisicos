import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { physical_device_module } from "./modules/physical-device/physical-device.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-dispositivos-fisicos",
  name: "Dispositivos físicos",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-dispositivos-fisicos:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "dispositivos-fisicos.root",
    label: "Dispositivos físicos",
    order: 0,
  },
  modules: [physical_device_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
