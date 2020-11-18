<template>
    <v-app>
        <v-main :class="{'pl-0': !$vuetify.breakpoint.smAndDown}">
            <div id="content-start"></div>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: 'App',
    data: () => ({
        //
    }),
    watch:{
        $route(){
            this.$vuetify.goTo('#content-start');
        }
    }
};
</script>
