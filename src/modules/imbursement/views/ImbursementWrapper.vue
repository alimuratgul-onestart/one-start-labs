<template>
    <div class="page-container">
        <div class="content-container">
            <v-app-bar app dense clipped-left color="white">
                <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"/>
                <v-container class="pa-0 d-flex align-content-center align-center mw-80">
                    <router-link :to="{name: 'ImbursementHome'}" class="logo-link">
                        <v-img
                            src="@/assets/logo.png"
                            width="32"
                            height="32"
                            max-width="32"
                            max-height="32"
                            class="mr-2"
                        />
                        <div class="flex-grow-1">
                            <v-toolbar-title>
                                ONE START <span
                                class="font-weight-light hidden-sm-and-down">Reimbursement</span>
                            </v-toolbar-title>
                        </div>
                    </router-link>
                    <v-spacer></v-spacer>
                    <div class="flex-grow-1 hidden-sm-and-down">
                        <v-tabs v-model="menuModel" right hide-slider height="32" active-class="primary--text">
                            <template v-for="(m, mi) in menu">
                                <v-tab
                                    :key="mi"
                                    v-text="m.text"
                                    :to="{name: m.path}"
                                    exact
                                />
                            </template>
                        </v-tabs>
                    </div>
                </v-container>
            </v-app-bar>
            <transition
                name="fade"
                mode="out-in"
            >
                <router-view></router-view>
            </transition>
        </div>
        <v-footer color="white">
            <v-col
                class="text-center py-8"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>One Start Labs</strong>
                <p><a href="mailto:mailto:reimbursement@onestartlabs.com"
                      class="grey--text font-weight-light text-decoration-none">
                    reimbursement@onestartlabs.com
                </a></p>
            </v-col>
        </v-footer>
        <v-navigation-drawer
            v-model="drawer"
            class="hidden-md-and-up"
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
        >
            <v-list flat v-model="menuModel">
                <template v-for="(m, mi) in menu">
                    <v-list-item
                        :key="mi"
                        :to="{name:m.path}"
                        color="_accent"
                        active-class="primary--text"
                        exact
                    >
                        <v-list-item-title>
                            {{ m.text }}
                        </v-list-item-title>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "ImbursementWrapper",
    data() {
        return {
            drawer: false,
            menu: [
                {text: 'Home Page', path: 'ImbursementHome'},
                {text: 'Pricing', path: 'ReimbursementPricing'},
                {text: 'About Us', path: 'ImbursementAbout'},
            ],
            menuModel: 0
        }
    },
    watch: {
        $route(value) {
            this.menuModel = this.menu.findIndex(m => m.path === value.name);
        }
    }
}
</script>

<style>
.page-container {
    width: 100%;
    min-height: 100%;
}

.content-container {
    min-height: calc(100vh - 100px);
}

.logo-link {
    display: flex;
    color: inherit !important;
    text-decoration: none;
}

@media only screen and (min-width: 960px) {
    .mw-80 {
        max-width: 80%;
    }
}

.subheader {
    font-size: 1.2rem;
    color: #454545;
    line-height: 2.4rem;
}

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>
