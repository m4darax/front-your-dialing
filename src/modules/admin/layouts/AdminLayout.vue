<template lang="">
    <nav>
    <div class="flex flex-column gap-3">
      <HeaderMain :headers="headers" />
    </div>
  </nav>
  <div class="flex justify-content-center">
    <div class="width-body pt-2">
      <router-view />
    </div>
  </div>
</template>
<script>

import HeaderMain from '@/components/HeaderMain.vue';

export default {
  name: 'UserLayout',
  components: { HeaderMain },
  setup() {
   
    const headers = [
      { label: "Crear Usuario", icon: "pi pi-home", id: 'admin-users' },
      { label: "Usuarios", icon: "pi pi-chart-line", id: 'admin-list-users' },
      { label: "Marcar", icon: "pi pi-list", id: 'dialing-users' },
      { label: "Detalles Marcaciones", icon: "pi pi-list", id: 'admin-records' }
    ]

    return {
      headers
    }
  }
}
</script>
<style>

.width-body {
  max-width: 50%;
  max-height: 50%;
}

.contenedor-externo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* O ajusta la altura según tus necesidades */
  }

  .div-central {
    max-width: 50%;
    width: 100%;
    border: 1px solid #ccc; /* Solo para visualización */
    padding: 20px; /* O el espaciado que desees */
  }
</style>