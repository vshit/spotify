<template>
    <v-card>
        <v-layout class="app-content">
            <side-bar />
            <v-main>
                <router-view />
            </v-main>
            <v-bottom-navigation class="player inline-flex justify-between items-center">
                <div class="player-block">
                    <img
                        src="https://i.scdn.co/image/ab67616d000048519feadc48ab0661e9b3a9170b"
                        alt=""
                    />
                    <div>
                        <h6>Distorted Records</h6>
                        <p>A$AP Rocky</p>
                    </div>
                    <div>
                        <v-btn>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="player-block">2</div>
                <div class="player-block">3</div>
            </v-bottom-navigation>
        </v-layout>
    </v-card>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
    components: { SideBar },
};
</script>

<style lang="scss">
.player {
    &-block {
        display: flex;
    }
}

.v-bottom-navigation__content {
    justify-content: space-between !important;
}
</style>
