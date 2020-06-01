<template>
      <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Отправить заявку</v-btn>
      </template>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h3 class="text--primary">Заказать выбранную позицию?</h3>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="name" 
                label="Ваше имя" 
                type="text"
                v-model="name"
              ></v-text-field>
              <v-text-field
                name="phone" 
                label="Ваш телефон" 
                type="text"
                v-model="phone"
              ></v-text-field>
              <v-text-field
                name="quantity" 
                label="Количество" 
                type="text"
                v-model="quantity"
              ></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn 
                text 
                outlined 
                @click="onCancel" 
                :disabled="localLoading"
              >Отмена</v-btn>
              <v-btn 
                text
                class="success" 
                @click="onSave"
                :disabled="localLoading"
                :loading="localLoading"
              >Заказать</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      dialog: false,
      name: '',
      phone: '',
      quantity:'',
      localLoading: false
    }
  },
  methods: {
    onCancel () {
      this.name = ''
      this.phone = ''
      this.quantity = ''
      this.dialog = false
    },
    onSave () {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          quantity: this.quantity,
          collection:this.product.cn,
          productId: this.product.id,
          ownerId: this.product.ownerId
        })
        .finally(() => {
          this.name = ''
          this.phone = ''
          this.quantity = ''
        //   this.collection = ''
          this.localLoading = false
          this.dialog = false
        })
      }
    }
  }
}
</script>
