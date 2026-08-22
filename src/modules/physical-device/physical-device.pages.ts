import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-dispositivos-fisicos";

export const physical_device_pages: KirletPageDecl[] = [
  {
    id: "dispositivos-fisicos.physical-device",
    path: "physical-device",
    permission: "subject.dispositivos-fisicos.physical-device.read",
    build: () =>
      build_feature_shell_page({
        id: "dispositivos-fisicos.physical-device",
        owner: "subject-dispositivos-fisicos",
        title: "Dispositivos físicos",
        props: {
          basePath: "physical-device",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Dispositivos físicos",
            subtitle: "Submenú de dispositivos-fisicos",
            pluralLabel: "dispositivos físicos",
            singularLabel: "dispositivos físicos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/physical-device`,
            record: `${API}/physical-device/:id`,
            create: { method: "POST", action: `${API}/physical-device` },
            update: { method: "PATCH", action: `${API}/physical-device/:id` },
            delete: { method: "DELETE", action: `${API}/physical-device/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "hostname", label: "hostname", sortable: true, priority: 3 },
              { key: "model", label: "model", sortable: true, priority: 3 },
              { key: "serial", label: "serial", sortable: true, priority: 3 },
              { key: "os_platform", label: "os platform", sortable: true, priority: 3 },
              { key: "last_user_name", label: "last user name", sortable: true, priority: 3 },
              { key: "last_seen", label: "last seen", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "hostname", component: "input-text", label: "hostname" },
              { name: "model", component: "input-text", label: "model" },
              { name: "serial", component: "input-text", label: "serial" },
              { name: "os_platform", component: "input-text", label: "os platform" },
              { name: "last_user_name", component: "input-text", label: "last user name" },
              { name: "last_seen", component: "input-text", label: "last seen" },
              { name: "install_uuid", component: "input-text", label: "install uuid" },
              { name: "machine_uuid", component: "input-text", label: "machine uuid" },
              { name: "manufacturer", component: "input-text", label: "manufacturer" },
              { name: "os_distro", component: "input-text", label: "os distro" },
              { name: "os_release", component: "input-text", label: "os release" },
              { name: "os_arch", component: "input-text", label: "os arch" },
              { name: "cpu_brand", component: "input-text", label: "cpu brand" },
              { name: "cpu_cores", component: "input-number", label: "cpu cores" },
              { name: "memory_total_bytes", component: "input-number", label: "memory total bytes" },
              { name: "gpu_primary", component: "input-text", label: "gpu primary" },
              { name: "primary_mac", component: "input-text", label: "primary mac" },
              { name: "primary_ip4", component: "input-text", label: "primary ip4" },
              { name: "device_kind", component: "input-text", label: "device kind" },
              { name: "app_version", component: "input-text", label: "app version" },
              { name: "last_user_id", component: "input-text", label: "last user id" },
            ],
          },
        },
      }),
  },
];
