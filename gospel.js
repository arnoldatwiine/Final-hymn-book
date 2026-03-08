const gospelVideos = [
  { id: "DjCHz8UzuxQ", title: "8 Catholic Church Songs of Faith" },
  { id: "RPwxdS5gRqI", title: "Beautiful Catholic Church Hymns" },
  { id: "cDdniihKBzI", title: "Here I Am, Lord" },
  { id: "6HjrG51xEyM", title: "Songs of the Servant" },
  { id: "fYz14jEoaeU", title: "Make Me A Channel of Your Peace" },
  { id: "WSRbP2-hwNw", title: "I Have Loved You – Michael Joncas" },
  { id: "V6GrcvL698Y", title: "Songs of the Cross" },
  { id: "IJ0jOjqISPU", title: "Be Not Afraid" },
  { id: "qhT8b_a1lRA", title: "MARIA ANZALILA OMULUNJI" },
  { id: "yUgTk4nsSAI", title: "KITAFFE ALI MUGULU" },
  { id: "V0ufyqjoh_U", title: "Namugereka Katonda" },
  { id: "jTEsdUXEgUI", title: "Nkwegomba n'Omutima Gwange" },
  { id: "bLlKFWMzawU", title: "Katonda Alibaweera" },
  { id: "duW3T9TMVho", title: "Ekitiibwa Kibe" },
  { id: "bEpOMMyciLg", title: "Ogya Kubugagga" },
  { id: "ul5pwrjGHq8", title: "Ntambula ne Yesu" },
  { id: "hiVCcKYul6s", title: "Tuli Mu Lugendo" },
  { id: "Kfw7SoSpTqk", title: "Top 5 Luganda Catholic Nonstop Songs" },
  { id: "-YJP4qQtvBA", title: "Holy Holy" },
  { id: "3o1fPilLBh8", title: "Catholic Nonstop" },
  { id: "drw7RLLgwcs", title: "Catholic Nonstop" },
  { id: "cb7oUR5h0II", title: "Uganda Martyrs Nonstop" },
  { id: "rZ8Mt5Vr0Mg", title: "Bebare Amansi me Mapeera" },
  { id: "mEf9lxCuLhM", title: "Egyo Rukundo Yawe" },
  { id: "fcYO2T31kD8", title: "Mukama Reba Naija" },
  { id: "Y7nsAFbgvJM", title: "Alleluia Himbisa Ruhanga" },
  { id: "kNJseaIz6Co", title: "Ndi Mukristu" },
  { id: "SYJAfTSAzE0", title: "Jangu Yesu" }
];

const container = document.getElementById("videoContainer");

gospelVideos.forEach(video => {
  const card = document.createElement("div");
  card.className = "bg-white rounded shadow hover:bg-red-50 cursor-pointer transition overflow-hidden";
  card.innerHTML = `
    <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" class="w-full h-48 object-cover" />
    <div class="p-3">
      <h3 class="text-sm font-semibold line-clamp-2">${video.title}</h3>
    </div>
  `;
  card.onclick = () => openModal(video.id);
  container.appendChild(card);
});

function openModal(videoId) {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("videoPlayer");
  modal.classList.remove("hidden");
  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("videoModal").classList.add("hidden");
  document.getElementById("videoPlayer").src = "";
};
