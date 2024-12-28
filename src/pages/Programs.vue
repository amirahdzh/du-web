<template>
  <section class="programs py-10 bg-neutral">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-primary mb-6">Program Kami</h2>
      <div v-if="programs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="program-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          v-for="program in programs"
          :key="program.id"
        >
          <img
            :src="`http://localhost:3000/uploads/${program.image}`"
            alt="Program image"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-primary mb-2">{{ program.title }}</h3>
            <p class="text-gray-600 mb-4">{{ program.description }}</p>
            <button
              class="bg-secondary text-white font-medium py-2 px-4 rounded hover:bg-yellow-400"
              @click="viewDetails(program.id)"
            >
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
      <p v-else class="text-center text-gray-600">Memuat program...</p>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const programs = ref([]);

    const fetchPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/programs");
        programs.value = response.data;
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    const viewDetails = (id) => {
      window.location.href = `/programs/${id}`;
    };

    onMounted(fetchPrograms);

    return {
      programs,
      viewDetails,
    };
  },
};
</script>

<style scoped>
.program-card {
  transition: transform 0.3s ease;
}
.program-card:hover {
  transform: translateY(-5px);
}
</style>
