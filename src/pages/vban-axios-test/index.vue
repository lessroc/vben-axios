<script setup lang="ts">
import { getJokeApi } from '@/api/test'

const router = useRouter()
const { t } = useI18n()
const title = ref('vban-axios-test')
const joke = ref('Click the button to get a joke.')
function getJoke() {
  getJokeApi({ type: 'json' }).then((res: string) => {
    title.value = res.title
    joke.value = res.joke
  })
}
</script>

<template>
  <div>
    <div>
      <button m="b6 3" text-sm btn @click="getJoke">
        Get Joke
      </button>
    </div>

    <p>{{ title }}</p>

    <p text-sm opacity-75 class="ma w-33vw overflow-hidden">
      <em>{{ joke }}</em>
    </p>

    <div>
      <button m="3 t6" text-sm btn @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: vban-axios
</route>
