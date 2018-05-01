<template>
  <section class="subscribe">
    <header class="subscribe__title">Подпишитесь на новости</header>
    <form class="subscribe__form subscribe-form" action="#" novalidate="true" @submit.prevent="submit">
      <input type="email" v-model="email" placeholder="Укажите ваш email" class="subscribe-form__email" :class="{'subscribe-form__email--invalid': !isValid}">
      <button type="submit" class="subscribe-form__submit button">Подписаться</button>
    </form>
    <p class="subscribe__validation-message" :class="{'subscribe__validation-message--hidden': isValid}">Пожалуйста, укажите действительный email</p>
  </section>
</template>

<script>
import ValidateEmailMixin from '~/mixins/ValidateEmailMixin';

export default {
  mixins: [ValidateEmailMixin],
  data() {
    return {
      email: '',
      isValid: true,
    }
  },
  methods: {
    async submit() {
      this.validate();
      if (this.isValid) {
        // TODO: integrate with vuex
        console.log('SUBMMMIT');
      }
    },
    validate() {
       if (this.validateEmail(this.email)) {
         this.isValid = true;
       } else {
         this.isValid = false;
       }
    },
  },
}
</script>

<style lang="scss" scoped>
.subscribe {
  width: 25.3rem;

  @media (min-width: $screen-md) {
    width: 65.1rem;
  }

  font-size: 1.5rem;

  &__title {
    text-transform: uppercase;
    text-align: center;
    color: $white;
  }

  &__validation-message {
    color: $red;
    text-align: center;

    &--hidden {
      visibility: hidden;
    }
  }
}

.subscribe-form {
  display: flex;
  flex-direction: column;
  height: 8.9rem;
  justify-content: space-between;  
  font-size: 1.5rem;

  &__email {
    height: 3.8rem;
    color: $white;
    background: $black; 
    box-sizing: border-box;
    border: 0.1rem solid $white;

    &--invalid {
      border: 0.1rem solid $red;
    }
  }

  &__submit {
    height: 4.1rem;
    color: $white;
    background: $hacky;
  }
}
</style>
