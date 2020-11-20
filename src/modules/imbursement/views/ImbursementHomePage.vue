<template>
    <div>
        <v-parallax
            height="400"
            dark
            src="https://hesbilgisayar.com/wp-content/uploads/2014/12/Parallax-Background-Dark-11.jpg"
        >
            <v-row
                align="center"
                justify="center"
            >
                <v-col
                    class="text-center"
                    cols="12"
                >
                    <h4 class="display-1 subheading mb-5">
                        FBA Sellers
                    </h4>
                    <h1 class="display-2 font-weight-thin mt-4">
                        AMAZON OWES YOU MONEY !
                    </h1>

                    <v-btn href="mailto:mailto:reimbursement@onestartlabs.com" outlined rounded large color="white" class="mt-8">start
                        now
                    </v-btn>
                </v-col>
            </v-row>
        </v-parallax>
        <v-col cols="12" md="8" class="py-12 mx-auto mw-80">
            <p class="text-center subheader">
                OneStart can help you get your money back from Amazon by analyzing all of your data to efficiently
                monitor inventory, lost and damaged goods, and returns, so that you receive all the refunds you deserve.
                We open up cases on your behalf manually and follow up till you get the refunds. Unlike other services,
                this is a non-automated software and 100% TOS compliant.
            </p>
            <p class="text-center subheader">
                We help you get reimbursements from Amazon by analyzing your FBA inventory and opening cases on your
                behalf for your lost and damaged items. Unlike other services, ours is not an automated software. We
                open cases manually with your Dedicated Account Manager and follow up until you are treated fairly. 100%
                TOS compliant is guaranteed.
            </p>
        </v-col>
        <v-divider></v-divider>
        <v-container class="py-8 mw-80">
            <v-row>
                <v-col cols="12" md="3">
                    <div class="text-center">
                        <v-img class="mx-auto mb-5" src="@/assets/images/icon1.png" width="120"/>
                        <v-toolbar-title class="font-weight-medium text-center my-3">We’re here for you!
                        </v-toolbar-title>
                        <p class=" icon-box-text">Each account is assigned a
                            Reimbursement Manager that
                            submits your claims on your
                            behalf and keep track of your
                            eligible refunds.</p>
                    </div>
                </v-col>
                <v-col cols="12" md="3">
                    <div class="text-center">
                        <v-img class="mx-auto mb-5" src="@/assets/images/icon2.png" width="120"/>
                        <v-toolbar-title class="font-weight-medium text-center my-3">No Up-Front Costs</v-toolbar-title>
                        <p class=" icon-box-text">We make money when you make money. There are no monthly fees or long
                            term commitments.</p>
                    </div>
                </v-col>
                <v-col cols="12" md="3">
                    <div class="text-center">
                        <v-img class="mx-auto mb-5" src="@/assets/images/icon3.png" width="120"/>
                        <v-toolbar-title class="font-weight-medium text-center my-3">Fastest Tool Ever!
                        </v-toolbar-title>
                        <p class="icon-box-text">As your account synced, our software goes to work. Our
                            Reimbursement Manager starts Manual case filing immediately.</p>
                    </div>
                </v-col>
                <v-col cols="12" md="3">
                    <div class="text-center">
                        <v-img class="mx-auto mb-5" src="@/assets/images/icon4.png" width="120"/>
                        <v-toolbar-title class="font-weight-medium text-center my-3">Amazon TOS Compliant
                        </v-toolbar-title>
                        <p class="icon-box-text">Unlike other services, OneStart
                            Reimbursement is non-automated
                            when submitting cases and 100%
                            TOS compliant. With us your account
                            is safe.</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="mw-80 text-center">
            <v-btn href="mailto:mailto:reimbursement@onestartlabs.com" outlined rounded x-large color="primary" class="my-8">start
                now
            </v-btn>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "ImbursementHomePage"
}
</script>

<style scoped>

</style>
