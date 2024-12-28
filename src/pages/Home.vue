<template>
  <section class="hero bg-primary text-white py-72">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-extrabold leading-tight">Daarul Ummahaat</h1>
      <p class="mt-6 text-lg">
        Mari bergabung untuk meningkatkan kesejahteraan Ummat.
      </p>
      <!-- <div class="mt-8">
        <button
          class="bg-secondary hover:bg-yellow-400 text-primary font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Donasi Sekarang
        </button>
      </div> -->
    </div>
  </section>

  <section class="about bg-neutral py-16 rounded-t-3xl mx-4 mt-[-4rem]">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 text-textColor">
        Program Kami
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div
            class="w-40 h-40 bg-secondary rounded-full items-center justify-center flex mx-auto mb-4"
          >
            <span class="fas fa-quran text-8xl"></span>
          </div>
          <p class="font-medium text-textColor">Rumah Tahfizh</p>
        </div>
        <div class="text-center">
          <div
            class="w-40 h-40 bg-secondary rounded-full items-center justify-center flex mx-auto mb-4"
          >
            <span class="fas fa-chalkboard-teacher text-8xl"></span>
          </div>
          <p class="font-medium text-textColor">Bimbel</p>
        </div>
        <div class="text-center">
          <div
            class="w-40 h-40 bg-secondary rounded-full items-center justify-center flex mx-auto mb-4"
          >
            <span class="fas fa-hands-helping text-8xl"></span>
          </div>
          <p class="font-medium text-textColor">
            Program Sosial untuk Masyarakat
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="programs py-16 bg-primary text-black">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-6">Program Kami</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-neutral rounded-lg shadow-md overflow-hidden">
          <img
            src="/assets/program-1.jpg"
            alt="Bantuan Pangan"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-primary">Bantuan Pangan</h3>
            <p class="text-primary mb-4">
              Kami membantu keluarga kurang mampu dengan kebutuhan pangan
              harian.
            </p>
            <button
              class="bg-secondary hover:bg-yellow-400 text-primary py-2 px-4 rounded-lg shadow transition duration-300"
            >
              Lihat Selengkapnya
            </button>
          </div>
        </div>
        <div class="bg-neutral rounded-lg shadow-md overflow-hidden">
          <img
            src="/assets/program-2.jpg"
            alt="Beasiswa"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-primary">
              Beasiswa Anak Yatim
            </h3>
            <p class="text-primary mb-4">
              Mendukung pendidikan anak-anak yatim dengan program beasiswa.
            </p>
            <button
              class="bg-secondary hover:bg-yellow-400 text-primary py-2 px-4 rounded-lg shadow transition duration-300"
            >
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.hero {
  background-image: url("../assets/hero-bg.jpg");
  background-size: cover;
  background-position: center;
}

.about {
  background-color: #f9f9f9;
}
</style>
