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

                    <v-btn @click="scrollToContactForm" outlined rounded large color="white"
                           class="mt-8">start
                        now
                    </v-btn>
                </v-col>
            </v-row>
        </v-parallax>
        <div class="grey lighten-4 py-16">
            <v-col cols="12" md="8" class="py-12 mx-auto mw-80">
                <p class="text-center subheader">
                    We help you get reimbursements from Amazon by analyzing your FBA inventory and opening cases on your
                    behalf for your lost and damaged items. Unlike other services, ours is not an automated software. We
                    open cases manually with your Dedicated Account Manager and follow up until you are treated fairly.
                    100%
                    TOS compliant is guaranteed.
                </p>
            </v-col>
        </div>
        <div class="white pb-16 pt-12">
            <v-container class="py-8 mw-80">
                <v-row>
                    <v-col cols="12" md="3">
                        <div>
                            <v-img class="mx-auto mb-5" src="@/assets/images/icon1.png" width="120"/>
                            <v-toolbar-title class="font-weight-medium text-center my-3">We’re here for you!
                            </v-toolbar-title>
                            <p class="icon-box-text">Each account is assigned a
                                Reimbursement Manager that
                                submits your claims on your
                                behalf and keep track of your
                                eligible refunds.</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3">
                        <div>
                            <v-img class="mx-auto mb-5" src="@/assets/images/icon2.png" width="120"/>
                            <v-toolbar-title class="font-weight-medium text-center my-3">No Up-Front Costs
                            </v-toolbar-title>
                            <p class=" icon-box-text">We make money when you make money. There are no monthly fees or
                                long
                                term commitments.</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3">
                        <div>
                            <v-img class="mx-auto mb-5" src="@/assets/images/icon3.png" width="120"/>
                            <v-toolbar-title class="font-weight-medium text-center my-3">Fastest Tool Ever!
                            </v-toolbar-title>
                            <p class="icon-box-text">As your account synced, our software goes to work. Our
                                Reimbursement Manager starts Manual case filing immediately.</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3">
                        <div>
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
        </div>
        <div class="primary darken-2 mb-3">
            <v-col cols="12" md="6" class="py-16 mx-auto">
                <v-card flat color="transparent">
                    <v-list-item-title class="display-1 font-weight-light mt-4 text-center white--text">
                        Contact Us
                    </v-list-item-title>
                    <v-card-text class="px-10">
                        <v-form
                            id="contactForm"
                            v-model="formValid"
                            ref="contactForm"
                            lazy-validation
                            @submit.prevent="submitContactForm"
                        >
                            <v-row>
                                <v-col cols="12" sm="12" class="py-0">
                                    <v-text-field
                                        ref="contactName"
                                        v-model="form.contactName"
                                        label="Contact Name"
                                        :rules="rules.requiredRule"
                                        dark
                                    />
                                </v-col>
                                <v-col cols="12" sm="12" class="py-0">
                                    <v-text-field
                                        v-model="form.location"
                                        label="Location"
                                        :rules="rules.requiredRule"
                                        dark
                                    />
                                </v-col>
                                <v-col cols="12" sm="12" class="py-0">
                                    <v-text-field
                                        v-model="form.companyName"
                                        label="Company (Amazon) Name"
                                        :rules="rules.requiredRule"
                                        dark
                                    />
                                </v-col>
                                <v-col cols="12" sm="12" class="py-0">
                                    <v-text-field
                                        v-model="form.email"
                                        label="Contact E-mail"
                                        :rules="[rules.requiredRule, rules.emailRule]"
                                        dark
                                    />
                                </v-col>
                                <v-col cols="12" sm="12" class="text-center pt-6">
                                    <v-btn
                                        color="white"
                                        outlined
                                        rounded
                                        large
                                        type="submit"
                                        :disabled="sendFormSuccess || sendFormLoading"
                                        :loading="sendFormLoading"
                                        dark
                                    >
                                        <v-icon v-if="sendFormSuccess" color="white">mdi-check</v-icon>
                                        <span v-if="!sendFormSuccess">Start Now</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </div>
        <v-snackbar
            v-model="snackbar.model"
            :color="snackbar.color"
        >
            {{ snackbar.message }}
        </v-snackbar>
    </div>
</template>

<script>
import api from "@/modules/imbursement/api";

export default {
    name: "ImbursementHomePage",
    data() {
        return {
            rules: {
                requiredRule: [
                    v => !!v || 'This field is required'
                ],
                emailRule: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },
            formValid: true,
            form: {
                contactName: '',
                location: '',
                companyName: '',
                email: '',
            },
            snackbar: {
                model: '',
                message: '',
                color: ''
            },
            sendFormLoading: false,
            sendFormSuccess: false,
        }
    },
    mounted() {
        if (this.$route.query.contact) {
            this.scrollToContactForm();
        }
    },
    methods: {
        async submitContactForm() {
            if (this.$refs.contactForm.validate()) {
                this.sendFormLoading = true
                let payload = {
                    name: this.form.contactName,
                    email: this.form.email,
                    subject: "Reimbursement Mail",
                    description: `${this.form.location} - ${this.form.companyName}`
                }
                await api.post('misc/reimbursement/request', payload)
                    .then((res) => {
                        if (res.data.success) {
                            this.sendFormSuccess = true;
                            this.showSnackbar('Your message has been received. We will contact with you as soon as possible.', 'success');
                        } else {
                            this.sendFormSuccess = false;
                            this.showSnackbar('An error occurred. Please try again later.', 'error');
                        }
                    }).catch((error) => {
                        this.sendFormSuccess = false;
                        this.showSnackbar(error, 'error');
                    }).then(() => {
                        this.sendFormLoading = false;
                    });
            }
        },
        scrollToContactForm() {
            this.$vuetify.goTo('#contactForm');
            this.$refs.contactName.focus();
        },
        showSnackbar(message, color) {
            this.snackbar.message = message;
            this.snackbar.color = color;
            this.snackbar.model = true;
        }
    },
    watch: {
        formValid(value) {
            if (!value) {
                setTimeout(() => {
                    this.$refs.contactForm.resetValidation();
                }, 2000);
            }
        }
    }
}
</script>

<style scoped>

</style>
