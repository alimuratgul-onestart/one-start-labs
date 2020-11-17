<template>
    <div>
        <v-app-bar flat color="white">
            <v-container class="py-0 d-flex align-content-center align-center mw-80">
                <v-app-bar-nav-icon class="hidden-md-and-up"/>
                <div class="flex-grow-1">
                    <v-toolbar-title>ONE START <span class="font-weight-light">Reimbursement</span></v-toolbar-title>
                </div>
                <v-spacer></v-spacer>
                <div class="flex-grow-1 hidden-sm-and-down">
                    <v-tabs right hide-slider height="32" active-class="primary--text">
                        <template v-for="(m, mi) in menu">
                            <v-tab
                                v-if="!m.optional"
                                :key="mi"
                                v-text="m.text"
                                :to="{name: m.path}"
                                link
                                exact
                            />
                        </template>
                    </v-tabs>
                </div>
                <v-btn
                    rounded
                    color="primary"
                    class="ml-3 hidden-sm-and-down"
                    :to="{name: 'ImbursementContact'}"
                >
                    Contact
                </v-btn>
            </v-container>
        </v-app-bar>
        <transition
            name="fade"
            mode="out-in"
        >
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: "ImbursementWrapper",
    data() {
        return {
            menu: [
                {text: 'Home Page', path: 'ImbursementHome'},
                {text: 'About Us', path: 'ImbursementAbout'},
                {text: 'FAQ', path: 'ImbursementFaq'},
                {text: 'Contact', path: 'ImbursementContact', optional: true},
            ]
        }
    },
}
</script>

<style>
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
