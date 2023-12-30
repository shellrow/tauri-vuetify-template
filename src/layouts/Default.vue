<script setup lang="ts">
  import { ref } from 'vue';
  import { mdiHomeCity, mdiAccount, mdiAccountGroupOutline, mdiChevronLeft } from "@mdi/js";
  import shellrowIcon from "../assets/shellrow_icon.png";
  const drawer = ref(true);
  const rail = ref(true);
</script>

<template>
<v-card>
    <v-layout>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
    >
        <v-list-item
        :prepend-avatar="shellrowIcon"
        title="shellrow"
        nav
        >
        <template v-slot:append>
            <v-btn
            variant="text"
            :icon="mdiChevronLeft"
            @click.stop="rail = !rail"
            ></v-btn>
        </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
        <v-list-item :prepend-icon="mdiHomeCity" title="Home" value="home"></v-list-item>
        <v-list-item :prepend-icon="mdiAccount" title="My Account" value="account"></v-list-item>
        <v-list-item :prepend-icon="mdiAccountGroupOutline" title="Users" value="users"></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
        <v-app-bar app>
        <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
        <v-container fluid>
        <slot />
        </v-container>
    </v-main>
    </v-layout>
</v-card>
</template>
