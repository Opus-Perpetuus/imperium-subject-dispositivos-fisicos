import type { KirletDataClient, NoxServices } from "@opus-perpetuus/imperium-core-kit";
import { new_id, now_iso } from "@opus-perpetuus/imperium-core-kit";

export async function seed_demo(ctx: {
  data: KirletDataClient;
  nox: NoxServices;
  technical_id: string;
}): Promise<void> {
  const n = await ctx.data.count("physical_device");
  if (n > 0) return;
  const ts = now_iso();
  await ctx.data.insert("physical_device", {
    id: new_id("physical"),
    name: "Dispositivos físicos (ejemplo)",
    description: "Registro semilla de la app. Sustituye al migrar desde Mongo.",
    is_active: true,
    ref: "seed-dispositivos-fisicos",
    created_at: ts,
    updated_at: ts,
  });
}
