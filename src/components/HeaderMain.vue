<template lang="">
  <div >
    <div class="header-main" >
        <TabMenu :model="items" @tab-change="handleTabClick" />
    </div>
    <div class="header-avatar">
      <Avatar label="P" class="mr-1" size="large" />
      <div @click="toggle">Clever Rivera
        <TieredMenu ref="menu" id="overlay_tmenu" :model="listItemAvatar" @item-click="handleItemClick" popup />
      </div>
    </div>
  </div>
</template>
<script>
import TabMenu from "primevue/tabmenu";
import Avatar from 'primevue/avatar';
import TieredMenu from 'primevue/tieredmenu';
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "HeaderMain",
  components: { TabMenu, Avatar, TieredMenu },
  setup() {
    const store = useStore()

    const items = ref([
      { label: "Crear Usuario", icon: "pi pi-home", id: 'admin-users' },
      { label: "Usuarios", icon: "pi pi-chart-line", id: 'admin-list-users' },
      { label: "Permisos", icon: "pi pi-list", id: 'admin-users' },
    ]);
    const menu = ref();
    const listItemAvatar = ref([
      {
        label: 'Logout',
        id: 'logout',
        icon: 'pi pi-search',
        command: () => {
          logout()
        }
      },
      {
        separator: true
      },
      {
        label: 'Search',
        icon: 'pi pi-search'
      },
    ]);

    const router = useRouter()
    const handleTabClick = (e) => {
      const path = items.value[e.index].id
      router.push({ name: path })
    }

    const toggle = (event) => {
      menu.value.toggle(event);
    };

    const logout = () => {
      store.dispatch('auth/logout')
      router.push({name: 'login'})
    }

    return {
      items,
      handleTabClick,
      toggle,
      listItemAvatar,
      menu,
      logout
    };
  },
};
</script>

<style>
.header-main {
  position: relative;
}

.header-avatar {
  position: absolute;
  top: 5px;
  right: 15px;
  display: flex;
  align-items: center;
}
</style>
