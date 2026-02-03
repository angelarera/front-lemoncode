<script setup lang="ts">
const config = useRuntimeConfig();

useSeoMeta({
  title: `${config.public.siteName} - Home`,
  description: "Listado de casas rurales disponibles para tus vacaciones.",
});
</script>
