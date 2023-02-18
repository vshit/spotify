<template>
    <v-card class="sidebar">
        <v-navigation-drawer class="bg-black" permanent>
            <router-link class="sidebar-logo" to="/">
                <img src="../assets/icons/logo.svg" alt="" />
            </router-link>
            <v-list color="transparent">
                <v-list-item prepend-icon="mdi-home" title="Главная"></v-list-item>
                <v-list-item prepend-icon="mdi-magnify" title="Поиск"></v-list-item>
                <v-list-item
                    prepend-icon="mdi-heart"
                    title="Любимые треки"
                ></v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>
