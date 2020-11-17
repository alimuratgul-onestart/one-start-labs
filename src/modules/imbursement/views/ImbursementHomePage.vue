<template>
    <div>
        <v-parallax
            height="400"
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-row
                align="center"
                justify="center"
            >
                <v-col
                    class="text-center"
                    cols="12"
                >
                    <h1 class="display-2 font-weight-thin mt-4">
                        We analyze your Amazon inventory and recover everything you're owed.
                    </h1>
                    <v-btn outlined rounded large color="white" class="mt-8">contact now</v-btn>
                </v-col>
            </v-row>
        </v-parallax>
        <v-col cols="12" md="8" class="py-12 mx-auto mw-80">
            <v-toolbar-title class="font-weight-medium text-center mb-3">RefundSniper is an industry leader in
                identifying and
                recovering refunds for Amazon sellers.
            </v-toolbar-title>
            <p class="text-center subheader">Our team of Amazon specialists analyzes all of your data to efficiently
                monitor inventory, lost and damaged goods, and returns, so that you receive all the refunds you deserve.
                Our software tracks your product lifecycle to ensure that every item is accounted for – either in the
                hands of a satisfied customer or credited back to your account.</p>
        </v-col>
        <v-divider></v-divider>
        <v-container class="pt-8 mw-80">
            <v-row>
                <v-col cols="12" md="4">
                    <div class="text-center">
                        <v-icon color="green lighten-2" size="72">mdi-apache-kafka</v-icon>
                        <v-toolbar-title class="font-weight-medium text-center my-3">We're Affordable</v-toolbar-title>
                        <p class="text-center subheader">We make money when you make money. There are no monthly fees or
                            long term commitments.</p>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <div class="text-center">
                        <v-icon color="blue lighten-2" size="72">mdi-clock-outline</v-icon>
                        <v-toolbar-title class="font-weight-medium text-center my-3">We're Fast</v-toolbar-title>
                        <p class="text-center subheader">Our analysts work quickly to ensure that you benefit from your
                            refunds right away. You'll start seeing reimbursements in as little as 24 hours!</p>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <div class="text-center">
                        <v-icon color="red lighten-2" size="72">mdi-briefcase-check</v-icon>
                        <v-toolbar-title class="font-weight-medium text-center my-3">We're Thorough</v-toolbar-title>
                        <p class="text-center subheader">We deliver comprehensive recovery reports detailing all of your
                            refund activity.</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-parallax
            class="mt-5"
            height="300"
            src="https://hesbilgisayar.com/wp-content/uploads/2014/12/Parallax-Background-Dark-11.jpg"
        >
            <v-row
                align="center"
                justify="center"
            >
                <v-col
                    class="text-center mx-auto"
                    cols="9"
                >
                    <h1 class="display-1 font-weight-thin">
                        We make sure every FBA product you've listed in Amazon is either in stock, sold, or reimbursed.
                        Our system tracks the entire product cycle for each of your items to ensure all are accounted
                        for and that you receive refunds for everything you deserve.
                    </h1>
                </v-col>
            </v-row>
        </v-parallax>
        <v-col cols="12" md="10" class="py-12 mx-auto mw-80">
            <p class="text-center headline font-italic grey--text">“ I always wondered if Amazon was taking me for a
                ride. Then one day while
                attending the Internet Retailer Conference I met Noah from RefundSniper. He told me that my suspicions
                were probably correct and that he could get a bunch of money back for me. And, he did too. Within a few
                weeks of signing up, I received over $17,000! ”</p>
            <v-toolbar-title class="text-center my-3 grey--text font-weight-bold">- TOM NARDONE -</v-toolbar-title>
        </v-col>
        <v-footer color="white">
            <v-col
                class="text-center py-8"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>One Start Labs</strong>
            </v-col>
        </v-footer>
    </div>
</template>

<script>
export default {
    name: "ImbursementHomePage"
}
</script>

<style scoped>

</style>
