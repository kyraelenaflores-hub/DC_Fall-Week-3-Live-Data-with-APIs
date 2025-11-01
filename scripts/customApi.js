function apiApp() {
  return {
    title: "Studio Ghibli Movies",
    //tagline: "Movies",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading your data...</p>";
      try {
        const Url = "https://ghibliapi.vercel.app/films";
        const res = await axios.get(Url)
        // STEP 1: Pick API from README
        // STEP 2: Add endpoint below
        console.log(res.data)
        // STEP 4: this.render(items)
        this.render(res.data);

      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Could not load data 😢</p>`;
        console.error(err);
      }
    },
    render(items = []) {
      const out = document.getElementById("output");
      out.innerHTML = items
        .map(item => `<article class='bg-white rounded-xl shadow p-4'>
                        <p class='font-medium'>${item.name || item.title}</p>
                      </article>`)
        .join('');
    },
  };
}